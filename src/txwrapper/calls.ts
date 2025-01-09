// Auto-generated, do not edit
/* eslint-disable */

import { defineMethod } from '@substrate/txwrapper-core';

import type { Args, BaseTxInfo, OptionsWithMeta, UnsignedTransaction } from '@substrate/txwrapper-core';

import type {
  BlockchainGenericAddress,
  BlockchainGenericBalance,
  BlockchainGenericId,
  CTAction,
  CTAtomicActionGeneric,
  NftWitness,
} from '../types/api/common';

import { ActionType } from '../types/api/actions';

/**
 * Arguments required to reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
 */
export interface AssetsBurnArgs extends Args {
  /**
   *  The identifier of the asset to have some amount burned.
   */
  id: BlockchainGenericId;
  /**
   *  The account to be debited from.
   */
  who: BlockchainGenericAddress;
  /**
   *  The maximum amount by which `who`'s balance should be reduced.
   */
  amount: BlockchainGenericBalance;
};

/**
 * Reduce the balance of `who` by as much as possible up to `amount` assets of `id`. Origin must be Signed and the sender should be the Manager of the asset `id`. Bails with `NoAccount` if the `who` is already dead.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsBurn(
  args: AssetsBurnArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'burn',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsBurnAction = CTAtomicActionGeneric<
  ActionType.AssetsBurn,
  AssetsBurnArgs
>;

/*---------------------------------------------------------------------------------- */

export interface AssetsCreateArgs extends Args {
  minBalance: BlockchainGenericBalance;
};

/**
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsCreate(
  args: AssetsCreateArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'create',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsCreateAction = CTAtomicActionGeneric<
  ActionType.AssetsCreate,
  AssetsCreateArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to destroy all accounts associated with a given asset.
 */
export interface AssetsDestroyAccountsArgs extends Args {
  /**
   *  The identifier of the asset to be destroyed. This must identify an existing asset.
   */
  id: BlockchainGenericId;
};

/**
 * Destroy all accounts associated with a given asset. `destroy_accounts` should only be called after `start_destroy` has been called, and the asset is in a `Destroying` state. Due to weight restrictions, this function may need to be called multiple times to fully destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsDestroyAccounts(
  args: AssetsDestroyAccountsArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'destroy_accounts',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsDestroyAccountsAction = CTAtomicActionGeneric<
  ActionType.AssetsDestroyAccounts,
  AssetsDestroyAccountsArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit).
 */
export interface AssetsDestroyApprovalsArgs extends Args {
  /**
   *  The identifier of the asset to be destroyed. This must identify an existing asset.
   */
  id: BlockchainGenericId;
};

/**
 * Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit). `destroy_approvals` should only be called after `start_destroy` has been called, and the asset is in a `Destroying` state. Due to weight restrictions, this function may need to be called multiple times to fully destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsDestroyApprovals(
  args: AssetsDestroyApprovalsArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'destroy_approvals',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsDestroyApprovalsAction = CTAtomicActionGeneric<
  ActionType.AssetsDestroyApprovals,
  AssetsDestroyApprovalsArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to complete destroying asset and unreserve currency.
 */
export interface AssetsFinishDestroyArgs extends Args {
  /**
   *  The identifier of the asset to be destroyed. This must identify an existing asset.
   */
  id: BlockchainGenericId;
};

/**
 * Complete destroying asset and unreserve currency. `finish_destroy` should only be called after `start_destroy` has been called, and the asset is in a `Destroying` state. All accounts or approvals should be destroyed before hand.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsFinishDestroy(
  args: AssetsFinishDestroyArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'finish_destroy',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsFinishDestroyAction = CTAtomicActionGeneric<
  ActionType.AssetsFinishDestroy,
  AssetsFinishDestroyArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to move some assets from one account to another.
 */
