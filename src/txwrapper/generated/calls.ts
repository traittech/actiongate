// Auto-generated, do not edit
/* eslint-disable */

import { z } from 'zod';

import { defineMethod } from '@substrate/txwrapper-core';

import type { Args, BaseTxInfo, OptionsWithMeta, TxInfo, TxMethod, UnsignedTransaction } from '@substrate/txwrapper-core';

import type {
  BlockchainGenericAccount,
  BlockchainGenericAccountList,
  BlockchainGenericAccountId,
  BlockchainGenericBalance,
  BlockchainGenericBoolean,
  BlockchainGenericId,
  BlockchainGenericText,
  UINT64,
  ITxAction,
  ICTAtomicAction,
  CTActionOrigin,
  CTAtomicActions,
} from '../../types/api';

import type {
  AdminType,
  AppAgentDestroyInfo,
  AppSubscriptionTierDetails,
  AppDepositPermissions,
  AppPayOnDemandMode,
  NamedAddressInput,
  NftWitness,
  UserLevel,
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
 * `adminType`
 *
 * `admin`
 *
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
 * `adminType`
 *
 * `admin`
 *
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
 * `appAgentId` - The ID of the App Agent.
 *
 * `admin` - The account ID of the admin to be added.
 *
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
 * @description This function is used to add an admin to the App Agent. The caller must be the current owner of the App Agent, and the admin must not be a keyless address. The function also checks that the admin is not already present in the list of admins for the App Agent. The caller is also required to reserve the admin deposit amount.
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
 * Adds an admin to the App Agent.This function is used to add an admin to the App Agent. The caller must be the current owner of the App Agent, and the admin must not be a keyless address. The function also checks that the admin is not already present in the list of admins for the App Agent. The caller is also required to reserve the admin deposit amount.
 */
export interface AppAgentsAddAdminTx extends ITxAction {
  actionType: TransactionType.AppAgentsAddAdmin;
  arguments: AppAgentsAddAdminArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId` - The identifier of the App Agent.
 *
 * `admin` - The account ID of the admin being added.
 *
 * `namedAddress` - The named address to which the admin is being added.
 *
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
 * @description Adds an admin to the list of permitted administrators for a named address under a specific App Agent.
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
 * Adds an admin to the list of permitted administrators for a named address under a specific App Agent.
 */
export interface AppAgentsAddAdminToNamedAddressTx extends ITxAction {
  actionType: TransactionType.AppAgentsAddAdminToNamedAddress;
  arguments: AppAgentsAddAdminToNamedAddressArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId` - The identifier of the App Agent.
 *
 * `admin` - The admin address to be added to the list.
 *
 * `coldWallet`
 *
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
 * @description Pallet function to add an AppAgent' admin to the list of addresses allowed to spend from a cold wallet associated with a specific App Agent.
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
 * Pallet function to add an AppAgent' admin to the list of addresses allowed to spend from a cold wallet associated with a specific App Agent.
 */
export interface AppAgentsAllowAdminColdWalletTx extends ITxAction {
  actionType: TransactionType.AppAgentsAllowAdminColdWallet;
  arguments: AppAgentsAllowAdminColdWalletArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId` - The identifier of the App Agent whose hot wallet is being changed.
 *
 * `newHotWallet` - The new hot wallet to be set for the specified App Agent.
 *
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
 * @description Change the hot wallet associated with an App Agent.
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
 * Change the hot wallet associated with an App Agent.
 */
export interface AppAgentsChangeHotWalletTx extends ITxAction {
  actionType: TransactionType.AppAgentsChangeHotWallet;
  arguments: AppAgentsChangeHotWalletArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId` - The ID of the App Agent.
 *
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
 * @description This function is used to cancel a previously proposed change of owner for an app agent. The caller must be the current owner of the App Agent.
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
 * Cancels a change of owner for an App Agent.This function is used to cancel a previously proposed change of owner for an app agent. The caller must be the current owner of the App Agent.
 */
export interface AppAgentsChangeOwnerCancelTx extends ITxAction {
  actionType: TransactionType.AppAgentsChangeOwnerCancel;
  arguments: AppAgentsChangeOwnerCancelArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId` - The ID of the App Agent.
 *
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
 * @description This function is used to complete a previously proposed change of owner for an app agent. The caller must be the proposed owner of the App Agent.
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
 * Completes a change of owner for an App Agent.This function is used to complete a previously proposed change of owner for an app agent. The caller must be the proposed owner of the App Agent.
 */
export interface AppAgentsChangeOwnerCompleteTx extends ITxAction {
  actionType: TransactionType.AppAgentsChangeOwnerComplete;
  arguments: AppAgentsChangeOwnerCompleteArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId` - The ID of the App Agent.
 *
 * `proposedOwner` - The account ID of the proposed owner.
 *
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
 * @description This function is used to initiate the process of changing the ownership of an app agent. The caller must be the current owner of the App Agent, and the proposed owner must not be a keyless address.
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
 * Initializes the process to change the ownership of an App Agent.This function is used to initiate the process of changing the ownership of an app agent. The caller must be the current owner of the App Agent, and the proposed owner must not be a keyless address.
 */
export interface AppAgentsChangeOwnerInitTx extends ITxAction {
  actionType: TransactionType.AppAgentsChangeOwnerInit;
  arguments: AppAgentsChangeOwnerInitArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId` - The ID of the App Agent.
 *
 * `admin` - The account ID of the admin.
 *
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
 * @description The dispatch filter allows restricting the functions that can be called by an admin. By clearing the dispatch filter, the admin will have access to all functions.
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
 * Clears the dispatch filter for the specified `admin` account.The dispatch filter allows restricting the functions that can be called by an admin. By clearing the dispatch filter, the admin will have access to all functions.
 */
export interface AppAgentsClearAdminDispatchFilterTx extends ITxAction {
  actionType: TransactionType.AppAgentsClearAdminDispatchFilter;
  arguments: AppAgentsClearAdminDispatchFilterArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId`
 *
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
 * Clear the metadata for an asset class.Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of the asset `class`. Any deposit is freed for the asset class owner.
 */
export interface AppAgentsClearAppAgentMetadataTx extends ITxAction {
  actionType: TransactionType.AppAgentsClearAppAgentMetadata;
  arguments: AppAgentsClearAppAgentMetadataArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId` - The identifier of the App Agent to be destroyed.
 *
 * `destroyInfos`
 *
 */
export interface AppAgentsCompleteDestroyAppAgentArgs extends Args {
  /**
   *  The identifier of the App Agent to be destroyed.
   */
  appAgentId: BlockchainGenericId;
  destroyInfos: AppAgentDestroyInfo;
};

const AppAgentsCompleteDestroyAppAgentArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
  destroyInfos: schema.AppAgentDestroyInfoSchema,
});

/**
 * @name appAgentsCompleteDestroyAppAgent
 * @summary Completes the destruction process of the App Agent.
 * @description This function is used to complete the destruction process of the specified App Agent. It marks the App Agent as Destroyed and removes its metadata storage. After completion, it emits an event to indicate the status change of the App Agent. Parameters:
 * @param args - The arguments of the transaction. {@link AppAgentsCompleteDestroyAppAgentArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appAgentsCompleteDestroyAppAgent(
  args: AppAgentsCompleteDestroyAppAgentArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppAgentsCompleteDestroyAppAgentArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'completeDestroyAppAgent', args, info, options);
}

/**
 * Completes the destruction process of the App Agent.This function is used to complete the destruction process of the specified App Agent. It marks the App Agent as Destroyed and removes its metadata storage. After completion, it emits an event to indicate the status change of the App Agent. Parameters:
 */
export interface AppAgentsCompleteDestroyAppAgentTx extends ITxAction {
  actionType: TransactionType.AppAgentsCompleteDestroyAppAgent;
  arguments: AppAgentsCompleteDestroyAppAgentArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId` - The identifier of the App Agent.
 *
 * `admin` - The admin address to be removed from the list.
 *
 * `coldWallet`
 *
 */
export interface AppAgentsDisableAdminColdWalletDispatchArgs extends Args {
  /**
   *  The identifier of the App Agent.
   */
  appAgentId: BlockchainGenericId;
  /**
   *  The admin address to be removed from the list.
   */
  admin: BlockchainGenericAccount;
  coldWallet: BlockchainGenericAccount;
};

const AppAgentsDisableAdminColdWalletDispatchArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
  admin: schema.BlockchainGenericAccountSchema,
  coldWallet: schema.BlockchainGenericAccountSchema,
});

/**
 * @name appAgentsDisableAdminColdWalletDispatch
 * @description Pallet function to remove an AppAgent' admin from the list of addresses allowed to spend from a cold wallet associated with a specific App Agent.
 * @param args - The arguments of the transaction. {@link AppAgentsDisableAdminColdWalletDispatchArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appAgentsDisableAdminColdWalletDispatch(
  args: AppAgentsDisableAdminColdWalletDispatchArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppAgentsDisableAdminColdWalletDispatchArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'disableAdminColdWalletDispatch', args, info, options);
}

/**
 * Pallet function to remove an AppAgent' admin from the list of addresses allowed to spend from a cold wallet associated with a specific App Agent.
 */
export interface AppAgentsDisableAdminColdWalletDispatchTx extends ITxAction {
  actionType: TransactionType.AppAgentsDisableAdminColdWalletDispatch;
  arguments: AppAgentsDisableAdminColdWalletDispatchArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId` - Identifier of the App Agent for which the hot wallet needs to be disabled.
 *
 */
export interface AppAgentsDisableHotWalletArgs extends Args {
  /**
   *  Identifier of the App Agent for which the hot wallet needs to be disabled.
   */
  appAgentId: BlockchainGenericId;
};

const AppAgentsDisableHotWalletArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
});

/**
 * @name appAgentsDisableHotWallet
 * @summary Disables the hot wallet for a specified App Agent.
 * @description This function is a dispatchable call that allows the owner of the app agent identified by `app_agent_id` to disable the hot wallet associated with it.
 * @param args - The arguments of the transaction. {@link AppAgentsDisableHotWalletArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appAgentsDisableHotWallet(
  args: AppAgentsDisableHotWalletArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppAgentsDisableHotWalletArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'disableHotWallet', args, info, options);
}

/**
 * Disables the hot wallet for a specified App Agent.This function is a dispatchable call that allows the owner of the app agent identified by `app_agent_id` to disable the hot wallet associated with it.
 */
export interface AppAgentsDisableHotWalletTx extends ITxAction {
  actionType: TransactionType.AppAgentsDisableHotWallet;
  arguments: AppAgentsDisableHotWalletArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId` - Identifier of the App Agent for which the hot wallet needs to be enabled.
 *
 */
export interface AppAgentsEnableHotWalletArgs extends Args {
  /**
   *  Identifier of the App Agent for which the hot wallet needs to be enabled.
   */
  appAgentId: BlockchainGenericId;
};

const AppAgentsEnableHotWalletArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
});

/**
 * @name appAgentsEnableHotWallet
 * @summary Enables the hot wallet for a specified App Agent.
 * @description This function is a dispatchable call that allows the owner of the app agent identified by `app_agent_id` to enable the hot wallet associated with it.
 * @param args - The arguments of the transaction. {@link AppAgentsEnableHotWalletArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appAgentsEnableHotWallet(
  args: AppAgentsEnableHotWalletArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppAgentsEnableHotWalletArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'enableHotWallet', args, info, options);
}

/**
 * Enables the hot wallet for a specified App Agent.This function is a dispatchable call that allows the owner of the app agent identified by `app_agent_id` to enable the hot wallet associated with it.
 */
export interface AppAgentsEnableHotWalletTx extends ITxAction {
  actionType: TransactionType.AppAgentsEnableHotWallet;
  arguments: AppAgentsEnableHotWalletArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentOwner`
 *
 * `appAgentBalancePayer`
 *
 */
export interface AppAgentsForceCreateAppAgentArgs extends Args {
  appAgentOwner: BlockchainGenericAccount;
  appAgentBalancePayer: BlockchainGenericAccount;
};

const AppAgentsForceCreateAppAgentArgsSchema = z.object({
  appAgentOwner: schema.BlockchainGenericAccountSchema,
  appAgentBalancePayer: schema.BlockchainGenericAccountSchema,
});

/**
 * @name appAgentsForceCreateAppAgent
 * @description Same as `create_app_agent` but can only be called by ForceOrigin
 * @param args - The arguments of the transaction. {@link AppAgentsForceCreateAppAgentArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appAgentsForceCreateAppAgent(
  args: AppAgentsForceCreateAppAgentArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppAgentsForceCreateAppAgentArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'forceCreateAppAgent', args, info, options);
}

/**
 * Same as `create_app_agent` but can only be called by ForceOrigin
 */
export interface AppAgentsForceCreateAppAgentTx extends ITxAction {
  actionType: TransactionType.AppAgentsForceCreateAppAgent;
  arguments: AppAgentsForceCreateAppAgentArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId`
 *
 */
export interface AppAgentsForceInitiateAppAgentDestroyArgs extends Args {
  appAgentId: BlockchainGenericId;
};

const AppAgentsForceInitiateAppAgentDestroyArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
});

/**
 * @name appAgentsForceInitiateAppAgentDestroy
 * @description Force initiates the destroy of an AppAgent.
 * @param args - The arguments of the transaction. {@link AppAgentsForceInitiateAppAgentDestroyArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appAgentsForceInitiateAppAgentDestroy(
  args: AppAgentsForceInitiateAppAgentDestroyArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppAgentsForceInitiateAppAgentDestroyArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'forceInitiateAppAgentDestroy', args, info, options);
}

/**
 * Force initiates the destroy of an AppAgent.
 */
export interface AppAgentsForceInitiateAppAgentDestroyTx extends ITxAction {
  actionType: TransactionType.AppAgentsForceInitiateAppAgentDestroy;
  arguments: AppAgentsForceInitiateAppAgentDestroyArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId`
 *
 */
export interface AppAgentsForceInitiateAppAgentSuspensionArgs extends Args {
  appAgentId: BlockchainGenericId;
};

const AppAgentsForceInitiateAppAgentSuspensionArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
});

/**
 * @name appAgentsForceInitiateAppAgentSuspension
 * @description Force initiates the suspension of an AppAgent.
 * @param args - The arguments of the transaction. {@link AppAgentsForceInitiateAppAgentSuspensionArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appAgentsForceInitiateAppAgentSuspension(
  args: AppAgentsForceInitiateAppAgentSuspensionArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppAgentsForceInitiateAppAgentSuspensionArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'forceInitiateAppAgentSuspension', args, info, options);
}

/**
 * Force initiates the suspension of an AppAgent.
 */
export interface AppAgentsForceInitiateAppAgentSuspensionTx extends ITxAction {
  actionType: TransactionType.AppAgentsForceInitiateAppAgentSuspension;
  arguments: AppAgentsForceInitiateAppAgentSuspensionArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId`
 *
 */
export interface AppAgentsForceInitiateAppAgentUnsuspensionArgs extends Args {
  appAgentId: BlockchainGenericId;
};

const AppAgentsForceInitiateAppAgentUnsuspensionArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
});

/**
 * @name appAgentsForceInitiateAppAgentUnsuspension
 * @description Force initiates the un-suspension of an AppAgent.
 * @param args - The arguments of the transaction. {@link AppAgentsForceInitiateAppAgentUnsuspensionArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appAgentsForceInitiateAppAgentUnsuspension(
  args: AppAgentsForceInitiateAppAgentUnsuspensionArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppAgentsForceInitiateAppAgentUnsuspensionArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'forceInitiateAppAgentUnsuspension', args, info, options);
}

/**
 * Force initiates the un-suspension of an AppAgent.
 */
export interface AppAgentsForceInitiateAppAgentUnsuspensionTx extends ITxAction {
  actionType: TransactionType.AppAgentsForceInitiateAppAgentUnsuspension;
  arguments: AppAgentsForceInitiateAppAgentUnsuspensionArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId` - The identifier of the App Agent to be deleted.
 *
 */
export interface AppAgentsInitiateDestroyAppAgentArgs extends Args {
  /**
   *  The identifier of the App Agent to be deleted.
   */
  appAgentId: BlockchainGenericId;
};

const AppAgentsInitiateDestroyAppAgentArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
});

/**
 * @name appAgentsInitiateDestroyAppAgent
 * @summary Initiate destroy of an App Agent.
 * @description This function marks the specified `app_agent_id` as ready for deletion. It first checks if the App Agent exists in the storage. If the App Agent exists and is active, it sets the status to "destroy initiated" to prepare it for deletion. It then emits an event to indicate that the deletion process has been initiated for the App Agent.
 * @param args - The arguments of the transaction. {@link AppAgentsInitiateDestroyAppAgentArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appAgentsInitiateDestroyAppAgent(
  args: AppAgentsInitiateDestroyAppAgentArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppAgentsInitiateDestroyAppAgentArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'initiateDestroyAppAgent', args, info, options);
}

/**
 * Initiate destroy of an App Agent.This function marks the specified `app_agent_id` as ready for deletion. It first checks if the App Agent exists in the storage. If the App Agent exists and is active, it sets the status to "destroy initiated" to prepare it for deletion. It then emits an event to indicate that the deletion process has been initiated for the App Agent.
 */
export interface AppAgentsInitiateDestroyAppAgentTx extends ITxAction {
  actionType: TransactionType.AppAgentsInitiateDestroyAppAgent;
  arguments: AppAgentsInitiateDestroyAppAgentArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId` - The ID of the App Agent to be paused.
 *
 */
export interface AppAgentsPauseAppAgentArgs extends Args {
  /**
   *  The ID of the App Agent to be paused.
   */
  appAgentId: BlockchainGenericId;
};

const AppAgentsPauseAppAgentArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
});

