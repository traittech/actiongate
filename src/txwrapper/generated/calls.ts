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
  UINT64,
  ITx,
  ICTAtomicAction,
  CTActionOrigin,
  CTAtomicActions,
} from '../../types/api';

import type {
  AppAgentDestroyInfo,
  AppDepositPermissions,
  AppPayOnDemandMode,
  NamedAddressInput,
  NftWitness,
} from '../../types/api/trait';

import { ExtrinsicType } from '../../types/api/actions';

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
  const validArgs = AppAgentsAddAdminArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'addAdmin', validArgs, info, options);
}

/**
 * Adds an admin to the App Agent.This function is used to add an admin to the App Agent. The caller must be the current owner of the App Agent, and the admin must not be a keyless address. The function also checks that the admin is not already present in the list of admins for the App Agent. The caller is also required to reserve the admin deposit amount.
 */
export interface AppAgentsAddAdminTx extends ITx {
  actionType: ExtrinsicType.AppAgentsAddAdmin;
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
  const validArgs = AppAgentsAddAdminToNamedAddressArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'addAdminToNamedAddressDispatch', validArgs, info, options);
}

/**
 * Adds an admin to the list of permitted administrators for a named address under a specific App Agent.
 */
export interface AppAgentsAddAdminToNamedAddressTx extends ITx {
  actionType: ExtrinsicType.AppAgentsAddAdminToNamedAddress;
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
  const validArgs = AppAgentsAllowAdminColdWalletArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'allowAdminColdWalletDispatch', validArgs, info, options);
}

/**
 * Pallet function to add an AppAgent' admin to the list of addresses allowed to spend from a cold wallet associated with a specific App Agent.
 */
export interface AppAgentsAllowAdminColdWalletTx extends ITx {
  actionType: ExtrinsicType.AppAgentsAllowAdminColdWallet;
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
  const validArgs = AppAgentsChangeHotWalletArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'changeHotWallet', validArgs, info, options);
}

/**
 * Change the hot wallet associated with an App Agent.
 */
export interface AppAgentsChangeHotWalletTx extends ITx {
  actionType: ExtrinsicType.AppAgentsChangeHotWallet;
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
  const validArgs = AppAgentsChangeOwnerCancelArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'changeOwnerCancel', validArgs, info, options);
}

/**
 * Cancels a change of owner for an App Agent.This function is used to cancel a previously proposed change of owner for an app agent. The caller must be the current owner of the App Agent.
 */
export interface AppAgentsChangeOwnerCancelTx extends ITx {
  actionType: ExtrinsicType.AppAgentsChangeOwnerCancel;
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
  const validArgs = AppAgentsChangeOwnerCompleteArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'changeOwnerComplete', validArgs, info, options);
}

/**
 * Completes a change of owner for an App Agent.This function is used to complete a previously proposed change of owner for an app agent. The caller must be the proposed owner of the App Agent.
 */
export interface AppAgentsChangeOwnerCompleteTx extends ITx {
  actionType: ExtrinsicType.AppAgentsChangeOwnerComplete;
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
  const validArgs = AppAgentsChangeOwnerInitArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'changeOwnerInit', validArgs, info, options);
}

/**
 * Initializes the process to change the ownership of an App Agent.This function is used to initiate the process of changing the ownership of an app agent. The caller must be the current owner of the App Agent, and the proposed owner must not be a keyless address.
 */
export interface AppAgentsChangeOwnerInitTx extends ITx {
  actionType: ExtrinsicType.AppAgentsChangeOwnerInit;
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
  const validArgs = AppAgentsClearAdminDispatchFilterArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'clearAdminDispatchFilter', validArgs, info, options);
}

/**
 * Clears the dispatch filter for the specified `admin` account.The dispatch filter allows restricting the functions that can be called by an admin. By clearing the dispatch filter, the admin will have access to all functions.
 */
export interface AppAgentsClearAdminDispatchFilterTx extends ITx {
  actionType: ExtrinsicType.AppAgentsClearAdminDispatchFilter;
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
  const validArgs = AppAgentsClearAppAgentMetadataArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'clearAppAgentMetadata', validArgs, info, options);
}

/**
 * Clear the metadata for an asset class.Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of the asset `class`. Any deposit is freed for the asset class owner.
 */
export interface AppAgentsClearAppAgentMetadataTx extends ITx {
  actionType: ExtrinsicType.AppAgentsClearAppAgentMetadata;
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
  const validArgs = AppAgentsCompleteDestroyAppAgentArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'completeDestroyAppAgent', validArgs, info, options);
}

/**
 * Completes the destruction process of the App Agent.This function is used to complete the destruction process of the specified App Agent. It marks the App Agent as Destroyed and removes its metadata storage. After completion, it emits an event to indicate the status change of the App Agent. Parameters:
 */
export interface AppAgentsCompleteDestroyAppAgentTx extends ITx {
  actionType: ExtrinsicType.AppAgentsCompleteDestroyAppAgent;
  arguments: AppAgentsCompleteDestroyAppAgentArgs;
};

/*---------------------------------------------------------------------------------- */

/**
 */
export interface AppAgentsCreateAppAgentArgs extends Args {
};

const AppAgentsCreateAppAgentArgsSchema = z.object({
});

/**
 * @name appAgentsCreateAppAgent
 * @summary Creates a new App Agent.
 * @description This function is used to create a new App Agent with the specified owner. It generates the necessary addresses, reserves the required deposit, creates a cold address, and adds the App Agent details to storage. Additionally, it evaluates the subscription payment, and creates a transfer filter record for the App Agent. Parameters:
 * @param args - The arguments of the transaction. {@link AppAgentsCreateAppAgentArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function appAgentsCreateAppAgent(
  args: AppAgentsCreateAppAgentArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = AppAgentsCreateAppAgentArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'createAppAgent', validArgs, info, options);
}

/**
 * Creates a new App Agent.This function is used to create a new App Agent with the specified owner. It generates the necessary addresses, reserves the required deposit, creates a cold address, and adds the App Agent details to storage. Additionally, it evaluates the subscription payment, and creates a transfer filter record for the App Agent. Parameters:
 */
