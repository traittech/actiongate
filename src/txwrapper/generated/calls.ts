// Auto-generated, do not edit
/* eslint-disable */

import { z } from 'zod';

import { defineMethod } from '@substrate/txwrapper-core';

import type { Args, BaseTxInfo, OptionsWithMeta, TxInfo, TxMethod, UnsignedTransaction } from '@substrate/txwrapper-core';

import type {
  BlockchainGenericAccount,
  BlockchainGenericBalance,
  BlockchainGenericBoolean,
  BlockchainGenericId,
  BlockchainGenericText,
  CTAtomicActionGeneric,
  CTAtomicActions,
  NftWitness,
} from '../../types/api';

import { ActionType } from '../../types/api/actions';

import * as schema from '../../validator/schemas';

export function constructUnsignedTransaction(
  pallet: string,
  name: string,
  args: Args,
  baseTxInfo: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  const txMethod: TxMethod = { args, name, pallet };
  const txInfo: TxInfo = { method: txMethod, ...baseTxInfo };

  return defineMethod(txInfo, options);
}

/**
 * Arguments required to Submit a Clearing transaction.
 *
 * `appAgentId`
 *
 * `atomics`
 */
export interface AppTransactionsSubmitClearingTransactionArgs extends Args {
  appAgentId: BlockchainGenericId;
  atomics: CTAtomicActions;
};

const AppTransactionsSubmitClearingTransactionArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
  atomics: schema.CTAtomicActionsSchema,
});

/**
 * @name appTransactionsSubmitClearingTransaction
 * @summary Submit a Clearing transaction.
 * @description CT consists of a number of Atomics. Each Atomic consists of a number of Actions. Atomics are executed atomically - if an action within an atomic fails, then the entire atomic is no-op. Atomics within a CT are processed independently of each other. In case of errors, method takes additional fee from admin that submitted СT (origin).
 * @param args - The arguments of the transaction. {@link AppTransactionsSubmitClearingTransactionArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appTransactionsSubmitClearingTransaction(
  args: AppTransactionsSubmitClearingTransactionArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = AppTransactionsSubmitClearingTransactionArgsSchema.parse(args);

  return constructUnsignedTransaction('appTransactions', 'submitClearingTransaction', validArgs, info, options);
}

export type AppTransactionsSubmitClearingTransactionAction = CTAtomicActionGeneric<
  ActionType.AppTransactionsSubmitClearingTransaction,
  AppTransactionsSubmitClearingTransactionArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
 *
 * `id` - The identifier of the asset to have some amount burned.
 *
 * `who` - The account to be debited from.
 *
 * `amount` - The maximum amount by which `who`'s balance should be reduced.
 */
export interface AssetsBurnArgs extends Args {
  /**
   *  The identifier of the asset to have some amount burned.
   */
  id: BlockchainGenericId;
  /**
   *  The account to be debited from.
   */
  who: BlockchainGenericAccount;
  /**
   *  The maximum amount by which `who`'s balance should be reduced.
   */
  amount: BlockchainGenericBalance;
};

const AssetsBurnArgsSchema = z.object({
  id: schema.BlockchainGenericIdSchema,
  who: schema.BlockchainGenericAccountSchema,
  amount: schema.BlockchainGenericBalanceSchema,
});

/**
 * @name assetsBurn
 * @summary Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
 * @description Origin must be Signed and the sender should be the Manager of the asset `id`. Bails with `NoAccount` if the `who` is already dead.
 * @param args - The arguments of the transaction. {@link AssetsBurnArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function assetsBurn(
  args: AssetsBurnArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = AssetsBurnArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'burn', validArgs, info, options);
}

export type AssetsBurnAction = CTAtomicActionGeneric<
  ActionType.AssetsBurn,
  AssetsBurnArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 *
 * `minBalance`
 */
export interface AssetsCreateArgs extends Args {
  minBalance: BlockchainGenericBalance;
};

const AssetsCreateArgsSchema = z.object({
  minBalance: schema.BlockchainGenericBalanceSchema,
});

/**
 * @name assetsCreate
 * @param args - The arguments of the transaction. {@link AssetsCreateArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function assetsCreate(
  args: AssetsCreateArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = AssetsCreateArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'create', validArgs, info, options);
}

export type AssetsCreateAction = CTAtomicActionGeneric<
  ActionType.AssetsCreate,
  AssetsCreateArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Destroy all accounts associated with a given asset.
 *
 * `id` - The identifier of the asset to be destroyed. This must identify an existing asset.
 */
export interface AssetsDestroyAccountsArgs extends Args {
  /**
   *  The identifier of the asset to be destroyed. This must identify an existing asset.
   */
  id: BlockchainGenericId;
};

const AssetsDestroyAccountsArgsSchema = z.object({
  id: schema.BlockchainGenericIdSchema,
});

/**
 * @name assetsDestroyAccounts
 * @summary Destroy all accounts associated with a given asset.
 * @description `destroy_accounts` should only be called after `start_destroy` has been called, and the asset is in a `Destroying` state. Due to weight restrictions, this function may need to be called multiple times to fully destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time.
 * @param args - The arguments of the transaction. {@link AssetsDestroyAccountsArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function assetsDestroyAccounts(
  args: AssetsDestroyAccountsArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = AssetsDestroyAccountsArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'destroyAccounts', validArgs, info, options);
}

export type AssetsDestroyAccountsAction = CTAtomicActionGeneric<
  ActionType.AssetsDestroyAccounts,
  AssetsDestroyAccountsArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit).
 *
 * `id` - The identifier of the asset to be destroyed. This must identify an existing asset.
 */
export interface AssetsDestroyApprovalsArgs extends Args {
  /**
   *  The identifier of the asset to be destroyed. This must identify an existing asset.
   */
  id: BlockchainGenericId;
};

