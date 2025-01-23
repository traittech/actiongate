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
  ITxAction,
  ICTAtomicAction,
  CTActionOrigin,
  CTAtomicActions,
} from '../../types/api';

import type {
  AdminType,
  NamedAddressInput,
  NftWitness
} from '../../types/api/trait';

import { TransactionType } from '../../types/api/actions';

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
 *
 * `adminType`
 *
 * `admin`
 */
export interface AdminsAddAdminArgs extends Args {
  adminType: AdminType;
  admin: BlockchainGenericAccount;
};

const AdminsAddAdminArgsSchema = z.object({
  adminType: schema.AdminTypeSchema,
  admin: schema.BlockchainGenericAccountSchema,
});

/**
 * @name adminsAddPalletAdmin
 * @param args - The arguments of the transaction. {@link AdminsAddAdminArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function adminsAddPalletAdmin(
  args: AdminsAddAdminArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AdminsAddAdminArgsSchema.parse(args);

  return constructUnsignedTransaction('admins', 'addPalletAdmin', args, info, options);
}

/**
 */
export interface AdminsAddAdminTx extends ITxAction {
  actionType: TransactionType.AdminsAddAdmin;
  arguments: AdminsAddAdminArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 *
 * `adminType`
 *
 * `admin`
 */
export interface AdminsRemoveAdminArgs extends Args {
  adminType: AdminType;
  admin: BlockchainGenericAccount;
};

const AdminsRemoveAdminArgsSchema = z.object({
  adminType: schema.AdminTypeSchema,
  admin: schema.BlockchainGenericAccountSchema,
});

/**
 * @name adminsRemovePalletAdmin
 * @param args - The arguments of the transaction. {@link AdminsRemoveAdminArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function adminsRemovePalletAdmin(
  args: AdminsRemoveAdminArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AdminsRemoveAdminArgsSchema.parse(args);

  return constructUnsignedTransaction('admins', 'removePalletAdmin', args, info, options);
}

/**
 */
export interface AdminsRemoveAdminTx extends ITxAction {
  actionType: TransactionType.AdminsRemoveAdmin;
  arguments: AdminsRemoveAdminArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Adds an admin to the App Agent.
 *
 * `appAgentId` - The ID of the App Agent.
 *
 * `admin` - The account ID of the admin to be added.
 */
export interface AppAgentsAddAdminArgs extends Args {
  /**
   *  The ID of the App Agent.
   */
  appAgentId: BlockchainGenericId;
  /**
   *  The account ID of the admin to be added.
   */
  admin: BlockchainGenericAccount;
};

const AppAgentsAddAdminArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
  admin: schema.BlockchainGenericAccountSchema,
});

/**
 * @name appAgentsAddAdmin
 * @summary Adds an admin to the App Agent.
 * @description This function is used to add an admin to the App Agent. The caller must be the current owner of the App Agent, and the admin must not be a keyless address. The function also checks that the admin is not already present in the list of admins for the App Agent. The caller is also required to reserve the admin deposit amount. # Parameters
 * @param args - The arguments of the transaction. {@link AppAgentsAddAdminArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appAgentsAddAdmin(
  args: AppAgentsAddAdminArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppAgentsAddAdminArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'addAdmin', args, info, options);
}

/**
 * Adds an admin to the App Agent. This function is used to add an admin to the App Agent. The caller must be the current owner of the App Agent, and the admin must not be a keyless address. The function also checks that the admin is not already present in the list of admins for the App Agent. The caller is also required to reserve the admin deposit amount. # Parameters
 */
export interface AppAgentsAddAdminTx extends ITxAction {
  actionType: TransactionType.AppAgentsAddAdmin;
  arguments: AppAgentsAddAdminArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Adds an admin to the list of permitted administrators for a named address under a
 *
 * `appAgentId` - The identifier of the App Agent.
 *
 * `admin` - The account ID of the admin being added.
 *
 * `namedAddress` - The named address to which the admin is being added.
 */
export interface AppAgentsAddAdminToNamedAddressArgs extends Args {
  /**
   *  The identifier of the App Agent.
   */
  appAgentId: BlockchainGenericId;
  /**
   *  The account ID of the admin being added.
   */
  admin: BlockchainGenericAccount;
  /**
   *  The named address to which the admin is being added.
   */
  namedAddress: BlockchainGenericAccount;
};

const AppAgentsAddAdminToNamedAddressArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
  admin: schema.BlockchainGenericAccountSchema,
  namedAddress: schema.BlockchainGenericAccountSchema,
});

/**
 * @name appAgentsAddAdminToNamedAddressDispatch
 * @summary Adds an admin to the list of permitted administrators for a named address under a
 * @description specific App Agent. # Parameters
 * @param args - The arguments of the transaction. {@link AppAgentsAddAdminToNamedAddressArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appAgentsAddAdminToNamedAddressDispatch(
  args: AppAgentsAddAdminToNamedAddressArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppAgentsAddAdminToNamedAddressArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'addAdminToNamedAddressDispatch', args, info, options);
}

/**
 * Adds an admin to the list of permitted administrators for a named address under a specific App Agent. # Parameters
 */
export interface AppAgentsAddAdminToNamedAddressTx extends ITxAction {
  actionType: TransactionType.AppAgentsAddAdminToNamedAddress;
  arguments: AppAgentsAddAdminToNamedAddressArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Pallet function to add an AppAgent' admin to the list of addresses allowed to spend
 *
 * `appAgentId` - The identifier of the App Agent.
 *
 * `admin` - The admin address to be added to the list.
 *
 * `coldWallet`
 */
export interface AppAgentsAllowAdminColdWalletArgs extends Args {
  /**
   *  The identifier of the App Agent.
   */
  appAgentId: BlockchainGenericId;
  /**
   *  The admin address to be added to the list.
   */
  admin: BlockchainGenericAccount;
  coldWallet: BlockchainGenericAccount;
};

const AppAgentsAllowAdminColdWalletArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
  admin: schema.BlockchainGenericAccountSchema,
  coldWallet: schema.BlockchainGenericAccountSchema,
});

/**
 * @name appAgentsAllowAdminColdWalletDispatch
 * @summary Pallet function to add an AppAgent' admin to the list of addresses allowed to spend
 * @description from a cold wallet associated with a specific App Agent. # Parameters
 * @param args - The arguments of the transaction. {@link AppAgentsAllowAdminColdWalletArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appAgentsAllowAdminColdWalletDispatch(
  args: AppAgentsAllowAdminColdWalletArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppAgentsAllowAdminColdWalletArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'allowAdminColdWalletDispatch', args, info, options);
}

/**
 * Pallet function to add an AppAgent' admin to the list of addresses allowed to spend from a cold wallet associated with a specific App Agent. # Parameters
 */
