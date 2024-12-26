import fs from 'node:fs';
import path from 'node:path';

import { compareName, createImports, getSimilarTypes, initMeta, setImports, writeFile } from '@polkadot/typegen/util';
import * as defaultDefs from '@polkadot/types/interfaces/definitions';
import lookupDefinitions from '@polkadot/types-augment/lookup/definitions';
import { stringCamelCase, stringPascalCase } from '@polkadot/util';
import Handlebars from 'handlebars';

import { ActionType } from '../../../types/api/actions';
import { BlockchainOverridesMap } from '../../../types/api/overrides';
import metadataJson from '../generated/latest.json';

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

  const ctAtomicActions: string[] = [];

  const modules = pallets
    .reduce<any[]>((acc, pallet) => {
      const { calls, name } = pallet;

      if (!calls.isSome) return acc;

      const palletName = stringCamelCase(name);

      const palletCalls = lookup.getSiType(calls.unwrap().type).def.asVariant.variants;

      const items = palletCalls
        .reduce<any[]>((acc, { docs, fields, name: methodName }) => {
          const functionName = `${palletName}${stringPascalCase(methodName)}`;

          const actionName = allowedFunctions.find(([key, val]) => val === functionName)?.[0];

          if (!actionName) return acc;

          const name = stringCamelCase(methodName);
          const argsTypeName = `${stringPascalCase(functionName)}Args`;
          const actionTypeName = `${stringPascalCase(functionName)}Action`;

          ctAtomicActions.push(actionTypeName);

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
            const similarTypes = getSimilarTypes(registry, allDefs, typeStr, imports);

            let type = similarTypes.join(' | ');

            if (BlockchainOverridesMap.has(type)) {
              type = BlockchainOverridesMap.get(type) as string;
            } else {
              setImports(allDefs, imports, [typeStr, ...similarTypes]);
            }

            return {
              name,
              type,
              description: documentation.args[name] ?? '',
            };
          });

          acc.push({
            documentation,
            functionName,
            palletName,
            methodName,
            argsTypeName,
            actionName,
            actionTypeName,
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
  console.log(Object.entries(ActionType));

  const metadataHex = metadataJson.latest as any;

  const dest = path.join(process.cwd(), './src/txwrapper/calls.ts');

  const templateGenerator = () => generator(metadataHex, Object.entries(ActionType));

  writeFile(dest, templateGenerator);
})();