/**
 * @name appAgentsPauseAppAgent
 * @summary Pauses the specified App Agent.
 * @description This function verifies that the caller has the necessary permissions to pause the app agent.
 * @param args - The arguments of the transaction. {@link AppAgentsPauseAppAgentArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appAgentsPauseAppAgent(
  args: AppAgentsPauseAppAgentArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppAgentsPauseAppAgentArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'pauseAppAgent', args, info, options);
}

/**
 * Pauses the specified App Agent.This function verifies that the caller has the necessary permissions to pause the app agent.
 */
export interface AppAgentsPauseAppAgentTx extends ITxAction {
  actionType: TransactionType.AppAgentsPauseAppAgent;
  arguments: AppAgentsPauseAppAgentArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId` - The identifier of the App Agent.
 *
 * `destroyInfo`
 *
 */
export interface AppAgentsProcessDestroyArgs extends Args {
  /**
   *  The identifier of the App Agent.
   */
  appAgentId: BlockchainGenericId;
  destroyInfo: AppAgentDestroyInfo;
};

const AppAgentsProcessDestroyArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
  destroyInfo: schema.AppAgentDestroyInfoSchema,
});

/**
 * @name appAgentsProcessDestroy
 * @summary Processes the destruction of assets owned by the App Agent.
 * @description This function is used to process the destruction of assets owned by the specified app agent. This extrinsic can be called multiple times to destroy all entities related to the app agent. On the first call the status of app agent changes to DestroyInProcess - after that app agent can not be reactivated. It emits `AppAgentDestroyProcessed` after the destruction process is completed. Parameters:
 * @param args - The arguments of the transaction. {@link AppAgentsProcessDestroyArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appAgentsProcessDestroy(
  args: AppAgentsProcessDestroyArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppAgentsProcessDestroyArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'processDestroy', args, info, options);
}

/**
 * Processes the destruction of assets owned by the App Agent.This function is used to process the destruction of assets owned by the specified app agent. This extrinsic can be called multiple times to destroy all entities related to the app agent. On the first call the status of app agent changes to DestroyInProcess - after that app agent can not be reactivated. It emits `AppAgentDestroyProcessed` after the destruction process is completed. Parameters:
 */
export interface AppAgentsProcessDestroyTx extends ITxAction {
  actionType: TransactionType.AppAgentsProcessDestroy;
  arguments: AppAgentsProcessDestroyArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId` - The identifier of the App Agent to be reactivated.
 *
 */
export interface AppAgentsReactivateAppAgentArgs extends Args {
  /**
   *  The identifier of the App Agent to be reactivated.
   */
  appAgentId: BlockchainGenericId;
};

const AppAgentsReactivateAppAgentArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
});

/**
 * @name appAgentsReactivateAppAgent
 * @summary Reactivates the specified App Agent.
 * @description This function is used to reactivate a previously deactivated App Agent. It checks if the App Agent exists and is in the DestroyInitiated state. If so, it verifies whether the deletion window has passed. If the deletion was initiated by the system, it attempts to process a subscription payment to prevent deletion and sets the App Agent to active status. If the deletion was triggered by the owner, it resets the App Agent to active without any checks. After reactivation, it emits an event to indicate the status change of the App Agent. Parameters:
 * @param args - The arguments of the transaction. {@link AppAgentsReactivateAppAgentArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appAgentsReactivateAppAgent(
  args: AppAgentsReactivateAppAgentArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppAgentsReactivateAppAgentArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'reactivateAppAgent', args, info, options);
}

/**
 * Reactivates the specified App Agent.This function is used to reactivate a previously deactivated App Agent. It checks if the App Agent exists and is in the DestroyInitiated state. If so, it verifies whether the deletion window has passed. If the deletion was initiated by the system, it attempts to process a subscription payment to prevent deletion and sets the App Agent to active status. If the deletion was triggered by the owner, it resets the App Agent to active without any checks. After reactivation, it emits an event to indicate the status change of the App Agent. Parameters:
 */
export interface AppAgentsReactivateAppAgentTx extends ITxAction {
  actionType: TransactionType.AppAgentsReactivateAppAgent;
  arguments: AppAgentsReactivateAppAgentArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId` - The ID of the App Agent.
 *
 * `admin` - The account ID of the admin to be removed.
 *
 */
export interface AppAgentsRemoveAdminArgs extends Args {
  /**
   *  The ID of the App Agent.
   */
  appAgentId: BlockchainGenericId;
  /**
   *  The account ID of the admin to be removed.
   */
  admin: BlockchainGenericAccount;
};

const AppAgentsRemoveAdminArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
  admin: schema.BlockchainGenericAccountSchema,
});

/**
 * @name appAgentsRemoveAdmin
 * @summary Removes an admin from the App Agent.
 * @description This function is used to remove an admin from the App Agent. The caller must be the current owner of the App Agent, and the admin must be present in the list of admins. The function also releases the reserved admin deposit amount.
 * @param args - The arguments of the transaction. {@link AppAgentsRemoveAdminArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appAgentsRemoveAdmin(
  args: AppAgentsRemoveAdminArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppAgentsRemoveAdminArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'removeAdmin', args, info, options);
}

/**
 * Removes an admin from the App Agent.This function is used to remove an admin from the App Agent. The caller must be the current owner of the App Agent, and the admin must be present in the list of admins. The function also releases the reserved admin deposit amount.
 */
export interface AppAgentsRemoveAdminTx extends ITxAction {
  actionType: TransactionType.AppAgentsRemoveAdmin;
  arguments: AppAgentsRemoveAdminArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId` - The identifier of the App Agent.
 *
 * `admin` - The account ID of the admin being removed.
 *
 * `namedAddress` - The named address from which the admin is being removed.
 *
 */
export interface AppAgentsRemoveAdminFromNamedAddressDispatchArgs extends Args {
  /**
   *  The identifier of the App Agent.
   */
  appAgentId: BlockchainGenericId;
  /**
   *  The account ID of the admin being removed.
   */
  admin: BlockchainGenericAccount;
  /**
   *  The named address from which the admin is being removed.
   */
  namedAddress: BlockchainGenericAccount;
};

const AppAgentsRemoveAdminFromNamedAddressDispatchArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
  admin: schema.BlockchainGenericAccountSchema,
  namedAddress: schema.BlockchainGenericAccountSchema,
});

/**
 * @name appAgentsRemoveAdminFromNamedAddressDispatch
 * @description Removes an admin from the list of permitted administrators for a named address under a specific App Agent.
 * @param args - The arguments of the transaction. {@link AppAgentsRemoveAdminFromNamedAddressDispatchArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appAgentsRemoveAdminFromNamedAddressDispatch(
  args: AppAgentsRemoveAdminFromNamedAddressDispatchArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppAgentsRemoveAdminFromNamedAddressDispatchArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'removeAdminFromNamedAddressDispatch', args, info, options);
}

/**
 * Removes an admin from the list of permitted administrators for a named address under a specific App Agent.
 */
export interface AppAgentsRemoveAdminFromNamedAddressDispatchTx extends ITxAction {
  actionType: TransactionType.AppAgentsRemoveAdminFromNamedAddressDispatch;
  arguments: AppAgentsRemoveAdminFromNamedAddressDispatchArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId` - The ID of the App Agent.
 *
 * `admin` - The account ID of the admin.
 *
 * `newPermissions`
 *
 */
export interface AppAgentsSetAdminDispatchFilterArgs extends Args {
  /**
   *  The ID of the App Agent.
   */
  appAgentId: BlockchainGenericId;
  /**
   *  The account ID of the admin.
   */
  admin: BlockchainGenericAccount;
  newPermissions: UINT64;
};

const AppAgentsSetAdminDispatchFilterArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
  admin: schema.BlockchainGenericAccountSchema,
  newPermissions: schema.UINT64Schema,
});

/**
 * @name appAgentsSetAdminDispatchFilter
 * @summary Sets the list of dispatchables callable by the specified `admin` account.
 * @description The dispatch filter allows restricting the functions that can be called by an admin. If the dispatch filter is not set for an admin, the admin can call all functions. If the dispatch filter is set, the admin can only call the functions allowed by the filter.
 * @param args - The arguments of the transaction. {@link AppAgentsSetAdminDispatchFilterArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appAgentsSetAdminDispatchFilter(
  args: AppAgentsSetAdminDispatchFilterArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppAgentsSetAdminDispatchFilterArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'setAdminDispatchFilter', args, info, options);
}

/**
 * Sets the list of dispatchables callable by the specified `admin` account.The dispatch filter allows restricting the functions that can be called by an admin. If the dispatch filter is not set for an admin, the admin can call all functions. If the dispatch filter is set, the admin can only call the functions allowed by the filter.
 */
export interface AppAgentsSetAdminDispatchFilterTx extends ITxAction {
  actionType: TransactionType.AppAgentsSetAdminDispatchFilter;
  arguments: AppAgentsSetAdminDispatchFilterArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId`
 *
 * `data` - The general information of this asset. Limited in length by `StringLimit`.
 *
 */
export interface AppAgentsSetAppAgentMetadataArgs extends Args {
  appAgentId: BlockchainGenericId;
  /**
   *  The general information of this asset. Limited in length by `StringLimit`.
   */
  data: BlockchainGenericText;
};

const AppAgentsSetAppAgentMetadataArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
  data: schema.BlockchainGenericTextSchema,
});

/**
 * @name appAgentsSetAppAgentMetadata
 * @summary Set the metadata for an asset class.
 * @description Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of the asset `class`.
 * @param args - The arguments of the transaction. {@link AppAgentsSetAppAgentMetadataArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appAgentsSetAppAgentMetadata(
  args: AppAgentsSetAppAgentMetadataArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppAgentsSetAppAgentMetadataArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'setAppAgentMetadata', args, info, options);
}

/**
 * Set the metadata for an asset class.Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of the asset `class`.
 */