export interface AppAgentsAllowAdminColdWalletTx extends ITxAction {
  actionType: TransactionType.AppAgentsAllowAdminColdWallet;
  arguments: AppAgentsAllowAdminColdWalletArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Change the hot wallet associated with an App Agent.
 *
 * `appAgentId` - The identifier of the App Agent whose hot wallet is being changed.
 *
 * `newHotWallet` - The new hot wallet to be set for the specified App Agent.
 */
export interface AppAgentsChangeHotWalletArgs extends Args {
  /**
   *  The identifier of the App Agent whose hot wallet is being changed.
   */
  appAgentId: BlockchainGenericId;
  /**
   *  The new hot wallet to be set for the specified App Agent.
   */
  newHotWallet: NamedAddressInput;
};

const AppAgentsChangeHotWalletArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
  newHotWallet: schema.NamedAddressInputSchema,
});

/**
 * @name appAgentsChangeHotWallet
 * @summary Change the hot wallet associated with an App Agent.
 * @description # Parameters
 * @param args - The arguments of the transaction. {@link AppAgentsChangeHotWalletArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appAgentsChangeHotWallet(
  args: AppAgentsChangeHotWalletArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppAgentsChangeHotWalletArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'changeHotWallet', args, info, options);
}

/**
 * Change the hot wallet associated with an App Agent. # Parameters
 */
export interface AppAgentsChangeHotWalletTx extends ITxAction {
  actionType: TransactionType.AppAgentsChangeHotWallet;
  arguments: AppAgentsChangeHotWalletArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Cancels a change of owner for an App Agent.
 *
 * `appAgentId` - The ID of the App Agent.
 */
export interface AppAgentsChangeOwnerCancelArgs extends Args {
  /**
   *  The ID of the App Agent.
   */
  appAgentId: BlockchainGenericId;
};

const AppAgentsChangeOwnerCancelArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
});

/**
 * @name appAgentsChangeOwnerCancel
 * @summary Cancels a change of owner for an App Agent.
 * @description This function is used to cancel a previously proposed change of owner for an app agent. The caller must be the current owner of the App Agent. # Parameters
 * @param args - The arguments of the transaction. {@link AppAgentsChangeOwnerCancelArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appAgentsChangeOwnerCancel(
  args: AppAgentsChangeOwnerCancelArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppAgentsChangeOwnerCancelArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'changeOwnerCancel', args, info, options);
}

/**
 * Cancels a change of owner for an App Agent. This function is used to cancel a previously proposed change of owner for an app agent. The caller must be the current owner of the App Agent. # Parameters
 */
export interface AppAgentsChangeOwnerCancelTx extends ITxAction {
  actionType: TransactionType.AppAgentsChangeOwnerCancel;
  arguments: AppAgentsChangeOwnerCancelArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Completes a change of owner for an App Agent.
 *
 * `appAgentId` - The ID of the App Agent.
 */
export interface AppAgentsChangeOwnerCompleteArgs extends Args {
  /**
   *  The ID of the App Agent.
   */
  appAgentId: BlockchainGenericId;
};

const AppAgentsChangeOwnerCompleteArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
});

/**
 * @name appAgentsChangeOwnerComplete
 * @summary Completes a change of owner for an App Agent.
 * @description This function is used to complete a previously proposed change of owner for an app agent. The caller must be the proposed owner of the App Agent. # Parameters
 * @param args - The arguments of the transaction. {@link AppAgentsChangeOwnerCompleteArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appAgentsChangeOwnerComplete(
  args: AppAgentsChangeOwnerCompleteArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppAgentsChangeOwnerCompleteArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'changeOwnerComplete', args, info, options);
}

/**
 * Completes a change of owner for an App Agent. This function is used to complete a previously proposed change of owner for an app agent. The caller must be the proposed owner of the App Agent. # Parameters
 */
export interface AppAgentsChangeOwnerCompleteTx extends ITxAction {
  actionType: TransactionType.AppAgentsChangeOwnerComplete;
  arguments: AppAgentsChangeOwnerCompleteArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Initializes the process to change the ownership of an App Agent.
 *
 * `appAgentId` - The ID of the App Agent.
 *
 * `proposedOwner` - The account ID of the proposed owner.
 */
export interface AppAgentsChangeOwnerInitArgs extends Args {
  /**
   *  The ID of the App Agent.
   */
  appAgentId: BlockchainGenericId;
  /**
   *  The account ID of the proposed owner.
   */
  proposedOwner: BlockchainGenericAccount;
};

const AppAgentsChangeOwnerInitArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
  proposedOwner: schema.BlockchainGenericAccountSchema,
});

/**
 * @name appAgentsChangeOwnerInit
 * @summary Initializes the process to change the ownership of an App Agent.
 * @description This function is used to initiate the process of changing the ownership of an app agent. The caller must be the current owner of the App Agent, and the proposed owner must not be a keyless address. # Parameters
 * @param args - The arguments of the transaction. {@link AppAgentsChangeOwnerInitArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appAgentsChangeOwnerInit(
  args: AppAgentsChangeOwnerInitArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppAgentsChangeOwnerInitArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'changeOwnerInit', args, info, options);
}

/**
 * Initializes the process to change the ownership of an App Agent. This function is used to initiate the process of changing the ownership of an app agent. The caller must be the current owner of the App Agent, and the proposed owner must not be a keyless address. # Parameters
 */
export interface AppAgentsChangeOwnerInitTx extends ITxAction {
  actionType: TransactionType.AppAgentsChangeOwnerInit;
  arguments: AppAgentsChangeOwnerInitArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Clears the dispatch filter for the specified `admin` account.
 *
 * `appAgentId` - The ID of the App Agent.
 *
 * `admin` - The account ID of the admin.
 */
export interface AppAgentsClearAdminDispatchFilterArgs extends Args {
  /**
   *  The ID of the App Agent.
   */
  appAgentId: BlockchainGenericId;
  /**
   *  The account ID of the admin.
   */
  admin: BlockchainGenericAccount;
};

const AppAgentsClearAdminDispatchFilterArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
  admin: schema.BlockchainGenericAccountSchema,
});