const AssetsDestroyApprovalsArgsSchema = z.object({
  id: schema.BlockchainGenericIdSchema,
});

/**
 * @name assetsDestroyApprovals
 * @summary Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit).
 * @description `destroy_approvals` should only be called after `start_destroy` has been called, and the asset is in a `Destroying` state. Due to weight restrictions, this function may need to be called multiple times to fully destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time.
 * @param args - The arguments of the transaction. {@link AssetsDestroyApprovalsArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function assetsDestroyApprovals(
  args: AssetsDestroyApprovalsArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = AssetsDestroyApprovalsArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'destroyApprovals', validArgs, info, options);
}

export type AssetsDestroyApprovalsAction = CTAtomicActionGeneric<
  ActionType.AssetsDestroyApprovals,
  AssetsDestroyApprovalsArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Complete destroying asset and unreserve currency.
 *
 * `id` - The identifier of the asset to be destroyed. This must identify an existing asset.
 */
export interface AssetsFinishDestroyArgs extends Args {
  /**
   *  The identifier of the asset to be destroyed. This must identify an existing asset.
   */
  id: BlockchainGenericId;
};

const AssetsFinishDestroyArgsSchema = z.object({
  id: schema.BlockchainGenericIdSchema,
});

/**
 * @name assetsFinishDestroy
 * @summary Complete destroying asset and unreserve currency.
 * @description `finish_destroy` should only be called after `start_destroy` has been called, and the asset is in a `Destroying` state. All accounts or approvals should be destroyed before hand.
 * @param args - The arguments of the transaction. {@link AssetsFinishDestroyArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function assetsFinishDestroy(
  args: AssetsFinishDestroyArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = AssetsFinishDestroyArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'finishDestroy', validArgs, info, options);
}

export type AssetsFinishDestroyAction = CTAtomicActionGeneric<
  ActionType.AssetsFinishDestroy,
  AssetsFinishDestroyArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Move some assets from one account to another.
 *
 * `id` - The identifier of the asset to have some amount transferred.
 *
 * `source` - The account to be debited.
 *
 * `dest` - The account to be credited.
 *
 * `amount` - The amount by which the `source`'s balance of assets should be reduced and `dest`'s balance increased. The amount actually transferred may be slightly greater in the case that the transfer would otherwise take the `source` balance above zero but below the minimum balance. Must be greater than zero.
 */
export interface AssetsForceTransferArgs extends Args {
  /**
   *  The identifier of the asset to have some amount transferred.
   */
  id: BlockchainGenericId;
  /**
   *  The account to be debited.
   */
  source: BlockchainGenericAccount;
  /**
   *  The account to be credited.
   */
  dest: BlockchainGenericAccount;
  /**
   *  The amount by which the `source`'s balance of assets should be reduced and `dest`'s balance increased. The amount actually transferred may be slightly greater in the case that the transfer would otherwise take the `source` balance above zero but below the minimum balance. Must be greater than zero.
   */
  amount: BlockchainGenericBalance;
};

const AssetsForceTransferArgsSchema = z.object({
  id: schema.BlockchainGenericIdSchema,
  source: schema.BlockchainGenericAccountSchema,
  dest: schema.BlockchainGenericAccountSchema,
  amount: schema.BlockchainGenericBalanceSchema,
});

/**
 * @name assetsForceTransfer
 * @summary Move some assets from one account to another.
 * @description Origin must be Signed and the sender should be the Admin of the asset `id`.
 * @param args - The arguments of the transaction. {@link AssetsForceTransferArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function assetsForceTransfer(
  args: AssetsForceTransferArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = AssetsForceTransferArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'forceTransfer', validArgs, info, options);
}

export type AssetsForceTransferAction = CTAtomicActionGeneric<
  ActionType.AssetsForceTransfer,
  AssetsForceTransferArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Disallow further unprivileged transfers of an asset `id` from an account `who`. `who`
 *
 * `id` - The identifier of the asset to be frozen.
 *
 * `who` - The account to be frozen.
 */
export interface AssetsFreezeAccountArgs extends Args {
  /**
   *  The identifier of the asset to be frozen.
   */
  id: BlockchainGenericId;
  /**
   *  The account to be frozen.
   */
  who: BlockchainGenericAccount;
};

const AssetsFreezeAccountArgsSchema = z.object({
  id: schema.BlockchainGenericIdSchema,
  who: schema.BlockchainGenericAccountSchema,
});

/**
 * @name assetsFreeze
 * @summary Disallow further unprivileged transfers of an asset `id` from an account `who`. `who`
 * @description must already exist as an entry in `Account`s of the asset. If you want to freeze an account that does not have an entry, use `touch_other` first. Origin must be Signed and the sender should be the Freezer of the asset `id`.
 * @param args - The arguments of the transaction. {@link AssetsFreezeAccountArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function assetsFreeze(
  args: AssetsFreezeAccountArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = AssetsFreezeAccountArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'freeze', validArgs, info, options);
}

export type AssetsFreezeAccountAction = CTAtomicActionGeneric<
  ActionType.AssetsFreezeAccount,
  AssetsFreezeAccountArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Disallow further unprivileged transfers for the asset class.
 *
 * `id` - The identifier of the asset to be frozen.
 */
export interface AssetsFreezeAssetArgs extends Args {
  /**
   *  The identifier of the asset to be frozen.
   */
  id: BlockchainGenericId;
};

const AssetsFreezeAssetArgsSchema = z.object({
  id: schema.BlockchainGenericIdSchema,
});