export interface AssetsForceTransferArgs extends Args {
  /**
   *  The identifier of the asset to have some amount transferred.
   */
  id: BlockchainGenericId;
  /**
   *  The account to be debited.
   */
  source: BlockchainGenericAddress;
  /**
   *  The account to be credited.
   */
  dest: BlockchainGenericAddress;
  /**
   *  The amount by which the `source`'s balance of assets should be reduced and `dest`'s balance increased. The amount actually transferred may be slightly greater in the case that the transfer would otherwise take the `source` balance above zero but below the minimum balance. Must be greater than zero.
   */
  amount: BlockchainGenericBalance;
};

/**
 * Move some assets from one account to another. Origin must be Signed and the sender should be the Admin of the asset `id`.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsForceTransfer(
  args: AssetsForceTransferArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'force_transfer',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsForceTransferAction = CTAtomicActionGeneric<
  ActionType.AssetsForceTransfer,
  AssetsForceTransferArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to disallow further unprivileged transfers of an asset `id` from an account `who`. `who`
 */
export interface AssetsFreezeAccountArgs extends Args {
  /**
   *  The identifier of the asset to be frozen.
   */
  id: BlockchainGenericId;
  /**
   *  The account to be frozen.
   */
  who: BlockchainGenericAddress;
};

/**
 * Disallow further unprivileged transfers of an asset `id` from an account `who`. `who` must already exist as an entry in `Account`s of the asset. If you want to freeze an account that does not have an entry, use `touch_other` first. Origin must be Signed and the sender should be the Freezer of the asset `id`.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsFreeze(
  args: AssetsFreezeAccountArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'freeze',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsFreezeAccountAction = CTAtomicActionGeneric<
  ActionType.AssetsFreezeAccount,
  AssetsFreezeAccountArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to disallow further unprivileged transfers for the asset class.
 */
export interface AssetsFreezeAssetArgs extends Args {
  /**
   *  The identifier of the asset to be frozen.
   */
  id: BlockchainGenericId;
};

/**
 * Disallow further unprivileged transfers for the asset class. Origin must be Signed and the sender should be the Freezer of the asset `id`.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsFreezeAsset(
  args: AssetsFreezeAssetArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'freeze_asset',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsFreezeAssetAction = CTAtomicActionGeneric<
  ActionType.AssetsFreezeAsset,
  AssetsFreezeAssetArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to mint assets of a particular class.
 */
export interface AssetsMintArgs extends Args {
  /**
   *  The identifier of the asset to have some amount minted.
   */
  id: BlockchainGenericId;
  /**
   *  The account to be credited with the minted assets.
   */
  beneficiary: BlockchainGenericAddress;
  /**
   *  The amount of the asset to be minted.
   */
  amount: BlockchainGenericBalance;
};

/**
 * Mint assets of a particular class. The origin must be Signed and the sender must be the Issuer of the asset `id`.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsMint(
  args: AssetsMintArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'mint',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsMintAction = CTAtomicActionGeneric<
  ActionType.AssetsMint,
  AssetsMintArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to set the raw metadata for an asset.
 */
export interface AssetsSetMetadataArgs extends Args {
  /**
   *  The identifier of the asset to update.
   */
  id: BlockchainGenericId;
  /**
   *  The data of metadata. Limited in length by `StringLimit`.
   */
  data: string;
};

/**
 * Set the raw metadata for an asset. Origin must be Signed and the sender should be the Owner of the asset `id`. Funds of sender are reserved according to the formula: `MetadataDepositBase + MetadataDepositPerByte * (data.len)` taking into account any already reserved funds.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsSetMetadata(
  args: AssetsSetMetadataArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'set_metadata',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsSetMetadataAction = CTAtomicActionGeneric<
  ActionType.AssetsSetMetadata,
  AssetsSetMetadataArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to sets the minimum balance of an asset.
 */
export interface AssetsSetMinBalanceArgs extends Args {
  /**
   *  The identifier of the asset.
   */
  id: BlockchainGenericId;
  /**
   *  The new value of `min_balance`.
   */
  minBalance: BlockchainGenericBalance;
};