/**
 * @name appAgentsClearAdminDispatchFilter
 * @summary Clears the dispatch filter for the specified `admin` account.
 * @description The dispatch filter allows restricting the functions that can be called by an admin. By clearing the dispatch filter, the admin will have access to all functions. # Parameters
 * @param args - The arguments of the transaction. {@link AppAgentsClearAdminDispatchFilterArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appAgentsClearAdminDispatchFilter(
  args: AppAgentsClearAdminDispatchFilterArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppAgentsClearAdminDispatchFilterArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'clearAdminDispatchFilter', args, info, options);
}

/**
 * Clears the dispatch filter for the specified `admin` account. The dispatch filter allows restricting the functions that can be called by an admin. By clearing the dispatch filter, the admin will have access to all functions. # Parameters
 */
export interface AppAgentsClearAdminDispatchFilterTx extends ITxAction {
  actionType: TransactionType.AppAgentsClearAdminDispatchFilter;
  arguments: AppAgentsClearAdminDispatchFilterArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * Arguments required to Clear the metadata for an asset class.
 *
 * `appAgentId`
 */
export interface AppAgentsClearAppAgentMetadataArgs extends Args {
  appAgentId: BlockchainGenericId;
};

const AppAgentsClearAppAgentMetadataArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
});

/**
 * @name appAgentsClearAppAgentMetadata
 * @summary Clear the metadata for an asset class.
 * @description Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of the asset `class`. Any deposit is freed for the asset class owner.
 * @param args - The arguments of the transaction. {@link AppAgentsClearAppAgentMetadataArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appAgentsClearAppAgentMetadata(
  args: AppAgentsClearAppAgentMetadataArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppAgentsClearAppAgentMetadataArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'clearAppAgentMetadata', args, info, options);
}

/**
 * Clear the metadata for an asset class. Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of the asset `class`. Any deposit is freed for the asset class owner.
 */
export interface AppAgentsClearAppAgentMetadataTx extends ITxAction {
  actionType: TransactionType.AppAgentsClearAppAgentMetadata;
  arguments: AppAgentsClearAppAgentMetadataArgs;
};

/*---------------------------------------------------------------------------------- */

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
  AppTransactionsSubmitClearingTransactionArgsSchema.parse(args);

  return constructUnsignedTransaction('appTransactions', 'submitClearingTransaction', args, info, options);
}

/**
 * Submit a Clearing transaction. CT consists of a number of Atomics. Each Atomic consists of a number of Actions. Atomics are executed atomically - if an action within an atomic fails, then the entire atomic is no-op. Atomics within a CT are processed independently of each other. In case of errors, method takes additional fee from admin that submitted СT (origin).
 */
export interface AppTransactionsSubmitClearingTransactionTx extends ITxAction {
  actionType: TransactionType.AppTransactionsSubmitClearingTransaction;
  arguments: AppTransactionsSubmitClearingTransactionArgs;
};

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
  AssetsBurnArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'burn', args, info, options);
}

/**
 * Reduce the balance of `who` by as much as possible up to `amount` assets of `id`. Origin must be Signed and the sender should be the Manager of the asset `id`. Bails with `NoAccount` if the `who` is already dead.
 */
export interface AssetsBurnTx extends ITxAction {
  actionType: TransactionType.AssetsBurn;
  arguments: AssetsBurnArgs;
};

/**
 * Reduce the balance of `who` by as much as possible up to `amount` assets of `id`. Origin must be Signed and the sender should be the Manager of the asset `id`. Bails with `NoAccount` if the `who` is already dead.
 */
export interface AssetsBurnAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsBurn;
  arguments: AssetsBurnArgs;
  origin: CTActionOrigin;
};

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
  AssetsCreateArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'create', args, info, options);
}

/**
 */
export interface AssetsCreateTx extends ITxAction {
  actionType: TransactionType.AssetsCreate;
  arguments: AssetsCreateArgs;
};

/**
 */
export interface AssetsCreateAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsCreate;
  arguments: AssetsCreateArgs;
  origin: CTActionOrigin;
};

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
  AssetsDestroyAccountsArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'destroyAccounts', args, info, options);
}

/**
 * Destroy all accounts associated with a given asset. `destroy_accounts` should only be called after `start_destroy` has been called, and the asset is in a `Destroying` state. Due to weight restrictions, this function may need to be called multiple times to fully destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time.
 */
export interface AssetsDestroyAccountsTx extends ITxAction {
  actionType: TransactionType.AssetsDestroyAccounts;
  arguments: AssetsDestroyAccountsArgs;
};

/**
 * Destroy all accounts associated with a given asset. `destroy_accounts` should only be called after `start_destroy` has been called, and the asset is in a `Destroying` state. Due to weight restrictions, this function may need to be called multiple times to fully destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time.
 */
export interface AssetsDestroyAccountsAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsDestroyAccounts;
  arguments: AssetsDestroyAccountsArgs;
  origin: CTActionOrigin;
};

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
  AssetsDestroyApprovalsArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'destroyApprovals', args, info, options);
}

/**
 * Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit). `destroy_approvals` should only be called after `start_destroy` has been called, and the asset is in a `Destroying` state. Due to weight restrictions, this function may need to be called multiple times to fully destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time.
 */
export interface AssetsDestroyApprovalsTx extends ITxAction {
  actionType: TransactionType.AssetsDestroyApprovals;
  arguments: AssetsDestroyApprovalsArgs;
};

/**
 * Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit). `destroy_approvals` should only be called after `start_destroy` has been called, and the asset is in a `Destroying` state. Due to weight restrictions, this function may need to be called multiple times to fully destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time.
 */
export interface AssetsDestroyApprovalsAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsDestroyApprovals;
  arguments: AssetsDestroyApprovalsArgs;
  origin: CTActionOrigin;
};

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
  AssetsFinishDestroyArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'finishDestroy', args, info, options);
}

/**
 * Complete destroying asset and unreserve currency. `finish_destroy` should only be called after `start_destroy` has been called, and the asset is in a `Destroying` state. All accounts or approvals should be destroyed before hand.
 */
export interface AssetsFinishDestroyTx extends ITxAction {
  actionType: TransactionType.AssetsFinishDestroy;
  arguments: AssetsFinishDestroyArgs;
};

/**
 * Complete destroying asset and unreserve currency. `finish_destroy` should only be called after `start_destroy` has been called, and the asset is in a `Destroying` state. All accounts or approvals should be destroyed before hand.
 */
export interface AssetsFinishDestroyAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsFinishDestroy;
  arguments: AssetsFinishDestroyArgs;
  origin: CTActionOrigin;
};

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
  AssetsForceTransferArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'forceTransfer', args, info, options);
}

/**
 * Move some assets from one account to another. Origin must be Signed and the sender should be the Admin of the asset `id`.
 */
