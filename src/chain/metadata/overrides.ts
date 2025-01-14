export const BlockchainOverridesMap = new Map<string, string>();

BlockchainOverridesMap.set('u32', 'BlockchainGenericId');
BlockchainOverridesMap.set('u128', 'BlockchainGenericBalance');
BlockchainOverridesMap.set('Bytes', 'BlockchainGenericText');
BlockchainOverridesMap.set('bool', 'BlockchainGenericBoolean');
BlockchainOverridesMap.set('MultiAddress', 'BlockchainGenericAccount');
BlockchainOverridesMap.set('PalletNftsDestroyWitness', 'NftWitness');
BlockchainOverridesMap.set('Vec<Vec<ITuple<[TraitPrimitivesAppTransactionsCtActionOrigin, Call]>>>', 'CTAction[][]');