export interface AppAgentsCreateAppAgentTx extends ITx {
  actionType: ExtrinsicType.AppAgentsCreateAppAgent;
  arguments: AppAgentsCreateAppAgentArgs;
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
  const validArgs = AppAgentsDisableAdminColdWalletDispatchArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'disableAdminColdWalletDispatch', validArgs, info, options);
}

/**
 * Pallet function to remove an AppAgent' admin from the list of addresses allowed to spend from a cold wallet associated with a specific App Agent.
 */
export interface AppAgentsDisableAdminColdWalletDispatchTx extends ITx {
  actionType: ExtrinsicType.AppAgentsDisableAdminColdWalletDispatch;
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
  const validArgs = AppAgentsDisableHotWalletArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'disableHotWallet', validArgs, info, options);
}

/**
 * Disables the hot wallet for a specified App Agent.This function is a dispatchable call that allows the owner of the app agent identified by `app_agent_id` to disable the hot wallet associated with it.
 */
export interface AppAgentsDisableHotWalletTx extends ITx {
  actionType: ExtrinsicType.AppAgentsDisableHotWallet;
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
  const validArgs = AppAgentsEnableHotWalletArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'enableHotWallet', validArgs, info, options);
}

/**
 * Enables the hot wallet for a specified App Agent.This function is a dispatchable call that allows the owner of the app agent identified by `app_agent_id` to enable the hot wallet associated with it.
 */
export interface AppAgentsEnableHotWalletTx extends ITx {
  actionType: ExtrinsicType.AppAgentsEnableHotWallet;
  arguments: AppAgentsEnableHotWalletArgs;
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
  const validArgs = AppAgentsInitiateDestroyAppAgentArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'initiateDestroyAppAgent', validArgs, info, options);
}

/**
 * Initiate destroy of an App Agent.This function marks the specified `app_agent_id` as ready for deletion. It first checks if the App Agent exists in the storage. If the App Agent exists and is active, it sets the status to "destroy initiated" to prepare it for deletion. It then emits an event to indicate that the deletion process has been initiated for the App Agent.
 */
export interface AppAgentsInitiateDestroyAppAgentTx extends ITx {
  actionType: ExtrinsicType.AppAgentsInitiateDestroyAppAgent;
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
  const validArgs = AppAgentsPauseAppAgentArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'pauseAppAgent', validArgs, info, options);
}

/**
 * Pauses the specified App Agent.This function verifies that the caller has the necessary permissions to pause the app agent.
 */
export interface AppAgentsPauseAppAgentTx extends ITx {
  actionType: ExtrinsicType.AppAgentsPauseAppAgent;
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
  const validArgs = AppAgentsProcessDestroyArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'processDestroy', validArgs, info, options);
}

/**
 * Processes the destruction of assets owned by the App Agent.This function is used to process the destruction of assets owned by the specified app agent. This extrinsic can be called multiple times to destroy all entities related to the app agent. On the first call the status of app agent changes to DestroyInProcess - after that app agent can not be reactivated. It emits `AppAgentDestroyProcessed` after the destruction process is completed. Parameters:
 */
export interface AppAgentsProcessDestroyTx extends ITx {
  actionType: ExtrinsicType.AppAgentsProcessDestroy;
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
  const validArgs = AppAgentsReactivateAppAgentArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'reactivateAppAgent', validArgs, info, options);
}

/**
 * Reactivates the specified App Agent.This function is used to reactivate a previously deactivated App Agent. It checks if the App Agent exists and is in the DestroyInitiated state. If so, it verifies whether the deletion window has passed. If the deletion was initiated by the system, it attempts to process a subscription payment to prevent deletion and sets the App Agent to active status. If the deletion was triggered by the owner, it resets the App Agent to active without any checks. After reactivation, it emits an event to indicate the status change of the App Agent. Parameters:
 */
export interface AppAgentsReactivateAppAgentTx extends ITx {
  actionType: ExtrinsicType.AppAgentsReactivateAppAgent;
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
  const validArgs = AppAgentsRemoveAdminArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'removeAdmin', validArgs, info, options);
}

/**
 * Removes an admin from the App Agent.This function is used to remove an admin from the App Agent. The caller must be the current owner of the App Agent, and the admin must be present in the list of admins. The function also releases the reserved admin deposit amount.
 */
export interface AppAgentsRemoveAdminTx extends ITx {
  actionType: ExtrinsicType.AppAgentsRemoveAdmin;
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
  const validArgs = AppAgentsRemoveAdminFromNamedAddressDispatchArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'removeAdminFromNamedAddressDispatch', validArgs, info, options);
}

/**
 * Removes an admin from the list of permitted administrators for a named address under a specific App Agent.
 */
export interface AppAgentsRemoveAdminFromNamedAddressDispatchTx extends ITx {
  actionType: ExtrinsicType.AppAgentsRemoveAdminFromNamedAddressDispatch;
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
  const validArgs = AppAgentsSetAdminDispatchFilterArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'setAdminDispatchFilter', validArgs, info, options);
}

/**
 * Sets the list of dispatchables callable by the specified `admin` account.The dispatch filter allows restricting the functions that can be called by an admin. If the dispatch filter is not set for an admin, the admin can call all functions. If the dispatch filter is set, the admin can only call the functions allowed by the filter.
 */
export interface AppAgentsSetAdminDispatchFilterTx extends ITx {
  actionType: ExtrinsicType.AppAgentsSetAdminDispatchFilter;
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
  const validArgs = AppAgentsSetAppAgentMetadataArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'setAppAgentMetadata', validArgs, info, options);
}

/**
 * Set the metadata for an asset class.Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of the asset `class`.
 */
