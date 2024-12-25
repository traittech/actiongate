import fs from 'node:fs';
import path from 'node:path';

import Handlebars from 'handlebars';
import * as defaultDefs from '@polkadot/types/interfaces/definitions';
import lookupDefinitions from '@polkadot/types-augment/lookup/definitions';
import { stringCamelCase, stringPascalCase } from '@polkadot/util';
import { compareName, createImports, getSimilarTypes, initMeta, setImports, writeFile } from '@polkadot/typegen/util';

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
  new: 'updated'
};

function mapName(_name: any) {
  const name = stringCamelCase(_name);
  return MAPPED_NAMES[name] || name;
}

function getFunctionDescription(docs: Vec<Text>) {
  let description: string[] = [];
  let args: Record<string, string> = {};

  const parts = docs.toArray();

  let headerPartsCollected = false;

  for (const part of parts) {
    const text = part.toString();

    if (text.startsWith('-')) {
      headerPartsCollected = true;

      const [argNameQuoted, argDescription] = text.slice(2).split(':');
      const argName = stringCamelCase(argNameQuoted.replace(/\`/g, ''));

      args[argName] = argDescription;
    } else if (!headerPartsCollected && text) {
      description.push(text);
    } else {
      continue;
    }
  }

  return {
    description: description.join(' '),
    args,
  };
}

function generator(meta: string, extraTypes = {}, customLookupDefinitions = {}) {
  const { metadata, registry } = initMeta(meta as any, extraTypes);

  const allTypes = {
    '@polkadot/types-augment': {
        lookup: {
            ...lookupDefinitions,
            ...customLookupDefinitions
        }
    },
    '@polkadot/types/interfaces': defaultDefs,
    ...extraTypes
  };

  const imports = createImports(allTypes);

  const allDefs = Object.entries(allTypes).reduce((defs, [path, obj]) => {
      return Object.entries(obj).reduce((defs, [key, value]) => ({ ...defs, [`${path}/${key}`]: value }), defs);
  }, {});

  const { lookup, pallets } = metadata.asLatest;

  const modules = pallets
    .sort(compareName)
    .filter(({ calls }) => calls.isSome)
    .map(({ calls, name }) => {
      const sectionName = stringCamelCase(name);

      const items = lookup.getSiType(calls.unwrap().type).def.asVariant.variants
        .map(({ docs, fields, name: methodName }) => {
          const name = stringCamelCase(methodName);
          const functionName = `${sectionName}${stringPascalCase(name)}`;
          const argsName = `${stringPascalCase(functionName)}Args`;

          const typesInfo = fields.map(({ name, type, typeName }, index) => {
            const typeDef = registry.lookup.getTypeDef(type);
            return [
                name.isSome
                    ? mapName(name.unwrap())
                    : `param${index}`,
                typeName.isSome
                    ? typeName.toString()
                    : typeDef.type,
                typeDef.isFromSi
                    ? typeDef.type
                    : typeDef.lookupName || typeDef.type
            ];
          });

          const { description, args } = getFunctionDescription(docs);

          const params = typesInfo.map(([name, , typeStr]) => {
            const similarTypes = getSimilarTypes(registry, allDefs, typeStr, imports);

            setImports(allDefs, imports, [typeStr, ...similarTypes]);

            return {
              name,
              type: similarTypes.join(' | '),
              description: args[name] ?? '',
            }
          });

          return {
            description,
            functionName,
            sectionName,
            methodName,
            argsName,
            params,
            // for ordering
            name,
          };
        })
        .sort(compareName);

      return {
        items,
        name: sectionName
      };
    })
    .sort(compareName);

  return generateForMetaTemplate({
    imports,
    modules,
    types: [
      ...Object.keys(imports.localTypes).sort().map((packagePath) => ({
          file: packagePath.replace('@polkadot/types-augment', '@polkadot/types'),
          types: Object.keys(imports.localTypes[packagePath])
      }))
    ]
  });
}

(async function main() {
  const metadataHex = metadataJson.latest as any;

  const dest = path.join(__dirname, '..', 'generated/calls.ts');
  const templateGenerator = () => generator(metadataHex);

  writeFile(dest, templateGenerator)
})();