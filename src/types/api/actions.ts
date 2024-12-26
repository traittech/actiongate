/**
 * Represents the type of action to be performed
 * [Note] Action value must match blockchain method!
 */
export enum ActionType {
  // Balances Pallet
  BalancesTransferAllowDeath = 'balancesTransferAllowDeath',
  BalancesTransferKeepAlive = 'balancesTransferKeepAlive',
  BalancesTransferAll = 'balancesTransferAll',

  // Nfts Pallet
  NftsCreateCollection = 'nftsCreate',
  NftsDestroyCollection = 'nftsDestroy',

  NftsTransferCollectionOwnership = 'nftsTransferOwnership',
  NftsAcceptCollectionOwnership = 'nftsSetAcceptOwnership',
  NftsSetCollectionMetadata = 'nftsSetCollectionMetadata',
  NftsClearCollectionMetadata = 'nftsClearCollectionMetadata',

  NftsMintItem = 'nftsMint',
  NftsBurnItem = 'nftsBurn',
  NftsTransferItem = 'nftsTransfer',
  NftsLockItemTransfer = 'nftsLockItemTransfer',
  NftsUnlockItemTransfer = 'nftsUnlockItemTransfer',
  NftsSetItemMetadata = 'nftsSetMetadata',
  NftsClearItemMetadata = 'nftsClearMetadata',

  // Assets Pallet
  AssetsCreate = 'assetsCreate',

  AssetsStartDestroy = 'assetsStartDestroy',
  AssetsDestroyAccounts = 'assetsDestroyAccounts',
  AssetsDestroyApprovals = 'assetsDestroyApprovals',
  AssetsFinishDestroy = 'assetsFinishDestroy',

  AssetsMint = 'assetsMint',
  AssetsBurn = 'assetsBurn',
  AssetsTransfer = 'assetsTransfer',
  AssetsTransferKeepAlive = 'assetsTransferKeepAlive',
  AssetsForceTransfer = 'assetsForceTransfer',
  AssetsFreezeAccount = 'assetsFreeze',
  AssetsThawAccount = 'assetsThaw',

  AssetsFreezeAsset = 'assetsFreezeAsset',
  AssetsThawAsset = 'assetsThawAsset',
  AssetsTransferOwnership = 'assetsTransferOwnership',
  AssetsSetMinBalance = 'assetsSetMinBalance',
  AssetsSetMetadata = 'assetsSetMetadata',
}