export interface AssetsForceTransferTx extends ITxAction {
  actionType: TransactionType.AssetsForceTransfer;
  arguments: AssetsForceTransferArgs;
};

/**
 * Move some assets from one account to another. Origin must be Signed and the sender should be the Admin of the asset `id`.
 */
export interface AssetsForceTransferAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsForceTransfer;
  arguments: AssetsForceTransferArgs;
  origin: CTActionOrigin;
};

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
  AssetsFreezeAccountArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'freeze', args, info, options);
}

/**
 * Disallow further unprivileged transfers of an asset `id` from an account `who`. `who` must already exist as an entry in `Account`s of the asset. If you want to freeze an account that does not have an entry, use `touch_other` first. Origin must be Signed and the sender should be the Freezer of the asset `id`.
 */
export interface AssetsFreezeAccountTx extends ITxAction {
  actionType: TransactionType.AssetsFreezeAccount;
  arguments: AssetsFreezeAccountArgs;
};

/**
 * Disallow further unprivileged transfers of an asset `id` from an account `who`. `who` must already exist as an entry in `Account`s of the asset. If you want to freeze an account that does not have an entry, use `touch_other` first. Origin must be Signed and the sender should be the Freezer of the asset `id`.
 */
export interface AssetsFreezeAccountAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsFreezeAccount;
  arguments: AssetsFreezeAccountArgs;
  origin: CTActionOrigin;
};

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
  AssetsFreezeAssetArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'freezeAsset', args, info, options);
}

/**
 * Disallow further unprivileged transfers for the asset class. Origin must be Signed and the sender should be the Freezer of the asset `id`.
 */
export interface AssetsFreezeAssetTx extends ITxAction {
  actionType: TransactionType.AssetsFreezeAsset;
  arguments: AssetsFreezeAssetArgs;
};

/**
 * Disallow further unprivileged transfers for the asset class. Origin must be Signed and the sender should be the Freezer of the asset `id`.
 */
export interface AssetsFreezeAssetAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsFreezeAsset;
  arguments: AssetsFreezeAssetArgs;
  origin: CTActionOrigin;
};

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
  AssetsMintArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'mint', args, info, options);
}

/**
 * Mint assets of a particular class. The origin must be Signed and the sender must be the Issuer of the asset `id`.
 */
export interface AssetsMintTx extends ITxAction {
  actionType: TransactionType.AssetsMint;
  arguments: AssetsMintArgs;
};

/**
 * Mint assets of a particular class. The origin must be Signed and the sender must be the Issuer of the asset `id`.
 */
export interface AssetsMintAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsMint;
  arguments: AssetsMintArgs;
  origin: CTActionOrigin;
};

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
  AssetsSetMetadataArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'setMetadata', args, info, options);
}

/**
 * Set the raw metadata for an asset. Origin must be Signed and the sender should be the Owner of the asset `id`. Funds of sender are reserved according to the formula: `MetadataDepositBase + MetadataDepositPerByte * (data.len)` taking into account any already reserved funds.
 */
export interface AssetsSetMetadataTx extends ITxAction {
  actionType: TransactionType.AssetsSetMetadata;
  arguments: AssetsSetMetadataArgs;
};

/**
 * Set the raw metadata for an asset. Origin must be Signed and the sender should be the Owner of the asset `id`. Funds of sender are reserved according to the formula: `MetadataDepositBase + MetadataDepositPerByte * (data.len)` taking into account any already reserved funds.
 */
export interface AssetsSetMetadataAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsSetMetadata;
  arguments: AssetsSetMetadataArgs;
  origin: CTActionOrigin;
};

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
  AssetsSetMinBalanceArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'setMinBalance', args, info, options);
}

/**
 * Sets the minimum balance of an asset. Only works if there aren't any accounts that are holding the asset or if the new value of `min_balance` is less than the old one. Origin must be Signed and the sender has to be the Owner of the asset `id`.
 */
export interface AssetsSetMinBalanceTx extends ITxAction {
  actionType: TransactionType.AssetsSetMinBalance;
  arguments: AssetsSetMinBalanceArgs;
};

/**
 * Sets the minimum balance of an asset. Only works if there aren't any accounts that are holding the asset or if the new value of `min_balance` is less than the old one. Origin must be Signed and the sender has to be the Owner of the asset `id`.
 */
export interface AssetsSetMinBalanceAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsSetMinBalance;
  arguments: AssetsSetMinBalanceArgs;
  origin: CTActionOrigin;
};

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
  AssetsStartDestroyArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'startDestroy', args, info, options);
}

/**
 * Start the process of destroying a fungible asset class. `start_destroy` is the first in a series of extrinsics that should be called, to allow destruction of an asset class. The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`.
 */
export interface AssetsStartDestroyTx extends ITxAction {
  actionType: TransactionType.AssetsStartDestroy;
  arguments: AssetsStartDestroyArgs;
};

/**
 * Start the process of destroying a fungible asset class. `start_destroy` is the first in a series of extrinsics that should be called, to allow destruction of an asset class. The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`.
 */
export interface AssetsStartDestroyAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsStartDestroy;
  arguments: AssetsStartDestroyArgs;
  origin: CTActionOrigin;
};

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
  AssetsThawAccountArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'thaw', args, info, options);
}

/**
 * Allow unprivileged transfers to and from an account again. Origin must be Signed and the sender should be the Admin of the asset `id`.
 */
export interface AssetsThawAccountTx extends ITxAction {
  actionType: TransactionType.AssetsThawAccount;
  arguments: AssetsThawAccountArgs;
};

/**
 * Allow unprivileged transfers to and from an account again. Origin must be Signed and the sender should be the Admin of the asset `id`.
 */
export interface AssetsThawAccountAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsThawAccount;
  arguments: AssetsThawAccountArgs;
  origin: CTActionOrigin;
};

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
  AssetsThawAssetArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'thawAsset', args, info, options);
}

/**
 * Allow unprivileged transfers for the asset again. Origin must be Signed and the sender should be the Admin of the asset `id`.
 */
export interface AssetsThawAssetTx extends ITxAction {
  actionType: TransactionType.AssetsThawAsset;
  arguments: AssetsThawAssetArgs;
};

/**
 * Allow unprivileged transfers for the asset again. Origin must be Signed and the sender should be the Admin of the asset `id`.
 */
export interface AssetsThawAssetAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsThawAsset;
  arguments: AssetsThawAssetArgs;
  origin: CTActionOrigin;
};

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
  AssetsTransferArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'transfer', args, info, options);
}

/**
 * Move some assets from the sender account to another. Origin must be Signed.
 */
export interface AssetsTransferTx extends ITxAction {
  actionType: TransactionType.AssetsTransfer;
  arguments: AssetsTransferArgs;
};