export interface AppAgentsSetAppAgentMetadataTx extends ITxAction {
  actionType: TransactionType.AppAgentsSetAppAgentMetadata;
  arguments: AppAgentsSetAppAgentMetadataArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId` - The ID of the App Agent to be resumed.
 *
 */
export interface AppAgentsUnpauseAppAgentArgs extends Args {
  /**
   *  The ID of the App Agent to be resumed.
   */
  appAgentId: BlockchainGenericId;
};

const AppAgentsUnpauseAppAgentArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
});

/**
 * @name appAgentsUnpauseAppAgent
 * @summary Resumes the specified App Agent.
 * @description This function verifies that the caller has the necessary permissions to resume the app agent.
 * @param args - The arguments of the transaction. {@link AppAgentsUnpauseAppAgentArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appAgentsUnpauseAppAgent(
  args: AppAgentsUnpauseAppAgentArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppAgentsUnpauseAppAgentArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'unpauseAppAgent', args, info, options);
}

/**
 * Resumes the specified App Agent.This function verifies that the caller has the necessary permissions to resume the app agent.
 */
export interface AppAgentsUnpauseAppAgentTx extends ITxAction {
  actionType: TransactionType.AppAgentsUnpauseAppAgent;
  arguments: AppAgentsUnpauseAppAgentArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `address` - The account for which the action points balance will be set.
 *
 * `balance` - The balance of action points to be set for the specified account.
 *
 */
export interface AppResourcesSetActionPointsBalanceArgs extends Args {
  /**
   *  The account for which the action points balance will be set.
   */
  address: BlockchainGenericAccount;
  /**
   *  The balance of action points to be set for the specified account.
   */
  balance: BlockchainGenericBalance;
};

const AppResourcesSetActionPointsBalanceArgsSchema = z.object({
  address: schema.BlockchainGenericAccountSchema,
  balance: schema.BlockchainGenericBalanceSchema,
});

/**
 * @name appResourcesSetActionPointsBalance
 * @summary Sets the action points balance for a specified account.
 * @description This function allows setting the action points balance for a specified account. Parameters:
 * @param args - The arguments of the transaction. {@link AppResourcesSetActionPointsBalanceArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appResourcesSetActionPointsBalance(
  args: AppResourcesSetActionPointsBalanceArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppResourcesSetActionPointsBalanceArgsSchema.parse(args);

  return constructUnsignedTransaction('appResources', 'setActionPointsBalance', args, info, options);
}

/**
 * Sets the action points balance for a specified account.This function allows setting the action points balance for a specified account. Parameters:
 */
export interface AppResourcesSetActionPointsBalanceTx extends ITxAction {
  actionType: TransactionType.AppResourcesSetActionPointsBalance;
  arguments: AppResourcesSetActionPointsBalanceArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `address` - The account for which the clearing points balance will be set.
 *
 * `balance` - The balance of clearing points to be set for the specified account.
 *
 */
export interface AppResourcesSetClearingPointsBalanceArgs extends Args {
  /**
   *  The account for which the clearing points balance will be set.
   */
  address: BlockchainGenericAccount;
  /**
   *  The balance of clearing points to be set for the specified account.
   */
  balance: BlockchainGenericBalance;
};

const AppResourcesSetClearingPointsBalanceArgsSchema = z.object({
  address: schema.BlockchainGenericAccountSchema,
  balance: schema.BlockchainGenericBalanceSchema,
});

/**
 * @name appResourcesSetClearingPointsBalance
 * @summary Sets the clearing points balance for a specified account.
 * @description This function allows setting the clearing points balance for a specified account. Parameters:
 * @param args - The arguments of the transaction. {@link AppResourcesSetClearingPointsBalanceArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appResourcesSetClearingPointsBalance(
  args: AppResourcesSetClearingPointsBalanceArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppResourcesSetClearingPointsBalanceArgsSchema.parse(args);

  return constructUnsignedTransaction('appResources', 'setClearingPointsBalance', args, info, options);
}

/**
 * Sets the clearing points balance for a specified account.This function allows setting the clearing points balance for a specified account. Parameters:
 */
export interface AppResourcesSetClearingPointsBalanceTx extends ITxAction {
  actionType: TransactionType.AppResourcesSetClearingPointsBalance;
  arguments: AppResourcesSetClearingPointsBalanceArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `details` - The details of the subscription tier to be created.
 *
 */
export interface AppSubscriptionsCreateAppSubscriptionTierArgs extends Args {
  /**
   *  The details of the subscription tier to be created.
   */
  details: AppSubscriptionTierDetails;
};

const AppSubscriptionsCreateAppSubscriptionTierArgsSchema = z.object({
  details: schema.AppSubscriptionTierDetailsSchema,
});

/**
 * @name appSubscriptionsCreateAppSubscriptionTier
 * @summary Creates a new subscription tier with the provided details.
 * @description This function is used to create a new subscription tier with the specified details. It generates a unique identifier for the tier, inserts the tier into storage, updates the next tier ID, and emits an event to indicate the creation of the subscription tier. Parameters:
 * @param args - The arguments of the transaction. {@link AppSubscriptionsCreateAppSubscriptionTierArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appSubscriptionsCreateAppSubscriptionTier(
  args: AppSubscriptionsCreateAppSubscriptionTierArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppSubscriptionsCreateAppSubscriptionTierArgsSchema.parse(args);

  return constructUnsignedTransaction('appSubscriptions', 'createAppSubscriptionTier', args, info, options);
}

/**
 * Creates a new subscription tier with the provided details.This function is used to create a new subscription tier with the specified details. It generates a unique identifier for the tier, inserts the tier into storage, updates the next tier ID, and emits an event to indicate the creation of the subscription tier. Parameters:
 */
export interface AppSubscriptionsCreateAppSubscriptionTierTx extends ITxAction {
  actionType: TransactionType.AppSubscriptionsCreateAppSubscriptionTier;
  arguments: AppSubscriptionsCreateAppSubscriptionTierArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `tierToObsolete`
 *
 * `successorTier`
 *
 */
export interface AppSubscriptionsObsoleteAppSubscriptionTierArgs extends Args {
  tierToObsolete: BlockchainGenericId;
  successorTier: BlockchainGenericId;
};

const AppSubscriptionsObsoleteAppSubscriptionTierArgsSchema = z.object({
  tierToObsolete: schema.BlockchainGenericIdSchema,
  successorTier: schema.BlockchainGenericIdSchema,
});

/**
 * @name appSubscriptionsObsoleteAppSubscriptionTier
 * @summary Updates the details or status of an existing subscription tier.
 * @description This function is used to patch the details or status of an existing subscription tier identified by its ID. It retrieves the tier from storage, updates its details or status based on the provided patch, and stores the updated tier back into storage. After patching, it emits an event to indicate the changes made to the subscription tier. Parameters:
 * @param args - The arguments of the transaction. {@link AppSubscriptionsObsoleteAppSubscriptionTierArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appSubscriptionsObsoleteAppSubscriptionTier(
  args: AppSubscriptionsObsoleteAppSubscriptionTierArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppSubscriptionsObsoleteAppSubscriptionTierArgsSchema.parse(args);

  return constructUnsignedTransaction('appSubscriptions', 'obsoleteAppSubscriptionTier', args, info, options);
}

/**
 * Updates the details or status of an existing subscription tier.This function is used to patch the details or status of an existing subscription tier identified by its ID. It retrieves the tier from storage, updates its details or status based on the provided patch, and stores the updated tier back into storage. After patching, it emits an event to indicate the changes made to the subscription tier. Parameters:
 */
export interface AppSubscriptionsObsoleteAppSubscriptionTierTx extends ITxAction {
  actionType: TransactionType.AppSubscriptionsObsoleteAppSubscriptionTier;
  arguments: AppSubscriptionsObsoleteAppSubscriptionTierArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId` - The identifier of the subscriber (app agent).
 *
 * `payOnDemandMode` - The pay-on-demand mode to be set for the subscription.
 *
 */
export interface AppSubscriptionsSetAppPayOnDemandModeArgs extends Args {
  /**
   *  The identifier of the subscriber (app agent).
   */
  appAgentId: BlockchainGenericId;
  /**
   *  The pay-on-demand mode to be set for the subscription.
   */
  payOnDemandMode: AppPayOnDemandMode;
};

const AppSubscriptionsSetAppPayOnDemandModeArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
  payOnDemandMode: schema.AppPayOnDemandModeSchema,
});

/**
 * @name appSubscriptionsSetAppPayOnDemandMode
 * @summary Sets the pay-on-demand mode for an app agent's subscription.
 * @description This function allows setting the pay-on-demand mode for an app agent's subscription. Parameters:
 * @param args - The arguments of the transaction. {@link AppSubscriptionsSetAppPayOnDemandModeArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appSubscriptionsSetAppPayOnDemandMode(
  args: AppSubscriptionsSetAppPayOnDemandModeArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppSubscriptionsSetAppPayOnDemandModeArgsSchema.parse(args);

  return constructUnsignedTransaction('appSubscriptions', 'setAppPayOnDemandMode', args, info, options);
}

/**
 * Sets the pay-on-demand mode for an app agent's subscription.This function allows setting the pay-on-demand mode for an app agent's subscription. Parameters:
 */
export interface AppSubscriptionsSetAppPayOnDemandModeTx extends ITxAction {
  actionType: TransactionType.AppSubscriptionsSetAppPayOnDemandMode;
  arguments: AppSubscriptionsSetAppPayOnDemandModeArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId` - The identifier of the app agent whose subscription tier is to be changed.
 *
 * `subscriptionTierId` - The identifier of the new subscription tier to be assigned to the app agent.
 *
 */
export interface AppSubscriptionsSetAppSubscriptionTierArgs extends Args {
  /**
   *  The identifier of the app agent whose subscription tier is to be changed.
   */
  appAgentId: BlockchainGenericId;
  /**
   *  The identifier of the new subscription tier to be assigned to the app agent.
   */
  subscriptionTierId: BlockchainGenericId;
};

const AppSubscriptionsSetAppSubscriptionTierArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
  subscriptionTierId: schema.BlockchainGenericIdSchema,
});

/**
 * @name appSubscriptionsSetAppSubscriptionTier
 * @summary Changes the subscription tier of an app agent.
 * @description This function allows changing the subscription tier of an app agent identified by its subscriber ID. It calculates the difference in price between the current and new tiers and adjusts the subscription limits accordingly. If the new tier is more expensive, it charges the delta payment and updates the action points and clearing points balances for the current billing period. After the adjustment, it updates the subscription tier information for the app agent and emits an event indicating the change in subscription tier. Parameters:
 * @param args - The arguments of the transaction. {@link AppSubscriptionsSetAppSubscriptionTierArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appSubscriptionsSetAppSubscriptionTier(
  args: AppSubscriptionsSetAppSubscriptionTierArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppSubscriptionsSetAppSubscriptionTierArgsSchema.parse(args);

  return constructUnsignedTransaction('appSubscriptions', 'setAppSubscriptionTier', args, info, options);
}

/**
 * Changes the subscription tier of an app agent.This function allows changing the subscription tier of an app agent identified by its subscriber ID. It calculates the difference in price between the current and new tiers and adjusts the subscription limits accordingly. If the new tier is more expensive, it charges the delta payment and updates the action points and clearing points balances for the current billing period. After the adjustment, it updates the subscription tier information for the app agent and emits an event indicating the change in subscription tier. Parameters:
 */
export interface AppSubscriptionsSetAppSubscriptionTierTx extends ITxAction {
  actionType: TransactionType.AppSubscriptionsSetAppSubscriptionTier;
  arguments: AppSubscriptionsSetAppSubscriptionTierArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId`
 *
 * `extraFeePayer`
 *
 * `atomics`
 *
 */
export interface AppTransactionsForceSubmitClearingTransactionArgs extends Args {
  appAgentId: BlockchainGenericId;
  extraFeePayer: BlockchainGenericAccount;
  atomics: CTAtomicActions;
};

const AppTransactionsForceSubmitClearingTransactionArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
  extraFeePayer: schema.BlockchainGenericAccountSchema,
  atomics: schema.CTAtomicActionsSchema,
});

/**
 * @name appTransactionsForceSubmitClearingTransaction
 * @summary Submit a Clearing transaction with root permissions.
 * @description CT consists of a number of Atomics. Each Atomic consists of a number of Actions. Atomics are executed atomically - if an action within an atomic fails, then the entire atomic is no-op. Atomics within a CT are processed independently of each other. In case of errors, method takes additional fee from `extra_fee_payer`.
 * @param args - The arguments of the transaction. {@link AppTransactionsForceSubmitClearingTransactionArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appTransactionsForceSubmitClearingTransaction(
  args: AppTransactionsForceSubmitClearingTransactionArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppTransactionsForceSubmitClearingTransactionArgsSchema.parse(args);

  return constructUnsignedTransaction('appTransactions', 'forceSubmitClearingTransaction', args, info, options);
}

/**
 * Submit a Clearing transaction with root permissions.CT consists of a number of Atomics. Each Atomic consists of a number of Actions. Atomics are executed atomically - if an action within an atomic fails, then the entire atomic is no-op. Atomics within a CT are processed independently of each other. In case of errors, method takes additional fee from `extra_fee_payer`.
 */
export interface AppTransactionsForceSubmitClearingTransactionTx extends ITxAction {
  actionType: TransactionType.AppTransactionsForceSubmitClearingTransaction;
  arguments: AppTransactionsForceSubmitClearingTransactionArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId`
 *
 * `atomics`
 *
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
 * Submit a Clearing transaction.CT consists of a number of Atomics. Each Atomic consists of a number of Actions. Atomics are executed atomically - if an action within an atomic fails, then the entire atomic is no-op. Atomics within a CT are processed independently of each other. In case of errors, method takes additional fee from admin that submitted СT (origin).
 */
export interface AppTransactionsSubmitClearingTransactionTx extends ITxAction {
  actionType: TransactionType.AppTransactionsSubmitClearingTransaction;
  arguments: AppTransactionsSubmitClearingTransactionArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `senderAccount` - The account ID of the sender address for the new transfer channel.
 *
 * `transfersLimitResetPeriod` - The number of blocks after which the transfer limit resets
 *
 * `transfersLimitPerPeriod` - The number of transfers allowed per period
 *
 */
export interface AppTransferChannelsEstablishTransferChannelArgs extends Args {
  /**
   *  The account ID of the sender address for the new transfer channel.
   */
  senderAccount: BlockchainGenericAccount;
  /**
   *  The number of blocks after which the transfer limit resets
   */
  transfersLimitResetPeriod: BlockchainGenericId;
  /**
   *  The number of transfers allowed per period
   */
  transfersLimitPerPeriod: BlockchainGenericBalance;
};

const AppTransferChannelsEstablishTransferChannelArgsSchema = z.object({
  senderAccount: schema.BlockchainGenericAccountSchema,
  transfersLimitResetPeriod: schema.BlockchainGenericIdSchema,
  transfersLimitPerPeriod: schema.BlockchainGenericBalanceSchema,
});

/**
 * @name appTransferChannelsEstablishTransferChannel
 * @summary Establishes a new transfer channel between two accounts.
 * @description This extrinsic allows the account specified by `origin` to establish a new transfer channel between itself (`recipient_account`) and the `sender_account`. The function checks various conditions, including ensuring that the recipient is not the same as the sender address and that the recipient is a valid transactional address (TA). If all conditions are met, a new transfer channel is created with an initial set of parameters, and an event is emitted to indicate the successful channel establishment. This method can be called only by a Transactional address. Which means this call can be submitted only within a Clearing transaction. Thus implicit cost of creation of a Transfer channel - 1 Action point, cost of adding an action in a Clearing transaction.
 * @param args - The arguments of the transaction. {@link AppTransferChannelsEstablishTransferChannelArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appTransferChannelsEstablishTransferChannel(
  args: AppTransferChannelsEstablishTransferChannelArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppTransferChannelsEstablishTransferChannelArgsSchema.parse(args);

  return constructUnsignedTransaction('appTransferChannels', 'establishTransferChannel', args, info, options);
}

/**
 * Establishes a new transfer channel between two accounts.This extrinsic allows the account specified by `origin` to establish a new transfer channel between itself (`recipient_account`) and the `sender_account`. The function checks various conditions, including ensuring that the recipient is not the same as the sender address and that the recipient is a valid transactional address (TA). If all conditions are met, a new transfer channel is created with an initial set of parameters, and an event is emitted to indicate the successful channel establishment. This method can be called only by a Transactional address. Which means this call can be submitted only within a Clearing transaction. Thus implicit cost of creation of a Transfer channel - 1 Action point, cost of adding an action in a Clearing transaction.
 */
export interface AppTransferChannelsEstablishTransferChannelTx extends ITxAction {
  actionType: TransactionType.AppTransferChannelsEstablishTransferChannel;
  arguments: AppTransferChannelsEstablishTransferChannelArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `senderAccount` - The account ID of the sender address for the transfer channel to be removed.
 *
 */
export interface AppTransferChannelsRemoveTransferChannelArgs extends Args {
  /**
   *  The account ID of the sender address for the transfer channel to be removed.
   */
  senderAccount: BlockchainGenericAccount;
};

const AppTransferChannelsRemoveTransferChannelArgsSchema = z.object({
  senderAccount: schema.BlockchainGenericAccountSchema,
});

/**
 * @name appTransferChannelsRemoveTransferChannel
 * @summary Removes a transfer channel between two accounts.
 * @description This extrinsic allows the account specified by `origin` to remove a previously created transfer channel between itself and the `sender_account`. The function checks various conditions, including ensuring that the recipient is not the same as the sender address and that a transfer channel exists between them. If all conditions are met, the transfer channel is removed, and an event is emitted to indicate the successful removal. This method can be called only by a Transactional address. Which means this call can be submitted only within a Clearing transaction. Thus implicit cost of creation of a Transfer channel - 1 Action point, cost of adding an action in a Clearing transaction.
 * @param args - The arguments of the transaction. {@link AppTransferChannelsRemoveTransferChannelArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appTransferChannelsRemoveTransferChannel(
  args: AppTransferChannelsRemoveTransferChannelArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppTransferChannelsRemoveTransferChannelArgsSchema.parse(args);

  return constructUnsignedTransaction('appTransferChannels', 'removeTransferChannel', args, info, options);
}

/**
 * Removes a transfer channel between two accounts.This extrinsic allows the account specified by `origin` to remove a previously created transfer channel between itself and the `sender_account`. The function checks various conditions, including ensuring that the recipient is not the same as the sender address and that a transfer channel exists between them. If all conditions are met, the transfer channel is removed, and an event is emitted to indicate the successful removal. This method can be called only by a Transactional address. Which means this call can be submitted only within a Clearing transaction. Thus implicit cost of creation of a Transfer channel - 1 Action point, cost of adding an action in a Clearing transaction.
 */
export interface AppTransferChannelsRemoveTransferChannelTx extends ITxAction {
  actionType: TransactionType.AppTransferChannelsRemoveTransferChannel;
  arguments: AppTransferChannelsRemoveTransferChannelArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId`
 *
 * `keylessAddress`
 *
 */
export interface AppTransferFiltersBlockAddressDepositsArgs extends Args {
  appAgentId: BlockchainGenericId;
  keylessAddress: BlockchainGenericAccount;
};

const AppTransferFiltersBlockAddressDepositsArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
  keylessAddress: schema.BlockchainGenericAccountSchema,
});