export interface AppAgentsSetAppAgentMetadataTx extends ITx {
  actionType: ExtrinsicType.AppAgentsSetAppAgentMetadata;
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
  const validArgs = AppAgentsUnpauseAppAgentArgsSchema.parse(args);

  return constructUnsignedTransaction('appAgents', 'unpauseAppAgent', validArgs, info, options);
}

/**
 * Resumes the specified App Agent.This function verifies that the caller has the necessary permissions to resume the app agent.
 */
export interface AppAgentsUnpauseAppAgentTx extends ITx {
  actionType: ExtrinsicType.AppAgentsUnpauseAppAgent;
  arguments: AppAgentsUnpauseAppAgentArgs;
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
  const validArgs = AppSubscriptionsSetAppPayOnDemandModeArgsSchema.parse(args);

  return constructUnsignedTransaction('appSubscriptions', 'setAppPayOnDemandMode', validArgs, info, options);
}

/**
 * Sets the pay-on-demand mode for an app agent's subscription.This function allows setting the pay-on-demand mode for an app agent's subscription. Parameters:
 */
export interface AppSubscriptionsSetAppPayOnDemandModeTx extends ITx {
  actionType: ExtrinsicType.AppSubscriptionsSetAppPayOnDemandMode;
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
  const validArgs = AppSubscriptionsSetAppSubscriptionTierArgsSchema.parse(args);

  return constructUnsignedTransaction('appSubscriptions', 'setAppSubscriptionTier', validArgs, info, options);
}

/**
 * Changes the subscription tier of an app agent.This function allows changing the subscription tier of an app agent identified by its subscriber ID. It calculates the difference in price between the current and new tiers and adjusts the subscription limits accordingly. If the new tier is more expensive, it charges the delta payment and updates the action points and clearing points balances for the current billing period. After the adjustment, it updates the subscription tier information for the app agent and emits an event indicating the change in subscription tier. Parameters:
 */
export interface AppSubscriptionsSetAppSubscriptionTierTx extends ITx {
  actionType: ExtrinsicType.AppSubscriptionsSetAppSubscriptionTier;
  arguments: AppSubscriptionsSetAppSubscriptionTierArgs;
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
  const validArgs = AppTransactionsSubmitClearingTransactionArgsSchema.parse(args);

  return constructUnsignedTransaction('appTransactions', 'submitClearingTransaction', validArgs, info, options);
}

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
  const validArgs = AppTransferChannelsEstablishTransferChannelArgsSchema.parse(args);

  return constructUnsignedTransaction('appTransferChannels', 'establishTransferChannel', validArgs, info, options);
}

/**
 * Establishes a new transfer channel between two accounts.This extrinsic allows the account specified by `origin` to establish a new transfer channel between itself (`recipient_account`) and the `sender_account`. The function checks various conditions, including ensuring that the recipient is not the same as the sender address and that the recipient is a valid transactional address (TA). If all conditions are met, a new transfer channel is created with an initial set of parameters, and an event is emitted to indicate the successful channel establishment. This method can be called only by a Transactional address. Which means this call can be submitted only within a Clearing transaction. Thus implicit cost of creation of a Transfer channel - 1 Action point, cost of adding an action in a Clearing transaction.
 */
export interface AppTransferChannelsEstablishTransferChannelAction extends ICTAtomicAction {
  actionType: ExtrinsicType.AppTransferChannelsEstablishTransferChannel;
  arguments: AppTransferChannelsEstablishTransferChannelArgs;
  origin: CTActionOrigin;
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
  const validArgs = AppTransferChannelsRemoveTransferChannelArgsSchema.parse(args);

  return constructUnsignedTransaction('appTransferChannels', 'removeTransferChannel', validArgs, info, options);
}

/**
 * Removes a transfer channel between two accounts.This extrinsic allows the account specified by `origin` to remove a previously created transfer channel between itself and the `sender_account`. The function checks various conditions, including ensuring that the recipient is not the same as the sender address and that a transfer channel exists between them. If all conditions are met, the transfer channel is removed, and an event is emitted to indicate the successful removal. This method can be called only by a Transactional address. Which means this call can be submitted only within a Clearing transaction. Thus implicit cost of creation of a Transfer channel - 1 Action point, cost of adding an action in a Clearing transaction.
 */
export interface AppTransferChannelsRemoveTransferChannelAction extends ICTAtomicAction {
  actionType: ExtrinsicType.AppTransferChannelsRemoveTransferChannel;
  arguments: AppTransferChannelsRemoveTransferChannelArgs;
  origin: CTActionOrigin;
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
  const validArgs = AppTransferFiltersBlockAddressDepositsArgsSchema.parse(args);

  return constructUnsignedTransaction('appTransferFilters', 'blockAddressDeposits', validArgs, info, options);
}

/**
 * Blocks deposits to a keyless address controlled by a specific app agent.* `app_agent_id` - The ID of the app agent. * `keyless_address` - The keyless address (controlled by AppAgent) to block. * `DispatchResult` - Indicates whether the transaction was successful or failed. Returns an error if: * The keyless address is already blocked (`Error::<T>::KeylessAddressDepositsAlreadyBlocked`).
 */
export interface AppTransferFiltersBlockAddressDepositsTx extends ITx {
  actionType: ExtrinsicType.AppTransferFiltersBlockAddressDeposits;
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
  const validArgs = AppTransferFiltersSetAppDepositPermissionsArgsSchema.parse(args);

  return constructUnsignedTransaction('appTransferFilters', 'setAppDepositPermissions', validArgs, info, options);
}

/**
 * Sets the transdepositfer permissions for the specified app_agent_id under the authority of the caller's origin.This function allows the owner/admin of the app_agent_id to set the deposit permissions for the application agent. The caller must provide a valid origin that proves their authority over the app_agent_id. The permissions parameter represents the new deposit permissions to be set for the application agent.
 */
export interface AppTransferFiltersSetAppDepositPermissionsTx extends ITx {
  actionType: ExtrinsicType.AppTransferFiltersSetAppDepositPermissions;
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
  const validArgs = AppTransferFiltersUnblockAddressDepositsArgsSchema.parse(args);