/**
 * @name assetsFreezeAsset
 * @summary Disallow further unprivileged transfers for the asset class.
 * @description Origin must be Signed and the sender should be the Freezer of the asset `id`.
 * @param args - The arguments of the transaction. {@link AssetsFreezeAssetArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function assetsFreezeAsset(
  args: AssetsFreezeAssetArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = AssetsFreezeAssetArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'freezeAsset', validArgs, info, options);
}

export type AssetsFreezeAssetAction = CTAtomicActionGeneric<
  ActionType.AssetsFreezeAsset,
  AssetsFreezeAssetArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Mint assets of a particular class.
 *
 * `id` - The identifier of the asset to have some amount minted.
 *
 * `beneficiary` - The account to be credited with the minted assets.
 *
 * `amount` - The amount of the asset to be minted.
 */
export interface AssetsMintArgs extends Args {
  /**
   *  The identifier of the asset to have some amount minted.
   */
  id: BlockchainGenericId;
  /**
   *  The account to be credited with the minted assets.
   */
  beneficiary: BlockchainGenericAccount;
  /**
   *  The amount of the asset to be minted.
   */
  amount: BlockchainGenericBalance;
};

const AssetsMintArgsSchema = z.object({
  id: schema.BlockchainGenericIdSchema,
  beneficiary: schema.BlockchainGenericAccountSchema,
  amount: schema.BlockchainGenericBalanceSchema,
});

/**
 * @name assetsMint
 * @summary Mint assets of a particular class.
 * @description The origin must be Signed and the sender must be the Issuer of the asset `id`.
 * @param args - The arguments of the transaction. {@link AssetsMintArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function assetsMint(
  args: AssetsMintArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = AssetsMintArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'mint', validArgs, info, options);
}

export type AssetsMintAction = CTAtomicActionGeneric<
  ActionType.AssetsMint,
  AssetsMintArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Set the raw metadata for an asset.
 *
 * `id` - The identifier of the asset to update.
 *
 * `data` - The data of metadata. Limited in length by `StringLimit`.
 */
export interface AssetsSetMetadataArgs extends Args {
  /**
   *  The identifier of the asset to update.
   */
  id: BlockchainGenericId;
  /**
   *  The data of metadata. Limited in length by `StringLimit`.
   */
  data: BlockchainGenericText;
};

const AssetsSetMetadataArgsSchema = z.object({
  id: schema.BlockchainGenericIdSchema,
  data: schema.BlockchainGenericTextSchema,
});

/**
 * @name assetsSetMetadata
 * @summary Set the raw metadata for an asset.
 * @description Origin must be Signed and the sender should be the Owner of the asset `id`. Funds of sender are reserved according to the formula: `MetadataDepositBase + MetadataDepositPerByte * (data.len)` taking into account any already reserved funds.
 * @param args - The arguments of the transaction. {@link AssetsSetMetadataArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function assetsSetMetadata(
  args: AssetsSetMetadataArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = AssetsSetMetadataArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'setMetadata', validArgs, info, options);
}

export type AssetsSetMetadataAction = CTAtomicActionGeneric<
  ActionType.AssetsSetMetadata,
  AssetsSetMetadataArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Sets the minimum balance of an asset.
 *
 * `id` - The identifier of the asset.
 *
 * `minBalance` - The new value of `min_balance`.
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

const AssetsSetMinBalanceArgsSchema = z.object({
  id: schema.BlockchainGenericIdSchema,
  minBalance: schema.BlockchainGenericBalanceSchema,
});

/**
 * @name assetsSetMinBalance
 * @summary Sets the minimum balance of an asset.
 * @description Only works if there aren't any accounts that are holding the asset or if the new value of `min_balance` is less than the old one. Origin must be Signed and the sender has to be the Owner of the asset `id`.
 * @param args - The arguments of the transaction. {@link AssetsSetMinBalanceArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function assetsSetMinBalance(
  args: AssetsSetMinBalanceArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = AssetsSetMinBalanceArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'setMinBalance', validArgs, info, options);
}

export type AssetsSetMinBalanceAction = CTAtomicActionGeneric<
  ActionType.AssetsSetMinBalance,
  AssetsSetMinBalanceArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Start the process of destroying a fungible asset class.
 *
 * `id` - The identifier of the asset to be destroyed. This must identify an existing asset.
 */
export interface AssetsStartDestroyArgs extends Args {
  /**
   *  The identifier of the asset to be destroyed. This must identify an existing asset.
   */
  id: BlockchainGenericId;
};

const AssetsStartDestroyArgsSchema = z.object({
  id: schema.BlockchainGenericIdSchema,
});

/**
 * @name assetsStartDestroy
 * @summary Start the process of destroying a fungible asset class.
 * @description `start_destroy` is the first in a series of extrinsics that should be called, to allow destruction of an asset class. The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`.
 * @param args - The arguments of the transaction. {@link AssetsStartDestroyArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function assetsStartDestroy(
  args: AssetsStartDestroyArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = AssetsStartDestroyArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'startDestroy', validArgs, info, options);
}

export type AssetsStartDestroyAction = CTAtomicActionGeneric<
  ActionType.AssetsStartDestroy,
  AssetsStartDestroyArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Allow unprivileged transfers to and from an account again.
 *
 * `id` - The identifier of the asset to be frozen.
 *
 * `who` - The account to be unfrozen.
 */
export interface AssetsThawAccountArgs extends Args {
  /**
   *  The identifier of the asset to be frozen.
   */
  id: BlockchainGenericId;
  /**
   *  The account to be unfrozen.
   */
  who: BlockchainGenericAccount;
};

const AssetsThawAccountArgsSchema = z.object({
  id: schema.BlockchainGenericIdSchema,
  who: schema.BlockchainGenericAccountSchema,
});