/**
 * Sets the minimum balance of an asset. Only works if there aren't any accounts that are holding the asset or if the new value of `min_balance` is less than the old one. Origin must be Signed and the sender has to be the Owner of the asset `id`.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsSetMinBalance(
  args: AssetsSetMinBalanceArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'set_min_balance',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsSetMinBalanceAction = CTAtomicActionGeneric<
  ActionType.AssetsSetMinBalance,
  AssetsSetMinBalanceArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to start the process of destroying a fungible asset class.
 */
export interface AssetsStartDestroyArgs extends Args {
  /**
   *  The identifier of the asset to be destroyed. This must identify an existing asset.
   */
  id: BlockchainGenericId;
};

/**
 * Start the process of destroying a fungible asset class. `start_destroy` is the first in a series of extrinsics that should be called, to allow destruction of an asset class. The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsStartDestroy(
  args: AssetsStartDestroyArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'start_destroy',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsStartDestroyAction = CTAtomicActionGeneric<
  ActionType.AssetsStartDestroy,
  AssetsStartDestroyArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to allow unprivileged transfers to and from an account again.
 */
export interface AssetsThawAccountArgs extends Args {
  /**
   *  The identifier of the asset to be frozen.
   */
  id: BlockchainGenericId;
  /**
   *  The account to be unfrozen.
   */
  who: BlockchainGenericAddress;
};

/**
 * Allow unprivileged transfers to and from an account again. Origin must be Signed and the sender should be the Admin of the asset `id`.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsThaw(
  args: AssetsThawAccountArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'thaw',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsThawAccountAction = CTAtomicActionGeneric<
  ActionType.AssetsThawAccount,
  AssetsThawAccountArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to allow unprivileged transfers for the asset again.
 */
export interface AssetsThawAssetArgs extends Args {
  /**
   *  The identifier of the asset to be thawed.
   */
  id: BlockchainGenericId;
};

/**
 * Allow unprivileged transfers for the asset again. Origin must be Signed and the sender should be the Admin of the asset `id`.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsThawAsset(
  args: AssetsThawAssetArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'thaw_asset',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsThawAssetAction = CTAtomicActionGeneric<
  ActionType.AssetsThawAsset,
  AssetsThawAssetArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to move some assets from the sender account to another.
 */
export interface AssetsTransferArgs extends Args {
  /**
   *  The identifier of the asset to have some amount transferred.
   */
  id: BlockchainGenericId;
  /**
   *  The account to be credited.
   */
  target: BlockchainGenericAddress;
  /**
   *  The amount by which the sender's balance of assets should be reduced and `target`'s balance increased. The amount actually transferred may be slightly greater in the case that the transfer would otherwise take the sender balance above zero but below the minimum balance. Must be greater than zero.
   */
  amount: BlockchainGenericBalance;
};

/**
 * Move some assets from the sender account to another. Origin must be Signed.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsTransfer(
  args: AssetsTransferArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'transfer',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsTransferAction = CTAtomicActionGeneric<
  ActionType.AssetsTransfer,
  AssetsTransferArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to move some assets from the sender account to another, keeping the sender account alive.
 */
export interface AssetsTransferKeepAliveArgs extends Args {
  /**
   *  The identifier of the asset to have some amount transferred.
   */
  id: BlockchainGenericId;
  /**
   *  The account to be credited.
   */
  target: BlockchainGenericAddress;
  /**
   *  The amount by which the sender's balance of assets should be reduced and `target`'s balance increased. The amount actually transferred may be slightly greater in the case that the transfer would otherwise take the sender balance above zero but below the minimum balance. Must be greater than zero.
   */
  amount: BlockchainGenericBalance;
};

/**
 * Move some assets from the sender account to another, keeping the sender account alive. Origin must be Signed.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsTransferKeepAlive(
  args: AssetsTransferKeepAliveArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'transfer_keep_alive',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsTransferKeepAliveAction = CTAtomicActionGeneric<
  ActionType.AssetsTransferKeepAlive,
  AssetsTransferKeepAliveArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to change the Owner of an asset.
 */
