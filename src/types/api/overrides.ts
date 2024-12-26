export const BlockchainOverridesMap = new Map<string, string>();

BlockchainOverridesMap.set('u128 | AnyNumber | Uint8Array', 'BlockchainGenericBalance');
BlockchainOverridesMap.set('Compact<u128> | AnyNumber | Uint8Array', 'BlockchainGenericBalance');
BlockchainOverridesMap.set('u32 | AnyNumber | Uint8Array', 'BlockchainGenericId');
BlockchainOverridesMap.set('Bytes | string | Uint8Array', 'string');
BlockchainOverridesMap.set('bool | boolean | Uint8Array', 'boolean');
BlockchainOverridesMap.set('MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array', 'BlockchainGenericAddress');
BlockchainOverridesMap.set('PalletNftsDestroyWitness | { itemMetadatas?: any; itemConfigs?: any; attributes?: any } | string | Uint8Array', 'NftWitness');
BlockchainOverridesMap.set('Option<u32> | null | Uint8Array | u32 | AnyNumber', 'number | null | undefined');
BlockchainOverridesMap.set('Vec<Vec<ITuple<[TraitPrimitivesAppTransactionsCtActionOrigin, Call]>>>', 'CTAction[][]');