  return constructUnsignedTransaction('appTransferFilters', 'unblockAddressDeposits', validArgs, info, options);
}

/**
 * Unblocks deposits to a keyless address controlled by a specific app agent.* `app_agent_id` - The ID of the app agent. * `keyless_address` - The keyless address to unblock. * `DispatchResult` - Indicates whether the transaction was successful or failed. Returns an error if: * The keyless address is not blocked (`Error::<T>::KeylessAddressDepositsAreNotBlocked`).
 */
export interface AppTransferFiltersUnblockAddressDepositsTx extends ITx {
  actionType: ExtrinsicType.AppTransferFiltersUnblockAddressDeposits;
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

/**
 * Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.Origin must be Signed and the sender should be the Manager of the asset `id`. Bails with `NoAccount` if the `who` is already dead.
 */
export interface AssetsBurnAction extends ICTAtomicAction {
  actionType: ExtrinsicType.AssetsBurn;
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
  const validArgs = AssetsCreateArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'create', validArgs, info, options);
}

/**
 */
export interface AssetsCreateAction extends ICTAtomicAction {
  actionType: ExtrinsicType.AssetsCreate;
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
  const validArgs = AssetsDestroyAccountsArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'destroyAccounts', validArgs, info, options);
}

/**
 * Destroy all accounts associated with a given asset.`destroy_accounts` should only be called after `start_destroy` has been called, and the asset is in a `Destroying` state. Due to weight restrictions, this function may need to be called multiple times to fully destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time.
 */
export interface AssetsDestroyAccountsAction extends ICTAtomicAction {
  actionType: ExtrinsicType.AssetsDestroyAccounts;
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
  const validArgs = AssetsDestroyApprovalsArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'destroyApprovals', validArgs, info, options);
}

/**
 * Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit).`destroy_approvals` should only be called after `start_destroy` has been called, and the asset is in a `Destroying` state. Due to weight restrictions, this function may need to be called multiple times to fully destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time.
 */
export interface AssetsDestroyApprovalsAction extends ICTAtomicAction {
  actionType: ExtrinsicType.AssetsDestroyApprovals;
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
  const validArgs = AssetsFinishDestroyArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'finishDestroy', validArgs, info, options);
}

/**
 * Complete destroying asset and unreserve currency.`finish_destroy` should only be called after `start_destroy` has been called, and the asset is in a `Destroying` state. All accounts or approvals should be destroyed before hand.
 */
export interface AssetsFinishDestroyAction extends ICTAtomicAction {
  actionType: ExtrinsicType.AssetsFinishDestroy;
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

/**
 * Move some assets from one account to another.Origin must be Signed and the sender should be the Admin of the asset `id`.
 */
export interface AssetsForceTransferAction extends ICTAtomicAction {
  actionType: ExtrinsicType.AssetsForceTransfer;
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
  who: BlockchainGenericAccount;
};

const AssetsFreezeAccountArgsSchema = z.object({
  id: schema.BlockchainGenericIdSchema,
  who: schema.BlockchainGenericAccountSchema,
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
  const validArgs = AssetsFreezeAccountArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'freeze', validArgs, info, options);
}

/**
 * Disallow further unprivileged transfers of an asset `id` from an account `who`.`who` must already exist as an entry in `Account`s of the asset. If you want to freeze an account that does not have an entry, use `touch_other` first. Origin must be Signed and the sender should be the Freezer of the asset `id`.
 */
export interface AssetsFreezeAccountAction extends ICTAtomicAction {
  actionType: ExtrinsicType.AssetsFreezeAccount;
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
  const validArgs = AssetsFreezeAssetArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'freezeAsset', validArgs, info, options);
}

/**
 * Disallow further unprivileged transfers for the asset class.Origin must be Signed and the sender should be the Freezer of the asset `id`.
 */
export interface AssetsFreezeAssetAction extends ICTAtomicAction {
  actionType: ExtrinsicType.AssetsFreezeAsset;
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

/**
 * Mint assets of a particular class.The origin must be Signed and the sender must be the Issuer of the asset `id`.
 */
export interface AssetsMintAction extends ICTAtomicAction {
  actionType: ExtrinsicType.AssetsMint;
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
  const validArgs = AssetsSetMetadataArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'setMetadata', validArgs, info, options);
}

/**
 * Set the raw metadata for an asset.Origin must be Signed and the sender should be the Owner of the asset `id`. Funds of sender are reserved according to the formula: `MetadataDepositBase + MetadataDepositPerByte * (data.len)` taking into account any already reserved funds.
 */
export interface AssetsSetMetadataAction extends ICTAtomicAction {
  actionType: ExtrinsicType.AssetsSetMetadata;
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
  const validArgs = AssetsSetMinBalanceArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'setMinBalance', validArgs, info, options);
}

/**
 * Sets the minimum balance of an asset.Only works if there aren't any accounts that are holding the asset or if the new value of `min_balance` is less than the old one. Origin must be Signed and the sender has to be the Owner of the asset `id`.
 */
export interface AssetsSetMinBalanceAction extends ICTAtomicAction {
  actionType: ExtrinsicType.AssetsSetMinBalance;
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
  const validArgs = AssetsStartDestroyArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'startDestroy', validArgs, info, options);
}

/**
 * Start the process of destroying a fungible asset class.`start_destroy` is the first in a series of extrinsics that should be called, to allow destruction of an asset class. The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`.
 */
export interface AssetsStartDestroyAction extends ICTAtomicAction {
  actionType: ExtrinsicType.AssetsStartDestroy;
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

/**
 * Allow unprivileged transfers to and from an account again.Origin must be Signed and the sender should be the Admin of the asset `id`.
 */
export interface AssetsThawAccountAction extends ICTAtomicAction {
  actionType: ExtrinsicType.AssetsThawAccount;
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
  const validArgs = AssetsThawAssetArgsSchema.parse(args);