export interface AssetsTransferOwnershipArgs extends Args {
  /**
   *  The identifier of the asset.
   */
  id: BlockchainGenericId;
  /**
   *  The new Owner of this asset.
   */
  owner: BlockchainGenericAddress;
};

/**
 * Change the Owner of an asset. Origin must be Signed and the sender should be the Owner of the asset `id`.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsTransferOwnership(
  args: AssetsTransferOwnershipArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'transfer_ownership',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsTransferOwnershipAction = CTAtomicActionGeneric<
  ActionType.AssetsTransferOwnership,
  AssetsTransferOwnershipArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to transfer the entire transferable balance from the caller account.
 */
export interface BalancesTransferAllArgs extends Args {
  /**
   *  The recipient of the transfer.
   */
  dest: BlockchainGenericAddress;
  keepAlive: boolean;
};

/**
 * Transfer the entire transferable balance from the caller account. NOTE: This function only attempts to transfer _transferable_ balances. This means that any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be transferred by this function. To ensure that this function results in a killed account, you might need to prepare the account by removing any reference counters, storage deposits, etc... The dispatch origin of this call must be Signed.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function balancesTransferAll(
  args: BalancesTransferAllArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'transfer_all',
        pallet: 'balances',
      },
      ...info,
    },
    options
  );
}

export type BalancesTransferAllAction = CTAtomicActionGeneric<
  ActionType.BalancesTransferAll,
  BalancesTransferAllArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to transfer some liquid free balance to another account.
 */
export interface BalancesTransferAllowDeathArgs extends Args {
  dest: BlockchainGenericAddress;
  value: BlockchainGenericBalance;
};

/**
 * Transfer some liquid free balance to another account. `transfer_allow_death` will set the `FreeBalance` of the sender and receiver. If the sender's account is below the existential deposit as a result of the transfer, the account will be reaped. The dispatch origin for this call must be `Signed` by the transactor.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function balancesTransferAllowDeath(
  args: BalancesTransferAllowDeathArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'transfer_allow_death',
        pallet: 'balances',
      },
      ...info,
    },
    options
  );
}

export type BalancesTransferAllowDeathAction = CTAtomicActionGeneric<
  ActionType.BalancesTransferAllowDeath,
  BalancesTransferAllowDeathArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to same as the [`transfer_allow_death`] call, but with a check that the transfer will not
 */
export interface BalancesTransferKeepAliveArgs extends Args {
  dest: BlockchainGenericAddress;
  value: BlockchainGenericBalance;
};

/**
 * Same as the [`transfer_allow_death`] call, but with a check that the transfer will not kill the origin account. 99% of the time you want [`transfer_allow_death`] instead. [`transfer_allow_death`]: struct.Pallet.html#method.transfer
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function balancesTransferKeepAlive(
  args: BalancesTransferKeepAliveArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'transfer_keep_alive',
        pallet: 'balances',
      },
      ...info,
    },
    options
  );
}

export type BalancesTransferKeepAliveAction = CTAtomicActionGeneric<
  ActionType.BalancesTransferKeepAlive,
  BalancesTransferKeepAliveArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to destroy a single item.
 */
export interface NftsBurnItemArgs extends Args {
  /**
   *  The collection of the item to be burned.
   */
  collection: BlockchainGenericId;
  /**
   *  The item to be burned.
   */
  item: BlockchainGenericId;
};

/**
 * Destroy a single item. The origin must conform to `ForceOrigin` or must be Signed and the signing account must be the owner of the `item`.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsBurn(
  args: NftsBurnItemArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'burn',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsBurnItemAction = CTAtomicActionGeneric<
  ActionType.NftsBurnItem,
  NftsBurnItemArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to clear the metadata for a collection.
 */
export interface NftsClearCollectionMetadataArgs extends Args {
  /**
   *  The identifier of the collection whose metadata to clear.
   */
  collection: BlockchainGenericId;
};