/**
 * @name assetsThaw
 * @summary Allow unprivileged transfers to and from an account again.
 * @description Origin must be Signed and the sender should be the Admin of the asset `id`.
 * @param args - The arguments of the transaction. {@link AssetsThawAccountArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function assetsThaw(
  args: AssetsThawAccountArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = AssetsThawAccountArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'thaw', validArgs, info, options);
}

export type AssetsThawAccountAction = CTAtomicActionGeneric<
  ActionType.AssetsThawAccount,
  AssetsThawAccountArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Allow unprivileged transfers for the asset again.
 *
 * `id` - The identifier of the asset to be thawed.
 */
export interface AssetsThawAssetArgs extends Args {
  /**
   *  The identifier of the asset to be thawed.
   */
  id: BlockchainGenericId;
};

const AssetsThawAssetArgsSchema = z.object({
  id: schema.BlockchainGenericIdSchema,
});

/**
 * @name assetsThawAsset
 * @summary Allow unprivileged transfers for the asset again.
 * @description Origin must be Signed and the sender should be the Admin of the asset `id`.
 * @param args - The arguments of the transaction. {@link AssetsThawAssetArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function assetsThawAsset(
  args: AssetsThawAssetArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = AssetsThawAssetArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'thawAsset', validArgs, info, options);
}

export type AssetsThawAssetAction = CTAtomicActionGeneric<
  ActionType.AssetsThawAsset,
  AssetsThawAssetArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Move some assets from the sender account to another.
 *
 * `id` - The identifier of the asset to have some amount transferred.
 *
 * `target` - The account to be credited.
 *
 * `amount` - The amount by which the sender's balance of assets should be reduced and `target`'s balance increased. The amount actually transferred may be slightly greater in the case that the transfer would otherwise take the sender balance above zero but below the minimum balance. Must be greater than zero.
 */
export interface AssetsTransferArgs extends Args {
  /**
   *  The identifier of the asset to have some amount transferred.
   */
  id: BlockchainGenericId;
  /**
   *  The account to be credited.
   */
  target: BlockchainGenericAccount;
  /**
   *  The amount by which the sender's balance of assets should be reduced and `target`'s balance increased. The amount actually transferred may be slightly greater in the case that the transfer would otherwise take the sender balance above zero but below the minimum balance. Must be greater than zero.
   */
  amount: BlockchainGenericBalance;
};

const AssetsTransferArgsSchema = z.object({
  id: schema.BlockchainGenericIdSchema,
  target: schema.BlockchainGenericAccountSchema,
  amount: schema.BlockchainGenericBalanceSchema,
});

/**
 * @name assetsTransfer
 * @summary Move some assets from the sender account to another.
 * @description Origin must be Signed.
 * @param args - The arguments of the transaction. {@link AssetsTransferArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function assetsTransfer(
  args: AssetsTransferArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = AssetsTransferArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'transfer', validArgs, info, options);
}

export type AssetsTransferAction = CTAtomicActionGeneric<
  ActionType.AssetsTransfer,
  AssetsTransferArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Move some assets from the sender account to another, keeping the sender account alive.
 *
 * `id` - The identifier of the asset to have some amount transferred.
 *
 * `target` - The account to be credited.
 *
 * `amount` - The amount by which the sender's balance of assets should be reduced and `target`'s balance increased. The amount actually transferred may be slightly greater in the case that the transfer would otherwise take the sender balance above zero but below the minimum balance. Must be greater than zero.
 */
export interface AssetsTransferKeepAliveArgs extends Args {
  /**
   *  The identifier of the asset to have some amount transferred.
   */
  id: BlockchainGenericId;
  /**
   *  The account to be credited.
   */
  target: BlockchainGenericAccount;
  /**
   *  The amount by which the sender's balance of assets should be reduced and `target`'s balance increased. The amount actually transferred may be slightly greater in the case that the transfer would otherwise take the sender balance above zero but below the minimum balance. Must be greater than zero.
   */
  amount: BlockchainGenericBalance;
};

const AssetsTransferKeepAliveArgsSchema = z.object({
  id: schema.BlockchainGenericIdSchema,
  target: schema.BlockchainGenericAccountSchema,
  amount: schema.BlockchainGenericBalanceSchema,
});

/**
 * @name assetsTransferKeepAlive
 * @summary Move some assets from the sender account to another, keeping the sender account alive.
 * @description Origin must be Signed.
 * @param args - The arguments of the transaction. {@link AssetsTransferKeepAliveArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function assetsTransferKeepAlive(
  args: AssetsTransferKeepAliveArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = AssetsTransferKeepAliveArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'transferKeepAlive', validArgs, info, options);
}

export type AssetsTransferKeepAliveAction = CTAtomicActionGeneric<
  ActionType.AssetsTransferKeepAlive,
  AssetsTransferKeepAliveArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Change the Owner of an asset.
 *
 * `id` - The identifier of the asset.
 *
 * `owner` - The new Owner of this asset.
 */
export interface AssetsTransferOwnershipArgs extends Args {
  /**
   *  The identifier of the asset.
   */
  id: BlockchainGenericId;
  /**
   *  The new Owner of this asset.
   */
  owner: BlockchainGenericAccount;
};

const AssetsTransferOwnershipArgsSchema = z.object({
  id: schema.BlockchainGenericIdSchema,
  owner: schema.BlockchainGenericAccountSchema,
});

/**
 * @name assetsTransferOwnership
 * @summary Change the Owner of an asset.
 * @description Origin must be Signed and the sender should be the Owner of the asset `id`.
 * @param args - The arguments of the transaction. {@link AssetsTransferOwnershipArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function assetsTransferOwnership(
  args: AssetsTransferOwnershipArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = AssetsTransferOwnershipArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'transferOwnership', validArgs, info, options);
}

export type AssetsTransferOwnershipAction = CTAtomicActionGeneric<
  ActionType.AssetsTransferOwnership,
  AssetsTransferOwnershipArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Transfer the entire transferable balance from the caller account.
 *
 * `dest` - The recipient of the transfer.
 *
 * `keepAlive`
 */
