import { ExtrinsicType } from './extrinsics';

// Transactions allowed for `/submit/clearing_transaction`
export const Actions = [
  // Balances pallet
  ExtrinsicType.BalancesTransferAll,
  ExtrinsicType.BalancesTransfer,
  ExtrinsicType.BalancesTransferKeepAlive,
  // Assets Pallet
  ExtrinsicType.AssetsBurn,
  ExtrinsicType.AssetsCreate,
  ExtrinsicType.AssetsDestroyAccounts,
  ExtrinsicType.AssetsDestroyApprovals,
  ExtrinsicType.AssetsFinishDestroy,
  ExtrinsicType.AssetsForceTransfer,
  ExtrinsicType.AssetsFreezeAccount,
  ExtrinsicType.AssetsFreezeAsset,
  ExtrinsicType.AssetsMint,
  ExtrinsicType.AssetsSetMetadata,
  ExtrinsicType.AssetsSetMinBalance,
  ExtrinsicType.AssetsStartDestroy,
  ExtrinsicType.AssetsThawAccount,
  ExtrinsicType.AssetsThawAsset,
  ExtrinsicType.AssetsTransfer,
  ExtrinsicType.AssetsTransferKeepAlive,
  ExtrinsicType.AssetsTransferOwnership,
  // Nfts Pallet
  ExtrinsicType.NftsAcceptCollectionOwnership,
  ExtrinsicType.NftsBurnItem,
  ExtrinsicType.NftsClearCollectionMetadata,
  ExtrinsicType.NftsClearItemMetadata,
  ExtrinsicType.NftsCreateCollection,
  ExtrinsicType.NftsDestroyCollection,
  ExtrinsicType.NftsLockItemTransfer,
  ExtrinsicType.NftsMintItem,
  ExtrinsicType.NftsSetCollectionMetadata,
  ExtrinsicType.NftsSetItemMetadata,
  ExtrinsicType.NftsTransferCollectionOwnership,
  ExtrinsicType.NftsTransferItem,
  ExtrinsicType.NftsUnlockItemTransfer,
  // AppTransferChannels Pallet
  ExtrinsicType.AppTransferChannelsEstablishTransferChannel,
  ExtrinsicType.AppTransferChannelsRemoveTransferChannel,
] as const;

export const AllowedActions = [...Actions];

export type ActionType = (typeof Actions)[number];