/**
 * Move some assets from the sender account to another. Origin must be Signed.
 */
export interface AssetsTransferAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsTransfer;
  arguments: AssetsTransferArgs;
  origin: CTActionOrigin;
};

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
  AssetsTransferKeepAliveArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'transferKeepAlive', args, info, options);
}

/**
 * Move some assets from the sender account to another, keeping the sender account alive. Origin must be Signed.
 */
export interface AssetsTransferKeepAliveTx extends ITxAction {
  actionType: TransactionType.AssetsTransferKeepAlive;
  arguments: AssetsTransferKeepAliveArgs;
};

/**
 * Move some assets from the sender account to another, keeping the sender account alive. Origin must be Signed.
 */
export interface AssetsTransferKeepAliveAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsTransferKeepAlive;
  arguments: AssetsTransferKeepAliveArgs;
  origin: CTActionOrigin;
};

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
  AssetsTransferOwnershipArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'transferOwnership', args, info, options);
}

/**
 * Change the Owner of an asset. Origin must be Signed and the sender should be the Owner of the asset `id`.
 */
export interface AssetsTransferOwnershipTx extends ITxAction {
  actionType: TransactionType.AssetsTransferOwnership;
  arguments: AssetsTransferOwnershipArgs;
};

/**
 * Change the Owner of an asset. Origin must be Signed and the sender should be the Owner of the asset `id`.
 */
export interface AssetsTransferOwnershipAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsTransferOwnership;
  arguments: AssetsTransferOwnershipArgs;
  origin: CTActionOrigin;
};

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
  BalancesTransferAllArgsSchema.parse(args);

  return constructUnsignedTransaction('balances', 'transferAll', args, info, options);
}

/**
 * Transfer the entire transferable balance from the caller account. NOTE: This function only attempts to transfer _transferable_ balances. This means that any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be transferred by this function. To ensure that this function results in a killed account, you might need to prepare the account by removing any reference counters, storage deposits, etc... The dispatch origin of this call must be Signed.
 */
export interface BalancesTransferAllTx extends ITxAction {
  actionType: TransactionType.BalancesTransferAll;
  arguments: BalancesTransferAllArgs;
};

/**
 * Transfer the entire transferable balance from the caller account. NOTE: This function only attempts to transfer _transferable_ balances. This means that any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be transferred by this function. To ensure that this function results in a killed account, you might need to prepare the account by removing any reference counters, storage deposits, etc... The dispatch origin of this call must be Signed.
 */
export interface BalancesTransferAllAction extends ICTAtomicAction {
  actionType: TransactionType.BalancesTransferAll;
  arguments: BalancesTransferAllArgs;
  origin: CTActionOrigin;
};

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
  BalancesTransferAllowDeathArgsSchema.parse(args);

  return constructUnsignedTransaction('balances', 'transferAllowDeath', args, info, options);
}

/**
 * Transfer some liquid free balance to another account. `transfer_allow_death` will set the `FreeBalance` of the sender and receiver. If the sender's account is below the existential deposit as a result of the transfer, the account will be reaped. The dispatch origin for this call must be `Signed` by the transactor.
 */
export interface BalancesTransferAllowDeathTx extends ITxAction {
  actionType: TransactionType.BalancesTransferAllowDeath;
  arguments: BalancesTransferAllowDeathArgs;
};

/**
 * Transfer some liquid free balance to another account. `transfer_allow_death` will set the `FreeBalance` of the sender and receiver. If the sender's account is below the existential deposit as a result of the transfer, the account will be reaped. The dispatch origin for this call must be `Signed` by the transactor.
 */
export interface BalancesTransferAllowDeathAction extends ICTAtomicAction {
  actionType: TransactionType.BalancesTransferAllowDeath;
  arguments: BalancesTransferAllowDeathArgs;
  origin: CTActionOrigin;
};

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
  BalancesTransferKeepAliveArgsSchema.parse(args);

  return constructUnsignedTransaction('balances', 'transferKeepAlive', args, info, options);
}

/**
 * Same as the [`transfer_allow_death`] call, but with a check that the transfer will not kill the origin account. 99% of the time you want [`transfer_allow_death`] instead. [`transfer_allow_death`]: struct.Pallet.html#method.transfer
 */
export interface BalancesTransferKeepAliveTx extends ITxAction {
  actionType: TransactionType.BalancesTransferKeepAlive;
  arguments: BalancesTransferKeepAliveArgs;
};

/**
 * Same as the [`transfer_allow_death`] call, but with a check that the transfer will not kill the origin account. 99% of the time you want [`transfer_allow_death`] instead. [`transfer_allow_death`]: struct.Pallet.html#method.transfer
 */
export interface BalancesTransferKeepAliveAction extends ICTAtomicAction {
  actionType: TransactionType.BalancesTransferKeepAlive;
  arguments: BalancesTransferKeepAliveArgs;
  origin: CTActionOrigin;
};

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
  NftsBurnItemArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'burn', args, info, options);
}

/**
 * Destroy a single item. The origin must conform to `ForceOrigin` or must be Signed and the signing account must be the owner of the `item`.
 */
export interface NftsBurnItemTx extends ITxAction {
  actionType: TransactionType.NftsBurnItem;
  arguments: NftsBurnItemArgs;
};

/**
 * Destroy a single item. The origin must conform to `ForceOrigin` or must be Signed and the signing account must be the owner of the `item`.
 */
export interface NftsBurnItemAction extends ICTAtomicAction {
  actionType: TransactionType.NftsBurnItem;
  arguments: NftsBurnItemArgs;
  origin: CTActionOrigin;
};

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
  NftsClearCollectionMetadataArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'clearCollectionMetadata', args, info, options);
}

/**
 * Clear the metadata for a collection. Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of the `collection`. Any deposit is freed for the collection's owner.
 */
export interface NftsClearCollectionMetadataTx extends ITxAction {
  actionType: TransactionType.NftsClearCollectionMetadata;
  arguments: NftsClearCollectionMetadataArgs;
};

/**
 * Clear the metadata for a collection. Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of the `collection`. Any deposit is freed for the collection's owner.
 */
export interface NftsClearCollectionMetadataAction extends ICTAtomicAction {
  actionType: TransactionType.NftsClearCollectionMetadata;
  arguments: NftsClearCollectionMetadataArgs;
  origin: CTActionOrigin;
};

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
  NftsClearItemMetadataArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'clearMetadata', args, info, options);
}

/**
 * Clear the metadata for an item. Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the `collection`. Any deposit is freed for the collection's owner.
 */
