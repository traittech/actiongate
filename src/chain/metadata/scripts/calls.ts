import * as defaultDefs from '@polkadot/types/interfaces/definitions';
import lookupDefinitions from '@polkadot/types-augment/lookup/definitions';
import { stringCamelCase } from '@polkadot/util';
import { compareName, createImports, formatType, getSimilarTypes, initMeta, readTemplate, setImports, writeFile } from '@polkadot/typegen/util';

import metadataJson from '../generated/latest.json';

const MAPPED_NAMES: any = {
  class: 'clazz',
  new: 'updated'
};

function mapName(_name: any) {
  const name = stringCamelCase(_name);
  return MAPPED_NAMES[name] || name;
}

(async function main() {
  const extraTypes = {};
  const customLookupDefinitions = {};

  const metadataHex = metadataJson.latest as any;
  const { metadata, registry } = initMeta(metadataHex, extraTypes);

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
    .map(({ calls, name: palletName }) => {
      console.log('pallet:', stringCamelCase(palletName));

      const items = lookup.getSiType(calls.unwrap().type).def.asVariant.variants
        .map(({ docs, fields, name: callName }) => {
          const name = stringCamelCase(callName);

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

          const params = typesInfo
            .map(([name, , typeStr]) => {
              const similarTypes = getSimilarTypes(registry, allDefs, typeStr, imports);
              setImports(allDefs, imports, [typeStr, ...similarTypes]);
              return `${name}: ${similarTypes.join(' | ')}`;
            })
            .join(', ');

          const args = typesInfo.map(([, , typeStr]) => formatType(registry, allDefs, typeStr, imports)).join(', ');

          console.log('call:', name);
          // console.log(args);
          // console.log(docs);

          return {
            args,
            docs,
            name,
            params
          };
        })
    });
})();