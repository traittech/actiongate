/**
 * Represents the type of transaction to be performed.
 * Transaction value must match blockchain module & method!
 */
export enum TransactionType {
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
  TransactionType.AssetsCreate,
  TransactionType.AssetsStartDestroy,
  TransactionType.AssetsDestroyAccounts,
  TransactionType.AssetsDestroyApprovals,
  TransactionType.AssetsFinishDestroy,
  TransactionType.AssetsMint,
  TransactionType.AssetsBurn,
  TransactionType.AssetsTransfer,
  TransactionType.AssetsTransferKeepAlive,
  TransactionType.AssetsForceTransfer,
  TransactionType.AssetsFreezeAccount,
  TransactionType.AssetsThawAccount,
  TransactionType.AssetsFreezeAsset,
  TransactionType.AssetsThawAsset,
  TransactionType.AssetsTransferOwnership,
  TransactionType.AssetsSetMinBalance,
  TransactionType.AssetsSetMetadata,
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
  TransactionType.NftsUnlockItemTransfer
] as const;

export const AllowedActions = [...Actions];

export type ActionType = (typeof Actions)[number];