/**
 * Clear the metadata for a collection. Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of the `collection`. Any deposit is freed for the collection's owner.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsClearCollectionMetadata(
  args: NftsClearCollectionMetadataArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'clear_collection_metadata',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsClearCollectionMetadataAction = CTAtomicActionGeneric<
  ActionType.NftsClearCollectionMetadata,
  NftsClearCollectionMetadataArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to clear the metadata for an item.
 */
export interface NftsClearItemMetadataArgs extends Args {
  /**
   *  The identifier of the collection whose item's metadata to clear.
   */
  collection: BlockchainGenericId;
  /**
   *  The identifier of the item whose metadata to clear.
   */
  item: BlockchainGenericId;
};

/**
 * Clear the metadata for an item. Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the `collection`. Any deposit is freed for the collection's owner.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsClearMetadata(
  args: NftsClearItemMetadataArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'clear_metadata',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsClearItemMetadataAction = CTAtomicActionGeneric<
  ActionType.NftsClearItemMetadata,
  NftsClearItemMetadataArgs
>;

/*---------------------------------------------------------------------------------- */

export interface NftsCreateCollectionArgs extends Args {
};

/**
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsCreate(
  args: NftsCreateCollectionArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'create',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsCreateCollectionAction = CTAtomicActionGeneric<
  ActionType.NftsCreateCollection,
  NftsCreateCollectionArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to destroy a collection of fungible items.
 */
export interface NftsDestroyCollectionArgs extends Args {
  /**
   *  The identifier of the collection to be destroyed.
   */
  collection: BlockchainGenericId;
  /**
   *  Information on the items minted in the collection. This must be correct.
   */
  witness: NftWitness;
};

/**
 * Destroy a collection of fungible items. The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the owner of the `collection`. NOTE: The collection must have 0 items to be destroyed.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsDestroy(
  args: NftsDestroyCollectionArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'destroy',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsDestroyCollectionAction = CTAtomicActionGeneric<
  ActionType.NftsDestroyCollection,
  NftsDestroyCollectionArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to disallow further unprivileged transfer of an item.
 */
export interface NftsLockItemTransferArgs extends Args {
  /**
   *  The collection of the item to be changed.
   */
  collection: BlockchainGenericId;
  /**
   *  The item to become non-transferable.
   */
  item: BlockchainGenericId;
};

/**
 * Disallow further unprivileged transfer of an item. Origin must be Signed and the sender should be the Freezer of the `collection`.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsLockItemTransfer(
  args: NftsLockItemTransferArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'lock_item_transfer',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsLockItemTransferAction = CTAtomicActionGeneric<
  ActionType.NftsLockItemTransfer,
  NftsLockItemTransferArgs
>;

/*---------------------------------------------------------------------------------- */

export interface NftsMintItemArgs extends Args {
  collection: BlockchainGenericId;
  item: BlockchainGenericId;
  mintTo: BlockchainGenericAddress;
};

/**
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsMint(
  args: NftsMintItemArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'mint',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsMintItemAction = CTAtomicActionGeneric<
  ActionType.NftsMintItem,
  NftsMintItemArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to set (or reset) the acceptance of ownership for a particular account.
 */
export interface NftsAcceptCollectionOwnershipArgs extends Args {
  /**
   *  The identifier of the collection whose ownership the signer is willing to accept, or if `None`, an indication that the signer is willing to accept no ownership transferal.
   */
  maybeCollection: number | null | undefined;
};

/**
 * Set (or reset) the acceptance of ownership for a particular account. Origin must be `Signed` and if `maybe_collection` is `Some`, then the signer must have a provider reference.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsSetAcceptOwnership(
  args: NftsAcceptCollectionOwnershipArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'set_accept_ownership',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsAcceptCollectionOwnershipAction = CTAtomicActionGeneric<
  ActionType.NftsAcceptCollectionOwnership,
  NftsAcceptCollectionOwnershipArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to set the metadata for a collection.
 */
