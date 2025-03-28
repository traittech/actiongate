export const BlockchainOverridesMap = new Map<string, string>();

BlockchainOverridesMap.set('u32', 'BlockchainGenericId');
BlockchainOverridesMap.set('u64', 'UINT64');
BlockchainOverridesMap.set('u128', 'BlockchainGenericBalance');
BlockchainOverridesMap.set('Bytes', 'BlockchainGenericText');
BlockchainOverridesMap.set('bool', 'BlockchainGenericBoolean');
BlockchainOverridesMap.set('AccountId32', 'BlockchainGenericAccount');
BlockchainOverridesMap.set('MultiAddress', 'BlockchainGenericAccount');
BlockchainOverridesMap.set('Vec<AccountId32>', 'BlockchainGenericAccountList');

BlockchainOverridesMap.set('PalletAppAgentsInputNamedAddressInput', 'NamedAddressInput');
BlockchainOverridesMap.set('PalletNftsDestroyWitness', 'NftWitness');

BlockchainOverridesMap.set('TraitPrimitivesPalletAdminsPalletAdminType', 'AdminType');
BlockchainOverridesMap.set('TraitPrimitivesAppAgentsDestroyAppAgentDestroyInfo', 'AppAgentDestroyInfo');
BlockchainOverridesMap.set('TraitPrimitivesAppSubscriptionsAppSubscriptionTierDetails', 'AppSubscriptionTierDetails');
BlockchainOverridesMap.set('TraitPrimitivesAppSubscriptionsAppPayOnDemandMode', 'AppPayOnDemandMode');
BlockchainOverridesMap.set('TraitPrimitivesAppTransferFiltersAppDepositPermissions', 'AppDepositPermissions');
BlockchainOverridesMap.set('TraitPrimitivesUserVerificationUserLevel', 'UserLevel');
BlockchainOverridesMap.set('Vec<Vec<(TraitPrimitivesAppTransactionsCtActionOrigin,Call)>>', 'CTAtomicActions');
