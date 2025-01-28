export const BlockchainOverridesMap = new Map<string, string>();

BlockchainOverridesMap.set('u32', 'BlockchainGenericId');
BlockchainOverridesMap.set('u64', 'UINT64');
BlockchainOverridesMap.set('u128', 'BlockchainGenericBalance');
BlockchainOverridesMap.set('Bytes', 'BlockchainGenericText');
BlockchainOverridesMap.set('bool', 'BlockchainGenericBoolean');
BlockchainOverridesMap.set('AccountId32', 'BlockchainGenericAccount');
BlockchainOverridesMap.set('MultiAddress', 'BlockchainGenericAccountId');

BlockchainOverridesMap.set('TraitPrimitivesPalletAdminsPalletAdminType', 'AdminType');
BlockchainOverridesMap.set('PalletAppAgentsInputNamedAddressInput', 'NamedAddressInput');
BlockchainOverridesMap.set('TraitPrimitivesAppAgentsDestroyAppAgentDestroyInfo', 'AppAgentDestroyInfo');
BlockchainOverridesMap.set('TraitPrimitivesAppSubscriptionsAppSubscriptionTierDetails', 'AppSubscriptionTierDetails');
BlockchainOverridesMap.set('TraitPrimitivesAppSubscriptionsAppPayOnDemandMode', 'AppPayOnDemandMode');
BlockchainOverridesMap.set('TraitPrimitivesAppTransferFiltersAppDepositPermissions', 'AppDepositPermissions');
BlockchainOverridesMap.set('Vec<Vec<(TraitPrimitivesAppTransactionsCtActionOrigin,Call)>>', 'CTAtomicActions');
BlockchainOverridesMap.set('PalletNftsDestroyWitness', 'NftWitness');