export interface NftsSetCollectionMetadataArgs extends Args {
  /**
   *  The identifier of the item whose metadata to update.
   */
  collection: BlockchainGenericId;
  /**
   *  The general information of this item. Limited in length by `StringLimit`.
   */
  data: string;
};

/**
 * Set the metadata for a collection. Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of the `collection`. If the origin is `Signed`, then funds of signer are reserved according to the formula: `MetadataDepositBase + DepositPerByte * data.len` taking into account any already reserved funds.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsSetCollectionMetadata(
  args: NftsSetCollectionMetadataArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'set_collection_metadata',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsSetCollectionMetadataAction = CTAtomicActionGeneric<
  ActionType.NftsSetCollectionMetadata,
  NftsSetCollectionMetadataArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to set the metadata for an item.
 */
export interface NftsSetItemMetadataArgs extends Args {
  /**
   *  The identifier of the collection whose item's metadata to set.
   */
  collection: BlockchainGenericId;
  /**
   *  The identifier of the item whose metadata to set.
   */
  item: BlockchainGenericId;
  /**
   *  The general information of this item. Limited in length by `StringLimit`.
   */
  data: string;
};

/**
 * Set the metadata for an item. Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the `collection`. If the origin is Signed, then funds of signer are reserved according to the formula: `MetadataDepositBase + DepositPerByte * data.len` taking into account any already reserved funds.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsSetMetadata(
  args: NftsSetItemMetadataArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'set_metadata',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsSetItemMetadataAction = CTAtomicActionGeneric<
  ActionType.NftsSetItemMetadata,
  NftsSetItemMetadataArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to move an item from the sender account to another.
 */
export interface NftsTransferItemArgs extends Args {
  /**
   *  The collection of the item to be transferred.
   */
  collection: BlockchainGenericId;
  /**
   *  The item to be transferred.
   */
  item: BlockchainGenericId;
  /**
   *  The account to receive ownership of the item.
   */
  dest: BlockchainGenericAddress;
};

/**
 * Move an item from the sender account to another. Origin must be Signed and the signing account must be either:
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsTransfer(
  args: NftsTransferItemArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'transfer',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsTransferItemAction = CTAtomicActionGeneric<
  ActionType.NftsTransferItem,
  NftsTransferItemArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to change the Owner of a collection.
 */
export interface NftsTransferCollectionOwnershipArgs extends Args {
  /**
   *  The collection whose owner should be changed.
   */
  collection: BlockchainGenericId;
  newOwner: BlockchainGenericAddress;
};

/**
 * Change the Owner of a collection. Origin must be Signed and the sender should be the Owner of the `collection`.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsTransferOwnership(
  args: NftsTransferCollectionOwnershipArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'transfer_ownership',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsTransferCollectionOwnershipAction = CTAtomicActionGeneric<
  ActionType.NftsTransferCollectionOwnership,
  NftsTransferCollectionOwnershipArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to re-allow unprivileged transfer of an item.
 */
export interface NftsUnlockItemTransferArgs extends Args {
  /**
   *  The collection of the item to be changed.
   */
  collection: BlockchainGenericId;
  /**
   *  The item to become transferable.
   */
  item: BlockchainGenericId;
};

/**
 * Re-allow unprivileged transfer of an item. Origin must be Signed and the sender should be the Freezer of the `collection`.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsUnlockItemTransfer(
  args: NftsUnlockItemTransferArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'unlock_item_transfer',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsUnlockItemTransferAction = CTAtomicActionGeneric<
  ActionType.NftsUnlockItemTransfer,
  NftsUnlockItemTransferArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Represents a single action within an atomic operation.
 */