  return constructUnsignedTransaction('assets', 'thawAsset', validArgs, info, options);
}

/**
 * Allow unprivileged transfers for the asset again.Origin must be Signed and the sender should be the Admin of the asset `id`.
 */
export interface AssetsThawAssetAction extends ICTAtomicAction {
  actionType: ExtrinsicType.AssetsThawAsset;
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

/**
 * Move some assets from the sender account to another.Origin must be Signed.
 */
export interface AssetsTransferTx extends ITx {
  actionType: ExtrinsicType.AssetsTransfer;
  arguments: AssetsTransferArgs;
};

/**
 * Move some assets from the sender account to another.Origin must be Signed.
 */
export interface AssetsTransferAction extends ICTAtomicAction {
  actionType: ExtrinsicType.AssetsTransfer;
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

/**
 * Move some assets from the sender account to another, keeping the sender account alive.Origin must be Signed.
 */
export interface AssetsTransferKeepAliveTx extends ITx {
  actionType: ExtrinsicType.AssetsTransferKeepAlive;
  arguments: AssetsTransferKeepAliveArgs;
};

/**
 * Move some assets from the sender account to another, keeping the sender account alive.Origin must be Signed.
 */
export interface AssetsTransferKeepAliveAction extends ICTAtomicAction {
  actionType: ExtrinsicType.AssetsTransferKeepAlive;
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

/**
 * Change the Owner of an asset.Origin must be Signed and the sender should be the Owner of the asset `id`.
 */
export interface AssetsTransferOwnershipAction extends ICTAtomicAction {
  actionType: ExtrinsicType.AssetsTransferOwnership;
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

/**
 * Transfer the entire transferable balance from the caller account.NOTE: This function only attempts to transfer _transferable_ balances. This means that any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be transferred by this function. To ensure that this function results in a killed account, you might need to prepare the account by removing any reference counters, storage deposits, etc... The dispatch origin of this call must be Signed.
 */
export interface BalancesTransferAllTx extends ITx {
  actionType: ExtrinsicType.BalancesTransferAll;
  arguments: BalancesTransferAllArgs;
};

/**
 * Transfer the entire transferable balance from the caller account.NOTE: This function only attempts to transfer _transferable_ balances. This means that any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be transferred by this function. To ensure that this function results in a killed account, you might need to prepare the account by removing any reference counters, storage deposits, etc... The dispatch origin of this call must be Signed.
 */
export interface BalancesTransferAllAction extends ICTAtomicAction {
  actionType: ExtrinsicType.BalancesTransferAll;
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
export interface BalancesTransferArgs extends Args {
  dest: BlockchainGenericAccount;
  value: BlockchainGenericBalance;
};

const BalancesTransferArgsSchema = z.object({
  dest: schema.BlockchainGenericAccountSchema,
  value: schema.BlockchainGenericBalanceSchema,
});

/**
 * @name balancesTransferAllowDeath
 * @summary Transfer some liquid free balance to another account.
 * @description `transfer_allow_death` will set the `FreeBalance` of the sender and receiver. If the sender's account is below the existential deposit as a result of the transfer, the account will be reaped. The dispatch origin for this call must be `Signed` by the transactor.
 * @param args - The arguments of the transaction. {@link BalancesTransferArgs}
 * @param info - Base transaction information. {@link BaseTxInfo}
 * @param options - Additional options with metadata. {@link OptionsWithMeta}
 * @returns An unsigned transaction. {@link UnsignedTransaction}
 */
export function balancesTransferAllowDeath(
  args: BalancesTransferArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  // throws error if validation is failed
  const validArgs = BalancesTransferArgsSchema.parse(args);

  return constructUnsignedTransaction('balances', 'transferAllowDeath', validArgs, info, options);
}

/**
 * Transfer some liquid free balance to another account.`transfer_allow_death` will set the `FreeBalance` of the sender and receiver. If the sender's account is below the existential deposit as a result of the transfer, the account will be reaped. The dispatch origin for this call must be `Signed` by the transactor.
 */
export interface BalancesTransferTx extends ITx {
  actionType: ExtrinsicType.BalancesTransfer;
  arguments: BalancesTransferArgs;
};

/**
 * Transfer some liquid free balance to another account.`transfer_allow_death` will set the `FreeBalance` of the sender and receiver. If the sender's account is below the existential deposit as a result of the transfer, the account will be reaped. The dispatch origin for this call must be `Signed` by the transactor.
 */
export interface BalancesTransferAction extends ICTAtomicAction {
  actionType: ExtrinsicType.BalancesTransfer;
  arguments: BalancesTransferArgs;
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
  dest: BlockchainGenericAccount;
  value: BlockchainGenericBalance;
};

const BalancesTransferKeepAliveArgsSchema = z.object({
  dest: schema.BlockchainGenericAccountSchema,
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
  const validArgs = BalancesTransferKeepAliveArgsSchema.parse(args);

  return constructUnsignedTransaction('balances', 'transferKeepAlive', validArgs, info, options);
}

/**
 * Same as the [`transfer_allow_death`] call, but with a check that the transfer will not kill the origin account.99% of the time you want [`transfer_allow_death`] instead. [`transfer_allow_death`]: struct.Pallet.html#method.transfer
 */
export interface BalancesTransferKeepAliveTx extends ITx {
  actionType: ExtrinsicType.BalancesTransferKeepAlive;
  arguments: BalancesTransferKeepAliveArgs;
};

/**
 * Same as the [`transfer_allow_death`] call, but with a check that the transfer will not kill the origin account.99% of the time you want [`transfer_allow_death`] instead. [`transfer_allow_death`]: struct.Pallet.html#method.transfer
 */
export interface BalancesTransferKeepAliveAction extends ICTAtomicAction {
  actionType: ExtrinsicType.BalancesTransferKeepAlive;
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
  const validArgs = NftsBurnItemArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'burn', validArgs, info, options);
}

/**
 * Destroy a single item.The origin must conform to `ForceOrigin` or must be Signed and the signing account must be the owner of the `item`.
 */
export interface NftsBurnItemAction extends ICTAtomicAction {
  actionType: ExtrinsicType.NftsBurnItem;
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
  const validArgs = NftsClearCollectionMetadataArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'clearCollectionMetadata', validArgs, info, options);
}

/**
 * Clear the metadata for a collection.Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of the `collection`. Any deposit is freed for the collection's owner.
 */
export interface NftsClearCollectionMetadataAction extends ICTAtomicAction {
  actionType: ExtrinsicType.NftsClearCollectionMetadata;
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
  const validArgs = NftsClearItemMetadataArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'clearMetadata', validArgs, info, options);
}

/**
 * Clear the metadata for an item.Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the `collection`. Any deposit is freed for the collection's owner.
 */
export interface NftsClearItemMetadataAction extends ICTAtomicAction {
  actionType: ExtrinsicType.NftsClearItemMetadata;
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
  const validArgs = NftsCreateCollectionArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'create', validArgs, info, options);
}

/**
 */
export interface NftsCreateCollectionAction extends ICTAtomicAction {
  actionType: ExtrinsicType.NftsCreateCollection;
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
  const validArgs = NftsDestroyCollectionArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'destroy', validArgs, info, options);
}

/**
 * Destroy a collection of fungible items.The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the owner of the `collection`. NOTE: The collection must have 0 items to be destroyed.
 */
export interface NftsDestroyCollectionAction extends ICTAtomicAction {
  actionType: ExtrinsicType.NftsDestroyCollection;
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
  const validArgs = NftsLockItemTransferArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'lockItemTransfer', validArgs, info, options);
}

/**
 * Disallow further unprivileged transfer of an item.Origin must be Signed and the sender should be the Freezer of the `collection`.
 */
export interface NftsLockItemTransferAction extends ICTAtomicAction {
  actionType: ExtrinsicType.NftsLockItemTransfer;
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

/**
 */
export interface NftsMintItemAction extends ICTAtomicAction {
  actionType: ExtrinsicType.NftsMintItem;
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
  const validArgs = NftsAcceptCollectionOwnershipArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'setAcceptOwnership', validArgs, info, options);
}

/**
 * Set (or reset) the acceptance of ownership for a particular account.Origin must be `Signed` and if `maybe_collection` is `Some`, then the signer must have a provider reference.
 */
export interface NftsAcceptCollectionOwnershipAction extends ICTAtomicAction {
  actionType: ExtrinsicType.NftsAcceptCollectionOwnership;
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
  const validArgs = NftsSetCollectionMetadataArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'setCollectionMetadata', validArgs, info, options);
}