export interface BalancesTransferAllArgs extends Args {
  /**
   *  The recipient of the transfer.
   */
  dest: BlockchainGenericAccount;
  keepAlive: BlockchainGenericBoolean;
};

const BalancesTransferAllArgsSchema = z.object({
  dest: schema.BlockchainGenericAccountSchema,
  keepAlive: schema.BlockchainGenericBooleanSchema,
});

/**
 * @name balancesTransferAll
 * @summary Transfer the entire transferable balance from the caller account.
 * @description NOTE: This function only attempts to transfer _transferable_ balances. This means that any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be transferred by this function. To ensure that this function results in a killed account, you might need to prepare the account by removing any reference counters, storage deposits, etc... The dispatch origin of this call must be Signed.
 * @param args - The arguments of the transaction. {@link BalancesTransferAllArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function balancesTransferAll(
  args: BalancesTransferAllArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = BalancesTransferAllArgsSchema.parse(args);

  return constructUnsignedTransaction('balances', 'transferAll', validArgs, info, options);
}

export type BalancesTransferAllAction = CTAtomicActionGeneric<
  ActionType.BalancesTransferAll,
  BalancesTransferAllArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Transfer some liquid free balance to another account.
 *
 * `dest`
 *
 * `value`
 */
export interface BalancesTransferAllowDeathArgs extends Args {
  dest: BlockchainGenericAccount;
  value: BlockchainGenericBalance;
};

const BalancesTransferAllowDeathArgsSchema = z.object({
  dest: schema.BlockchainGenericAccountSchema,
  value: schema.BlockchainGenericBalanceSchema,
});

/**
 * @name balancesTransferAllowDeath
 * @summary Transfer some liquid free balance to another account.
 * @description `transfer_allow_death` will set the `FreeBalance` of the sender and receiver. If the sender's account is below the existential deposit as a result of the transfer, the account will be reaped. The dispatch origin for this call must be `Signed` by the transactor.
 * @param args - The arguments of the transaction. {@link BalancesTransferAllowDeathArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function balancesTransferAllowDeath(
  args: BalancesTransferAllowDeathArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = BalancesTransferAllowDeathArgsSchema.parse(args);

  return constructUnsignedTransaction('balances', 'transferAllowDeath', validArgs, info, options);
}

export type BalancesTransferAllowDeathAction = CTAtomicActionGeneric<
  ActionType.BalancesTransferAllowDeath,
  BalancesTransferAllowDeathArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Same as the [`transfer_allow_death`] call, but with a check that the transfer will not
 *
 * `dest`
 *
 * `value`
 */
export interface BalancesTransferKeepAliveArgs extends Args {
  dest: BlockchainGenericAccount;
  value: BlockchainGenericBalance;
};

const BalancesTransferKeepAliveArgsSchema = z.object({
  dest: schema.BlockchainGenericAccountSchema,
  value: schema.BlockchainGenericBalanceSchema,
});

/**
 * @name balancesTransferKeepAlive
 * @summary Same as the [`transfer_allow_death`] call, but with a check that the transfer will not
 * @description kill the origin account. 99% of the time you want [`transfer_allow_death`] instead. [`transfer_allow_death`]: struct.Pallet.html#method.transfer
 * @param args - The arguments of the transaction. {@link BalancesTransferKeepAliveArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function balancesTransferKeepAlive(
  args: BalancesTransferKeepAliveArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = BalancesTransferKeepAliveArgsSchema.parse(args);

  return constructUnsignedTransaction('balances', 'transferKeepAlive', validArgs, info, options);
}

export type BalancesTransferKeepAliveAction = CTAtomicActionGeneric<
  ActionType.BalancesTransferKeepAlive,
  BalancesTransferKeepAliveArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Destroy a single item.
 *
 * `collection` - The collection of the item to be burned.
 *
 * `item` - The item to be burned.
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

const NftsBurnItemArgsSchema = z.object({
  collection: schema.BlockchainGenericIdSchema,
  item: schema.BlockchainGenericIdSchema,
});

/**
 * @name nftsBurn
 * @summary Destroy a single item.
 * @description The origin must conform to `ForceOrigin` or must be Signed and the signing account must be the owner of the `item`.
 * @param args - The arguments of the transaction. {@link NftsBurnItemArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function nftsBurn(
  args: NftsBurnItemArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = NftsBurnItemArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'burn', validArgs, info, options);
}

export type NftsBurnItemAction = CTAtomicActionGeneric<
  ActionType.NftsBurnItem,
  NftsBurnItemArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Clear the metadata for a collection.
 *
 * `collection` - The identifier of the collection whose metadata to clear.
 */
export interface NftsClearCollectionMetadataArgs extends Args {
  /**
   *  The identifier of the collection whose metadata to clear.
   */
  collection: BlockchainGenericId;
};

const NftsClearCollectionMetadataArgsSchema = z.object({
  collection: schema.BlockchainGenericIdSchema,
});