export interface NftsClearItemMetadataTx extends ITxAction {
  actionType: TransactionType.NftsClearItemMetadata;
  arguments: NftsClearItemMetadataArgs;
};

/**
 * Clear the metadata for an item. Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the `collection`. Any deposit is freed for the collection's owner.
 */
export interface NftsClearItemMetadataAction extends ICTAtomicAction {
  actionType: TransactionType.NftsClearItemMetadata;
  arguments: NftsClearItemMetadataArgs;
  origin: CTActionOrigin;
};

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
  NftsCreateCollectionArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'create', args, info, options);
}

/**
 */
export interface NftsCreateCollectionTx extends ITxAction {
  actionType: TransactionType.NftsCreateCollection;
  arguments: NftsCreateCollectionArgs;
};

/**
 */
export interface NftsCreateCollectionAction extends ICTAtomicAction {
  actionType: TransactionType.NftsCreateCollection;
  arguments: NftsCreateCollectionArgs;
  origin: CTActionOrigin;
};

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
  NftsDestroyCollectionArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'destroy', args, info, options);
}

/**
 * Destroy a collection of fungible items. The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the owner of the `collection`. NOTE: The collection must have 0 items to be destroyed.
 */
export interface NftsDestroyCollectionTx extends ITxAction {
  actionType: TransactionType.NftsDestroyCollection;
  arguments: NftsDestroyCollectionArgs;
};

/**
 * Destroy a collection of fungible items. The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the owner of the `collection`. NOTE: The collection must have 0 items to be destroyed.
 */
export interface NftsDestroyCollectionAction extends ICTAtomicAction {
  actionType: TransactionType.NftsDestroyCollection;
  arguments: NftsDestroyCollectionArgs;
  origin: CTActionOrigin;
};

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
  NftsLockItemTransferArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'lockItemTransfer', args, info, options);
}

/**
 * Disallow further unprivileged transfer of an item. Origin must be Signed and the sender should be the Freezer of the `collection`.
 */
export interface NftsLockItemTransferTx extends ITxAction {
  actionType: TransactionType.NftsLockItemTransfer;
  arguments: NftsLockItemTransferArgs;
};

/**
 * Disallow further unprivileged transfer of an item. Origin must be Signed and the sender should be the Freezer of the `collection`.
 */
export interface NftsLockItemTransferAction extends ICTAtomicAction {
  actionType: TransactionType.NftsLockItemTransfer;
  arguments: NftsLockItemTransferArgs;
  origin: CTActionOrigin;
};

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
  NftsMintItemArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'mint', args, info, options);
}

/**
 */
export interface NftsMintItemTx extends ITxAction {
  actionType: TransactionType.NftsMintItem;
  arguments: NftsMintItemArgs;
};

/**
 */
export interface NftsMintItemAction extends ICTAtomicAction {
  actionType: TransactionType.NftsMintItem;
  arguments: NftsMintItemArgs;
  origin: CTActionOrigin;
};

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
  NftsAcceptCollectionOwnershipArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'setAcceptOwnership', args, info, options);
}

/**
 * Set (or reset) the acceptance of ownership for a particular account. Origin must be `Signed` and if `maybe_collection` is `Some`, then the signer must have a provider reference.
 */
export interface NftsAcceptCollectionOwnershipTx extends ITxAction {
  actionType: TransactionType.NftsAcceptCollectionOwnership;
  arguments: NftsAcceptCollectionOwnershipArgs;
};

/**
 * Set (or reset) the acceptance of ownership for a particular account. Origin must be `Signed` and if `maybe_collection` is `Some`, then the signer must have a provider reference.
 */
export interface NftsAcceptCollectionOwnershipAction extends ICTAtomicAction {
  actionType: TransactionType.NftsAcceptCollectionOwnership;
  arguments: NftsAcceptCollectionOwnershipArgs;
  origin: CTActionOrigin;
};

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
  NftsSetCollectionMetadataArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'setCollectionMetadata', args, info, options);
}

/**
 * Set the metadata for a collection. Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of the `collection`. If the origin is `Signed`, then funds of signer are reserved according to the formula: `MetadataDepositBase + DepositPerByte * data.len` taking into account any already reserved funds.
 */
export interface NftsSetCollectionMetadataTx extends ITxAction {
  actionType: TransactionType.NftsSetCollectionMetadata;
  arguments: NftsSetCollectionMetadataArgs;
};

/**
 * Set the metadata for a collection. Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of the `collection`. If the origin is `Signed`, then funds of signer are reserved according to the formula: `MetadataDepositBase + DepositPerByte * data.len` taking into account any already reserved funds.
 */
export interface NftsSetCollectionMetadataAction extends ICTAtomicAction {
  actionType: TransactionType.NftsSetCollectionMetadata;
  arguments: NftsSetCollectionMetadataArgs;
  origin: CTActionOrigin;
};

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
  NftsSetItemMetadataArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'setMetadata', args, info, options);
}

/**
 * Set the metadata for an item. Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the `collection`. If the origin is Signed, then funds of signer are reserved according to the formula: `MetadataDepositBase + DepositPerByte * data.len` taking into account any already reserved funds.
 */
export interface NftsSetItemMetadataTx extends ITxAction {
  actionType: TransactionType.NftsSetItemMetadata;
  arguments: NftsSetItemMetadataArgs;
};

/**
 * Set the metadata for an item. Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the `collection`. If the origin is Signed, then funds of signer are reserved according to the formula: `MetadataDepositBase + DepositPerByte * data.len` taking into account any already reserved funds.
 */
export interface NftsSetItemMetadataAction extends ICTAtomicAction {
  actionType: TransactionType.NftsSetItemMetadata;
  arguments: NftsSetItemMetadataArgs;
  origin: CTActionOrigin;
};

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
  NftsTransferItemArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'transfer', args, info, options);
}

/**
 * Move an item from the sender account to another. Origin must be Signed and the signing account must be either:
 */
export interface NftsTransferItemTx extends ITxAction {
  actionType: TransactionType.NftsTransferItem;
  arguments: NftsTransferItemArgs;
};

/**
 * Move an item from the sender account to another. Origin must be Signed and the signing account must be either:
 */
export interface NftsTransferItemAction extends ICTAtomicAction {
  actionType: TransactionType.NftsTransferItem;
  arguments: NftsTransferItemArgs;
  origin: CTActionOrigin;
};

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
  NftsTransferCollectionOwnershipArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'transferOwnership', args, info, options);
}

/**
 * Change the Owner of a collection. Origin must be Signed and the sender should be the Owner of the `collection`.
 */
export interface NftsTransferCollectionOwnershipTx extends ITxAction {
  actionType: TransactionType.NftsTransferCollectionOwnership;
  arguments: NftsTransferCollectionOwnershipArgs;
};