export type CTAtomicAction =
  | BalancesTransferAllowDeathAction
  | BalancesTransferKeepAliveAction
  | BalancesTransferAllAction
  | AssetsCreateAction
  | AssetsStartDestroyAction
  | AssetsDestroyAccountsAction
  | AssetsDestroyApprovalsAction
  | AssetsFinishDestroyAction
  | AssetsMintAction
  | AssetsBurnAction
  | AssetsTransferAction
  | AssetsTransferKeepAliveAction
  | AssetsForceTransferAction
  | AssetsFreezeAccountAction
  | AssetsThawAccountAction
  | AssetsFreezeAssetAction
  | AssetsThawAssetAction
  | AssetsTransferOwnershipAction
  | AssetsSetMetadataAction
  | AssetsSetMinBalanceAction
  | NftsCreateCollectionAction
  | NftsDestroyCollectionAction
  | NftsMintItemAction
  | NftsBurnItemAction
  | NftsTransferItemAction
  | NftsLockItemTransferAction
  | NftsUnlockItemTransferAction
  | NftsTransferCollectionOwnershipAction
  | NftsSetItemMetadataAction
  | NftsClearItemMetadataAction
  | NftsSetCollectionMetadataAction
  | NftsClearCollectionMetadataAction
  | NftsAcceptCollectionOwnershipAction
;

export function buildCTAction(action: CTAtomicAction, baseTxInfo: BaseTxInfo, options: OptionsWithMeta): CTAction {
  let unsigned: UnsignedTransaction;

  // Handle different action types
  switch (action.actionType) {
    case ActionType.BalancesTransferAllowDeath: {
      unsigned = balancesTransferAllowDeath(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.BalancesTransferKeepAlive: {
      unsigned = balancesTransferKeepAlive(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.BalancesTransferAll: {
      unsigned = balancesTransferAll(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsCreate: {
      unsigned = assetsCreate(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsStartDestroy: {
      unsigned = assetsStartDestroy(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsDestroyAccounts: {
      unsigned = assetsDestroyAccounts(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsDestroyApprovals: {
      unsigned = assetsDestroyApprovals(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsFinishDestroy: {
      unsigned = assetsFinishDestroy(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsMint: {
      unsigned = assetsMint(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsBurn: {
      unsigned = assetsBurn(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsTransfer: {
      unsigned = assetsTransfer(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsTransferKeepAlive: {
      unsigned = assetsTransferKeepAlive(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsForceTransfer: {
      unsigned = assetsForceTransfer(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsFreezeAccount: {
      unsigned = assetsFreeze(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsThawAccount: {
      unsigned = assetsThaw(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsFreezeAsset: {
      unsigned = assetsFreezeAsset(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsThawAsset: {
      unsigned = assetsThawAsset(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsTransferOwnership: {
      unsigned = assetsTransferOwnership(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsSetMetadata: {
      unsigned = assetsSetMetadata(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsSetMinBalance: {
      unsigned = assetsSetMinBalance(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.NftsCreateCollection: {
      unsigned = nftsCreate(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.NftsDestroyCollection: {
      unsigned = nftsDestroy(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.NftsMintItem: {
      unsigned = nftsMint(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.NftsBurnItem: {
      unsigned = nftsBurn(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.NftsTransferItem: {
      unsigned = nftsTransfer(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.NftsLockItemTransfer: {
      unsigned = nftsLockItemTransfer(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.NftsUnlockItemTransfer: {
      unsigned = nftsUnlockItemTransfer(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.NftsTransferCollectionOwnership: {
      unsigned = nftsTransferOwnership(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.NftsSetItemMetadata: {
      unsigned = nftsSetMetadata(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.NftsClearItemMetadata: {
      unsigned = nftsClearMetadata(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.NftsSetCollectionMetadata: {
      unsigned = nftsSetCollectionMetadata(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.NftsClearCollectionMetadata: {
      unsigned = nftsClearCollectionMetadata(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.NftsAcceptCollectionOwnership: {
      unsigned = nftsSetAcceptOwnership(action.arguments, baseTxInfo, options);
      break;
    }

    default:
      throw new Error('CT action has no "actionType"');
  }

  const actionTxType: CTAction = [action.origin, unsigned.method];

  return actionTxType;
}