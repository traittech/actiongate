/**
 * Represents the type of transaction to be performed.
 * Transaction value must match blockchain module & method!
 */
export enum TransactionType {
  // Admins Pallet
  AdminsAddAdmin = 'admins.addPalletAdmin',
  AdminsRemoveAdmin = 'admins.removePalletAdmin',
  // AppAgents Pallet
  AppAgentsAddAdmin = 'appAgents.addAdmin',
  AppAgentsAddAdminToNamedAddress = 'appAgents.addAdminToNamedAddressDispatch',
  AppAgentsAllowAdminColdWallet = 'appAgents.allowAdminColdWalletDispatch',
  AppAgentsChangeHotWallet = 'appAgents.changeHotWallet',
  AppAgentsChangeOwnerCancel = 'appAgents.changeOwnerCancel',
  AppAgentsChangeOwnerComplete = 'appAgents.changeOwnerComplete',
  AppAgentsChangeOwnerInit = 'appAgents.changeOwnerInit',
  AppAgentsClearAdminDispatchFilter = 'appAgents.clearAdminDispatchFilter',
  AppAgentsClearAppAgentMetadata = 'appAgents.clearAppAgentMetadata',
  // AppAgentsCompleteDestroyAppAgent = 'appAgents.completeDestroyAppAgent', // complex types
  AppAgentsCreateAppAgent = 'createAppAgent',
  AppAgentsDisableAdminColdWalletDispatch = 'appAgents.disableAdminColdWalletDispatch',
  AppAgentsDisableHotWallet = 'appAgents.disableHotWallet',
  AppAgentsEnableHotWallet = 'appAgents.enableHotWallet',
  AppAgentsForceCreateAppAgent = 'appAgents.forceCreateAppAgent',
  AppAgentsForceInitiateAppAgentDestroy = 'appAgents.forceInitiateAppAgentDestroy',
  AppAgentsForceInitiateAppAgentSuspension = 'appAgents.forceInitiateAppAgentSuspension',
  AppAgentsForceInitiateAppAgentUnsuspension = 'appAgents.forceInitiateAppAgentUnsuspension',
  AppAgentsInitiateDestroyAppAgent = 'appAgents.initiateDestroyAppAgent',
  AppAgentsPauseAppAgent = 'appAgents.pauseAppAgent',
  // AppAgentsProcessDestroy = 'appAgents.processDestroy', // complex types
  AppAgentsReactivateAppAgent = 'appAgents.reactivateAppAgent',
  AppAgentsRemoveAdmin = 'appAgents.removeAdmin',
  AppAgentsRemoveAdminFromNamedAddressDispatch = 'appAgents.removeAdminFromNamedAddressDispatch',
  AppAgentsSetAdminDispatchFilter = 'appAgents.setAdminDispatchFilter',
  AppAgentsSetAppAgentMetadata = 'appAgents.setAppAgentMetadata',
  AppAgentsUnpauseAppAgent = 'appAgents.unpauseAppAgent',
  // AppTransactions Pallet
  AppTransactionsSubmitClearingTransaction = 'appTransactions.submitClearingTransaction',
  // Assets Pallet
  AssetsCreate = 'assets.create',
  AssetsStartDestroy = 'assets.startDestroy',
  AssetsDestroyAccounts = 'assets.destroyAccounts',
  AssetsDestroyApprovals = 'assets.destroyApprovals',
  AssetsFinishDestroy = 'assets.finishDestroy',
  AssetsMint = 'assets.mint',
  AssetsBurn = 'assets.burn',
  AssetsTransfer = 'assets.transfer',
  AssetsTransferKeepAlive = 'assets.transferKeepAlive',
  AssetsForceTransfer = 'assets.forceTransfer',
  AssetsFreezeAccount = 'assets.freeze',
  AssetsThawAccount = 'assets.thaw',
  AssetsFreezeAsset = 'assets.freezeAsset',
  AssetsThawAsset = 'assets.thawAsset',
  AssetsTransferOwnership = 'assets.transferOwnership',
  AssetsSetMinBalance = 'assets.setMinBalance',
  AssetsSetMetadata = 'assets.setMetadata',
  // Balances Pallet
  BalancesTransferAllowDeath = 'balances.transferAllowDeath',
  BalancesTransferKeepAlive = 'balances.transferKeepAlive',
  BalancesTransferAll = 'balances.transferAll',
  // Nfts Pallet
  NftsCreateCollection = 'nfts.create',
  NftsDestroyCollection = 'nfts.destroy',
  NftsTransferCollectionOwnership = 'nfts.transferOwnership',
  NftsAcceptCollectionOwnership = 'nfts.setAcceptOwnership',
  NftsSetCollectionMetadata = 'nfts.setCollectionMetadata',
  NftsClearCollectionMetadata = 'nfts.clearCollectionMetadata',
  NftsMintItem = 'nfts.mint',
  NftsBurnItem = 'nfts.burn',
  NftsTransferItem = 'nfts.transfer',
  NftsLockItemTransfer = 'nfts.lockItemTransfer',
  NftsUnlockItemTransfer = 'nfts.unlockItemTransfer',
  NftsSetItemMetadata = 'nfts.setMetadata',
  NftsClearItemMetadata = 'nfts.clearMetadata',
}

export const Actions = [
  // Balances pallet
  TransactionType.BalancesTransferAll,
  TransactionType.BalancesTransferAllowDeath,
  TransactionType.BalancesTransferKeepAlive,
  // Assets Pallet
  TransactionType.AssetsBurn,
  TransactionType.AssetsCreate,
  TransactionType.AssetsDestroyAccounts,
  TransactionType.AssetsDestroyApprovals,
  TransactionType.AssetsFinishDestroy,
  TransactionType.AssetsForceTransfer,
  TransactionType.AssetsFreezeAccount,
  TransactionType.AssetsFreezeAsset,
  TransactionType.AssetsMint,
  TransactionType.AssetsSetMetadata,
  TransactionType.AssetsSetMinBalance,
  TransactionType.AssetsStartDestroy,
  TransactionType.AssetsThawAccount,
  TransactionType.AssetsThawAsset,
  TransactionType.AssetsTransfer,
  TransactionType.AssetsTransferKeepAlive,
  TransactionType.AssetsTransferOwnership,
  // Nfts Pallet
  TransactionType.NftsAcceptCollectionOwnership,
  TransactionType.NftsBurnItem,
  TransactionType.NftsClearCollectionMetadata,
  TransactionType.NftsClearItemMetadata,
  TransactionType.NftsCreateCollection,
  TransactionType.NftsDestroyCollection,
  TransactionType.NftsLockItemTransfer,
  TransactionType.NftsMintItem,
  TransactionType.NftsSetCollectionMetadata,
  TransactionType.NftsSetItemMetadata,
  TransactionType.NftsTransferCollectionOwnership,
  TransactionType.NftsTransferItem,
  TransactionType.NftsUnlockItemTransfer,
] as const;

export const AllowedActions = [...Actions];

export type ActionType = (typeof Actions)[number];
