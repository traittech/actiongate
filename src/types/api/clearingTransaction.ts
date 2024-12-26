import { ActionType } from './actions';

import type {
  BlockchainAddress,
  Balance,
  CollectionId,
  ItemId,
  AssetId,
  u32,
} from './common';

/**
 * Payload for a clearing transaction.
 */
export interface ClearingTransactionPayload {
  /**
   * The signatory responsible for the transaction.
   */
  signatory: string;

  /**
   * The ID of the application agent initiating the transaction.
   */
  app_agent_id: number;

  /**
   * A list of atomic operations included in the transaction.
   */
  atomics: CTAtomic[];
}

/**
 * Represents an atomic operation.
 */
export interface CTAtomic {
  /**
   * A list of actions that make up the atomic operation.
   */
  actions: CTAction[];
}

// Balances Pallet Arguments

export interface BalancesTransferAllowDeathArguments {
  dest: BlockchainAddress;
  value: Balance;
}

export interface BalancesTransferAllowDeathAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.BalancesTransferAllowDeath;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: BalancesTransferAllowDeathArguments;
}

export interface BalancesTransferKeepAliveArguments {
  dest: BlockchainAddress;
  value: Balance;
}

export interface BalancesTransferKeepAliveAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.BalancesTransferKeepAlive;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: BalancesTransferKeepAliveArguments;
}

export interface BalancesTransferAllArguments {
  dest: BlockchainAddress;
  keepAlive: boolean;
}

export interface BalancesTransferAllAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.BalancesTransferAll;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: BalancesTransferAllArguments;
}

// Nfts Pallet Arguments

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface NftsCreateCollectionArguments {}

export interface NftsCreateCollectionAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.NftsCreateCollection;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: NftsCreateCollectionArguments;
}

export interface NftsDestroyCollectionArguments {
  collection: CollectionId;
  witness: {
    itemMetadatas: u32;
    itemConfigs: u32;
    attributes: u32;
  };
}

export interface NftsDestroyCollectionAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.NftsDestroyCollection;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: NftsDestroyCollectionArguments;
}

export interface NftsTransferCollectionOwnershipArguments {
  collection: CollectionId;
  newOwner: BlockchainAddress;
}

export interface NftsTransferCollectionOwnershipAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.NftsTransferCollectionOwnership;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: NftsTransferCollectionOwnershipArguments;
}

export interface NftsAcceptCollectionOwnershipArguments {
  collection: CollectionId;
}

export interface NftsAcceptCollectionOwnershipAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.NftsAcceptCollectionOwnership;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: NftsAcceptCollectionOwnershipArguments;
}

export interface NftsSetCollectionMetadataArguments {
  collection: CollectionId;
  data: string;
}

export interface NftsSetCollectionMetadataAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.NftsSetCollectionMetadata;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: NftsSetCollectionMetadataArguments;
}

export interface NftsClearCollectionMetadataArguments {
  collection: CollectionId;
}

export interface NftsClearCollectionMetadataAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.NftsClearCollectionMetadata;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: NftsClearCollectionMetadataArguments;
}

export interface NftsMintItemArguments {
  collection: CollectionId;
  item: ItemId;
  mintTo: BlockchainAddress;
}

export interface NftsMintItemAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.NftsMintItem;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: NftsMintItemArguments;
}

export interface NftsBurnItemArguments {
  collection: CollectionId;
  item: ItemId;
}

export interface NftsBurnItemAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.NftsBurnItem;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: NftsBurnItemArguments;
}

export interface NftsTransferItemArguments {
  collection: CollectionId;
  item: ItemId;
  dest: BlockchainAddress;
}

export interface NftsTransferItemAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.NftsTransferItem;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: NftsTransferItemArguments;
}

export interface NftsLockItemTransferArguments {
  collection: CollectionId;
  item: ItemId;
}

export interface NftsLockItemTransferAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.NftsLockItemTransfer;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: NftsLockItemTransferArguments;
}

export interface NftsUnlockItemTransferArguments {
  collection: CollectionId;
  item: ItemId;
}

export interface NftsUnlockItemTransferAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.NftsUnlockItemTransfer;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: NftsUnlockItemTransferArguments;
}

export interface NftsSetItemMetadataArguments {
  collection: CollectionId;
  item: ItemId;
  data: string;
}

export interface NftsSetItemMetadataAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.NftsSetItemMetadata;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: NftsSetItemMetadataArguments;
}

export interface NftsClearItemMetadataArguments {
  collection: CollectionId;
  item: ItemId;
}

export interface NftsClearItemMetadataAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.NftsClearItemMetadata;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: NftsClearItemMetadataArguments;
}

// Assets Pallet Arguments

export interface AssetsCreateArguments {
  minBalance: Balance;
}

export interface AssetsCreateAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.AssetsCreate;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: AssetsCreateArguments;
}

export interface AssetsStartDestroyArguments {
  id: AssetId;
}

export interface AssetsStartDestroyAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.AssetsStartDestroy;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: AssetsStartDestroyArguments;
}

export interface AssetsDestroyAccountsArguments {
  id: AssetId;
}

export interface AssetsDestroyAccountsAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.AssetsDestroyAccounts;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: AssetsDestroyAccountsArguments;
}

export interface AssetsDestroyApprovalsArguments {
  id: AssetId;
}

export interface AssetsDestroyApprovalsAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.AssetsDestroyApprovals;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: AssetsDestroyApprovalsArguments;
}

export interface AssetsFinishDestroyArguments {
  id: AssetId;
}

export interface AssetsFinishDestroyAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.AssetsFinishDestroy;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: AssetsFinishDestroyArguments;
}

export interface AssetsTransferOwnershipArguments {
  id: AssetId;
  owner: BlockchainAddress;
}

export interface AssetsTransferOwnershipAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.AssetsTransferOwnership;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: AssetsTransferOwnershipArguments;
}

export interface AssetsSetMinBalanceArguments {
  id: AssetId;
  minBalance: Balance;
}

export interface AssetsSetMinBalanceAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.AssetsSetMinBalance;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: AssetsSetMinBalanceArguments;
}

export interface AssetsSetMetadataArguments {
  id: AssetId;
  data: string;
}

export interface AssetsSetMetadataAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.AssetsSetMetadata;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: AssetsSetMetadataArguments;
}

export interface AssetsFreezeAssetArguments {
  id: AssetId;
}

export interface AssetsFreezeAssetAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.AssetsFreezeAsset;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: AssetsFreezeAssetArguments;
}

export interface AssetsThawAssetArguments {
  id: AssetId;
}

export interface AssetsThawAssetAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.AssetsThawAsset;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: AssetsThawAssetArguments;
}

export interface AssetsMintArguments {
  id: AssetId;
  beneficiary: BlockchainAddress;
  amount: Balance;
}

export interface AssetsMintAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.AssetsMint;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: AssetsMintArguments;
}

export interface AssetsBurnArguments {
  id: AssetId;
  who: BlockchainAddress;
  amount: Balance;
}

export interface AssetsBurnAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.AssetsBurn;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: AssetsBurnArguments;
}

export interface AssetsTransferArguments {
  id: AssetId;
  target: BlockchainAddress;
  amount: Balance;
}

export interface AssetsTransferAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.AssetsTransfer;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: AssetsTransferArguments;
}

export interface AssetsTransferKeepAliveArguments {
  id: AssetId;
  target: BlockchainAddress;
  amount: Balance;
}

export interface AssetsTransferKeepAliveAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.AssetsTransferKeepAlive;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: AssetsTransferKeepAliveArguments;
}

export interface AssetsForceTransferArguments {
  id: AssetId;
  source: BlockchainAddress;
  dest: BlockchainAddress;
  amount: Balance;
}

export interface AssetsForceTransferAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.AssetsForceTransfer;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: AssetsForceTransferArguments;
}

export interface AssetsFreezeAccountArguments {
  id: AssetId;
  who: BlockchainAddress;
}

export interface AssetsFreezeAccountAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.AssetsFreezeAccount;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: AssetsFreezeAccountArguments;
}