/**
 * Set the metadata for a collection.Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of the `collection`. If the origin is `Signed`, then funds of signer are reserved according to the formula: `MetadataDepositBase + DepositPerByte * data.len` taking into account any already reserved funds.
 */
export interface NftsSetCollectionMetadataAction extends ICTAtomicAction {
  actionType: ExtrinsicType.NftsSetCollectionMetadata;
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
  const validArgs = NftsSetItemMetadataArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'setMetadata', validArgs, info, options);
}

/**
 * Set the metadata for an item.Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the `collection`. If the origin is Signed, then funds of signer are reserved according to the formula: `MetadataDepositBase + DepositPerByte * data.len` taking into account any already reserved funds.
 */
export interface NftsSetItemMetadataAction extends ICTAtomicAction {
  actionType: ExtrinsicType.NftsSetItemMetadata;
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

/**
 * Move an item from the sender account to another.Origin must be Signed and the signing account must be either:
 */
export interface NftsTransferItemTx extends ITx {
  actionType: ExtrinsicType.NftsTransferItem;
  arguments: NftsTransferItemArgs;
};

/**
 * Move an item from the sender account to another.Origin must be Signed and the signing account must be either:
 */
export interface NftsTransferItemAction extends ICTAtomicAction {
  actionType: ExtrinsicType.NftsTransferItem;
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

/**
 * Change the Owner of a collection.Origin must be Signed and the sender should be the Owner of the `collection`.
 */
export interface NftsTransferCollectionOwnershipAction extends ICTAtomicAction {
  actionType: ExtrinsicType.NftsTransferCollectionOwnership;
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
  const validArgs = NftsUnlockItemTransferArgsSchema.parse(args);

