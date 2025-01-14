/**
 * Represents the type of action to be performed
 * [Note] Action value must match blockchain method!
 */
export enum ActionType {
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
}