export interface AssetsThawAccountArguments {
  id: AssetId;
  who: BlockchainAddress;
}

export interface AssetsThawAccountAction {
  /**
   * The type of action to be performed
   */
  actionType: ActionType.AssetsThawAccount;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: AssetsThawAccountArguments;
}

/**
 * Represents a single action within an atomic operation.
 */

export type CTAction =
  | BalancesTransferAllowDeathAction
  | BalancesTransferKeepAliveAction
  | BalancesTransferAllAction
  | NftsCreateCollectionAction
  | NftsDestroyCollectionAction
  | NftsTransferCollectionOwnershipAction
  | NftsAcceptCollectionOwnershipAction
  | NftsSetCollectionMetadataAction
  | NftsClearCollectionMetadataAction
  | NftsMintItemAction
  | NftsBurnItemAction
  | NftsTransferItemAction
  | NftsLockItemTransferAction
  | NftsUnlockItemTransferAction
  | NftsSetItemMetadataAction
  | NftsClearItemMetadataAction
  | AssetsCreateAction
  | AssetsStartDestroyAction
  | AssetsDestroyAccountsAction
  | AssetsDestroyApprovalsAction
  | AssetsFinishDestroyAction
  | AssetsTransferOwnershipAction
  | AssetsSetMinBalanceAction
  | AssetsSetMetadataAction
  | AssetsFreezeAssetAction
  | AssetsThawAssetAction
  | AssetsMintAction
  | AssetsBurnAction
  | AssetsTransferAction
  | AssetsTransferKeepAliveAction
  | AssetsForceTransferAction
  | AssetsFreezeAccountAction
  | AssetsThawAccountAction;

/**
 * Response from a clearing transaction request.
 */
export interface ClearingTransactionResponse {
  /**
   * The status of the transaction.
   */
  status: string;

  /**
   * The transaction hash, if available.
   */
  tx_hash?: string;

  /**
   * An error code, if the transaction failed.
   */
  error_code?: number;

  /**
   * A description of the error, if the transaction failed.
   */
  error_description?: string;
}

/**
 * Information about extrinsics allowed
 */
export interface ExtrinsicInfo {
  /**
   * The name of the module where the action is defined.
   */
  module_name: string;

  /**
   * The name of the function to be executed.
   */
  function_name: string;
}

/**
 * Interface representing the information about an app agent.
 */
export interface AppAgentInfo {
  /**
   * Unique identifier for the app agent.
   */
  id: number;

  /**
   * Address associated with the app agent.
   */
  address: string;

  /**
   * Address of the owner of the app agent.
   */
  owner: string;

  /**
   * List of addresses with admin rights for the app agent.
   */
  admins: string[];

  /**
   * Address where the app agent collects funds.
   */
  collectorAddress: string;

  /**
   * List of cold storage addresses associated with the app agent.
   */
  coldAddresses: string[];

  /**
   * List of addresses allowed to spend from the cold storage addresses.
   */
  allowedToSpendFromColdAddress: string[];

  /**
   * Current status of the app agent. Can be 'Active' or 'Inactive'.
   */
  status: 'Active' | 'Inactive';

  /**
   * Filters applied to the admin functions of the app agent.
   * Represented as key-value pairs where the key is the filter name and the value is the filter criteria.
   */
  adminFilters: Record<string, ExtrinsicInfo>;

  /**
   * Filters applied to the global functions of the app agent.
   * Represented as key-value pairs where the key is the filter name and the value is the filter criteria.
   */
  globalFilters: ExtrinsicInfo[];

  /**
   * Clearing points balance for the app agent.
   */
  clearingPointsBalance: string;

  /**
   * Action points balance for the app agent.
   */
  actionPointsBalance: string;
}

// The origin type for each Action in CT
export type CTActionOrigin =
  | { AppAgentId: any }
  | { AppAgentAddress: string }
  | { TransactionalAddressId: any }
  | { TransactionalAddress: any }
  | { NamedAddress: any }
  | { NamedAddressName: any };