/**
 * @name appTransferFiltersBlockAddressDeposits
 * @summary Blocks deposits to a keyless address controlled by a specific app agent.
 * @description * `app_agent_id` - The ID of the app agent. * `keyless_address` - The keyless address (controlled by AppAgent) to block. * `DispatchResult` - Indicates whether the transaction was successful or failed. Returns an error if: * The keyless address is already blocked (`Error::<T>::KeylessAddressDepositsAlreadyBlocked`).
 * @param args - The arguments of the transaction. {@link AppTransferFiltersBlockAddressDepositsArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appTransferFiltersBlockAddressDeposits(
  args: AppTransferFiltersBlockAddressDepositsArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppTransferFiltersBlockAddressDepositsArgsSchema.parse(args);

  return constructUnsignedTransaction('appTransferFilters', 'blockAddressDeposits', args, info, options);
}

/**
 * Blocks deposits to a keyless address controlled by a specific app agent.* `app_agent_id` - The ID of the app agent. * `keyless_address` - The keyless address (controlled by AppAgent) to block. * `DispatchResult` - Indicates whether the transaction was successful or failed. Returns an error if: * The keyless address is already blocked (`Error::<T>::KeylessAddressDepositsAlreadyBlocked`).
 */
export interface AppTransferFiltersBlockAddressDepositsTx extends ITxAction {
  actionType: TransactionType.AppTransferFiltersBlockAddressDeposits;
  arguments: AppTransferFiltersBlockAddressDepositsArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId` - The identifier of the application agent for which the deposit permissions are being set.
 *
 * `permissions` - The deposit permissions to be set for the application agent.
 *
 */
export interface AppTransferFiltersSetAppDepositPermissionsArgs extends Args {
  /**
   *  The identifier of the application agent for which the deposit permissions are being set.
   */
  appAgentId: BlockchainGenericId;
  /**
   *  The deposit permissions to be set for the application agent.
   */
  permissions: AppDepositPermissions;
};

const AppTransferFiltersSetAppDepositPermissionsArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
  permissions: schema.AppDepositPermissionsSchema,
});

/**
 * @name appTransferFiltersSetAppDepositPermissions
 * @summary Sets the transdepositfer permissions for the specified app_agent_id under the authority of the caller's origin.
 * @description This function allows the owner/admin of the app_agent_id to set the deposit permissions for the application agent. The caller must provide a valid origin that proves their authority over the app_agent_id. The permissions parameter represents the new deposit permissions to be set for the application agent.
 * @param args - The arguments of the transaction. {@link AppTransferFiltersSetAppDepositPermissionsArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appTransferFiltersSetAppDepositPermissions(
  args: AppTransferFiltersSetAppDepositPermissionsArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppTransferFiltersSetAppDepositPermissionsArgsSchema.parse(args);

  return constructUnsignedTransaction('appTransferFilters', 'setAppDepositPermissions', args, info, options);
}

/**
 * Sets the transdepositfer permissions for the specified app_agent_id under the authority of the caller's origin.This function allows the owner/admin of the app_agent_id to set the deposit permissions for the application agent. The caller must provide a valid origin that proves their authority over the app_agent_id. The permissions parameter represents the new deposit permissions to be set for the application agent.
 */
export interface AppTransferFiltersSetAppDepositPermissionsTx extends ITxAction {
  actionType: TransactionType.AppTransferFiltersSetAppDepositPermissions;
  arguments: AppTransferFiltersSetAppDepositPermissionsArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId`
 *
 * `keylessAddress`
 *
 */
export interface AppTransferFiltersUnblockAddressDepositsArgs extends Args {
  appAgentId: BlockchainGenericId;
  keylessAddress: BlockchainGenericAccount;
};

const AppTransferFiltersUnblockAddressDepositsArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
  keylessAddress: schema.BlockchainGenericAccountSchema,
});

/**
 * @name appTransferFiltersUnblockAddressDeposits
 * @summary Unblocks deposits to a keyless address controlled by a specific app agent.
 * @description * `app_agent_id` - The ID of the app agent. * `keyless_address` - The keyless address to unblock. * `DispatchResult` - Indicates whether the transaction was successful or failed. Returns an error if: * The keyless address is not blocked (`Error::<T>::KeylessAddressDepositsAreNotBlocked`).
 * @param args - The arguments of the transaction. {@link AppTransferFiltersUnblockAddressDepositsArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appTransferFiltersUnblockAddressDeposits(
  args: AppTransferFiltersUnblockAddressDepositsArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  AppTransferFiltersUnblockAddressDepositsArgsSchema.parse(args);

  return constructUnsignedTransaction('appTransferFilters', 'unblockAddressDeposits', args, info, options);
}

/**
 * Unblocks deposits to a keyless address controlled by a specific app agent.* `app_agent_id` - The ID of the app agent. * `keyless_address` - The keyless address to unblock. * `DispatchResult` - Indicates whether the transaction was successful or failed. Returns an error if: * The keyless address is not blocked (`Error::<T>::KeylessAddressDepositsAreNotBlocked`).
 */