/**
 * @name nftsClearCollectionMetadata
 * @summary Clear the metadata for a collection.
 * @description Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of the `collection`. Any deposit is freed for the collection's owner.
 * @param args - The arguments of the transaction. {@link NftsClearCollectionMetadataArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function nftsClearCollectionMetadata(
  args: NftsClearCollectionMetadataArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = NftsClearCollectionMetadataArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'clearCollectionMetadata', validArgs, info, options);
}

export type NftsClearCollectionMetadataAction = CTAtomicActionGeneric<
  ActionType.NftsClearCollectionMetadata,
  NftsClearCollectionMetadataArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Clear the metadata for an item.
 *
 * `collection` - The identifier of the collection whose item's metadata to clear.
 *
 * `item` - The identifier of the item whose metadata to clear.
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

const NftsClearItemMetadataArgsSchema = z.object({
  collection: schema.BlockchainGenericIdSchema,
  item: schema.BlockchainGenericIdSchema,
});

/**
 * @name nftsClearMetadata
 * @summary Clear the metadata for an item.
 * @description Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the `collection`. Any deposit is freed for the collection's owner.
 * @param args - The arguments of the transaction. {@link NftsClearItemMetadataArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function nftsClearMetadata(
  args: NftsClearItemMetadataArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = NftsClearItemMetadataArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'clearMetadata', validArgs, info, options);
}

export type NftsClearItemMetadataAction = CTAtomicActionGeneric<
  ActionType.NftsClearItemMetadata,
  NftsClearItemMetadataArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 */
export interface NftsCreateCollectionArgs extends Args {
};

const NftsCreateCollectionArgsSchema = z.object({
});

/**
 * @name nftsCreate
 * @param args - The arguments of the transaction. {@link NftsCreateCollectionArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function nftsCreate(
  args: NftsCreateCollectionArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = NftsCreateCollectionArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'create', validArgs, info, options);
}

export type NftsCreateCollectionAction = CTAtomicActionGeneric<
  ActionType.NftsCreateCollection,
  NftsCreateCollectionArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Destroy a collection of fungible items.
 *
 * `collection` - The identifier of the collection to be destroyed.
 *
 * `witness` - Information on the items minted in the collection. This must be correct.
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

const NftsDestroyCollectionArgsSchema = z.object({
  collection: schema.BlockchainGenericIdSchema,
  witness: schema.NftWitnessSchema,
});

/**
 * @name nftsDestroy
 * @summary Destroy a collection of fungible items.
 * @description The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the owner of the `collection`. NOTE: The collection must have 0 items to be destroyed.
 * @param args - The arguments of the transaction. {@link NftsDestroyCollectionArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function nftsDestroy(
  args: NftsDestroyCollectionArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = NftsDestroyCollectionArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'destroy', validArgs, info, options);
}

export type NftsDestroyCollectionAction = CTAtomicActionGeneric<
  ActionType.NftsDestroyCollection,
  NftsDestroyCollectionArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Disallow further unprivileged transfer of an item.
 *
 * `collection` - The collection of the item to be changed.
 *
 * `item` - The item to become non-transferable.
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

const NftsLockItemTransferArgsSchema = z.object({
  collection: schema.BlockchainGenericIdSchema,
  item: schema.BlockchainGenericIdSchema,
});

/**
 * @name nftsLockItemTransfer
 * @summary Disallow further unprivileged transfer of an item.
 * @description Origin must be Signed and the sender should be the Freezer of the `collection`.
 * @param args - The arguments of the transaction. {@link NftsLockItemTransferArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function nftsLockItemTransfer(
  args: NftsLockItemTransferArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = NftsLockItemTransferArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'lockItemTransfer', validArgs, info, options);
}

export type NftsLockItemTransferAction = CTAtomicActionGeneric<
  ActionType.NftsLockItemTransfer,
  NftsLockItemTransferArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 *
 * `collection`
 *
 * `item`
 *
 * `mintTo`
 */
export interface NftsMintItemArgs extends Args {
  collection: BlockchainGenericId;
  item: BlockchainGenericId;
  mintTo: BlockchainGenericAccount;
};

const NftsMintItemArgsSchema = z.object({
  collection: schema.BlockchainGenericIdSchema,
  item: schema.BlockchainGenericIdSchema,
  mintTo: schema.BlockchainGenericAccountSchema,
});

/**
 * @name nftsMint
 * @param args - The arguments of the transaction. {@link NftsMintItemArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function nftsMint(
  args: NftsMintItemArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = NftsMintItemArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'mint', validArgs, info, options);
}

export type NftsMintItemAction = CTAtomicActionGeneric<
  ActionType.NftsMintItem,
  NftsMintItemArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Set (or reset) the acceptance of ownership for a particular account.
 *
 * `maybeCollection` - The identifier of the collection whose ownership the signer is willing to accept, or if `None`, an indication that the signer is willing to accept no ownership transferal.
 */
export interface NftsAcceptCollectionOwnershipArgs extends Args {
  /**
   *  The identifier of the collection whose ownership the signer is willing to accept, or if `None`, an indication that the signer is willing to accept no ownership transferal.
   */
  maybeCollection?: BlockchainGenericId;
};

const NftsAcceptCollectionOwnershipArgsSchema = z.object({
  maybeCollection: z.optional(schema.BlockchainGenericIdSchema),
});

/**
 * @name nftsSetAcceptOwnership
 * @summary Set (or reset) the acceptance of ownership for a particular account.
 * @description Origin must be `Signed` and if `maybe_collection` is `Some`, then the signer must have a provider reference.
 * @param args - The arguments of the transaction. {@link NftsAcceptCollectionOwnershipArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function nftsSetAcceptOwnership(
  args: NftsAcceptCollectionOwnershipArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = NftsAcceptCollectionOwnershipArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'setAcceptOwnership', validArgs, info, options);
}

export type NftsAcceptCollectionOwnershipAction = CTAtomicActionGeneric<
  ActionType.NftsAcceptCollectionOwnership,
  NftsAcceptCollectionOwnershipArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Set the metadata for a collection.
 *
 * `collection` - The identifier of the item whose metadata to update.
 *
 * `data` - The general information of this item. Limited in length by `StringLimit`.
 */