/**
 * Change the Owner of a collection. Origin must be Signed and the sender should be the Owner of the `collection`.
 */
export interface NftsTransferCollectionOwnershipAction extends ICTAtomicAction {
  actionType: TransactionType.NftsTransferCollectionOwnership;
  arguments: NftsTransferCollectionOwnershipArgs;
  origin: CTActionOrigin;
};

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
  NftsUnlockItemTransferArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'unlockItemTransfer', args, info, options);
}

/**
 * Re-allow unprivileged transfer of an item. Origin must be Signed and the sender should be the Freezer of the `collection`.
 */
export interface NftsUnlockItemTransferTx extends ITxAction {
  actionType: TransactionType.NftsUnlockItemTransfer;
  arguments: NftsUnlockItemTransferArgs;
};

/**
 * Re-allow unprivileged transfer of an item. Origin must be Signed and the sender should be the Freezer of the `collection`.
 */
export interface NftsUnlockItemTransferAction extends ICTAtomicAction {
  actionType: TransactionType.NftsUnlockItemTransfer;
  arguments: NftsUnlockItemTransferArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * Represents a single transaction
 */
export type TxAction =
  | AdminsAddAdminTx
  | AdminsRemoveAdminTx
  | AppAgentsAddAdminTx
  | AppAgentsAddAdminToNamedAddressTx
  | AppAgentsAllowAdminColdWalletTx
  | AppAgentsChangeHotWalletTx
  | AppAgentsChangeOwnerCancelTx
  | AppAgentsChangeOwnerCompleteTx
  | AppAgentsChangeOwnerInitTx
  | AppAgentsClearAdminDispatchFilterTx
  | AppAgentsClearAppAgentMetadataTx
  | AppTransactionsSubmitClearingTransactionTx
  | AssetsBurnTx
  | AssetsCreateTx
  | AssetsDestroyAccountsTx
  | AssetsDestroyApprovalsTx
  | AssetsFinishDestroyTx
  | AssetsForceTransferTx
  | AssetsFreezeAccountTx
  | AssetsFreezeAssetTx
  | AssetsMintTx
  | AssetsSetMetadataTx
  | AssetsSetMinBalanceTx
  | AssetsStartDestroyTx
  | AssetsThawAccountTx
  | AssetsThawAssetTx
  | AssetsTransferTx
  | AssetsTransferKeepAliveTx
  | AssetsTransferOwnershipTx
  | BalancesTransferAllTx
  | BalancesTransferAllowDeathTx
  | BalancesTransferKeepAliveTx
  | NftsBurnItemTx
  | NftsClearCollectionMetadataTx
  | NftsClearItemMetadataTx
  | NftsCreateCollectionTx
  | NftsDestroyCollectionTx
  | NftsLockItemTransferTx
  | NftsMintItemTx
  | NftsAcceptCollectionOwnershipTx
  | NftsSetCollectionMetadataTx
  | NftsSetItemMetadataTx
  | NftsTransferItemTx
  | NftsTransferCollectionOwnershipTx
  | NftsUnlockItemTransferTx
;

/**
 * Represents a transaction args
 */
export type TransactionArgs =
  | AdminsAddAdminArgs
  | AdminsRemoveAdminArgs
  | AppAgentsAddAdminArgs
  | AppAgentsAddAdminToNamedAddressArgs
  | AppAgentsAllowAdminColdWalletArgs
  | AppAgentsChangeHotWalletArgs
  | AppAgentsChangeOwnerCancelArgs
  | AppAgentsChangeOwnerCompleteArgs
  | AppAgentsChangeOwnerInitArgs
  | AppAgentsClearAdminDispatchFilterArgs
  | AppAgentsClearAppAgentMetadataArgs
  | AppTransactionsSubmitClearingTransactionArgs
  | AssetsBurnArgs
  | AssetsCreateArgs
  | AssetsDestroyAccountsArgs
  | AssetsDestroyApprovalsArgs
  | AssetsFinishDestroyArgs
  | AssetsForceTransferArgs
  | AssetsFreezeAccountArgs
  | AssetsFreezeAssetArgs
  | AssetsMintArgs
  | AssetsSetMetadataArgs
  | AssetsSetMinBalanceArgs
  | AssetsStartDestroyArgs
  | AssetsThawAccountArgs
  | AssetsThawAssetArgs
  | AssetsTransferArgs
  | AssetsTransferKeepAliveArgs
  | AssetsTransferOwnershipArgs
  | BalancesTransferAllArgs
  | BalancesTransferAllowDeathArgs
  | BalancesTransferKeepAliveArgs
  | NftsBurnItemArgs
  | NftsClearCollectionMetadataArgs
  | NftsClearItemMetadataArgs
  | NftsCreateCollectionArgs
  | NftsDestroyCollectionArgs
  | NftsLockItemTransferArgs
  | NftsMintItemArgs
  | NftsAcceptCollectionOwnershipArgs
  | NftsSetCollectionMetadataArgs
  | NftsSetItemMetadataArgs
  | NftsTransferItemArgs
  | NftsTransferCollectionOwnershipArgs
  | NftsUnlockItemTransferArgs
;

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

/**
 * Represents a CT action args.
 */
export type ActionArgs =
  | BalancesTransferAllowDeathArgs
  | BalancesTransferKeepAliveArgs
  | BalancesTransferAllArgs
  | AssetsCreateArgs
  | AssetsStartDestroyArgs
  | AssetsDestroyAccountsArgs
  | AssetsDestroyApprovalsArgs
  | AssetsFinishDestroyArgs
  | AssetsMintArgs
  | AssetsBurnArgs
  | AssetsTransferArgs
  | AssetsTransferKeepAliveArgs
  | AssetsForceTransferArgs
  | AssetsFreezeAccountArgs
  | AssetsThawAccountArgs
  | AssetsFreezeAssetArgs
  | AssetsThawAssetArgs
  | AssetsTransferOwnershipArgs
  | AssetsSetMetadataArgs
  | AssetsSetMinBalanceArgs
  | NftsCreateCollectionArgs
  | NftsDestroyCollectionArgs
  | NftsMintItemArgs
  | NftsBurnItemArgs
  | NftsTransferItemArgs
  | NftsLockItemTransferArgs
  | NftsUnlockItemTransferArgs
  | NftsTransferCollectionOwnershipArgs
  | NftsSetItemMetadataArgs
  | NftsClearItemMetadataArgs
  | NftsSetCollectionMetadataArgs
  | NftsClearCollectionMetadataArgs
  | NftsAcceptCollectionOwnershipArgs
;

/**
 * Builds an unsigned transaction based on the provided transaction action.
 *
 * @param tx - Transaction action.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 *
 * @throws If the transaction is unsupported.
 */
export function buildUnsignedTransaction(
  tx: TxAction,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  const { actionType, arguments: args } = tx;

  let unsigned: UnsignedTransaction;

  // Handle different action types
  switch (actionType) {
    case TransactionType.AdminsAddAdmin: {
      unsigned = adminsAddPalletAdmin(args, info, options);
      break;
    }
    case TransactionType.AdminsRemoveAdmin: {
      unsigned = adminsRemovePalletAdmin(args, info, options);
      break;
    }
    case TransactionType.AppAgentsAddAdmin: {
      unsigned = appAgentsAddAdmin(args, info, options);
      break;
    }
    case TransactionType.AppAgentsAddAdminToNamedAddress: {
      unsigned = appAgentsAddAdminToNamedAddressDispatch(args, info, options);
      break;
    }
    case TransactionType.AppAgentsAllowAdminColdWallet: {
      unsigned = appAgentsAllowAdminColdWalletDispatch(args, info, options);
      break;
    }
    case TransactionType.AppAgentsChangeHotWallet: {
      unsigned = appAgentsChangeHotWallet(args, info, options);
      break;
    }
    case TransactionType.AppAgentsChangeOwnerCancel: {
      unsigned = appAgentsChangeOwnerCancel(args, info, options);
      break;
    }
    case TransactionType.AppAgentsChangeOwnerComplete: {
      unsigned = appAgentsChangeOwnerComplete(args, info, options);
      break;
    }
    case TransactionType.AppAgentsChangeOwnerInit: {
      unsigned = appAgentsChangeOwnerInit(args, info, options);
      break;
    }
    case TransactionType.AppAgentsClearAdminDispatchFilter: {
      unsigned = appAgentsClearAdminDispatchFilter(args, info, options);
      break;
    }
    case TransactionType.AppAgentsClearAppAgentMetadata: {
      unsigned = appAgentsClearAppAgentMetadata(args, info, options);
      break;
    }
    case TransactionType.AppTransactionsSubmitClearingTransaction: {
      unsigned = appTransactionsSubmitClearingTransaction(args, info, options);
      break;
    }
    case TransactionType.AssetsBurn: {
      unsigned = assetsBurn(args, info, options);
      break;
    }
    case TransactionType.AssetsCreate: {
      unsigned = assetsCreate(args, info, options);
      break;
    }
    case TransactionType.AssetsDestroyAccounts: {
      unsigned = assetsDestroyAccounts(args, info, options);
      break;
    }
    case TransactionType.AssetsDestroyApprovals: {
      unsigned = assetsDestroyApprovals(args, info, options);
      break;
    }
    case TransactionType.AssetsFinishDestroy: {
      unsigned = assetsFinishDestroy(args, info, options);
      break;
    }
    case TransactionType.AssetsForceTransfer: {
      unsigned = assetsForceTransfer(args, info, options);
      break;
    }
    case TransactionType.AssetsFreezeAccount: {
      unsigned = assetsFreeze(args, info, options);
      break;
    }
    case TransactionType.AssetsFreezeAsset: {
      unsigned = assetsFreezeAsset(args, info, options);
      break;
    }
    case TransactionType.AssetsMint: {
      unsigned = assetsMint(args, info, options);
      break;
    }
    case TransactionType.AssetsSetMetadata: {
      unsigned = assetsSetMetadata(args, info, options);
      break;
    }
    case TransactionType.AssetsSetMinBalance: {
      unsigned = assetsSetMinBalance(args, info, options);
      break;
    }
    case TransactionType.AssetsStartDestroy: {
      unsigned = assetsStartDestroy(args, info, options);
      break;
    }
    case TransactionType.AssetsThawAccount: {
      unsigned = assetsThaw(args, info, options);
      break;
    }
    case TransactionType.AssetsThawAsset: {
      unsigned = assetsThawAsset(args, info, options);
      break;
    }
    case TransactionType.AssetsTransfer: {
      unsigned = assetsTransfer(args, info, options);
      break;
    }
    case TransactionType.AssetsTransferKeepAlive: {
      unsigned = assetsTransferKeepAlive(args, info, options);
      break;
    }
    case TransactionType.AssetsTransferOwnership: {
      unsigned = assetsTransferOwnership(args, info, options);
      break;
    }
    case TransactionType.BalancesTransferAll: {
      unsigned = balancesTransferAll(args, info, options);
      break;
    }
    case TransactionType.BalancesTransferAllowDeath: {
      unsigned = balancesTransferAllowDeath(args, info, options);
      break;
    }
    case TransactionType.BalancesTransferKeepAlive: {
      unsigned = balancesTransferKeepAlive(args, info, options);
      break;
    }
    case TransactionType.NftsBurnItem: {
      unsigned = nftsBurn(args, info, options);
      break;
    }
    case TransactionType.NftsClearCollectionMetadata: {
      unsigned = nftsClearCollectionMetadata(args, info, options);
      break;
    }
    case TransactionType.NftsClearItemMetadata: {
      unsigned = nftsClearMetadata(args, info, options);
      break;
    }
    case TransactionType.NftsCreateCollection: {
      unsigned = nftsCreate(args, info, options);
      break;
    }
    case TransactionType.NftsDestroyCollection: {
      unsigned = nftsDestroy(args, info, options);
      break;
    }
    case TransactionType.NftsLockItemTransfer: {
      unsigned = nftsLockItemTransfer(args, info, options);
      break;
    }
    case TransactionType.NftsMintItem: {
      unsigned = nftsMint(args, info, options);
      break;
    }
    case TransactionType.NftsAcceptCollectionOwnership: {
      unsigned = nftsSetAcceptOwnership(args, info, options);
      break;
    }
    case TransactionType.NftsSetCollectionMetadata: {
      unsigned = nftsSetCollectionMetadata(args, info, options);
      break;
    }
    case TransactionType.NftsSetItemMetadata: {
      unsigned = nftsSetMetadata(args, info, options);
      break;
    }
    case TransactionType.NftsTransferItem: {
      unsigned = nftsTransfer(args, info, options);
      break;
    }
    case TransactionType.NftsTransferCollectionOwnership: {
      unsigned = nftsTransferOwnership(args, info, options);
      break;
    }
    case TransactionType.NftsUnlockItemTransfer: {
      unsigned = nftsUnlockItemTransfer(args, info, options);
      break;
    }

    default: {
      throw new Error(`Unsupported transaction type: ${actionType}`);
    }
  }

  return unsigned;
}