export interface AppTransferFiltersUnblockAddressDepositsTx extends ITxAction {
  actionType: TransactionType.AppTransferFiltersUnblockAddressDeposits;
  arguments: AppTransferFiltersUnblockAddressDepositsArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `id` - The identifier of the asset to have some amount burned.
 *
 * `who` - The account to be debited from.
 *
 * `amount` - The maximum amount by which `who`'s balance should be reduced.
 *
 */
export interface AssetsBurnArgs extends Args {
  /**
   *  The identifier of the asset to have some amount burned.
   */
  id: BlockchainGenericId;
  /**
   *  The account to be debited from.
   */
  who: BlockchainGenericAccountId;
  /**
   *  The maximum amount by which `who`'s balance should be reduced.
   */
  amount: BlockchainGenericBalance;
};

const AssetsBurnArgsSchema = z.object({
  id: schema.BlockchainGenericIdSchema,
  who: schema.BlockchainGenericAccountIdSchema,
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
 * Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.Origin must be Signed and the sender should be the Manager of the asset `id`. Bails with `NoAccount` if the `who` is already dead.
 */
export interface AssetsBurnTx extends ITxAction {
  actionType: TransactionType.AssetsBurn;
  arguments: AssetsBurnArgs;
};

/**
 * Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.Origin must be Signed and the sender should be the Manager of the asset `id`. Bails with `NoAccount` if the `who` is already dead.
 */
export interface AssetsBurnAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsBurn;
  arguments: AssetsBurnArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `minBalance`
 *
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
 * `id` - The identifier of the asset to be destroyed. This must identify an existing asset.
 *
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
 * Destroy all accounts associated with a given asset.`destroy_accounts` should only be called after `start_destroy` has been called, and the asset is in a `Destroying` state. Due to weight restrictions, this function may need to be called multiple times to fully destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time.
 */
export interface AssetsDestroyAccountsTx extends ITxAction {
  actionType: TransactionType.AssetsDestroyAccounts;
  arguments: AssetsDestroyAccountsArgs;
};

/**
 * Destroy all accounts associated with a given asset.`destroy_accounts` should only be called after `start_destroy` has been called, and the asset is in a `Destroying` state. Due to weight restrictions, this function may need to be called multiple times to fully destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time.
 */
export interface AssetsDestroyAccountsAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsDestroyAccounts;
  arguments: AssetsDestroyAccountsArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `id` - The identifier of the asset to be destroyed. This must identify an existing asset.
 *
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
 * Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit).`destroy_approvals` should only be called after `start_destroy` has been called, and the asset is in a `Destroying` state. Due to weight restrictions, this function may need to be called multiple times to fully destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time.
 */
export interface AssetsDestroyApprovalsTx extends ITxAction {
  actionType: TransactionType.AssetsDestroyApprovals;
  arguments: AssetsDestroyApprovalsArgs;
};

/**
 * Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit).`destroy_approvals` should only be called after `start_destroy` has been called, and the asset is in a `Destroying` state. Due to weight restrictions, this function may need to be called multiple times to fully destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time.
 */
export interface AssetsDestroyApprovalsAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsDestroyApprovals;
  arguments: AssetsDestroyApprovalsArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `id` - The identifier of the asset to be destroyed. This must identify an existing asset.
 *
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
 * Complete destroying asset and unreserve currency.`finish_destroy` should only be called after `start_destroy` has been called, and the asset is in a `Destroying` state. All accounts or approvals should be destroyed before hand.
 */
export interface AssetsFinishDestroyTx extends ITxAction {
  actionType: TransactionType.AssetsFinishDestroy;
  arguments: AssetsFinishDestroyArgs;
};

/**
 * Complete destroying asset and unreserve currency.`finish_destroy` should only be called after `start_destroy` has been called, and the asset is in a `Destroying` state. All accounts or approvals should be destroyed before hand.
 */
export interface AssetsFinishDestroyAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsFinishDestroy;
  arguments: AssetsFinishDestroyArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `id` - The identifier of the asset to have some amount transferred.
 *
 * `source` - The account to be debited.
 *
 * `dest` - The account to be credited.
 *
 * `amount` - The amount by which the `source`'s balance of assets should be reduced and `dest`'s balance increased. The amount actually transferred may be slightly greater in the case that the transfer would otherwise take the `source` balance above zero but below the minimum balance. Must be greater than zero.
 *
 */
export interface AssetsForceTransferArgs extends Args {
  /**
   *  The identifier of the asset to have some amount transferred.
   */
  id: BlockchainGenericId;
  /**
   *  The account to be debited.
   */
  source: BlockchainGenericAccountId;
  /**
   *  The account to be credited.
   */
  dest: BlockchainGenericAccountId;
  /**
   *  The amount by which the `source`'s balance of assets should be reduced and `dest`'s balance increased. The amount actually transferred may be slightly greater in the case that the transfer would otherwise take the `source` balance above zero but below the minimum balance. Must be greater than zero.
   */
  amount: BlockchainGenericBalance;
};

const AssetsForceTransferArgsSchema = z.object({
  id: schema.BlockchainGenericIdSchema,
  source: schema.BlockchainGenericAccountIdSchema,
  dest: schema.BlockchainGenericAccountIdSchema,
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
 * Move some assets from one account to another.Origin must be Signed and the sender should be the Admin of the asset `id`.
 */
export interface AssetsForceTransferTx extends ITxAction {
  actionType: TransactionType.AssetsForceTransfer;
  arguments: AssetsForceTransferArgs;
};

/**
 * Move some assets from one account to another.Origin must be Signed and the sender should be the Admin of the asset `id`.
 */
export interface AssetsForceTransferAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsForceTransfer;
  arguments: AssetsForceTransferArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `id` - The identifier of the asset to be frozen.
 *
 * `who` - The account to be frozen.
 *
 */
export interface AssetsFreezeAccountArgs extends Args {
  /**
   *  The identifier of the asset to be frozen.
   */
  id: BlockchainGenericId;
  /**
   *  The account to be frozen.
   */
  who: BlockchainGenericAccountId;
};

const AssetsFreezeAccountArgsSchema = z.object({
  id: schema.BlockchainGenericIdSchema,
  who: schema.BlockchainGenericAccountIdSchema,
});

/**
 * @name assetsFreeze
 * @summary Disallow further unprivileged transfers of an asset `id` from an account `who`.
 * @description `who` must already exist as an entry in `Account`s of the asset. If you want to freeze an account that does not have an entry, use `touch_other` first. Origin must be Signed and the sender should be the Freezer of the asset `id`.
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
 * Disallow further unprivileged transfers of an asset `id` from an account `who`.`who` must already exist as an entry in `Account`s of the asset. If you want to freeze an account that does not have an entry, use `touch_other` first. Origin must be Signed and the sender should be the Freezer of the asset `id`.
 */
export interface AssetsFreezeAccountTx extends ITxAction {
  actionType: TransactionType.AssetsFreezeAccount;
  arguments: AssetsFreezeAccountArgs;
};

/**
 * Disallow further unprivileged transfers of an asset `id` from an account `who`.`who` must already exist as an entry in `Account`s of the asset. If you want to freeze an account that does not have an entry, use `touch_other` first. Origin must be Signed and the sender should be the Freezer of the asset `id`.
 */
export interface AssetsFreezeAccountAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsFreezeAccount;
  arguments: AssetsFreezeAccountArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `id` - The identifier of the asset to be frozen.
 *
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
 * Disallow further unprivileged transfers for the asset class.Origin must be Signed and the sender should be the Freezer of the asset `id`.
 */
export interface AssetsFreezeAssetTx extends ITxAction {
  actionType: TransactionType.AssetsFreezeAsset;
  arguments: AssetsFreezeAssetArgs;
};

/**
 * Disallow further unprivileged transfers for the asset class.Origin must be Signed and the sender should be the Freezer of the asset `id`.
 */
export interface AssetsFreezeAssetAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsFreezeAsset;
  arguments: AssetsFreezeAssetArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `id` - The identifier of the asset to have some amount minted.
 *
 * `beneficiary` - The account to be credited with the minted assets.
 *
 * `amount` - The amount of the asset to be minted.
 *
 */
export interface AssetsMintArgs extends Args {
  /**
   *  The identifier of the asset to have some amount minted.
   */
  id: BlockchainGenericId;
  /**
   *  The account to be credited with the minted assets.
   */
  beneficiary: BlockchainGenericAccountId;
  /**
   *  The amount of the asset to be minted.
   */
  amount: BlockchainGenericBalance;
};

const AssetsMintArgsSchema = z.object({
  id: schema.BlockchainGenericIdSchema,
  beneficiary: schema.BlockchainGenericAccountIdSchema,
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
 * Mint assets of a particular class.The origin must be Signed and the sender must be the Issuer of the asset `id`.
 */
export interface AssetsMintTx extends ITxAction {
  actionType: TransactionType.AssetsMint;
  arguments: AssetsMintArgs;
};

/**
 * Mint assets of a particular class.The origin must be Signed and the sender must be the Issuer of the asset `id`.
 */
export interface AssetsMintAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsMint;
  arguments: AssetsMintArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `id` - The identifier of the asset to update.
 *
 * `data` - The data of metadata. Limited in length by `StringLimit`.
 *
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
 * Set the raw metadata for an asset.Origin must be Signed and the sender should be the Owner of the asset `id`. Funds of sender are reserved according to the formula: `MetadataDepositBase + MetadataDepositPerByte * (data.len)` taking into account any already reserved funds.
 */
export interface AssetsSetMetadataTx extends ITxAction {
  actionType: TransactionType.AssetsSetMetadata;
  arguments: AssetsSetMetadataArgs;
};

/**
 * Set the raw metadata for an asset.Origin must be Signed and the sender should be the Owner of the asset `id`. Funds of sender are reserved according to the formula: `MetadataDepositBase + MetadataDepositPerByte * (data.len)` taking into account any already reserved funds.
 */
export interface AssetsSetMetadataAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsSetMetadata;
  arguments: AssetsSetMetadataArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `id` - The identifier of the asset.
 *
 * `minBalance` - The new value of `min_balance`.
 *
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
 * Sets the minimum balance of an asset.Only works if there aren't any accounts that are holding the asset or if the new value of `min_balance` is less than the old one. Origin must be Signed and the sender has to be the Owner of the asset `id`.
 */
export interface AssetsSetMinBalanceTx extends ITxAction {
  actionType: TransactionType.AssetsSetMinBalance;
  arguments: AssetsSetMinBalanceArgs;
};

/**
 * Sets the minimum balance of an asset.Only works if there aren't any accounts that are holding the asset or if the new value of `min_balance` is less than the old one. Origin must be Signed and the sender has to be the Owner of the asset `id`.
 */
export interface AssetsSetMinBalanceAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsSetMinBalance;
  arguments: AssetsSetMinBalanceArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `id` - The identifier of the asset to be destroyed. This must identify an existing asset.
 *
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
 * Start the process of destroying a fungible asset class.`start_destroy` is the first in a series of extrinsics that should be called, to allow destruction of an asset class. The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`.
 */
export interface AssetsStartDestroyTx extends ITxAction {
  actionType: TransactionType.AssetsStartDestroy;
  arguments: AssetsStartDestroyArgs;
};

/**
 * Start the process of destroying a fungible asset class.`start_destroy` is the first in a series of extrinsics that should be called, to allow destruction of an asset class. The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`.
 */
export interface AssetsStartDestroyAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsStartDestroy;
  arguments: AssetsStartDestroyArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `id` - The identifier of the asset to be frozen.
 *
 * `who` - The account to be unfrozen.
 *
 */
export interface AssetsThawAccountArgs extends Args {
  /**
   *  The identifier of the asset to be frozen.
   */
  id: BlockchainGenericId;
  /**
   *  The account to be unfrozen.
   */
  who: BlockchainGenericAccountId;
};

const AssetsThawAccountArgsSchema = z.object({
  id: schema.BlockchainGenericIdSchema,
  who: schema.BlockchainGenericAccountIdSchema,
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
 * Allow unprivileged transfers to and from an account again.Origin must be Signed and the sender should be the Admin of the asset `id`.
 */
export interface AssetsThawAccountTx extends ITxAction {
  actionType: TransactionType.AssetsThawAccount;
  arguments: AssetsThawAccountArgs;
};

/**
 * Allow unprivileged transfers to and from an account again.Origin must be Signed and the sender should be the Admin of the asset `id`.
 */
export interface AssetsThawAccountAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsThawAccount;
  arguments: AssetsThawAccountArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `id` - The identifier of the asset to be thawed.
 *
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
 * Allow unprivileged transfers for the asset again.Origin must be Signed and the sender should be the Admin of the asset `id`.
 */
export interface AssetsThawAssetTx extends ITxAction {
  actionType: TransactionType.AssetsThawAsset;
  arguments: AssetsThawAssetArgs;
};

/**
 * Allow unprivileged transfers for the asset again.Origin must be Signed and the sender should be the Admin of the asset `id`.
 */
export interface AssetsThawAssetAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsThawAsset;
  arguments: AssetsThawAssetArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `id` - The identifier of the asset to have some amount transferred.
 *
 * `target` - The account to be credited.
 *
 * `amount` - The amount by which the sender's balance of assets should be reduced and `target`'s balance increased. The amount actually transferred may be slightly greater in the case that the transfer would otherwise take the sender balance above zero but below the minimum balance. Must be greater than zero.
 *
 */
export interface AssetsTransferArgs extends Args {
  /**
   *  The identifier of the asset to have some amount transferred.
   */
  id: BlockchainGenericId;
  /**
   *  The account to be credited.
   */
  target: BlockchainGenericAccountId;
  /**
   *  The amount by which the sender's balance of assets should be reduced and `target`'s balance increased. The amount actually transferred may be slightly greater in the case that the transfer would otherwise take the sender balance above zero but below the minimum balance. Must be greater than zero.
   */
  amount: BlockchainGenericBalance;
};

const AssetsTransferArgsSchema = z.object({
  id: schema.BlockchainGenericIdSchema,
  target: schema.BlockchainGenericAccountIdSchema,
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
 * Move some assets from the sender account to another.Origin must be Signed.
 */
export interface AssetsTransferTx extends ITxAction {
  actionType: TransactionType.AssetsTransfer;
  arguments: AssetsTransferArgs;
};

/**
 * Move some assets from the sender account to another.Origin must be Signed.
 */
export interface AssetsTransferAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsTransfer;
  arguments: AssetsTransferArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `id` - The identifier of the asset to have some amount transferred.
 *
 * `target` - The account to be credited.
 *
 * `amount` - The amount by which the sender's balance of assets should be reduced and `target`'s balance increased. The amount actually transferred may be slightly greater in the case that the transfer would otherwise take the sender balance above zero but below the minimum balance. Must be greater than zero.
 *
 */
export interface AssetsTransferKeepAliveArgs extends Args {
  /**
   *  The identifier of the asset to have some amount transferred.
   */
  id: BlockchainGenericId;
  /**
   *  The account to be credited.
   */
  target: BlockchainGenericAccountId;
  /**
   *  The amount by which the sender's balance of assets should be reduced and `target`'s balance increased. The amount actually transferred may be slightly greater in the case that the transfer would otherwise take the sender balance above zero but below the minimum balance. Must be greater than zero.
   */
  amount: BlockchainGenericBalance;
};

const AssetsTransferKeepAliveArgsSchema = z.object({
  id: schema.BlockchainGenericIdSchema,
  target: schema.BlockchainGenericAccountIdSchema,
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
 * Move some assets from the sender account to another, keeping the sender account alive.Origin must be Signed.
 */
export interface AssetsTransferKeepAliveTx extends ITxAction {
  actionType: TransactionType.AssetsTransferKeepAlive;
  arguments: AssetsTransferKeepAliveArgs;
};

/**
 * Move some assets from the sender account to another, keeping the sender account alive.Origin must be Signed.
 */
export interface AssetsTransferKeepAliveAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsTransferKeepAlive;
  arguments: AssetsTransferKeepAliveArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `id` - The identifier of the asset.
 *
 * `owner` - The new Owner of this asset.
 *
 */
export interface AssetsTransferOwnershipArgs extends Args {
  /**
   *  The identifier of the asset.
   */
  id: BlockchainGenericId;
  /**
   *  The new Owner of this asset.
   */
  owner: BlockchainGenericAccountId;
};

const AssetsTransferOwnershipArgsSchema = z.object({
  id: schema.BlockchainGenericIdSchema,
  owner: schema.BlockchainGenericAccountIdSchema,
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
 * Change the Owner of an asset.Origin must be Signed and the sender should be the Owner of the asset `id`.
 */
export interface AssetsTransferOwnershipTx extends ITxAction {
  actionType: TransactionType.AssetsTransferOwnership;
  arguments: AssetsTransferOwnershipArgs;
};

/**
 * Change the Owner of an asset.Origin must be Signed and the sender should be the Owner of the asset `id`.
 */
export interface AssetsTransferOwnershipAction extends ICTAtomicAction {
  actionType: TransactionType.AssetsTransferOwnership;
  arguments: AssetsTransferOwnershipArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `dest` - The recipient of the transfer.
 *
 * `keepAlive`
 *
 */
export interface BalancesTransferAllArgs extends Args {
  /**
   *  The recipient of the transfer.
   */
  dest: BlockchainGenericAccountId;
  keepAlive: BlockchainGenericBoolean;
};

const BalancesTransferAllArgsSchema = z.object({
  dest: schema.BlockchainGenericAccountIdSchema,
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
 * Transfer the entire transferable balance from the caller account.NOTE: This function only attempts to transfer _transferable_ balances. This means that any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be transferred by this function. To ensure that this function results in a killed account, you might need to prepare the account by removing any reference counters, storage deposits, etc... The dispatch origin of this call must be Signed.
 */
export interface BalancesTransferAllTx extends ITxAction {
  actionType: TransactionType.BalancesTransferAll;
  arguments: BalancesTransferAllArgs;
};

/**
 * Transfer the entire transferable balance from the caller account.NOTE: This function only attempts to transfer _transferable_ balances. This means that any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be transferred by this function. To ensure that this function results in a killed account, you might need to prepare the account by removing any reference counters, storage deposits, etc... The dispatch origin of this call must be Signed.
 */
export interface BalancesTransferAllAction extends ICTAtomicAction {
  actionType: TransactionType.BalancesTransferAll;
  arguments: BalancesTransferAllArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `dest`
 *
 * `value`
 *
 */
export interface BalancesTransferAllowDeathArgs extends Args {
  dest: BlockchainGenericAccountId;
  value: BlockchainGenericBalance;
};

const BalancesTransferAllowDeathArgsSchema = z.object({
  dest: schema.BlockchainGenericAccountIdSchema,
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
 * Transfer some liquid free balance to another account.`transfer_allow_death` will set the `FreeBalance` of the sender and receiver. If the sender's account is below the existential deposit as a result of the transfer, the account will be reaped. The dispatch origin for this call must be `Signed` by the transactor.
 */
export interface BalancesTransferAllowDeathTx extends ITxAction {
  actionType: TransactionType.BalancesTransferAllowDeath;
  arguments: BalancesTransferAllowDeathArgs;
};

/**
 * Transfer some liquid free balance to another account.`transfer_allow_death` will set the `FreeBalance` of the sender and receiver. If the sender's account is below the existential deposit as a result of the transfer, the account will be reaped. The dispatch origin for this call must be `Signed` by the transactor.
 */
export interface BalancesTransferAllowDeathAction extends ICTAtomicAction {
  actionType: TransactionType.BalancesTransferAllowDeath;
  arguments: BalancesTransferAllowDeathArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `dest`
 *
 * `value`
 *
 */
export interface BalancesTransferKeepAliveArgs extends Args {
  dest: BlockchainGenericAccountId;
  value: BlockchainGenericBalance;
};

const BalancesTransferKeepAliveArgsSchema = z.object({
  dest: schema.BlockchainGenericAccountIdSchema,
  value: schema.BlockchainGenericBalanceSchema,
});

/**
 * @name balancesTransferKeepAlive
 * @summary Same as the [`transfer_allow_death`] call, but with a check that the transfer will not kill the origin account.
 * @description 99% of the time you want [`transfer_allow_death`] instead. [`transfer_allow_death`]: struct.Pallet.html#method.transfer
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
 * Same as the [`transfer_allow_death`] call, but with a check that the transfer will not kill the origin account.99% of the time you want [`transfer_allow_death`] instead. [`transfer_allow_death`]: struct.Pallet.html#method.transfer
 */
export interface BalancesTransferKeepAliveTx extends ITxAction {
  actionType: TransactionType.BalancesTransferKeepAlive;
  arguments: BalancesTransferKeepAliveArgs;
};

/**
 * Same as the [`transfer_allow_death`] call, but with a check that the transfer will not kill the origin account.99% of the time you want [`transfer_allow_death`] instead. [`transfer_allow_death`]: struct.Pallet.html#method.transfer
 */
export interface BalancesTransferKeepAliveAction extends ICTAtomicAction {
  actionType: TransactionType.BalancesTransferKeepAlive;
  arguments: BalancesTransferKeepAliveArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `collection` - The collection of the item to be burned.
 *
 * `item` - The item to be burned.
 *
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
 * Destroy a single item.The origin must conform to `ForceOrigin` or must be Signed and the signing account must be the owner of the `item`.
 */
export interface NftsBurnItemTx extends ITxAction {
  actionType: TransactionType.NftsBurnItem;
  arguments: NftsBurnItemArgs;
};

/**
 * Destroy a single item.The origin must conform to `ForceOrigin` or must be Signed and the signing account must be the owner of the `item`.
 */
export interface NftsBurnItemAction extends ICTAtomicAction {
  actionType: TransactionType.NftsBurnItem;
  arguments: NftsBurnItemArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `collection` - The identifier of the collection whose metadata to clear.
 *
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
 * Clear the metadata for a collection.Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of the `collection`. Any deposit is freed for the collection's owner.
 */
export interface NftsClearCollectionMetadataTx extends ITxAction {
  actionType: TransactionType.NftsClearCollectionMetadata;
  arguments: NftsClearCollectionMetadataArgs;
};

/**
 * Clear the metadata for a collection.Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of the `collection`. Any deposit is freed for the collection's owner.
 */
export interface NftsClearCollectionMetadataAction extends ICTAtomicAction {
  actionType: TransactionType.NftsClearCollectionMetadata;
  arguments: NftsClearCollectionMetadataArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `collection` - The identifier of the collection whose item's metadata to clear.
 *
 * `item` - The identifier of the item whose metadata to clear.
 *
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
 * Clear the metadata for an item.Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the `collection`. Any deposit is freed for the collection's owner.
 */
export interface NftsClearItemMetadataTx extends ITxAction {
  actionType: TransactionType.NftsClearItemMetadata;
  arguments: NftsClearItemMetadataArgs;
};

/**
 * Clear the metadata for an item.Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the `collection`. Any deposit is freed for the collection's owner.
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
 * `collection` - The identifier of the collection to be destroyed.
 *
 * `witness` - Information on the items minted in the collection. This must be correct.
 *
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
 * Destroy a collection of fungible items.The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the owner of the `collection`. NOTE: The collection must have 0 items to be destroyed.
 */
export interface NftsDestroyCollectionTx extends ITxAction {
  actionType: TransactionType.NftsDestroyCollection;
  arguments: NftsDestroyCollectionArgs;
};

/**
 * Destroy a collection of fungible items.The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the owner of the `collection`. NOTE: The collection must have 0 items to be destroyed.
 */
export interface NftsDestroyCollectionAction extends ICTAtomicAction {
  actionType: TransactionType.NftsDestroyCollection;
  arguments: NftsDestroyCollectionArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `collection` - The collection of the item to be changed.
 *
 * `item` - The item to become non-transferable.
 *
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
 * Disallow further unprivileged transfer of an item.Origin must be Signed and the sender should be the Freezer of the `collection`.
 */
export interface NftsLockItemTransferTx extends ITxAction {
  actionType: TransactionType.NftsLockItemTransfer;
  arguments: NftsLockItemTransferArgs;
};

/**
 * Disallow further unprivileged transfer of an item.Origin must be Signed and the sender should be the Freezer of the `collection`.
 */
export interface NftsLockItemTransferAction extends ICTAtomicAction {
  actionType: TransactionType.NftsLockItemTransfer;
  arguments: NftsLockItemTransferArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `collection`
 *
 * `item`
 *
 * `mintTo`
 *
 */
export interface NftsMintItemArgs extends Args {
  collection: BlockchainGenericId;
  item: BlockchainGenericId;
  mintTo: BlockchainGenericAccountId;
};

const NftsMintItemArgsSchema = z.object({
  collection: schema.BlockchainGenericIdSchema,
  item: schema.BlockchainGenericIdSchema,
  mintTo: schema.BlockchainGenericAccountIdSchema,
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
 * `maybeCollection` - The identifier of the collection whose ownership the signer is willing to accept, or if `None`, an indication that the signer is willing to accept no ownership transferal.
 *
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
 * Set (or reset) the acceptance of ownership for a particular account.Origin must be `Signed` and if `maybe_collection` is `Some`, then the signer must have a provider reference.
 */
export interface NftsAcceptCollectionOwnershipTx extends ITxAction {
  actionType: TransactionType.NftsAcceptCollectionOwnership;
  arguments: NftsAcceptCollectionOwnershipArgs;
};

/**
 * Set (or reset) the acceptance of ownership for a particular account.Origin must be `Signed` and if `maybe_collection` is `Some`, then the signer must have a provider reference.
 */
export interface NftsAcceptCollectionOwnershipAction extends ICTAtomicAction {
  actionType: TransactionType.NftsAcceptCollectionOwnership;
  arguments: NftsAcceptCollectionOwnershipArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `collection` - The identifier of the item whose metadata to update.
 *
 * `data` - The general information of this item. Limited in length by `StringLimit`.
 *
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
 * Set the metadata for a collection.Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of the `collection`. If the origin is `Signed`, then funds of signer are reserved according to the formula: `MetadataDepositBase + DepositPerByte * data.len` taking into account any already reserved funds.
 */
export interface NftsSetCollectionMetadataTx extends ITxAction {
  actionType: TransactionType.NftsSetCollectionMetadata;
  arguments: NftsSetCollectionMetadataArgs;
};

/**
 * Set the metadata for a collection.Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of the `collection`. If the origin is `Signed`, then funds of signer are reserved according to the formula: `MetadataDepositBase + DepositPerByte * data.len` taking into account any already reserved funds.
 */
export interface NftsSetCollectionMetadataAction extends ICTAtomicAction {
  actionType: TransactionType.NftsSetCollectionMetadata;
  arguments: NftsSetCollectionMetadataArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `collection` - The identifier of the collection whose item's metadata to set.
 *
 * `item` - The identifier of the item whose metadata to set.
 *
 * `data` - The general information of this item. Limited in length by `StringLimit`.
 *
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
 * Set the metadata for an item.Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the `collection`. If the origin is Signed, then funds of signer are reserved according to the formula: `MetadataDepositBase + DepositPerByte * data.len` taking into account any already reserved funds.
 */
export interface NftsSetItemMetadataTx extends ITxAction {
  actionType: TransactionType.NftsSetItemMetadata;
  arguments: NftsSetItemMetadataArgs;
};

/**
 * Set the metadata for an item.Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the `collection`. If the origin is Signed, then funds of signer are reserved according to the formula: `MetadataDepositBase + DepositPerByte * data.len` taking into account any already reserved funds.
 */
export interface NftsSetItemMetadataAction extends ICTAtomicAction {
  actionType: TransactionType.NftsSetItemMetadata;
  arguments: NftsSetItemMetadataArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `collection` - The collection of the item to be transferred.
 *
 * `item` - The item to be transferred.
 *
 * `dest` - The account to receive ownership of the item.
 *
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
  dest: BlockchainGenericAccountId;
};

const NftsTransferItemArgsSchema = z.object({
  collection: schema.BlockchainGenericIdSchema,
  item: schema.BlockchainGenericIdSchema,
  dest: schema.BlockchainGenericAccountIdSchema,
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
 * Move an item from the sender account to another.Origin must be Signed and the signing account must be either:
 */
export interface NftsTransferItemTx extends ITxAction {
  actionType: TransactionType.NftsTransferItem;
  arguments: NftsTransferItemArgs;
};

/**
 * Move an item from the sender account to another.Origin must be Signed and the signing account must be either:
 */
export interface NftsTransferItemAction extends ICTAtomicAction {
  actionType: TransactionType.NftsTransferItem;
  arguments: NftsTransferItemArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `collection` - The collection whose owner should be changed.
 *
 * `newOwner`
 *
 */
export interface NftsTransferCollectionOwnershipArgs extends Args {
  /**
   *  The collection whose owner should be changed.
   */
  collection: BlockchainGenericId;
  newOwner: BlockchainGenericAccountId;
};

const NftsTransferCollectionOwnershipArgsSchema = z.object({
  collection: schema.BlockchainGenericIdSchema,
  newOwner: schema.BlockchainGenericAccountIdSchema,
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
 * Change the Owner of a collection.Origin must be Signed and the sender should be the Owner of the `collection`.
 */
export interface NftsTransferCollectionOwnershipTx extends ITxAction {
  actionType: TransactionType.NftsTransferCollectionOwnership;
  arguments: NftsTransferCollectionOwnershipArgs;
};

/**
 * Change the Owner of a collection.Origin must be Signed and the sender should be the Owner of the `collection`.
 */
export interface NftsTransferCollectionOwnershipAction extends ICTAtomicAction {
  actionType: TransactionType.NftsTransferCollectionOwnership;
  arguments: NftsTransferCollectionOwnershipArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `collection` - The collection of the item to be changed.
 *
 * `item` - The item to become transferable.
 *
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
 * Re-allow unprivileged transfer of an item.Origin must be Signed and the sender should be the Freezer of the `collection`.
 */
export interface NftsUnlockItemTransferTx extends ITxAction {
  actionType: TransactionType.NftsUnlockItemTransfer;
  arguments: NftsUnlockItemTransferArgs;
};

/**
 * Re-allow unprivileged transfer of an item.Origin must be Signed and the sender should be the Freezer of the `collection`.
 */
export interface NftsUnlockItemTransferAction extends ICTAtomicAction {
  actionType: TransactionType.NftsUnlockItemTransfer;
  arguments: NftsUnlockItemTransferArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId`
 *
 * `addresses`
 *
 */
export interface UserFreeTransactionsAppAgentBlacklistAddressArgs extends Args {
  appAgentId: BlockchainGenericId;
  addresses: BlockchainGenericAccountList;
};

const UserFreeTransactionsAppAgentBlacklistAddressArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
  addresses: schema.BlockchainGenericAccountListSchema,
});

/**
 * @name userFreeTransactionsAppAgentBlacklistAddress
 * @summary Blacklist an address by an app agent.
 * @description Only callable by an admin of the app agent.
 * @param args - The arguments of the transaction. {@link UserFreeTransactionsAppAgentBlacklistAddressArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function userFreeTransactionsAppAgentBlacklistAddress(
  args: UserFreeTransactionsAppAgentBlacklistAddressArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  UserFreeTransactionsAppAgentBlacklistAddressArgsSchema.parse(args);

  return constructUnsignedTransaction('userFreeTransactions', 'appAgentBlacklistAddress', args, info, options);
}

/**
 * Blacklist an address by an app agent.Only callable by an admin of the app agent.
 */
export interface UserFreeTransactionsAppAgentBlacklistAddressTx extends ITxAction {
  actionType: TransactionType.UserFreeTransactionsAppAgentBlacklistAddress;
  arguments: UserFreeTransactionsAppAgentBlacklistAddressArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `appAgentId`
 *
 * `addresses`
 *
 */
export interface UserFreeTransactionsAppAgentUnblacklistAddressArgs extends Args {
  appAgentId: BlockchainGenericId;
  addresses: BlockchainGenericAccountList;
};

const UserFreeTransactionsAppAgentUnblacklistAddressArgsSchema = z.object({
  appAgentId: schema.BlockchainGenericIdSchema,
  addresses: schema.BlockchainGenericAccountListSchema,
});

/**
 * @name userFreeTransactionsAppAgentUnblacklistAddress
 * @summary Unblacklist an address by an app agent.
 * @description Only callable by an admin of the app agent.
 * @param args - The arguments of the transaction. {@link UserFreeTransactionsAppAgentUnblacklistAddressArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function userFreeTransactionsAppAgentUnblacklistAddress(
  args: UserFreeTransactionsAppAgentUnblacklistAddressArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  UserFreeTransactionsAppAgentUnblacklistAddressArgsSchema.parse(args);

  return constructUnsignedTransaction('userFreeTransactions', 'appAgentUnblacklistAddress', args, info, options);
}

/**
 * Unblacklist an address by an app agent.Only callable by an admin of the app agent.
 */
export interface UserFreeTransactionsAppAgentUnblacklistAddressTx extends ITxAction {
  actionType: TransactionType.UserFreeTransactionsAppAgentUnblacklistAddress;
  arguments: UserFreeTransactionsAppAgentUnblacklistAddressArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `addresses`
 *
 */
export interface UserFreeTransactionsBlacklistAddressArgs extends Args {
  addresses: BlockchainGenericAccountList;
};

const UserFreeTransactionsBlacklistAddressArgsSchema = z.object({
  addresses: schema.BlockchainGenericAccountListSchema,
});

/**
 * @name userFreeTransactionsBlacklistAddress
 * @summary Blacklist an address.
 * @description Only callable by the ForceOrigin.
 * @param args - The arguments of the transaction. {@link UserFreeTransactionsBlacklistAddressArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function userFreeTransactionsBlacklistAddress(
  args: UserFreeTransactionsBlacklistAddressArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  UserFreeTransactionsBlacklistAddressArgsSchema.parse(args);

  return constructUnsignedTransaction('userFreeTransactions', 'blacklistAddress', args, info, options);
}

/**
 * Blacklist an address.Only callable by the ForceOrigin.
 */
export interface UserFreeTransactionsBlacklistAddressTx extends ITxAction {
  actionType: TransactionType.UserFreeTransactionsBlacklistAddress;
  arguments: UserFreeTransactionsBlacklistAddressArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 */
export interface UserFreeTransactionsClearAppAgentsFreeTransferInfosArgs extends Args {
};

const UserFreeTransactionsClearAppAgentsFreeTransferInfosArgsSchema = z.object({
});

/**
 * @name userFreeTransactionsClearAppAgentsFreeTransferInfos
 * @summary Clear free transfer infos of appagents.
 * @description Only callable by the ForceOrigin.
 * @param args - The arguments of the transaction. {@link UserFreeTransactionsClearAppAgentsFreeTransferInfosArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function userFreeTransactionsClearAppAgentsFreeTransferInfos(
  args: UserFreeTransactionsClearAppAgentsFreeTransferInfosArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  UserFreeTransactionsClearAppAgentsFreeTransferInfosArgsSchema.parse(args);

  return constructUnsignedTransaction('userFreeTransactions', 'clearAppAgentsFreeTransferInfos', args, info, options);
}

/**
 * Clear free transfer infos of appagents.Only callable by the ForceOrigin.
 */
export interface UserFreeTransactionsClearAppAgentsFreeTransferInfosTx extends ITxAction {
  actionType: TransactionType.UserFreeTransactionsClearAppAgentsFreeTransferInfos;
  arguments: UserFreeTransactionsClearAppAgentsFreeTransferInfosArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 */
export interface UserFreeTransactionsClearAssetLastTransferBlocksArgs extends Args {
};

const UserFreeTransactionsClearAssetLastTransferBlocksArgsSchema = z.object({
});

/**
 * @name userFreeTransactionsClearAssetLastTransferBlocks
 * @summary Clear last transfers of fingible tokens.
 * @description Only callable by the ForceOrigin.
 * @param args - The arguments of the transaction. {@link UserFreeTransactionsClearAssetLastTransferBlocksArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function userFreeTransactionsClearAssetLastTransferBlocks(
  args: UserFreeTransactionsClearAssetLastTransferBlocksArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  UserFreeTransactionsClearAssetLastTransferBlocksArgsSchema.parse(args);

  return constructUnsignedTransaction('userFreeTransactions', 'clearAssetLastTransferBlocks', args, info, options);
}

/**
 * Clear last transfers of fingible tokens.Only callable by the ForceOrigin.
 */
export interface UserFreeTransactionsClearAssetLastTransferBlocksTx extends ITxAction {
  actionType: TransactionType.UserFreeTransactionsClearAssetLastTransferBlocks;
  arguments: UserFreeTransactionsClearAssetLastTransferBlocksArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 */
export interface UserFreeTransactionsClearNftLastTransferBlocksArgs extends Args {
};

const UserFreeTransactionsClearNftLastTransferBlocksArgsSchema = z.object({
});

/**
 * @name userFreeTransactionsClearNftLastTransferBlocks
 * @summary Clear last transfers of NFTs.
 * @description Only callable by the ForceOrigin.
 * @param args - The arguments of the transaction. {@link UserFreeTransactionsClearNftLastTransferBlocksArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function userFreeTransactionsClearNftLastTransferBlocks(
  args: UserFreeTransactionsClearNftLastTransferBlocksArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  UserFreeTransactionsClearNftLastTransferBlocksArgsSchema.parse(args);

  return constructUnsignedTransaction('userFreeTransactions', 'clearNftLastTransferBlocks', args, info, options);
}

/**
 * Clear last transfers of NFTs.Only callable by the ForceOrigin.
 */
export interface UserFreeTransactionsClearNftLastTransferBlocksTx extends ITxAction {
  actionType: TransactionType.UserFreeTransactionsClearNftLastTransferBlocks;
  arguments: UserFreeTransactionsClearNftLastTransferBlocksArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 */
export interface UserFreeTransactionsClearUserFreeTransferInfosArgs extends Args {
};

const UserFreeTransactionsClearUserFreeTransferInfosArgsSchema = z.object({
});

/**
 * @name userFreeTransactionsClearUserFreeTransferInfos
 * @summary Clear free transfer infos of users.
 * @description Only callable by the ForceOrigin.
 * @param args - The arguments of the transaction. {@link UserFreeTransactionsClearUserFreeTransferInfosArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function userFreeTransactionsClearUserFreeTransferInfos(
  args: UserFreeTransactionsClearUserFreeTransferInfosArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  UserFreeTransactionsClearUserFreeTransferInfosArgsSchema.parse(args);

  return constructUnsignedTransaction('userFreeTransactions', 'clearUserFreeTransferInfos', args, info, options);
}

/**
 * Clear free transfer infos of users.Only callable by the ForceOrigin.
 */
export interface UserFreeTransactionsClearUserFreeTransferInfosTx extends ITxAction {
  actionType: TransactionType.UserFreeTransactionsClearUserFreeTransferInfos;
  arguments: UserFreeTransactionsClearUserFreeTransferInfosArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `enabled`
 *
 */
export interface UserFreeTransactionsSetFreeTransfersEnabledArgs extends Args {
  enabled: BlockchainGenericBoolean;
};

const UserFreeTransactionsSetFreeTransfersEnabledArgsSchema = z.object({
  enabled: schema.BlockchainGenericBooleanSchema,
});

/**
 * @name userFreeTransactionsSetFreeTransfersEnabled
 * @summary Enable or disable free transfers.
 * @description Only callable by the ForceOrigin.
 * @param args - The arguments of the transaction. {@link UserFreeTransactionsSetFreeTransfersEnabledArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function userFreeTransactionsSetFreeTransfersEnabled(
  args: UserFreeTransactionsSetFreeTransfersEnabledArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  UserFreeTransactionsSetFreeTransfersEnabledArgsSchema.parse(args);

  return constructUnsignedTransaction('userFreeTransactions', 'setFreeTransfersEnabled', args, info, options);
}

/**
 * Enable or disable free transfers.Only callable by the ForceOrigin.
 */
export interface UserFreeTransactionsSetFreeTransfersEnabledTx extends ITxAction {
  actionType: TransactionType.UserFreeTransactionsSetFreeTransfersEnabled;
  arguments: UserFreeTransactionsSetFreeTransfersEnabledArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `addresses`
 *
 */
export interface UserFreeTransactionsUnblacklistAddressArgs extends Args {
  addresses: BlockchainGenericAccountList;
};

const UserFreeTransactionsUnblacklistAddressArgsSchema = z.object({
  addresses: schema.BlockchainGenericAccountListSchema,
});

/**
 * @name userFreeTransactionsUnblacklistAddress
 * @summary Unblacklist an address.
 * @description Only callable by the ForceOrigin.
 * @param args - The arguments of the transaction. {@link UserFreeTransactionsUnblacklistAddressArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function userFreeTransactionsUnblacklistAddress(
  args: UserFreeTransactionsUnblacklistAddressArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  UserFreeTransactionsUnblacklistAddressArgsSchema.parse(args);

  return constructUnsignedTransaction('userFreeTransactions', 'unblacklistAddress', args, info, options);
}

/**
 * Unblacklist an address.Only callable by the ForceOrigin.
 */
export interface UserFreeTransactionsUnblacklistAddressTx extends ITxAction {
  actionType: TransactionType.UserFreeTransactionsUnblacklistAddress;
  arguments: UserFreeTransactionsUnblacklistAddressArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `dest`
 *
 * `keepAlive`
 *
 */
export interface UserTransactionsSubmitTransferAllBalancesArgs extends Args {
  dest: BlockchainGenericAccount;
  keepAlive: BlockchainGenericBoolean;
};

const UserTransactionsSubmitTransferAllBalancesArgsSchema = z.object({
  dest: schema.BlockchainGenericAccountSchema,
  keepAlive: schema.BlockchainGenericBooleanSchema,
});

/**
 * @name userTransactionsSubmitTransferAllBalances
 * @description Submits a transfer_all call using the given parameter Works similar to `submit_transfer_balances`
 * @param args - The arguments of the transaction. {@link UserTransactionsSubmitTransferAllBalancesArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function userTransactionsSubmitTransferAllBalances(
  args: UserTransactionsSubmitTransferAllBalancesArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  UserTransactionsSubmitTransferAllBalancesArgsSchema.parse(args);

  return constructUnsignedTransaction('userTransactions', 'submitTransferAllBalances', args, info, options);
}

/**
 * Submits a transfer_all call using the given parameter Works similar to `submit_transfer_balances`
 */
export interface UserTransactionsSubmitTransferAllBalancesTx extends ITxAction {
  actionType: TransactionType.UserTransactionsSubmitTransferAllBalances;
  arguments: UserTransactionsSubmitTransferAllBalancesArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `id`
 *
 * `target`
 *
 * `amount`
 *
 */
export interface UserTransactionsSubmitTransferAssetsArgs extends Args {
  id: BlockchainGenericId;
  target: BlockchainGenericAccount;
  amount: BlockchainGenericBalance;
};

const UserTransactionsSubmitTransferAssetsArgsSchema = z.object({
  id: schema.BlockchainGenericIdSchema,
  target: schema.BlockchainGenericAccountSchema,
  amount: schema.BlockchainGenericBalanceSchema,
});

/**
 * @name userTransactionsSubmitTransferAssets
 * @summary Submits a transfer of assets using the provided runtime call.
 * @description This function performs the following steps: 1. Verifies the origin and retrieves the caller's account ID. 2. Builds a runtime call for transferring the specified assets. 3. Processes the call. * `origin`: The runtime origin. * `id`: The asset ID to be transferred. * `target`: The target account ID. * `amount`: The amount of assets to transfer. Returns a `DispatchResultWithPostInfo` indicating whether the transfer was successful. Returns an error if:
 * @param args - The arguments of the transaction. {@link UserTransactionsSubmitTransferAssetsArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function userTransactionsSubmitTransferAssets(
  args: UserTransactionsSubmitTransferAssetsArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  UserTransactionsSubmitTransferAssetsArgsSchema.parse(args);

  return constructUnsignedTransaction('userTransactions', 'submitTransferAssets', args, info, options);
}

/**
 * Submits a transfer of assets using the provided runtime call.This function performs the following steps: 1. Verifies the origin and retrieves the caller's account ID. 2. Builds a runtime call for transferring the specified assets. 3. Processes the call. * `origin`: The runtime origin. * `id`: The asset ID to be transferred. * `target`: The target account ID. * `amount`: The amount of assets to transfer. Returns a `DispatchResultWithPostInfo` indicating whether the transfer was successful. Returns an error if:
 */
export interface UserTransactionsSubmitTransferAssetsTx extends ITxAction {
  actionType: TransactionType.UserTransactionsSubmitTransferAssets;
  arguments: UserTransactionsSubmitTransferAssetsArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `dest`
 *
 * `value`
 *
 */
export interface UserTransactionsSubmitTransferBalancesArgs extends Args {
  dest: BlockchainGenericAccount;
  value: BlockchainGenericBalance;
};

const UserTransactionsSubmitTransferBalancesArgsSchema = z.object({
  dest: schema.BlockchainGenericAccountSchema,
  value: schema.BlockchainGenericBalanceSchema,
});

/**
 * @name userTransactionsSubmitTransferBalances
 * @summary Submits a transfer using the provided runtime call.
 * @description 1. Verifies the origin and retrieves the caller's account ID. 2. Checks if the call is allowed by the specified filters. 3. If the call is for a target recipient:
 * @param args - The arguments of the transaction. {@link UserTransactionsSubmitTransferBalancesArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function userTransactionsSubmitTransferBalances(
  args: UserTransactionsSubmitTransferBalancesArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  UserTransactionsSubmitTransferBalancesArgsSchema.parse(args);

  return constructUnsignedTransaction('userTransactions', 'submitTransferBalances', args, info, options);
}

/**
 * Submits a transfer using the provided runtime call.1. Verifies the origin and retrieves the caller's account ID. 2. Checks if the call is allowed by the specified filters. 3. If the call is for a target recipient:
 */
export interface UserTransactionsSubmitTransferBalancesTx extends ITxAction {
  actionType: TransactionType.UserTransactionsSubmitTransferBalances;
  arguments: UserTransactionsSubmitTransferBalancesArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `collection`
 *
 * `item`
 *
 * `dest`
 *
 */
export interface UserTransactionsSubmitTransferNftsArgs extends Args {
  collection: BlockchainGenericId;
  item: BlockchainGenericId;
  dest: BlockchainGenericAccount;
};

const UserTransactionsSubmitTransferNftsArgsSchema = z.object({
  collection: schema.BlockchainGenericIdSchema,
  item: schema.BlockchainGenericIdSchema,
  dest: schema.BlockchainGenericAccountSchema,
});

/**
 * @name userTransactionsSubmitTransferNfts
 * @summary Submits a transfer of NFTs using the provided runtime call.
 * @description This function performs the following steps: 1. Verifies the origin and retrieves the caller's account ID. 2. Builds a runtime call for transferring the specified NFT. 3. Processes the call. * `origin`: The runtime origin. * `collection`: The collection ID of the NFT. * `item`: The item ID of the NFT. * `dest`: The destination account ID. Returns a `DispatchResultWithPostInfo` indicating whether the transfer was successful. Returns an error if:
 * @param args - The arguments of the transaction. {@link UserTransactionsSubmitTransferNftsArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function userTransactionsSubmitTransferNfts(
  args: UserTransactionsSubmitTransferNftsArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  UserTransactionsSubmitTransferNftsArgsSchema.parse(args);

  return constructUnsignedTransaction('userTransactions', 'submitTransferNfts', args, info, options);
}

/**
 * Submits a transfer of NFTs using the provided runtime call.This function performs the following steps: 1. Verifies the origin and retrieves the caller's account ID. 2. Builds a runtime call for transferring the specified NFT. 3. Processes the call. * `origin`: The runtime origin. * `collection`: The collection ID of the NFT. * `item`: The item ID of the NFT. * `dest`: The destination account ID. Returns a `DispatchResultWithPostInfo` indicating whether the transfer was successful. Returns an error if:
 */
export interface UserTransactionsSubmitTransferNftsTx extends ITxAction {
  actionType: TransactionType.UserTransactionsSubmitTransferNfts;
  arguments: UserTransactionsSubmitTransferNftsArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 * `user`
 *
 * `level`
 *
 */
export interface UserVerificationSetUserLevelArgs extends Args {
  user: BlockchainGenericAccount;
  level: UserLevel;
};

const UserVerificationSetUserLevelArgsSchema = z.object({
  user: schema.BlockchainGenericAccountSchema,
  level: schema.UserLevelSchema,
});

/**
 * @name userVerificationSetUserLevel
 * @param args - The arguments of the transaction. {@link UserVerificationSetUserLevelArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function userVerificationSetUserLevel(
  args: UserVerificationSetUserLevelArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  UserVerificationSetUserLevelArgsSchema.parse(args);

  return constructUnsignedTransaction('userVerification', 'setUserLevel', args, info, options);
}

/**
 */
export interface UserVerificationSetUserLevelTx extends ITxAction {
  actionType: TransactionType.UserVerificationSetUserLevel;
  arguments: UserVerificationSetUserLevelArgs;
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
  | AppAgentsCompleteDestroyAppAgentTx
  | AppAgentsDisableAdminColdWalletDispatchTx
  | AppAgentsDisableHotWalletTx
  | AppAgentsEnableHotWalletTx
  | AppAgentsForceCreateAppAgentTx
  | AppAgentsForceInitiateAppAgentDestroyTx
  | AppAgentsForceInitiateAppAgentSuspensionTx
  | AppAgentsForceInitiateAppAgentUnsuspensionTx
  | AppAgentsInitiateDestroyAppAgentTx
  | AppAgentsPauseAppAgentTx
  | AppAgentsProcessDestroyTx
  | AppAgentsReactivateAppAgentTx
  | AppAgentsRemoveAdminTx
  | AppAgentsRemoveAdminFromNamedAddressDispatchTx
  | AppAgentsSetAdminDispatchFilterTx
  | AppAgentsSetAppAgentMetadataTx
  | AppAgentsUnpauseAppAgentTx
  | AppResourcesSetActionPointsBalanceTx
  | AppResourcesSetClearingPointsBalanceTx
  | AppSubscriptionsCreateAppSubscriptionTierTx
  | AppSubscriptionsObsoleteAppSubscriptionTierTx
  | AppSubscriptionsSetAppPayOnDemandModeTx
  | AppSubscriptionsSetAppSubscriptionTierTx
  | AppTransactionsForceSubmitClearingTransactionTx
  | AppTransactionsSubmitClearingTransactionTx
  | AppTransferChannelsEstablishTransferChannelTx
  | AppTransferChannelsRemoveTransferChannelTx
  | AppTransferFiltersBlockAddressDepositsTx
  | AppTransferFiltersSetAppDepositPermissionsTx
  | AppTransferFiltersUnblockAddressDepositsTx
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
  | UserFreeTransactionsAppAgentBlacklistAddressTx
  | UserFreeTransactionsAppAgentUnblacklistAddressTx
  | UserFreeTransactionsBlacklistAddressTx
  | UserFreeTransactionsClearAppAgentsFreeTransferInfosTx
  | UserFreeTransactionsClearAssetLastTransferBlocksTx
  | UserFreeTransactionsClearNftLastTransferBlocksTx
  | UserFreeTransactionsClearUserFreeTransferInfosTx
  | UserFreeTransactionsSetFreeTransfersEnabledTx
  | UserFreeTransactionsUnblacklistAddressTx
  | UserTransactionsSubmitTransferAllBalancesTx
  | UserTransactionsSubmitTransferAssetsTx
  | UserTransactionsSubmitTransferBalancesTx
  | UserTransactionsSubmitTransferNftsTx
  | UserVerificationSetUserLevelTx
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
  | AppAgentsCompleteDestroyAppAgentArgs
  | AppAgentsDisableAdminColdWalletDispatchArgs
  | AppAgentsDisableHotWalletArgs
  | AppAgentsEnableHotWalletArgs
  | AppAgentsForceCreateAppAgentArgs
  | AppAgentsForceInitiateAppAgentDestroyArgs
  | AppAgentsForceInitiateAppAgentSuspensionArgs
  | AppAgentsForceInitiateAppAgentUnsuspensionArgs
  | AppAgentsInitiateDestroyAppAgentArgs
  | AppAgentsPauseAppAgentArgs
  | AppAgentsProcessDestroyArgs
  | AppAgentsReactivateAppAgentArgs
  | AppAgentsRemoveAdminArgs
  | AppAgentsRemoveAdminFromNamedAddressDispatchArgs
  | AppAgentsSetAdminDispatchFilterArgs
  | AppAgentsSetAppAgentMetadataArgs
  | AppAgentsUnpauseAppAgentArgs
  | AppResourcesSetActionPointsBalanceArgs
  | AppResourcesSetClearingPointsBalanceArgs
  | AppSubscriptionsCreateAppSubscriptionTierArgs
  | AppSubscriptionsObsoleteAppSubscriptionTierArgs
  | AppSubscriptionsSetAppPayOnDemandModeArgs
  | AppSubscriptionsSetAppSubscriptionTierArgs
  | AppTransactionsForceSubmitClearingTransactionArgs
  | AppTransactionsSubmitClearingTransactionArgs
  | AppTransferChannelsEstablishTransferChannelArgs
  | AppTransferChannelsRemoveTransferChannelArgs
  | AppTransferFiltersBlockAddressDepositsArgs
  | AppTransferFiltersSetAppDepositPermissionsArgs
  | AppTransferFiltersUnblockAddressDepositsArgs
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
  | UserFreeTransactionsAppAgentBlacklistAddressArgs
  | UserFreeTransactionsAppAgentUnblacklistAddressArgs
  | UserFreeTransactionsBlacklistAddressArgs
  | UserFreeTransactionsClearAppAgentsFreeTransferInfosArgs
  | UserFreeTransactionsClearAssetLastTransferBlocksArgs
  | UserFreeTransactionsClearNftLastTransferBlocksArgs
  | UserFreeTransactionsClearUserFreeTransferInfosArgs
  | UserFreeTransactionsSetFreeTransfersEnabledArgs
  | UserFreeTransactionsUnblacklistAddressArgs
  | UserTransactionsSubmitTransferAllBalancesArgs
  | UserTransactionsSubmitTransferAssetsArgs
  | UserTransactionsSubmitTransferBalancesArgs
  | UserTransactionsSubmitTransferNftsArgs
  | UserVerificationSetUserLevelArgs
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

  const unsigned: UnsignedTransaction = (() => {
    switch (actionType) {
      case TransactionType.AdminsAddAdmin: {
        return adminsAddPalletAdmin(args, info, options);
      }
      case TransactionType.AdminsRemoveAdmin: {
        return adminsRemovePalletAdmin(args, info, options);
      }
      case TransactionType.AppAgentsAddAdmin: {
        return appAgentsAddAdmin(args, info, options);
      }
      case TransactionType.AppAgentsAddAdminToNamedAddress: {
        return appAgentsAddAdminToNamedAddressDispatch(args, info, options);
      }
      case TransactionType.AppAgentsAllowAdminColdWallet: {
        return appAgentsAllowAdminColdWalletDispatch(args, info, options);
      }
      case TransactionType.AppAgentsChangeHotWallet: {
        return appAgentsChangeHotWallet(args, info, options);
      }
      case TransactionType.AppAgentsChangeOwnerCancel: {
        return appAgentsChangeOwnerCancel(args, info, options);
      }
      case TransactionType.AppAgentsChangeOwnerComplete: {
        return appAgentsChangeOwnerComplete(args, info, options);
      }
      case TransactionType.AppAgentsChangeOwnerInit: {
        return appAgentsChangeOwnerInit(args, info, options);
      }
      case TransactionType.AppAgentsClearAdminDispatchFilter: {
        return appAgentsClearAdminDispatchFilter(args, info, options);
      }
      case TransactionType.AppAgentsClearAppAgentMetadata: {
        return appAgentsClearAppAgentMetadata(args, info, options);
      }
      case TransactionType.AppAgentsCompleteDestroyAppAgent: {
        return appAgentsCompleteDestroyAppAgent(args, info, options);
      }
      case TransactionType.AppAgentsDisableAdminColdWalletDispatch: {
        return appAgentsDisableAdminColdWalletDispatch(args, info, options);
      }
      case TransactionType.AppAgentsDisableHotWallet: {
        return appAgentsDisableHotWallet(args, info, options);
      }
      case TransactionType.AppAgentsEnableHotWallet: {
        return appAgentsEnableHotWallet(args, info, options);
      }
      case TransactionType.AppAgentsForceCreateAppAgent: {
        return appAgentsForceCreateAppAgent(args, info, options);
      }
      case TransactionType.AppAgentsForceInitiateAppAgentDestroy: {
        return appAgentsForceInitiateAppAgentDestroy(args, info, options);
      }
      case TransactionType.AppAgentsForceInitiateAppAgentSuspension: {
        return appAgentsForceInitiateAppAgentSuspension(args, info, options);
      }
      case TransactionType.AppAgentsForceInitiateAppAgentUnsuspension: {
        return appAgentsForceInitiateAppAgentUnsuspension(args, info, options);
      }
      case TransactionType.AppAgentsInitiateDestroyAppAgent: {
        return appAgentsInitiateDestroyAppAgent(args, info, options);
      }
      case TransactionType.AppAgentsPauseAppAgent: {
        return appAgentsPauseAppAgent(args, info, options);
      }
      case TransactionType.AppAgentsProcessDestroy: {
        return appAgentsProcessDestroy(args, info, options);
      }
      case TransactionType.AppAgentsReactivateAppAgent: {
        return appAgentsReactivateAppAgent(args, info, options);
      }
      case TransactionType.AppAgentsRemoveAdmin: {
        return appAgentsRemoveAdmin(args, info, options);
      }
      case TransactionType.AppAgentsRemoveAdminFromNamedAddressDispatch: {
        return appAgentsRemoveAdminFromNamedAddressDispatch(args, info, options);
      }
      case TransactionType.AppAgentsSetAdminDispatchFilter: {
        return appAgentsSetAdminDispatchFilter(args, info, options);
      }
      case TransactionType.AppAgentsSetAppAgentMetadata: {
        return appAgentsSetAppAgentMetadata(args, info, options);
      }
      case TransactionType.AppAgentsUnpauseAppAgent: {
        return appAgentsUnpauseAppAgent(args, info, options);
      }
      case TransactionType.AppResourcesSetActionPointsBalance: {
        return appResourcesSetActionPointsBalance(args, info, options);
      }
      case TransactionType.AppResourcesSetClearingPointsBalance: {
        return appResourcesSetClearingPointsBalance(args, info, options);
      }
      case TransactionType.AppSubscriptionsCreateAppSubscriptionTier: {
        return appSubscriptionsCreateAppSubscriptionTier(args, info, options);
      }
      case TransactionType.AppSubscriptionsObsoleteAppSubscriptionTier: {
        return appSubscriptionsObsoleteAppSubscriptionTier(args, info, options);
      }
      case TransactionType.AppSubscriptionsSetAppPayOnDemandMode: {
        return appSubscriptionsSetAppPayOnDemandMode(args, info, options);
      }
      case TransactionType.AppSubscriptionsSetAppSubscriptionTier: {
        return appSubscriptionsSetAppSubscriptionTier(args, info, options);
      }
      case TransactionType.AppTransactionsForceSubmitClearingTransaction: {
        return appTransactionsForceSubmitClearingTransaction(args, info, options);
      }
      case TransactionType.AppTransactionsSubmitClearingTransaction: {
        return appTransactionsSubmitClearingTransaction(args, info, options);
      }
      case TransactionType.AppTransferChannelsEstablishTransferChannel: {
        return appTransferChannelsEstablishTransferChannel(args, info, options);
      }
      case TransactionType.AppTransferChannelsRemoveTransferChannel: {
        return appTransferChannelsRemoveTransferChannel(args, info, options);
      }
      case TransactionType.AppTransferFiltersBlockAddressDeposits: {
        return appTransferFiltersBlockAddressDeposits(args, info, options);
      }
      case TransactionType.AppTransferFiltersSetAppDepositPermissions: {
        return appTransferFiltersSetAppDepositPermissions(args, info, options);
      }
      case TransactionType.AppTransferFiltersUnblockAddressDeposits: {
        return appTransferFiltersUnblockAddressDeposits(args, info, options);
      }
      case TransactionType.AssetsBurn: {
        return assetsBurn(args, info, options);
      }
      case TransactionType.AssetsCreate: {
        return assetsCreate(args, info, options);
      }
      case TransactionType.AssetsDestroyAccounts: {
        return assetsDestroyAccounts(args, info, options);
      }
      case TransactionType.AssetsDestroyApprovals: {
        return assetsDestroyApprovals(args, info, options);
      }
      case TransactionType.AssetsFinishDestroy: {
        return assetsFinishDestroy(args, info, options);
      }
      case TransactionType.AssetsForceTransfer: {
        return assetsForceTransfer(args, info, options);
      }
      case TransactionType.AssetsFreezeAccount: {
        return assetsFreeze(args, info, options);
      }
      case TransactionType.AssetsFreezeAsset: {
        return assetsFreezeAsset(args, info, options);
      }
      case TransactionType.AssetsMint: {
        return assetsMint(args, info, options);
      }
      case TransactionType.AssetsSetMetadata: {
        return assetsSetMetadata(args, info, options);
      }
      case TransactionType.AssetsSetMinBalance: {
        return assetsSetMinBalance(args, info, options);
      }
      case TransactionType.AssetsStartDestroy: {
        return assetsStartDestroy(args, info, options);
      }
      case TransactionType.AssetsThawAccount: {
        return assetsThaw(args, info, options);
      }
      case TransactionType.AssetsThawAsset: {
        return assetsThawAsset(args, info, options);
      }
      case TransactionType.AssetsTransfer: {
        return assetsTransfer(args, info, options);
      }
      case TransactionType.AssetsTransferKeepAlive: {
        return assetsTransferKeepAlive(args, info, options);
      }
      case TransactionType.AssetsTransferOwnership: {
        return assetsTransferOwnership(args, info, options);
      }
      case TransactionType.BalancesTransferAll: {
        return balancesTransferAll(args, info, options);
      }
      case TransactionType.BalancesTransferAllowDeath: {
        return balancesTransferAllowDeath(args, info, options);
      }
      case TransactionType.BalancesTransferKeepAlive: {
        return balancesTransferKeepAlive(args, info, options);
      }
      case TransactionType.NftsBurnItem: {
        return nftsBurn(args, info, options);
      }
      case TransactionType.NftsClearCollectionMetadata: {
        return nftsClearCollectionMetadata(args, info, options);
      }
      case TransactionType.NftsClearItemMetadata: {
        return nftsClearMetadata(args, info, options);
      }
      case TransactionType.NftsCreateCollection: {
        return nftsCreate(args, info, options);
      }
      case TransactionType.NftsDestroyCollection: {
        return nftsDestroy(args, info, options);
      }
      case TransactionType.NftsLockItemTransfer: {
        return nftsLockItemTransfer(args, info, options);
      }
      case TransactionType.NftsMintItem: {
        return nftsMint(args, info, options);
      }
      case TransactionType.NftsAcceptCollectionOwnership: {
        return nftsSetAcceptOwnership(args, info, options);
      }
      case TransactionType.NftsSetCollectionMetadata: {
        return nftsSetCollectionMetadata(args, info, options);
      }
      case TransactionType.NftsSetItemMetadata: {
        return nftsSetMetadata(args, info, options);
      }
      case TransactionType.NftsTransferItem: {
        return nftsTransfer(args, info, options);
      }
      case TransactionType.NftsTransferCollectionOwnership: {
        return nftsTransferOwnership(args, info, options);
      }
      case TransactionType.NftsUnlockItemTransfer: {
        return nftsUnlockItemTransfer(args, info, options);
      }
      case TransactionType.UserFreeTransactionsAppAgentBlacklistAddress: {
        return userFreeTransactionsAppAgentBlacklistAddress(args, info, options);
      }
      case TransactionType.UserFreeTransactionsAppAgentUnblacklistAddress: {
        return userFreeTransactionsAppAgentUnblacklistAddress(args, info, options);
      }
      case TransactionType.UserFreeTransactionsBlacklistAddress: {
        return userFreeTransactionsBlacklistAddress(args, info, options);
      }
      case TransactionType.UserFreeTransactionsClearAppAgentsFreeTransferInfos: {
        return userFreeTransactionsClearAppAgentsFreeTransferInfos(args, info, options);
      }
      case TransactionType.UserFreeTransactionsClearAssetLastTransferBlocks: {
        return userFreeTransactionsClearAssetLastTransferBlocks(args, info, options);
      }
      case TransactionType.UserFreeTransactionsClearNftLastTransferBlocks: {
        return userFreeTransactionsClearNftLastTransferBlocks(args, info, options);
      }
      case TransactionType.UserFreeTransactionsClearUserFreeTransferInfos: {
        return userFreeTransactionsClearUserFreeTransferInfos(args, info, options);
      }
      case TransactionType.UserFreeTransactionsSetFreeTransfersEnabled: {
        return userFreeTransactionsSetFreeTransfersEnabled(args, info, options);
      }
      case TransactionType.UserFreeTransactionsUnblacklistAddress: {
        return userFreeTransactionsUnblacklistAddress(args, info, options);
      }
      case TransactionType.UserTransactionsSubmitTransferAllBalances: {
        return userTransactionsSubmitTransferAllBalances(args, info, options);
      }
      case TransactionType.UserTransactionsSubmitTransferAssets: {
        return userTransactionsSubmitTransferAssets(args, info, options);
      }
      case TransactionType.UserTransactionsSubmitTransferBalances: {
        return userTransactionsSubmitTransferBalances(args, info, options);
      }
      case TransactionType.UserTransactionsSubmitTransferNfts: {
        return userTransactionsSubmitTransferNfts(args, info, options);
      }
      case TransactionType.UserVerificationSetUserLevel: {
        return userVerificationSetUserLevel(args, info, options);
      }
      default: {
        throw new Error(`Unsupported transaction type: ${actionType}`);
      }
    }
  })();

  return unsigned;
}