export interface NftsSetCollectionMetadataArgs extends Args {
  /**
   *  The identifier of the item whose metadata to update.
   */
  collection: BlockchainGenericId;
  /**
   *  The general information of this item. Limited in length by `StringLimit`.
   */
  data: BlockchainGenericText;
};

const NftsSetCollectionMetadataArgsSchema = z.object({
  collection: schema.BlockchainGenericIdSchema,
  data: schema.BlockchainGenericTextSchema,
});

/**
 * @name nftsSetCollectionMetadata
 * @summary Set the metadata for a collection.
 * @description Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of the `collection`. If the origin is `Signed`, then funds of signer are reserved according to the formula: `MetadataDepositBase + DepositPerByte * data.len` taking into account any already reserved funds.
 * @param args - The arguments of the transaction. {@link NftsSetCollectionMetadataArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function nftsSetCollectionMetadata(
  args: NftsSetCollectionMetadataArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = NftsSetCollectionMetadataArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'setCollectionMetadata', validArgs, info, options);
}

export type NftsSetCollectionMetadataAction = CTAtomicActionGeneric<
  ActionType.NftsSetCollectionMetadata,
  NftsSetCollectionMetadataArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Set the metadata for an item.
 *
 * `collection` - The identifier of the collection whose item's metadata to set.
 *
 * `item` - The identifier of the item whose metadata to set.
 *
 * `data` - The general information of this item. Limited in length by `StringLimit`.
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
  data: BlockchainGenericText;
};

const NftsSetItemMetadataArgsSchema = z.object({
  collection: schema.BlockchainGenericIdSchema,
  item: schema.BlockchainGenericIdSchema,
  data: schema.BlockchainGenericTextSchema,
});

/**
 * @name nftsSetMetadata
 * @summary Set the metadata for an item.
 * @description Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the `collection`. If the origin is Signed, then funds of signer are reserved according to the formula: `MetadataDepositBase + DepositPerByte * data.len` taking into account any already reserved funds.
 * @param args - The arguments of the transaction. {@link NftsSetItemMetadataArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function nftsSetMetadata(
  args: NftsSetItemMetadataArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = NftsSetItemMetadataArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'setMetadata', validArgs, info, options);
}

export type NftsSetItemMetadataAction = CTAtomicActionGeneric<
  ActionType.NftsSetItemMetadata,
  NftsSetItemMetadataArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Move an item from the sender account to another.
 *
 * `collection` - The collection of the item to be transferred.
 *
 * `item` - The item to be transferred.
 *
 * `dest` - The account to receive ownership of the item.
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
  dest: BlockchainGenericAccount;
};

const NftsTransferItemArgsSchema = z.object({
  collection: schema.BlockchainGenericIdSchema,
  item: schema.BlockchainGenericIdSchema,
  dest: schema.BlockchainGenericAccountSchema,
});

/**
 * @name nftsTransfer
 * @summary Move an item from the sender account to another.
 * @description Origin must be Signed and the signing account must be either:
 * @param args - The arguments of the transaction. {@link NftsTransferItemArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function nftsTransfer(
  args: NftsTransferItemArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = NftsTransferItemArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'transfer', validArgs, info, options);
}

export type NftsTransferItemAction = CTAtomicActionGeneric<
  ActionType.NftsTransferItem,
  NftsTransferItemArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Change the Owner of a collection.
 *
 * `collection` - The collection whose owner should be changed.
 *
 * `newOwner`
 */
export interface NftsTransferCollectionOwnershipArgs extends Args {
  /**
   *  The collection whose owner should be changed.
   */
  collection: BlockchainGenericId;
  newOwner: BlockchainGenericAccount;
};

const NftsTransferCollectionOwnershipArgsSchema = z.object({
  collection: schema.BlockchainGenericIdSchema,
  newOwner: schema.BlockchainGenericAccountSchema,
});

/**
 * @name nftsTransferOwnership
 * @summary Change the Owner of a collection.
 * @description Origin must be Signed and the sender should be the Owner of the `collection`.
 * @param args - The arguments of the transaction. {@link NftsTransferCollectionOwnershipArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function nftsTransferOwnership(
  args: NftsTransferCollectionOwnershipArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = NftsTransferCollectionOwnershipArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'transferOwnership', validArgs, info, options);
}

export type NftsTransferCollectionOwnershipAction = CTAtomicActionGeneric<
  ActionType.NftsTransferCollectionOwnership,
  NftsTransferCollectionOwnershipArgs
>;

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Re-allow unprivileged transfer of an item.
 *
 * `collection` - The collection of the item to be changed.
 *
 * `item` - The item to become transferable.
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

const NftsUnlockItemTransferArgsSchema = z.object({
  collection: schema.BlockchainGenericIdSchema,
  item: schema.BlockchainGenericIdSchema,
});

/**
 * @name nftsUnlockItemTransfer
 * @summary Re-allow unprivileged transfer of an item.
 * @description Origin must be Signed and the sender should be the Freezer of the `collection`.
 * @param args - The arguments of the transaction. {@link NftsUnlockItemTransferArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function nftsUnlockItemTransfer(
  args: NftsUnlockItemTransferArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = NftsUnlockItemTransferArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'unlockItemTransfer', validArgs, info, options);
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
  | AppTransactionsSubmitClearingTransactionAction
;

/**
 * Represents an action args
 */
export type ActionArgs = CTAtomicAction['arguments'];

/**
 * Builds an unsigned transaction based on the provided `ActionType`.
 *
 * @param actionType - transaction `ActionType`
 * @param args - The arguments for the extrinsic function.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 *
 * @throws If the transaction is unsupported.
 */
