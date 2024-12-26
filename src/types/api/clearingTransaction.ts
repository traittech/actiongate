import { ActionType } from './actions';

import type {
  BalancesTransferAllowDeathArgs,
  BalancesTransferKeepAliveArgs,
  BalancesTransferAllArgs,
  NftsCreateArgs,
  NftsDestroyArgs,
  NftsTransferOwnershipArgs,
  NftsSetAcceptOwnershipArgs,
  NftsSetCollectionMetadataArgs,
  NftsClearCollectionMetadataArgs,
  NftsMintArgs,
  NftsBurnArgs,
  NftsTransferArgs,
  NftsLockItemTransferArgs,
  NftsUnlockItemTransferArgs,
  NftsSetMetadataArgs,
  NftsClearMetadataArgs,
  AssetsCreateArgs,
  AssetsStartDestroyArgs,
  AssetsDestroyAccountsArgs,
  AssetsDestroyApprovalsArgs,
  AssetsFinishDestroyArgs,
  AssetsTransferOwnershipArgs,
  AssetsSetMinBalanceArgs,
  AssetsSetMetadataArgs,
  AssetsFreezeAssetArgs,
  AssetsThawAssetArgs,
  AssetsMintArgs,
  AssetsBurnArgs,
  AssetsTransferArgs,
  AssetsTransferKeepAliveArgs,
  AssetsForceTransferArgs,
  AssetsFreezeArgs,
  AssetsThawArgs,
} from '../../txwrapper/calls';

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
  arguments: BalancesTransferAllowDeathArgs;
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
  arguments: BalancesTransferKeepAliveArgs;
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
  arguments: BalancesTransferAllArgs;
}

// Nfts Pallet Arguments

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
  arguments: NftsCreateArgs;
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
  arguments: NftsDestroyArgs;
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
  arguments: NftsTransferOwnershipArgs;
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
  arguments: NftsSetAcceptOwnershipArgs;
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
  arguments: NftsSetCollectionMetadataArgs;
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
  arguments: NftsClearCollectionMetadataArgs;
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
  arguments: NftsMintArgs;
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
  arguments: NftsBurnArgs;
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
  arguments: NftsTransferArgs;
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
  arguments: NftsLockItemTransferArgs;
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
  arguments: NftsUnlockItemTransferArgs;
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
  arguments: NftsSetMetadataArgs;
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
  arguments: NftsClearMetadataArgs;
}

// Assets Pallet Arguments

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
  arguments: AssetsCreateArgs;
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
  arguments: AssetsStartDestroyArgs;
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
  arguments: AssetsDestroyAccountsArgs;
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
  arguments: AssetsDestroyApprovalsArgs;
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
  arguments: AssetsFinishDestroyArgs;
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
  arguments: AssetsTransferOwnershipArgs;
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
  arguments: AssetsSetMinBalanceArgs;
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
  arguments: AssetsSetMetadataArgs;
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
  arguments: AssetsFreezeAssetArgs;
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
  arguments: AssetsThawAssetArgs;
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
  arguments: AssetsMintArgs;
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
  arguments: AssetsBurnArgs;
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
  arguments: AssetsTransferArgs;
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
  arguments: AssetsTransferKeepAliveArgs;
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
  arguments: AssetsForceTransferArgs;
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
  arguments: AssetsFreezeArgs;
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
  arguments: AssetsThawArgs;
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
