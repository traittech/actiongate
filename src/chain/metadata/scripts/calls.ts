import fs from 'node:fs';
import path from 'node:path';

import { compareName, createImports, getSimilarTypes, initMeta, setImports, writeFile } from '@polkadot/typegen/util';
import * as defaultDefs from '@polkadot/types/interfaces/definitions';
import lookupDefinitions from '@polkadot/types-augment/lookup/definitions';
import { stringCamelCase, stringPascalCase } from '@polkadot/util';
import Handlebars from 'handlebars';

import { ActionType } from '../../../types/api/actions';
import metadataJson from '../generated/latest.json';
import { BlockchainOverridesMap } from '../overrides';

import type { Vec, Text } from '@polkadot/types';

function readTemplate(name: string) {
  const file = path.join(__dirname, `/templates/${name}.hbs`);
  const template = fs.readFileSync(file).toString();

  return template;
}

const generateForMetaTemplate = Handlebars.compile(readTemplate('calls'));

const MAPPED_NAMES: any = {
  class: 'clazz',
  new: 'updated',
};

function mapName(_name: any) {
  const name = stringCamelCase(_name);
  return MAPPED_NAMES[name] || name;
}

function getFunctionDescription(docs: Vec<Text>) {
  const description: string[] = [];
  const args: Record<string, string> = {};

  const parts = docs.toArray();

  let headerPartsCollected = false;
  let currentArgName = '';
  let currentArgDesc = [];

  for (const part of parts) {
    const text = part.toString().trim();
    const isNewArg = text.startsWith('-');

    if ((!text || isNewArg) && currentArgName) {
      args[currentArgName] = currentArgDesc.join(' ');
      currentArgName = '';
      currentArgDesc = [];
    }

    if (isNewArg) {
      headerPartsCollected = true;

      const [argNameQuoted, argDescription] = text.slice(2).split(':');
      const argName = stringCamelCase(argNameQuoted.replace(/`/g, ''));

      currentArgName = argName;
      currentArgDesc.push(argDescription);
    } else if (currentArgName) {
      currentArgDesc.push(text);
    } else if (!headerPartsCollected && text) {
      description.push(text);
    }
  }

  const full = description.join(' ');
  const short = description[0] ? description[0].charAt(0).toLowerCase() + description[0].slice(1) : '';

  return {
    full,
    short,
    args,
  };
}

function generator(
  meta: string,
  allowedFunctions: [string, ActionType][],
  extraTypes = {},
  customLookupDefinitions = {}
) {
  const { metadata, registry } = initMeta(meta as any, extraTypes);

  const allTypes = {
    '@polkadot/types-augment': {
      lookup: {
        ...lookupDefinitions,
        ...customLookupDefinitions,
      },
    },
    '@polkadot/types/interfaces': defaultDefs,
    ...extraTypes,
  };

  const imports = createImports(allTypes);

  const allDefs = Object.entries(allTypes).reduce((defs, [path, obj]) => {
    return Object.entries(obj).reduce((defs, [key, value]) => ({ ...defs, [`${path}/${key}`]: value }), defs);
  }, {});

  const { lookup, pallets } = metadata.asLatest;

  const ctAtomicActions: {
    pallet: string;
    method: string;
    function: string;
    actionName: string;
  }[] = [];

  const modules = pallets
    .reduce<any[]>((acc, pallet) => {
      const { calls, name } = pallet;

      if (!calls.isSome) return acc;

      const palletName = stringCamelCase(name);

      const palletCalls = lookup.getSiType(calls.unwrap().type).def.asVariant.variants;

      const items = palletCalls
        .reduce<any[]>((acc, { docs, fields, name: methodName }) => {
          const method = stringCamelCase(methodName);
          const actionValue = `${palletName}.${method}`;
          const functionName = `${palletName}${stringPascalCase(method)}`;

          const allowedTuple = allowedFunctions.find(([key, val]) => val === actionValue);

          if (!allowedTuple) return acc;

          const [actionName] = allowedTuple;
          const name = stringCamelCase(methodName);

          ctAtomicActions.push({
            pallet: palletName,
            method,
            function: functionName,
            actionName,
          });

          const typesInfo = fields.map(({ name, type, typeName }, index) => {
            const typeDef = registry.lookup.getTypeDef(type);
            return [
              name.isSome ? mapName(name.unwrap()) : `param${index}`,
              typeName.isSome ? typeName.toString() : typeDef.type,
              typeDef.isFromSi ? typeDef.type : typeDef.lookupName || typeDef.type,
            ];
          });

          const documentation = getFunctionDescription(docs);

          const params = typesInfo.map(([name, , typeStr]) => {
            let isOptional = false;
            let type = typeStr;

            const regex = /^(.*?)?<(.*?)>$/g;
            const matches = regex.exec(typeStr);

            if (matches && ['Compact', 'Option'].includes(matches[1])) {
              isOptional = matches[1] === 'Option';
              type = matches[2] ?? type;
            }

            if (BlockchainOverridesMap.has(type)) {
              type = BlockchainOverridesMap.get(type) as string;
            } else {
              const similarTypes = getSimilarTypes(registry, allDefs, typeStr, imports);
              type = similarTypes.join(' | ');
              setImports(allDefs, imports, [typeStr, ...similarTypes]);
            }

            return {
              name,
              type,
              description: documentation.args[name] ?? '',
              isOptional,
            };
          });

          acc.push({
            documentation,
            functionName,
            palletName,
            methodName: name,
            actionName,
            params,
            // for ordering
            name,
          });

          return acc;
        }, [])
        .sort(compareName);

      acc.push({
        items,
        name: palletName,
      });

      return acc;
    }, [])
    .sort(compareName);

  return generateForMetaTemplate({
    imports,
    modules,
    ctAtomicActions,
    types: [
      ...Object.keys(imports.localTypes)
        .sort()
        .map((packagePath) => ({
          file: packagePath.replace('@polkadot/types-augment', '@polkadot/types'),
          types: Object.keys(imports.localTypes[packagePath]),
        })),
    ],
  });
}

(async function main() {
  const metadataHex = metadataJson.latest as any;

  const dest = path.join(process.cwd(), './src/txwrapper/generated/calls.ts');

  const templateGenerator = () => generator(metadataHex, Object.entries(ActionType));

  writeFile(dest, templateGenerator);
})();
