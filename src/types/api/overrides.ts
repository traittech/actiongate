export const BlockchainOverridesMap = new Map<string, string>();

BlockchainOverridesMap.set('u128 | AnyNumber | Uint8Array', 'Balance');
BlockchainOverridesMap.set('Compact<u128> | AnyNumber | Uint8Array', 'Balance');
BlockchainOverridesMap.set('u32 | AnyNumber | Uint8Array', 'AssetId');
BlockchainOverridesMap.set('Bytes | string | Uint8Array', 'string');
BlockchainOverridesMap.set('bool | boolean | Uint8Array', 'boolean');
BlockchainOverridesMap.set('MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array', 'BlockchainAddress');
BlockchainOverridesMap.set('PalletNftsDestroyWitness | { itemMetadatas?: any; itemConfigs?: any; attributes?: any } | string | Uint8Array', 'NftWitness');
BlockchainOverridesMap.set('Option<u32> | null | Uint8Array | u32 | AnyNumber', 'number | null | undefined');