  return constructUnsignedTransaction('nfts', 'unlockItemTransfer', validArgs, info, options);
}

/**
 * Re-allow unprivileged transfer of an item.Origin must be Signed and the sender should be the Freezer of the `collection`.
 */
export interface NftsUnlockItemTransferAction extends ICTAtomicAction {
  actionType: ExtrinsicType.NftsUnlockItemTransfer;
  arguments: NftsUnlockItemTransferArgs;
  origin: CTActionOrigin;
};

/*---------------------------------------------------------------------------------- */

/**
 * Represents a single transaction
 */
export type Tx =
  | BalancesTransferTx
  | BalancesTransferKeepAliveTx
  | BalancesTransferAllTx
  | AssetsTransferTx
  | AssetsTransferKeepAliveTx
  | NftsTransferItemTx
  | AppAgentsCreateAppAgentTx
  | AppAgentsInitiateDestroyAppAgentTx
  | AppAgentsProcessDestroyTx
  | AppAgentsCompleteDestroyAppAgentTx
  | AppAgentsReactivateAppAgentTx
  | AppAgentsPauseAppAgentTx
  | AppAgentsUnpauseAppAgentTx
  | AppAgentsChangeOwnerInitTx
  | AppAgentsChangeOwnerCompleteTx
  | AppAgentsChangeOwnerCancelTx
  | AppAgentsSetAppAgentMetadataTx
  | AppAgentsClearAppAgentMetadataTx
  | AppAgentsEnableHotWalletTx
  | AppAgentsDisableHotWalletTx
  | AppAgentsChangeHotWalletTx
  | AppAgentsAddAdminTx
  | AppAgentsRemoveAdminTx
  | AppAgentsSetAdminDispatchFilterTx
  | AppAgentsClearAdminDispatchFilterTx
  | AppAgentsAllowAdminColdWalletTx
  | AppAgentsDisableAdminColdWalletDispatchTx
  | AppAgentsAddAdminToNamedAddressTx
  | AppAgentsRemoveAdminFromNamedAddressDispatchTx
  | AppSubscriptionsSetAppSubscriptionTierTx
  | AppSubscriptionsSetAppPayOnDemandModeTx
  | AppTransferFiltersBlockAddressDepositsTx
  | AppTransferFiltersUnblockAddressDepositsTx
  | AppTransferFiltersSetAppDepositPermissionsTx
;

/**
 * Represents a transaction args
 */
export type TxArgs =
  | BalancesTransferArgs
  | BalancesTransferKeepAliveArgs
  | BalancesTransferAllArgs
  | AssetsTransferArgs
  | AssetsTransferKeepAliveArgs
  | NftsTransferItemArgs
  | AppAgentsCreateAppAgentArgs
  | AppAgentsInitiateDestroyAppAgentArgs
  | AppAgentsProcessDestroyArgs
  | AppAgentsCompleteDestroyAppAgentArgs
  | AppAgentsReactivateAppAgentArgs
  | AppAgentsPauseAppAgentArgs
  | AppAgentsUnpauseAppAgentArgs
  | AppAgentsChangeOwnerInitArgs
  | AppAgentsChangeOwnerCompleteArgs
  | AppAgentsChangeOwnerCancelArgs
  | AppAgentsSetAppAgentMetadataArgs
  | AppAgentsClearAppAgentMetadataArgs
  | AppAgentsEnableHotWalletArgs
  | AppAgentsDisableHotWalletArgs
  | AppAgentsChangeHotWalletArgs
  | AppAgentsAddAdminArgs
  | AppAgentsRemoveAdminArgs
  | AppAgentsSetAdminDispatchFilterArgs
  | AppAgentsClearAdminDispatchFilterArgs
  | AppAgentsAllowAdminColdWalletArgs
  | AppAgentsDisableAdminColdWalletDispatchArgs
  | AppAgentsAddAdminToNamedAddressArgs
  | AppAgentsRemoveAdminFromNamedAddressDispatchArgs
  | AppSubscriptionsSetAppSubscriptionTierArgs
  | AppSubscriptionsSetAppPayOnDemandModeArgs
  | AppTransferFiltersBlockAddressDepositsArgs
  | AppTransferFiltersUnblockAddressDepositsArgs
  | AppTransferFiltersSetAppDepositPermissionsArgs
;

/**
 * Represents a single action within an atomic operation.
 */
export type CTAtomicAction =
  | BalancesTransferAction
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
  | AppTransferChannelsEstablishTransferChannelAction
  | AppTransferChannelsRemoveTransferChannelAction
;

/**
 * Represents a CT action args.
 */
export type ActionArgs =
  | BalancesTransferArgs
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
  | AppTransferChannelsEstablishTransferChannelArgs
  | AppTransferChannelsRemoveTransferChannelArgs
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
  tx: Tx | CTAtomicAction,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  const { actionType, arguments: args } = tx;