export function buildUnsignedTxFromActionType(
  actionType: ActionType,
  args: ActionArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  let unsigned: UnsignedTransaction;

  // Handle different action types
  switch (actionType) {
    case ActionType.BalancesTransferAllowDeath: {
      unsigned = balancesTransferAllowDeath(args as BalancesTransferAllowDeathArgs, info, options);
      break;
    }
    case ActionType.BalancesTransferKeepAlive: {
      unsigned = balancesTransferKeepAlive(args as BalancesTransferKeepAliveArgs, info, options);
      break;
    }
    case ActionType.BalancesTransferAll: {
      unsigned = balancesTransferAll(args as BalancesTransferAllArgs, info, options);
      break;
    }
    case ActionType.AssetsCreate: {
      unsigned = assetsCreate(args as AssetsCreateArgs, info, options);
      break;
    }
    case ActionType.AssetsStartDestroy: {
      unsigned = assetsStartDestroy(args as AssetsStartDestroyArgs, info, options);
      break;
    }
    case ActionType.AssetsDestroyAccounts: {
      unsigned = assetsDestroyAccounts(args as AssetsDestroyAccountsArgs, info, options);
      break;
    }
    case ActionType.AssetsDestroyApprovals: {
      unsigned = assetsDestroyApprovals(args as AssetsDestroyApprovalsArgs, info, options);
      break;
    }
    case ActionType.AssetsFinishDestroy: {
      unsigned = assetsFinishDestroy(args as AssetsFinishDestroyArgs, info, options);
      break;
    }
    case ActionType.AssetsMint: {
      unsigned = assetsMint(args as AssetsMintArgs, info, options);
      break;
    }
    case ActionType.AssetsBurn: {
      unsigned = assetsBurn(args as AssetsBurnArgs, info, options);
      break;
    }
    case ActionType.AssetsTransfer: {
      unsigned = assetsTransfer(args as AssetsTransferArgs, info, options);
      break;
    }
    case ActionType.AssetsTransferKeepAlive: {
      unsigned = assetsTransferKeepAlive(args as AssetsTransferKeepAliveArgs, info, options);
      break;
    }
    case ActionType.AssetsForceTransfer: {
      unsigned = assetsForceTransfer(args as AssetsForceTransferArgs, info, options);
      break;
    }
    case ActionType.AssetsFreezeAccount: {
      unsigned = assetsFreeze(args as AssetsFreezeAccountArgs, info, options);
      break;
    }
    case ActionType.AssetsThawAccount: {
      unsigned = assetsThaw(args as AssetsThawAccountArgs, info, options);
      break;
    }
    case ActionType.AssetsFreezeAsset: {
      unsigned = assetsFreezeAsset(args as AssetsFreezeAssetArgs, info, options);
      break;
    }
    case ActionType.AssetsThawAsset: {
      unsigned = assetsThawAsset(args as AssetsThawAssetArgs, info, options);
      break;
    }
    case ActionType.AssetsTransferOwnership: {
      unsigned = assetsTransferOwnership(args as AssetsTransferOwnershipArgs, info, options);
      break;
    }
    case ActionType.AssetsSetMetadata: {
      unsigned = assetsSetMetadata(args as AssetsSetMetadataArgs, info, options);
      break;
    }
    case ActionType.AssetsSetMinBalance: {
      unsigned = assetsSetMinBalance(args as AssetsSetMinBalanceArgs, info, options);
      break;
    }
    case ActionType.NftsCreateCollection: {
      unsigned = nftsCreate(args as NftsCreateCollectionArgs, info, options);
      break;
    }
    case ActionType.NftsDestroyCollection: {
      unsigned = nftsDestroy(args as NftsDestroyCollectionArgs, info, options);
      break;
    }
    case ActionType.NftsMintItem: {
      unsigned = nftsMint(args as NftsMintItemArgs, info, options);
      break;
    }
    case ActionType.NftsBurnItem: {
      unsigned = nftsBurn(args as NftsBurnItemArgs, info, options);
      break;
    }
    case ActionType.NftsTransferItem: {
      unsigned = nftsTransfer(args as NftsTransferItemArgs, info, options);
      break;
    }
    case ActionType.NftsLockItemTransfer: {
      unsigned = nftsLockItemTransfer(args as NftsLockItemTransferArgs, info, options);
      break;
    }
    case ActionType.NftsUnlockItemTransfer: {
      unsigned = nftsUnlockItemTransfer(args as NftsUnlockItemTransferArgs, info, options);
      break;
    }
    case ActionType.NftsTransferCollectionOwnership: {
      unsigned = nftsTransferOwnership(args as NftsTransferCollectionOwnershipArgs, info, options);
      break;
    }
    case ActionType.NftsSetItemMetadata: {
      unsigned = nftsSetMetadata(args as NftsSetItemMetadataArgs, info, options);
      break;
    }
    case ActionType.NftsClearItemMetadata: {
      unsigned = nftsClearMetadata(args as NftsClearItemMetadataArgs, info, options);
      break;
    }
    case ActionType.NftsSetCollectionMetadata: {
      unsigned = nftsSetCollectionMetadata(args as NftsSetCollectionMetadataArgs, info, options);
      break;
    }
    case ActionType.NftsClearCollectionMetadata: {
      unsigned = nftsClearCollectionMetadata(args as NftsClearCollectionMetadataArgs, info, options);
      break;
    }
    case ActionType.NftsAcceptCollectionOwnership: {
      unsigned = nftsSetAcceptOwnership(args as NftsAcceptCollectionOwnershipArgs, info, options);
      break;
    }
    case ActionType.AppTransactionsSubmitClearingTransaction: {
      unsigned = appTransactionsSubmitClearingTransaction(args as AppTransactionsSubmitClearingTransactionArgs, info, options);
      break;
    }

    default: {
      throw new Error(`Unsupported transaction type: ${actionType}`);
    }
  }

  return unsigned;
}