  const unsigned: UnsignedTransaction = (() => {
    switch (actionType) {
      case ExtrinsicType.AppAgentsAddAdmin: {
        return appAgentsAddAdmin(args, info, options);
      }
      case ExtrinsicType.AppAgentsAddAdminToNamedAddress: {
        return appAgentsAddAdminToNamedAddressDispatch(args, info, options);
      }
      case ExtrinsicType.AppAgentsAllowAdminColdWallet: {
        return appAgentsAllowAdminColdWalletDispatch(args, info, options);
      }
      case ExtrinsicType.AppAgentsChangeHotWallet: {
        return appAgentsChangeHotWallet(args, info, options);
      }
      case ExtrinsicType.AppAgentsChangeOwnerCancel: {
        return appAgentsChangeOwnerCancel(args, info, options);
      }
      case ExtrinsicType.AppAgentsChangeOwnerComplete: {
        return appAgentsChangeOwnerComplete(args, info, options);
      }
      case ExtrinsicType.AppAgentsChangeOwnerInit: {
        return appAgentsChangeOwnerInit(args, info, options);
      }
      case ExtrinsicType.AppAgentsClearAdminDispatchFilter: {
        return appAgentsClearAdminDispatchFilter(args, info, options);
      }
      case ExtrinsicType.AppAgentsClearAppAgentMetadata: {
        return appAgentsClearAppAgentMetadata(args, info, options);
      }
      case ExtrinsicType.AppAgentsCompleteDestroyAppAgent: {
        return appAgentsCompleteDestroyAppAgent(args, info, options);
      }
      case ExtrinsicType.AppAgentsCreateAppAgent: {
        return appAgentsCreateAppAgent(args, info, options);
      }
      case ExtrinsicType.AppAgentsDisableAdminColdWalletDispatch: {
        return appAgentsDisableAdminColdWalletDispatch(args, info, options);
      }
      case ExtrinsicType.AppAgentsDisableHotWallet: {
        return appAgentsDisableHotWallet(args, info, options);
      }
      case ExtrinsicType.AppAgentsEnableHotWallet: {
        return appAgentsEnableHotWallet(args, info, options);
      }
      case ExtrinsicType.AppAgentsInitiateDestroyAppAgent: {
        return appAgentsInitiateDestroyAppAgent(args, info, options);
      }
      case ExtrinsicType.AppAgentsPauseAppAgent: {
        return appAgentsPauseAppAgent(args, info, options);
      }
      case ExtrinsicType.AppAgentsProcessDestroy: {
        return appAgentsProcessDestroy(args, info, options);
      }
      case ExtrinsicType.AppAgentsReactivateAppAgent: {
        return appAgentsReactivateAppAgent(args, info, options);
      }
      case ExtrinsicType.AppAgentsRemoveAdmin: {
        return appAgentsRemoveAdmin(args, info, options);
      }
      case ExtrinsicType.AppAgentsRemoveAdminFromNamedAddressDispatch: {
        return appAgentsRemoveAdminFromNamedAddressDispatch(args, info, options);
      }
      case ExtrinsicType.AppAgentsSetAdminDispatchFilter: {
        return appAgentsSetAdminDispatchFilter(args, info, options);
      }
      case ExtrinsicType.AppAgentsSetAppAgentMetadata: {
        return appAgentsSetAppAgentMetadata(args, info, options);
      }
      case ExtrinsicType.AppAgentsUnpauseAppAgent: {
        return appAgentsUnpauseAppAgent(args, info, options);
      }
      case ExtrinsicType.AppSubscriptionsSetAppPayOnDemandMode: {
        return appSubscriptionsSetAppPayOnDemandMode(args, info, options);
      }
      case ExtrinsicType.AppSubscriptionsSetAppSubscriptionTier: {
        return appSubscriptionsSetAppSubscriptionTier(args, info, options);
      }
      case ExtrinsicType.AppTransferChannelsEstablishTransferChannel: {
        return appTransferChannelsEstablishTransferChannel(args, info, options);
      }
      case ExtrinsicType.AppTransferChannelsRemoveTransferChannel: {
        return appTransferChannelsRemoveTransferChannel(args, info, options);
      }
      case ExtrinsicType.AppTransferFiltersBlockAddressDeposits: {
        return appTransferFiltersBlockAddressDeposits(args, info, options);
      }
      case ExtrinsicType.AppTransferFiltersSetAppDepositPermissions: {
        return appTransferFiltersSetAppDepositPermissions(args, info, options);
      }
      case ExtrinsicType.AppTransferFiltersUnblockAddressDeposits: {
        return appTransferFiltersUnblockAddressDeposits(args, info, options);
      }
      case ExtrinsicType.AssetsBurn: {
        return assetsBurn(args, info, options);
      }
      case ExtrinsicType.AssetsCreate: {
        return assetsCreate(args, info, options);
      }
      case ExtrinsicType.AssetsDestroyAccounts: {
        return assetsDestroyAccounts(args, info, options);
      }
      case ExtrinsicType.AssetsDestroyApprovals: {
        return assetsDestroyApprovals(args, info, options);
      }
      case ExtrinsicType.AssetsFinishDestroy: {
        return assetsFinishDestroy(args, info, options);
      }
      case ExtrinsicType.AssetsForceTransfer: {
        return assetsForceTransfer(args, info, options);
      }
      case ExtrinsicType.AssetsFreezeAccount: {
        return assetsFreeze(args, info, options);
      }
      case ExtrinsicType.AssetsFreezeAsset: {
        return assetsFreezeAsset(args, info, options);
      }
      case ExtrinsicType.AssetsMint: {
        return assetsMint(args, info, options);
      }
      case ExtrinsicType.AssetsSetMetadata: {
        return assetsSetMetadata(args, info, options);
      }
      case ExtrinsicType.AssetsSetMinBalance: {
        return assetsSetMinBalance(args, info, options);
      }
      case ExtrinsicType.AssetsStartDestroy: {
        return assetsStartDestroy(args, info, options);
      }
      case ExtrinsicType.AssetsThawAccount: {
        return assetsThaw(args, info, options);
      }
      case ExtrinsicType.AssetsThawAsset: {
        return assetsThawAsset(args, info, options);
      }
      case ExtrinsicType.AssetsTransfer: {
        return assetsTransfer(args, info, options);
      }
      case ExtrinsicType.AssetsTransferKeepAlive: {
        return assetsTransferKeepAlive(args, info, options);
      }
      case ExtrinsicType.AssetsTransferOwnership: {
        return assetsTransferOwnership(args, info, options);
      }
      case ExtrinsicType.BalancesTransferAll: {
        return balancesTransferAll(args, info, options);
      }
      case ExtrinsicType.BalancesTransfer: {
        return balancesTransferAllowDeath(args, info, options);
      }
      case ExtrinsicType.BalancesTransferKeepAlive: {
        return balancesTransferKeepAlive(args, info, options);
      }
      case ExtrinsicType.NftsBurnItem: {
        return nftsBurn(args, info, options);
      }
      case ExtrinsicType.NftsClearCollectionMetadata: {
        return nftsClearCollectionMetadata(args, info, options);
      }
      case ExtrinsicType.NftsClearItemMetadata: {
        return nftsClearMetadata(args, info, options);
      }
      case ExtrinsicType.NftsCreateCollection: {
        return nftsCreate(args, info, options);
      }
      case ExtrinsicType.NftsDestroyCollection: {
        return nftsDestroy(args, info, options);
      }
      case ExtrinsicType.NftsLockItemTransfer: {
        return nftsLockItemTransfer(args, info, options);
      }
      case ExtrinsicType.NftsMintItem: {
        return nftsMint(args, info, options);
      }
      case ExtrinsicType.NftsAcceptCollectionOwnership: {
        return nftsSetAcceptOwnership(args, info, options);
      }
      case ExtrinsicType.NftsSetCollectionMetadata: {
        return nftsSetCollectionMetadata(args, info, options);
      }
      case ExtrinsicType.NftsSetItemMetadata: {
        return nftsSetMetadata(args, info, options);
      }
      case ExtrinsicType.NftsTransferItem: {
        return nftsTransfer(args, info, options);
      }
      case ExtrinsicType.NftsTransferCollectionOwnership: {
        return nftsTransferOwnership(args, info, options);
      }
      case ExtrinsicType.NftsUnlockItemTransfer: {
        return nftsUnlockItemTransfer(args, info, options);
      }
      default: {
        throw new Error(`Unsupported transaction type: ${actionType}`);
      }
    }
  })();

  return unsigned;
}