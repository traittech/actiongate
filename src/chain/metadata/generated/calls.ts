// Auto-generated, do not edit
/* eslint-disable */

import { defineMethod } from '@substrate/txwrapper-core';

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/submittable';

import type { BaseTxInfo, OptionsWithMeta, UnsignedTransaction } from '@substrate/txwrapper-core';

import type { Bytes, Compact, Option, U8aFixed, Vec, bool, u128, u16, u32, u64 } from '@polkadot/types-codec';
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H256, MultiAddress } from '@polkadot/types/interfaces/runtime';
import type { PalletBalancesAdjustmentDirection, PalletMultisigTimepoint, PalletNftsAttributeNamespace, PalletNftsCancelAttributesApprovalWitness, PalletNftsCollectionConfig, PalletNftsDestroyWitness, PalletNftsItemConfig, PalletNftsItemTip, PalletNftsMintSettings, PalletNftsPreSignedAttributes, PalletNftsPreSignedMint, PalletNftsPriceWithDirection, PalletVestingVestingInfo, SpRuntimeMultiSignature, SpWeightsWeightV2Weight, StagingXcmExecutorAssetTransferTransferType, StagingXcmV4Location, XcmV3WeightLimit, XcmVersionedAssetId, XcmVersionedAssets, XcmVersionedLocation, XcmVersionedXcm } from '@polkadot/types/lookup';

export type AdminsAddPalletAdminArgs = {
  adminType: TraitPrimitivesPalletAdminsPalletAdminType | 'AppAgentForce' | 'AppAgentGarbageCollector' | 'AppSubscriptions' | 'AppTransactions' | 'PriceIndex' | 'UserFreeTransactions' | 'UserVerification' | 'Assets' | 'Nfts' | number | Uint8Array
  admin: AccountId32 | string | Uint8Array
};

/**
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function adminsAddPalletAdmin(
  args: AdminsAddPalletAdminArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'add_pallet_admin',
        pallet: 'admins',
      },
      ...info,
    },
    options
  );
}

export type AdminsRemovePalletAdminArgs = {
  adminType: TraitPrimitivesPalletAdminsPalletAdminType | 'AppAgentForce' | 'AppAgentGarbageCollector' | 'AppSubscriptions' | 'AppTransactions' | 'PriceIndex' | 'UserFreeTransactions' | 'UserVerification' | 'Assets' | 'Nfts' | number | Uint8Array
  admin: AccountId32 | string | Uint8Array
};

/**
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function adminsRemovePalletAdmin(
  args: AdminsRemovePalletAdminArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'remove_pallet_admin',
        pallet: 'admins',
      },
      ...info,
    },
    options
  );
}

export type AppAgentsAddAdminArgs = {
  /**
  *  The ID of the App Agent.
  */
  appAgentId: u32 | AnyNumber | Uint8Array
  /**
  *  The account ID of the admin to be added.
  */
  admin: AccountId32 | string | Uint8Array
};

/**
 * Adds an admin to the App Agent. This function is used to add an admin to the App Agent. The caller must be the current owner of the App Agent, and the admin must not be a keyless address. The function also checks that the admin is not already present in the list of admins for the App Agent. The caller is also required to reserve the admin deposit amount. # Parameters
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appAgentsAddAdmin(
  args: AppAgentsAddAdminArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'add_admin',
        pallet: 'appAgents',
      },
      ...info,
    },
    options
  );
}

export type AppAgentsAddAdminToNamedAddressDispatchArgs = {
  /**
  *  The identifier of the App Agent.
  */
  appAgentId: u32 | AnyNumber | Uint8Array
  /**
  *  The account ID of the admin being added.
  */
  admin: AccountId32 | string | Uint8Array
  /**
  *  The named address to which the admin is being added.
  */
  namedAddress: AccountId32 | string | Uint8Array
};

/**
 * Adds an admin to the list of permitted administrators for a named address under a specific App Agent. # Parameters
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appAgentsAddAdminToNamedAddressDispatch(
  args: AppAgentsAddAdminToNamedAddressDispatchArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'add_admin_to_named_address_dispatch',
        pallet: 'appAgents',
      },
      ...info,
    },
    options
  );
}

export type AppAgentsAllowAdminColdWalletDispatchArgs = {
  /**
  *  The identifier of the App Agent.
  */
  appAgentId: u32 | AnyNumber | Uint8Array
  /**
  *  The admin address to be added to the list.
  */
  admin: AccountId32 | string | Uint8Array
  coldWallet: AccountId32 | string | Uint8Array
};

/**
 * Pallet function to add an AppAgent&#x27; admin to the list of addresses allowed to spend from a cold wallet associated with a specific App Agent. # Parameters
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appAgentsAllowAdminColdWalletDispatch(
  args: AppAgentsAllowAdminColdWalletDispatchArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'allow_admin_cold_wallet_dispatch',
        pallet: 'appAgents',
      },
      ...info,
    },
    options
  );
}

export type AppAgentsChangeHotWalletArgs = {
  /**
  *  The identifier of the App Agent whose hot wallet is being changed.
  */
  appAgentId: u32 | AnyNumber | Uint8Array
  /**
  *  The new hot wallet to be set for the specified App Agent.
  */
  newHotWallet: PalletAppAgentsInputNamedAddressInput | { Address: any } | { Name: any } | string | Uint8Array
};

/**
 * Change the hot wallet associated with an App Agent. # Parameters
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appAgentsChangeHotWallet(
  args: AppAgentsChangeHotWalletArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'change_hot_wallet',
        pallet: 'appAgents',
      },
      ...info,
    },
    options
  );
}

export type AppAgentsChangeOwnerCancelArgs = {
  /**
  *  The ID of the App Agent.
  */
  appAgentId: u32 | AnyNumber | Uint8Array
};

/**
 * Cancels a change of owner for an App Agent. This function is used to cancel a previously proposed change of owner for an app agent. The caller must be the current owner of the App Agent. # Parameters
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appAgentsChangeOwnerCancel(
  args: AppAgentsChangeOwnerCancelArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'change_owner_cancel',
        pallet: 'appAgents',
      },
      ...info,
    },
    options
  );
}

export type AppAgentsChangeOwnerCompleteArgs = {
  /**
  *  The ID of the App Agent.
  */
  appAgentId: u32 | AnyNumber | Uint8Array
};

/**
 * Completes a change of owner for an App Agent. This function is used to complete a previously proposed change of owner for an app agent. The caller must be the proposed owner of the App Agent. # Parameters
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appAgentsChangeOwnerComplete(
  args: AppAgentsChangeOwnerCompleteArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'change_owner_complete',
        pallet: 'appAgents',
      },
      ...info,
    },
    options
  );
}

export type AppAgentsChangeOwnerInitArgs = {
  /**
  *  The ID of the App Agent.
  */
  appAgentId: u32 | AnyNumber | Uint8Array
  /**
  *  The account ID of the proposed owner.
  */
  proposedOwner: AccountId32 | string | Uint8Array
};

/**
 * Initializes the process to change the ownership of an App Agent. This function is used to initiate the process of changing the ownership of an app agent. The caller must be the current owner of the App Agent, and the proposed owner must not be a keyless address. # Parameters
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appAgentsChangeOwnerInit(
  args: AppAgentsChangeOwnerInitArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'change_owner_init',
        pallet: 'appAgents',
      },
      ...info,
    },
    options
  );
}

export type AppAgentsClearAdminDispatchFilterArgs = {
  /**
  *  The ID of the App Agent.
  */
  appAgentId: u32 | AnyNumber | Uint8Array
  /**
  *  The account ID of the admin.
  */
  admin: AccountId32 | string | Uint8Array
};

/**
 * Clears the dispatch filter for the specified &#x60;admin&#x60; account. The dispatch filter allows restricting the functions that can be called by an admin. By clearing the dispatch filter, the admin will have access to all functions. # Parameters
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appAgentsClearAdminDispatchFilter(
  args: AppAgentsClearAdminDispatchFilterArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'clear_admin_dispatch_filter',
        pallet: 'appAgents',
      },
      ...info,
    },
    options
  );
}

export type AppAgentsClearAppAgentMetadataArgs = {
  appAgentId: u32 | AnyNumber | Uint8Array
};

/**
 * Clear the metadata for an asset class. Origin must be either &#x60;ForceOrigin&#x60; or &#x60;Signed&#x60; and the sender should be the Owner of the asset &#x60;class&#x60;. Any deposit is freed for the asset class owner.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appAgentsClearAppAgentMetadata(
  args: AppAgentsClearAppAgentMetadataArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'clear_app_agent_metadata',
        pallet: 'appAgents',
      },
      ...info,
    },
    options
  );
}

export type AppAgentsCompleteDestroyAppAgentArgs = {
  /**
  *  The identifier of the App Agent to be destroyed.
  */
  appAgentId: u32 | AnyNumber | Uint8Array
  destroyInfos: TraitPrimitivesAppAgentsDestroyAppAgentDestroyInfo | { ownFungibles?: any; ownNonFungibles?: any; controlledAddressesInfos?: any; appAgentFungibles?: any; appAgentNonFungibles?: any } | string | Uint8Array
};

/**
 * Completes the destruction process of the App Agent. This function is used to complete the destruction process of the specified App Agent. It marks the App Agent as Destroyed and removes its metadata storage. After completion, it emits an event to indicate the status change of the App Agent. Parameters:
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appAgentsCompleteDestroyAppAgent(
  args: AppAgentsCompleteDestroyAppAgentArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'complete_destroy_app_agent',
        pallet: 'appAgents',
      },
      ...info,
    },
    options
  );
}

export type AppAgentsCreateAppAgentArgs = {
};

/**
 * Creates a new App Agent. This function is used to create a new App Agent with the specified owner. It generates the necessary addresses, reserves the required deposit, creates a cold address, and adds the App Agent details to storage. Additionally, it evaluates the subscription payment, and creates a transfer filter record for the App Agent. Parameters:
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appAgentsCreateAppAgent(
  args: AppAgentsCreateAppAgentArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'create_app_agent',
        pallet: 'appAgents',
      },
      ...info,
    },
    options
  );
}

export type AppAgentsDisableAdminColdWalletDispatchArgs = {
  /**
  *  The identifier of the App Agent.
  */
  appAgentId: u32 | AnyNumber | Uint8Array
  /**
  *  The admin address to be removed from the list.
  */
  admin: AccountId32 | string | Uint8Array
  coldWallet: AccountId32 | string | Uint8Array
};

/**
 * Pallet function to remove an AppAgent&#x27; admin from the list of addresses allowed to spend from a cold wallet associated with a specific App Agent. # Parameters
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appAgentsDisableAdminColdWalletDispatch(
  args: AppAgentsDisableAdminColdWalletDispatchArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'disable_admin_cold_wallet_dispatch',
        pallet: 'appAgents',
      },
      ...info,
    },
    options
  );
}

export type AppAgentsDisableHotWalletArgs = {
  /**
  *  Identifier of the App Agent for which the hot wallet needs to be
  */
  appAgentId: u32 | AnyNumber | Uint8Array
};

/**
 * Disables the hot wallet for a specified App Agent. This function is a dispatchable call that allows the owner of the app agent identified by &#x60;app_agent_id&#x60; to disable the hot wallet associated with it. # Parameters
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appAgentsDisableHotWallet(
  args: AppAgentsDisableHotWalletArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'disable_hot_wallet',
        pallet: 'appAgents',
      },
      ...info,
    },
    options
  );
}

export type AppAgentsEnableHotWalletArgs = {
  /**
  *  Identifier of the App Agent for which the hot wallet needs to be
  */
  appAgentId: u32 | AnyNumber | Uint8Array
};

/**
 * Enables the hot wallet for a specified App Agent. This function is a dispatchable call that allows the owner of the app agent identified by &#x60;app_agent_id&#x60; to enable the hot wallet associated with it. # Parameters
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appAgentsEnableHotWallet(
  args: AppAgentsEnableHotWalletArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'enable_hot_wallet',
        pallet: 'appAgents',
      },
      ...info,
    },
    options
  );
}

export type AppAgentsForceCreateAppAgentArgs = {
  appAgentOwner: AccountId32 | string | Uint8Array
  appAgentBalancePayer: AccountId32 | string | Uint8Array
};

/**
 * Same as &#x60;create_app_agent&#x60; but can only be called by ForceOrigin
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appAgentsForceCreateAppAgent(
  args: AppAgentsForceCreateAppAgentArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'force_create_app_agent',
        pallet: 'appAgents',
      },
      ...info,
    },
    options
  );
}

export type AppAgentsForceInitiateAppAgentDestroyArgs = {
  appAgentId: u32 | AnyNumber | Uint8Array
};

/**
 * Force initiates the destroy of an AppAgent.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appAgentsForceInitiateAppAgentDestroy(
  args: AppAgentsForceInitiateAppAgentDestroyArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'force_initiate_app_agent_destroy',
        pallet: 'appAgents',
      },
      ...info,
    },
    options
  );
}

export type AppAgentsForceInitiateAppAgentSuspensionArgs = {
  appAgentId: u32 | AnyNumber | Uint8Array
};

/**
 * Force initiates the suspension of an AppAgent.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appAgentsForceInitiateAppAgentSuspension(
  args: AppAgentsForceInitiateAppAgentSuspensionArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'force_initiate_app_agent_suspension',
        pallet: 'appAgents',
      },
      ...info,
    },
    options
  );
}

export type AppAgentsForceInitiateAppAgentUnsuspensionArgs = {
  appAgentId: u32 | AnyNumber | Uint8Array
};

/**
 * Force initiates the un-suspension of an AppAgent.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appAgentsForceInitiateAppAgentUnsuspension(
  args: AppAgentsForceInitiateAppAgentUnsuspensionArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'force_initiate_app_agent_unsuspension',
        pallet: 'appAgents',
      },
      ...info,
    },
    options
  );
}

export type AppAgentsInitiateDestroyAppAgentArgs = {
  /**
  *  The identifier of the App Agent to be deleted.
  */
  appAgentId: u32 | AnyNumber | Uint8Array
};

/**
 * Initiate destroy of an App Agent. This function marks the specified &#x60;app_agent_id&#x60; as ready for deletion. It first checks if the App Agent exists in the storage. If the App Agent exists and is active, it sets the status to &quot;destroy initiated&quot; to prepare it for deletion. It then emits an event to indicate that the deletion process has been initiated for the App Agent. # Parameters
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appAgentsInitiateDestroyAppAgent(
  args: AppAgentsInitiateDestroyAppAgentArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'initiate_destroy_app_agent',
        pallet: 'appAgents',
      },
      ...info,
    },
    options
  );
}

export type AppAgentsPauseAppAgentArgs = {
  /**
  *  The ID of the App Agent to be paused.
  */
  appAgentId: u32 | AnyNumber | Uint8Array
};

/**
 * Pauses the specified App Agent. This function verifies that the caller has the necessary permissions to pause the app agent.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appAgentsPauseAppAgent(
  args: AppAgentsPauseAppAgentArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'pause_app_agent',
        pallet: 'appAgents',
      },
      ...info,
    },
    options
  );
}

export type AppAgentsProcessDestroyArgs = {
  /**
  *  The identifier of the App Agent.
  */
  appAgentId: u32 | AnyNumber | Uint8Array
  destroyInfo: TraitPrimitivesAppAgentsDestroyAppAgentDestroyInfo | { ownFungibles?: any; ownNonFungibles?: any; controlledAddressesInfos?: any; appAgentFungibles?: any; appAgentNonFungibles?: any } | string | Uint8Array
};

/**
 * Processes the destruction of assets owned by the App Agent. This function is used to process the destruction of assets owned by the specified app agent. This extrinsic can be called multiple times to destroy all entities related to the app agent. On the first call the status of app agent changes to DestroyInProcess - after that app agent can not be reactivated. It emits &#x60;AppAgentDestroyProcessed&#x60; after the destruction process is completed. Parameters:
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appAgentsProcessDestroy(
  args: AppAgentsProcessDestroyArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'process_destroy',
        pallet: 'appAgents',
      },
      ...info,
    },
    options
  );
}

export type AppAgentsReactivateAppAgentArgs = {
  /**
  *  The identifier of the App Agent to be reactivated.
  */
  appAgentId: u32 | AnyNumber | Uint8Array
};

/**
 * Reactivates the specified App Agent. This function is used to reactivate a previously deactivated App Agent. It checks if the App Agent exists and is in the DestroyInitiated state. If so, it verifies whether the deletion window has passed. If the deletion was initiated by the system, it attempts to process a subscription payment to prevent deletion and sets the App Agent to active status. If the deletion was triggered by the owner, it resets the App Agent to active without any checks. After reactivation, it emits an event to indicate the status change of the App Agent. Parameters:
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appAgentsReactivateAppAgent(
  args: AppAgentsReactivateAppAgentArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'reactivate_app_agent',
        pallet: 'appAgents',
      },
      ...info,
    },
    options
  );
}

export type AppAgentsRemoveAdminArgs = {
  /**
  *  The ID of the App Agent.
  */
  appAgentId: u32 | AnyNumber | Uint8Array
  /**
  *  The account ID of the admin to be removed.
  */
  admin: AccountId32 | string | Uint8Array
};

/**
 * Removes an admin from the App Agent. This function is used to remove an admin from the App Agent. The caller must be the current owner of the App Agent, and the admin must be present in the list of admins. The function also releases the reserved admin deposit amount. # Parameters
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appAgentsRemoveAdmin(
  args: AppAgentsRemoveAdminArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'remove_admin',
        pallet: 'appAgents',
      },
      ...info,
    },
    options
  );
}

export type AppAgentsRemoveAdminFromNamedAddressDispatchArgs = {
  /**
  *  The identifier of the App Agent.
  */
  appAgentId: u32 | AnyNumber | Uint8Array
  /**
  *  The account ID of the admin being removed.
  */
  admin: AccountId32 | string | Uint8Array
  /**
  *  The named address from which the admin is being removed.
  */
  namedAddress: AccountId32 | string | Uint8Array
};

/**
 * Removes an admin from the list of permitted administrators for a named address under a specific App Agent. # Parameters
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appAgentsRemoveAdminFromNamedAddressDispatch(
  args: AppAgentsRemoveAdminFromNamedAddressDispatchArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'remove_admin_from_named_address_dispatch',
        pallet: 'appAgents',
      },
      ...info,
    },
    options
  );
}

export type AppAgentsSetAdminDispatchFilterArgs = {
  /**
  *  The ID of the App Agent.
  */
  appAgentId: u32 | AnyNumber | Uint8Array
  /**
  *  The account ID of the admin.
  */
  admin: AccountId32 | string | Uint8Array
  newPermissions: u64 | AnyNumber | Uint8Array
};

/**
 * Sets the list of dispatchables callable by the specified &#x60;admin&#x60; account. The dispatch filter allows restricting the functions that can be called by an admin. If the dispatch filter is not set for an admin, the admin can call all functions. If the dispatch filter is set, the admin can only call the functions allowed by the filter. # Parameters
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appAgentsSetAdminDispatchFilter(
  args: AppAgentsSetAdminDispatchFilterArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_admin_dispatch_filter',
        pallet: 'appAgents',
      },
      ...info,
    },
    options
  );
}

export type AppAgentsSetAppAgentMetadataArgs = {
  appAgentId: u32 | AnyNumber | Uint8Array
  /**
  *  The general information of this asset. Limited in length by `StringLimit`.
  */
  data: Bytes | string | Uint8Array
};

/**
 * Set the metadata for an asset class. Origin must be either &#x60;ForceOrigin&#x60; or &#x60;Signed&#x60; and the sender should be the Owner of the asset &#x60;class&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appAgentsSetAppAgentMetadata(
  args: AppAgentsSetAppAgentMetadataArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_app_agent_metadata',
        pallet: 'appAgents',
      },
      ...info,
    },
    options
  );
}

export type AppAgentsUnpauseAppAgentArgs = {
  /**
  *  The ID of the App Agent to be resumed.
  */
  appAgentId: u32 | AnyNumber | Uint8Array
};

/**
 * Resumes the specified App Agent. This function verifies that the caller has the necessary permissions to resume the app agent.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appAgentsUnpauseAppAgent(
  args: AppAgentsUnpauseAppAgentArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'unpause_app_agent',
        pallet: 'appAgents',
      },
      ...info,
    },
    options
  );
}

export type AppResourcesSetActionPointsBalanceArgs = {
  /**
  *  The account for which the action points balance will be set.
  */
  address: AccountId32 | string | Uint8Array
  /**
  *  The balance of action points to be set for the specified account.
  */
  balance: u128 | AnyNumber | Uint8Array
};

/**
 * Sets the action points balance for a specified account. This function allows setting the action points balance for a specified account. Parameters:
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appResourcesSetActionPointsBalance(
  args: AppResourcesSetActionPointsBalanceArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_action_points_balance',
        pallet: 'appResources',
      },
      ...info,
    },
    options
  );
}

export type AppResourcesSetClearingPointsBalanceArgs = {
  /**
  *  The account for which the clearing points balance will be set.
  */
  address: AccountId32 | string | Uint8Array
  /**
  *  The balance of clearing points to be set for the specified account.
  */
  balance: u128 | AnyNumber | Uint8Array
};

/**
 * Sets the clearing points balance for a specified account. This function allows setting the clearing points balance for a specified account. Parameters:
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appResourcesSetClearingPointsBalance(
  args: AppResourcesSetClearingPointsBalanceArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_clearing_points_balance',
        pallet: 'appResources',
      },
      ...info,
    },
    options
  );
}

export type AppSubscriptionsCreateAppSubscriptionTierArgs = {
  /**
  *  The details of the subscription tier to be created.
  */
  details: TraitPrimitivesAppSubscriptionsAppSubscriptionTierDetails | { includedCtNumber?: any; includedCtActionsNumber?: any; includedAnonymousTransfers?: any; price?: any; payOnDemand?: any; billingPeriodLength?: any } | string | Uint8Array
};

/**
 * Creates a new subscription tier with the provided details. This function is used to create a new subscription tier with the specified details. It generates a unique identifier for the tier, inserts the tier into storage, updates the next tier ID, and emits an event to indicate the creation of the subscription tier. Parameters:
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appSubscriptionsCreateAppSubscriptionTier(
  args: AppSubscriptionsCreateAppSubscriptionTierArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'create_app_subscription_tier',
        pallet: 'appSubscriptions',
      },
      ...info,
    },
    options
  );
}

export type AppSubscriptionsObsoleteAppSubscriptionTierArgs = {
  tierToObsolete: u32 | AnyNumber | Uint8Array
  successorTier: u32 | AnyNumber | Uint8Array
};

/**
 * Updates the details or status of an existing subscription tier. This function is used to patch the details or status of an existing subscription tier identified by its ID. It retrieves the tier from storage, updates its details or status based on the provided patch, and stores the updated tier back into storage. After patching, it emits an event to indicate the changes made to the subscription tier. Parameters:
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appSubscriptionsObsoleteAppSubscriptionTier(
  args: AppSubscriptionsObsoleteAppSubscriptionTierArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'obsolete_app_subscription_tier',
        pallet: 'appSubscriptions',
      },
      ...info,
    },
    options
  );
}

export type AppSubscriptionsSetAppPayOnDemandModeArgs = {
  /**
  *  The identifier of the subscriber (app agent).
  */
  appAgentId: u32 | AnyNumber | Uint8Array
  /**
  *  The pay-on-demand mode to be set for the subscription.
  */
  payOnDemandMode: TraitPrimitivesAppSubscriptionsAppPayOnDemandMode | 'AppAgent' | 'Admin' | 'Disabled' | number | Uint8Array
};

/**
 * Sets the pay-on-demand mode for an app agent&#x27;s subscription. This function allows setting the pay-on-demand mode for an app agent&#x27;s subscription. Parameters:
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appSubscriptionsSetAppPayOnDemandMode(
  args: AppSubscriptionsSetAppPayOnDemandModeArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_app_pay_on_demand_mode',
        pallet: 'appSubscriptions',
      },
      ...info,
    },
    options
  );
}

export type AppSubscriptionsSetAppSubscriptionTierArgs = {
  /**
  *  The identifier of the app agent whose subscription tier is to be
  */
  appAgentId: u32 | AnyNumber | Uint8Array
  /**
  *  The identifier of the new subscription tier to be assigned to
  */
  subscriptionTierId: u32 | AnyNumber | Uint8Array
};

/**
 * Changes the subscription tier of an app agent. This function allows changing the subscription tier of an app agent identified by its subscriber ID. It calculates the difference in price between the current and new tiers and adjusts the subscription limits accordingly. If the new tier is more expensive, it charges the delta payment and updates the action points and clearing points balances for the current billing period. After the adjustment, it updates the subscription tier information for the app agent and emits an event indicating the change in subscription tier. Parameters:
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appSubscriptionsSetAppSubscriptionTier(
  args: AppSubscriptionsSetAppSubscriptionTierArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_app_subscription_tier',
        pallet: 'appSubscriptions',
      },
      ...info,
    },
    options
  );
}

export type AppTransactionsForceSubmitClearingTransactionArgs = {
  appAgentId: u32 | AnyNumber | Uint8Array
  extraFeePayer: AccountId32 | string | Uint8Array
  atomics: Vec<Vec<ITuple<[TraitPrimitivesAppTransactionsCtActionOrigin, Call]>>>
};

/**
 * Submit a Clearing transaction with root permissions. CT consists of a number of Atomics. Each Atomic consists of a number of Actions. Atomics are executed atomically - if an action within an atomic fails, then the entire atomic is no-op. Atomics within a CT are processed independently of each other. In case of errors, method takes additional fee from &#x60;extra_fee_payer&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appTransactionsForceSubmitClearingTransaction(
  args: AppTransactionsForceSubmitClearingTransactionArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'force_submit_clearing_transaction',
        pallet: 'appTransactions',
      },
      ...info,
    },
    options
  );
}

export type AppTransactionsSubmitClearingTransactionArgs = {
  appAgentId: u32 | AnyNumber | Uint8Array
  atomics: Vec<Vec<ITuple<[TraitPrimitivesAppTransactionsCtActionOrigin, Call]>>>
};

/**
 * Submit a Clearing transaction. CT consists of a number of Atomics. Each Atomic consists of a number of Actions. Atomics are executed atomically - if an action within an atomic fails, then the entire atomic is no-op. Atomics within a CT are processed independently of each other. In case of errors, method takes additional fee from admin that submitted СT (origin).
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appTransactionsSubmitClearingTransaction(
  args: AppTransactionsSubmitClearingTransactionArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'submit_clearing_transaction',
        pallet: 'appTransactions',
      },
      ...info,
    },
    options
  );
}

export type AppTransferChannelsEstablishTransferChannelArgs = {
  /**
  *  The account ID of the sender address for the new transfer channel.
  */
  senderAccount: AccountId32 | string | Uint8Array
  /**
  *  The number of blocks after which the transfer limit
  */
  transfersLimitResetPeriod: u32 | AnyNumber | Uint8Array
  /**
  *  The number of transfers allowed per period
  */
  transfersLimitPerPeriod: u128 | AnyNumber | Uint8Array
};

/**
 * Establishes a new transfer channel between two accounts. This extrinsic allows the account specified by &#x60;origin&#x60; to establish a new transfer channel between itself (&#x60;recipient_account&#x60;) and the &#x60;sender_account&#x60;. The function checks various conditions, including ensuring that the recipient is not the same as the sender address and that the recipient is a valid transactional address (TA). If all conditions are met, a new transfer channel is created with an initial set of parameters, and an event is emitted to indicate the successful channel establishment. # Cost of the call This method can be called only by a Transactional address. Which means this call can be submitted only within a Clearing transaction. Thus implicit cost of creation of a Transfer channel - 1 Action point, cost of adding an action in a Clearing transaction. # Parameters
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appTransferChannelsEstablishTransferChannel(
  args: AppTransferChannelsEstablishTransferChannelArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'establish_transfer_channel',
        pallet: 'appTransferChannels',
      },
      ...info,
    },
    options
  );
}

export type AppTransferChannelsRemoveTransferChannelArgs = {
  /**
  *  The account ID of the sender address for the transfer channel to be
  */
  senderAccount: AccountId32 | string | Uint8Array
};

/**
 * Removes a transfer channel between two accounts. This extrinsic allows the account specified by &#x60;origin&#x60; to remove a previously created transfer channel between itself and the &#x60;sender_account&#x60;. The function checks various conditions, including ensuring that the recipient is not the same as the sender address and that a transfer channel exists between them. If all conditions are met, the transfer channel is removed, and an event is emitted to indicate the successful removal. # Cost of the call This method can be called only by a Transactional address. Which means this call can be submitted only within a Clearing transaction. Thus implicit cost of creation of a Transfer channel - 1 Action point, cost of adding an action in a Clearing transaction. # Parameters
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appTransferChannelsRemoveTransferChannel(
  args: AppTransferChannelsRemoveTransferChannelArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'remove_transfer_channel',
        pallet: 'appTransferChannels',
      },
      ...info,
    },
    options
  );
}

export type AppTransferFiltersBlockAddressDepositsArgs = {
  appAgentId: u32 | AnyNumber | Uint8Array
  keylessAddress: AccountId32 | string | Uint8Array
};

/**
 * Blocks deposits to a keyless address controlled by a specific app agent. # Arguments * &#x60;app_agent_id&#x60; - The ID of the app agent. * &#x60;keyless_address&#x60; - The keyless address (controlled by AppAgent) to block. # Returns * &#x60;DispatchResult&#x60; - Indicates whether the transaction was successful or failed. # Errors Returns an error if: * The keyless address is already blocked   (&#x60;Error::&lt;T&gt;::KeylessAddressDepositsAlreadyBlocked&#x60;).
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appTransferFiltersBlockAddressDeposits(
  args: AppTransferFiltersBlockAddressDepositsArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'block_address_deposits',
        pallet: 'appTransferFilters',
      },
      ...info,
    },
    options
  );
}

export type AppTransferFiltersSetAppDepositPermissionsArgs = {
  /**
  *  The identifier of the application agent for which the deposit
  */
  appAgentId: u32 | AnyNumber | Uint8Array
  /**
  *  The deposit permissions to be set for the application agent.
  */
  permissions: TraitPrimitivesAppTransferFiltersAppDepositPermissions | { native?: any; fungibles?: any; nftCollections?: any } | string | Uint8Array
};

/**
 * Sets the transdepositfer permissions for the specified app_agent_id under the authority of the caller&#x27;s origin. This function allows the owner/admin of the app_agent_id to set the deposit permissions for the application agent. The caller must provide a valid origin that proves their authority over the app_agent_id. The permissions parameter represents the new deposit permissions to be set for the application agent. # Parameters
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appTransferFiltersSetAppDepositPermissions(
  args: AppTransferFiltersSetAppDepositPermissionsArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_app_deposit_permissions',
        pallet: 'appTransferFilters',
      },
      ...info,
    },
    options
  );
}

export type AppTransferFiltersUnblockAddressDepositsArgs = {
  appAgentId: u32 | AnyNumber | Uint8Array
  keylessAddress: AccountId32 | string | Uint8Array
};

/**
 * Unblocks deposits to a keyless address controlled by a specific app agent. # Arguments * &#x60;app_agent_id&#x60; - The ID of the app agent. * &#x60;keyless_address&#x60; - The keyless address to unblock. # Returns * &#x60;DispatchResult&#x60; - Indicates whether the transaction was successful or failed. # Errors Returns an error if: * The keyless address is not blocked   (&#x60;Error::&lt;T&gt;::KeylessAddressDepositsAreNotBlocked&#x60;).
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function appTransferFiltersUnblockAddressDeposits(
  args: AppTransferFiltersUnblockAddressDepositsArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'unblock_address_deposits',
        pallet: 'appTransferFilters',
      },
      ...info,
    },
    options
  );
}

export type AssetsApproveTransferArgs = {
  /**
  *  The identifier of the asset.
  */
  id: u32 | AnyNumber | Uint8Array
  /**
  *  The account to delegate permission to transfer asset.
  */
  delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  /**
  *  The amount of asset that may be transferred by `delegate`. If there is
  */
  amount: Compact<u128> | AnyNumber | Uint8Array
};

/**
 * Approve an amount of asset for transfer by a delegated third-party account. Origin must be Signed. Ensures that &#x60;ApprovalDeposit&#x60; worth of &#x60;Currency&#x60; is reserved from signing account for the purpose of holding the approval. If some non-zero amount of assets is already approved from signing account to &#x60;delegate&#x60;, then it is topped up or unreserved to meet the right value. NOTE: The signing account does not need to own &#x60;amount&#x60; of assets at the point of making this call.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsApproveTransfer(
  args: AssetsApproveTransferArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'approve_transfer',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsBlockArgs = {
  /**
  *  The identifier of the account's asset.
  */
  id: u32 | AnyNumber | Uint8Array
  /**
  *  The account to be unblocked.
  */
  who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
};

/**
 * Disallow further unprivileged transfers of an asset &#x60;id&#x60; to and from an account &#x60;who&#x60;. Origin must be Signed and the sender should be the Freezer of the asset &#x60;id&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsBlock(
  args: AssetsBlockArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'block',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsBurnArgs = {
  /**
  *  The identifier of the asset to have some amount burned.
  */
  id: u32 | AnyNumber | Uint8Array
  /**
  *  The account to be debited from.
  */
  who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  /**
  *  The maximum amount by which `who`'s balance should be reduced.
  */
  amount: Compact<u128> | AnyNumber | Uint8Array
};

/**
 * Reduce the balance of &#x60;who&#x60; by as much as possible up to &#x60;amount&#x60; assets of &#x60;id&#x60;. Origin must be Signed and the sender should be the Manager of the asset &#x60;id&#x60;. Bails with &#x60;NoAccount&#x60; if the &#x60;who&#x60; is already dead.
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
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'burn',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsCancelApprovalArgs = {
  /**
  *  The identifier of the asset.
  */
  id: u32 | AnyNumber | Uint8Array
  /**
  *  The account delegated permission to transfer asset.
  */
  delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
};

/**
 * Cancel all of some asset approved for delegated transfer by a third-party account. Origin must be Signed and there must be an approval in place between signer and &#x60;delegate&#x60;. Unreserves any deposit previously reserved by &#x60;approve_transfer&#x60; for the approval.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsCancelApproval(
  args: AssetsCancelApprovalArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'cancel_approval',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsCreateArgs = {
  minBalance: u128 | AnyNumber | Uint8Array
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
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'create',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsDestroyAccountsArgs = {
  /**
  *  The identifier of the asset to be destroyed. This must identify an existing
  */
  id: u32 | AnyNumber | Uint8Array
};

/**
 * Destroy all accounts associated with a given asset. &#x60;destroy_accounts&#x60; should only be called after &#x60;start_destroy&#x60; has been called, and the asset is in a &#x60;Destroying&#x60; state. Due to weight restrictions, this function may need to be called multiple times to fully destroy all accounts. It will destroy &#x60;RemoveItemsLimit&#x60; accounts at a time.
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
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'destroy_accounts',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsDestroyApprovalsArgs = {
  /**
  *  The identifier of the asset to be destroyed. This must identify an existing
  */
  id: u32 | AnyNumber | Uint8Array
};

/**
 * Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit). &#x60;destroy_approvals&#x60; should only be called after &#x60;start_destroy&#x60; has been called, and the asset is in a &#x60;Destroying&#x60; state. Due to weight restrictions, this function may need to be called multiple times to fully destroy all approvals. It will destroy &#x60;RemoveItemsLimit&#x60; approvals at a time.
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
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'destroy_approvals',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsFinishDestroyArgs = {
  /**
  *  The identifier of the asset to be destroyed. This must identify an existing
  */
  id: u32 | AnyNumber | Uint8Array
};

/**
 * Complete destroying asset and unreserve currency. &#x60;finish_destroy&#x60; should only be called after &#x60;start_destroy&#x60; has been called, and the asset is in a &#x60;Destroying&#x60; state. All accounts or approvals should be destroyed before hand.
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
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'finish_destroy',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsForceAssetStatusArgs = {
  /**
  *  The identifier of the asset.
  */
  id: u32 | AnyNumber | Uint8Array
  /**
  *  The new Owner of this asset.
  */
  owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  /**
  *  The new Issuer of this asset.
  */
  issuer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  /**
  *  The new Admin of this asset.
  */
  admin: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  /**
  *  The new Freezer of this asset.
  */
  freezer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  /**
  *  The minimum balance of this new asset that any single account must
  */
  minBalance: Compact<u128> | AnyNumber | Uint8Array
  /**
  *  Whether a non-zero balance of this asset is deposit of sufficient
  */
  isSufficient: bool | boolean | Uint8Array
  /**
  *  Whether this asset class is frozen except for permissioned/admin
  */
  isFrozen: bool | boolean | Uint8Array
};

/**
 * Alter the attributes of a given asset. Origin must be &#x60;ForceOrigin&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsForceAssetStatus(
  args: AssetsForceAssetStatusArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'force_asset_status',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsForceCancelApprovalArgs = {
  /**
  *  The identifier of the asset.
  */
  id: u32 | AnyNumber | Uint8Array
  owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  /**
  *  The account delegated permission to transfer asset.
  */
  delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
};

/**
 * Cancel all of some asset approved for delegated transfer by a third-party account. Origin must be either ForceOrigin or Signed origin with the signer being the Admin account of the asset &#x60;id&#x60;. Unreserves any deposit previously reserved by &#x60;approve_transfer&#x60; for the approval.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsForceCancelApproval(
  args: AssetsForceCancelApprovalArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'force_cancel_approval',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsForceCreateArgs = {
  /**
  *  The identifier of the new asset. This must not be currently in use to identify
  */
  id: u32 | AnyNumber | Uint8Array
  /**
  *  The owner of this class of assets. The owner has full superuser permissions
  */
  owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  isSufficient: bool | boolean | Uint8Array
  /**
  *  The minimum balance of this new asset that any single account must
  */
  minBalance: Compact<u128> | AnyNumber | Uint8Array
};

/**
 * Issue a new class of fungible assets from a privileged origin. This new asset class has no assets initially. The origin must conform to &#x60;ForceOrigin&#x60;. Unlike &#x60;create&#x60;, no funds are reserved.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsForceCreate(
  args: AssetsForceCreateArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'force_create',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsForceTransferArgs = {
  /**
  *  The identifier of the asset to have some amount transferred.
  */
  id: u32 | AnyNumber | Uint8Array
  /**
  *  The account to be debited.
  */
  source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  /**
  *  The account to be credited.
  */
  dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  /**
  *  The amount by which the `source`'s balance of assets should be reduced and
  */
  amount: Compact<u128> | AnyNumber | Uint8Array
};

/**
 * Move some assets from one account to another. Origin must be Signed and the sender should be the Admin of the asset &#x60;id&#x60;.
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
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'force_transfer',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsFreezeArgs = {
  /**
  *  The identifier of the asset to be frozen.
  */
  id: u32 | AnyNumber | Uint8Array
  /**
  *  The account to be frozen.
  */
  who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
};

/**
 * Disallow further unprivileged transfers of an asset &#x60;id&#x60; from an account &#x60;who&#x60;. &#x60;who&#x60; must already exist as an entry in &#x60;Account&#x60;s of the asset. If you want to freeze an account that does not have an entry, use &#x60;touch_other&#x60; first. Origin must be Signed and the sender should be the Freezer of the asset &#x60;id&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsFreeze(
  args: AssetsFreezeArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'freeze',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsFreezeAssetArgs = {
  /**
  *  The identifier of the asset to be frozen.
  */
  id: u32 | AnyNumber | Uint8Array
};

/**
 * Disallow further unprivileged transfers for the asset class. Origin must be Signed and the sender should be the Freezer of the asset &#x60;id&#x60;.
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
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'freeze_asset',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsMintArgs = {
  /**
  *  The identifier of the asset to have some amount minted.
  */
  id: u32 | AnyNumber | Uint8Array
  /**
  *  The account to be credited with the minted assets.
  */
  beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  /**
  *  The amount of the asset to be minted.
  */
  amount: Compact<u128> | AnyNumber | Uint8Array
};

/**
 * Mint assets of a particular class. The origin must be Signed and the sender must be the Issuer of the asset &#x60;id&#x60;.
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
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'mint',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsRefundArgs = {
  /**
  *  The identifier of the asset for which the caller would like the deposit
  */
  id: u32 | AnyNumber | Uint8Array
  /**
  *  If `true` then assets may be destroyed in order to complete the refund.
  */
  allowBurn: bool | boolean | Uint8Array
};

/**
 * Return the deposit (if any) of an asset account or a consumer reference (if any) of an account. The origin must be Signed.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsRefund(
  args: AssetsRefundArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'refund',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsRefundOtherArgs = {
  /**
  *  The identifier of the asset for the account holding a deposit.
  */
  id: u32 | AnyNumber | Uint8Array
  /**
  *  The account to refund.
  */
  who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
};

/**
 * Return the deposit (if any) of a target asset account. Useful if you are the depositor. The origin must be Signed and either the account owner, depositor, or asset &#x60;Admin&#x60;. In order to burn a non-zero balance of the asset, the caller must be the account and should use &#x60;refund&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsRefundOther(
  args: AssetsRefundOtherArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'refund_other',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsSetMetadataArgs = {
  /**
  *  The identifier of the asset to update.
  */
  id: u32 | AnyNumber | Uint8Array
  /**
  *  The data of metadata. Limited in length by `StringLimit`.
  */
  data: Bytes | string | Uint8Array
};

/**
 * Set the raw metadata for an asset. Origin must be Signed and the sender should be the Owner of the asset &#x60;id&#x60;. Funds of sender are reserved according to the formula: &#x60;MetadataDepositBase + MetadataDepositPerByte * (data.len)&#x60; taking into account any already reserved funds.
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
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_metadata',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsSetMinBalanceArgs = {
  /**
  *  The identifier of the asset.
  */
  id: u32 | AnyNumber | Uint8Array
  /**
  *  The new value of `min_balance`.
  */
  minBalance: u128 | AnyNumber | Uint8Array
};

/**
 * Sets the minimum balance of an asset. Only works if there aren&#x27;t any accounts that are holding the asset or if the new value of &#x60;min_balance&#x60; is less than the old one. Origin must be Signed and the sender has to be the Owner of the asset &#x60;id&#x60;.
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
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_min_balance',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsSetTeamArgs = {
  /**
  *  The identifier of the asset to be frozen.
  */
  id: u32 | AnyNumber | Uint8Array
  /**
  *  The new Issuer of this asset.
  */
  issuer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  /**
  *  The new Admin of this asset.
  */
  admin: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  /**
  *  The new Freezer of this asset.
  */
  freezer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
};

/**
 * Change the Issuer, Admin and Freezer of an asset. Origin must be Signed and the sender should be the Owner of the asset &#x60;id&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsSetTeam(
  args: AssetsSetTeamArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_team',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsStartDestroyArgs = {
  /**
  *  The identifier of the asset to be destroyed. This must identify an existing
  */
  id: u32 | AnyNumber | Uint8Array
};

/**
 * Start the process of destroying a fungible asset class. &#x60;start_destroy&#x60; is the first in a series of extrinsics that should be called, to allow destruction of an asset class. The origin must conform to &#x60;ForceOrigin&#x60; or must be &#x60;Signed&#x60; by the asset&#x27;s &#x60;owner&#x60;.
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
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'start_destroy',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsThawArgs = {
  /**
  *  The identifier of the asset to be frozen.
  */
  id: u32 | AnyNumber | Uint8Array
  /**
  *  The account to be unfrozen.
  */
  who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
};

/**
 * Allow unprivileged transfers to and from an account again. Origin must be Signed and the sender should be the Admin of the asset &#x60;id&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsThaw(
  args: AssetsThawArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'thaw',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsThawAssetArgs = {
  /**
  *  The identifier of the asset to be thawed.
  */
  id: u32 | AnyNumber | Uint8Array
};

/**
 * Allow unprivileged transfers for the asset again. Origin must be Signed and the sender should be the Admin of the asset &#x60;id&#x60;.
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
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'thaw_asset',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsTouchArgs = {
  /**
  *  The identifier of the asset for the account to be created.
  */
  id: u32 | AnyNumber | Uint8Array
};

/**
 * Create an asset account for non-provider assets. A deposit will be taken from the signer account.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsTouch(
  args: AssetsTouchArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'touch',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsTouchOtherArgs = {
  /**
  *  The identifier of the asset for the account to be created.
  */
  id: u32 | AnyNumber | Uint8Array
  /**
  *  The account to be created.
  */
  who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
};

/**
 * Create an asset account for &#x60;who&#x60;. A deposit will be taken from the signer account.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsTouchOther(
  args: AssetsTouchOtherArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'touch_other',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsTransferArgs = {
  /**
  *  The identifier of the asset to have some amount transferred.
  */
  id: u32 | AnyNumber | Uint8Array
  /**
  *  The account to be credited.
  */
  target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  /**
  *  The amount by which the sender's balance of assets should be reduced and
  */
  amount: Compact<u128> | AnyNumber | Uint8Array
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
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'transfer',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsTransferApprovedArgs = {
  /**
  *  The identifier of the asset.
  */
  id: u32 | AnyNumber | Uint8Array
  /**
  *  The account which previously approved for a transfer of at least `amount` and
  */
  owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  /**
  *  The account to which the asset balance of `amount` will be transferred.
  */
  destination: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  /**
  *  The amount of assets to transfer.
  */
  amount: Compact<u128> | AnyNumber | Uint8Array
};

/**
 * Transfer some asset balance from a previously delegated account to some third-party account. Origin must be Signed and there must be an approval in place by the &#x60;owner&#x60; to the signer. If the entire amount approved for transfer is transferred, then any deposit previously reserved by &#x60;approve_transfer&#x60; is unreserved.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsTransferApproved(
  args: AssetsTransferApprovedArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'transfer_approved',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsTransferKeepAliveArgs = {
  /**
  *  The identifier of the asset to have some amount transferred.
  */
  id: u32 | AnyNumber | Uint8Array
  /**
  *  The account to be credited.
  */
  target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  /**
  *  The amount by which the sender's balance of assets should be reduced and
  */
  amount: Compact<u128> | AnyNumber | Uint8Array
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
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'transfer_keep_alive',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type AssetsTransferOwnershipArgs = {
  /**
  *  The identifier of the asset.
  */
  id: u32 | AnyNumber | Uint8Array
  /**
  *  The new Owner of this asset.
  */
  owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
};

/**
 * Change the Owner of an asset. Origin must be Signed and the sender should be the Owner of the asset &#x60;id&#x60;.
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
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'transfer_ownership',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

export type BalancesBurnArgs = {
  value: Compact<u128> | AnyNumber | Uint8Array
  keepAlive: bool | boolean | Uint8Array
};

/**
 * Burn the specified liquid free balance from the origin account. If the origin&#x27;s account ends up below the existential deposit as a result of the burn and &#x60;keep_alive&#x60; is false, the account will be reaped. Unlike sending funds to a _burn_ address, which merely makes the funds inaccessible, this &#x60;burn&#x60; operation will reduce total issuance by the amount _burned_.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function balancesBurn(
  args: BalancesBurnArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'burn',
        pallet: 'balances',
      },
      ...info,
    },
    options
  );
}

export type BalancesForceAdjustTotalIssuanceArgs = {
  direction: PalletBalancesAdjustmentDirection | 'Increase' | 'Decrease' | number | Uint8Array
  delta: Compact<u128> | AnyNumber | Uint8Array
};

/**
 * Adjust the total issuance in a saturating way. Can only be called by root and always needs a positive &#x60;delta&#x60;. # Example
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function balancesForceAdjustTotalIssuance(
  args: BalancesForceAdjustTotalIssuanceArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'force_adjust_total_issuance',
        pallet: 'balances',
      },
      ...info,
    },
    options
  );
}

export type BalancesForceSetBalanceArgs = {
  who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  newFree: Compact<u128> | AnyNumber | Uint8Array
};

/**
 * Set the regular balance of a given account. The dispatch origin for this call is &#x60;root&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function balancesForceSetBalance(
  args: BalancesForceSetBalanceArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'force_set_balance',
        pallet: 'balances',
      },
      ...info,
    },
    options
  );
}

export type BalancesForceTransferArgs = {
  source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  value: Compact<u128> | AnyNumber | Uint8Array
};

/**
 * Exactly as &#x60;transfer_allow_death&#x60;, except the origin must be root and the source account may be specified.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function balancesForceTransfer(
  args: BalancesForceTransferArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'force_transfer',
        pallet: 'balances',
      },
      ...info,
    },
    options
  );
}

export type BalancesForceUnreserveArgs = {
  who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  amount: u128 | AnyNumber | Uint8Array
};

/**
 * Unreserve some balance from a user by force. Can only be called by ROOT.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function balancesForceUnreserve(
  args: BalancesForceUnreserveArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'force_unreserve',
        pallet: 'balances',
      },
      ...info,
    },
    options
  );
}

export type BalancesTransferAllArgs = {
  /**
  *  The recipient of the transfer.
  */
  dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  /**
  *  A boolean to determine if the `transfer_all` operation should send all
  */
  keepAlive: bool | boolean | Uint8Array
};

/**
 * Transfer the entire transferable balance from the caller account. NOTE: This function only attempts to transfer _transferable_ balances. This means that any locked, reserved, or existential deposits (when &#x60;keep_alive&#x60; is &#x60;true&#x60;), will not be transferred by this function. To ensure that this function results in a killed account, you might need to prepare the account by removing any reference counters, storage deposits, etc... The dispatch origin of this call must be Signed.
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
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'transfer_all',
        pallet: 'balances',
      },
      ...info,
    },
    options
  );
}

export type BalancesTransferAllowDeathArgs = {
  dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  value: Compact<u128> | AnyNumber | Uint8Array
};

/**
 * Transfer some liquid free balance to another account. &#x60;transfer_allow_death&#x60; will set the &#x60;FreeBalance&#x60; of the sender and receiver. If the sender&#x27;s account is below the existential deposit as a result of the transfer, the account will be reaped. The dispatch origin for this call must be &#x60;Signed&#x60; by the transactor.
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
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'transfer_allow_death',
        pallet: 'balances',
      },
      ...info,
    },
    options
  );
}

export type BalancesTransferKeepAliveArgs = {
  dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  value: Compact<u128> | AnyNumber | Uint8Array
};

/**
 * Same as the [&#x60;transfer_allow_death&#x60;] call, but with a check that the transfer will not kill the origin account. 99% of the time you want [&#x60;transfer_allow_death&#x60;] instead. [&#x60;transfer_allow_death&#x60;]: struct.Pallet.html#method.transfer
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
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'transfer_keep_alive',
        pallet: 'balances',
      },
      ...info,
    },
    options
  );
}

export type BalancesUpgradeAccountsArgs = {
  /**
  *  The account to be upgraded.
  */
  who: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]
};

/**
 * Upgrade a specified account.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function balancesUpgradeAccounts(
  args: BalancesUpgradeAccountsArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'upgrade_accounts',
        pallet: 'balances',
      },
      ...info,
    },
    options
  );
}

export type CollatorSelectionAddInvulnerableArgs = {
  who: AccountId32 | string | Uint8Array
};

/**
 * Add a new account &#x60;who&#x60; to the list of &#x60;Invulnerables&#x60; collators. &#x60;who&#x60; must have registered session keys. If &#x60;who&#x60; is a candidate, they will be removed. The origin for this call must be the &#x60;UpdateOrigin&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function collatorSelectionAddInvulnerable(
  args: CollatorSelectionAddInvulnerableArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'add_invulnerable',
        pallet: 'collatorSelection',
      },
      ...info,
    },
    options
  );
}

export type CollatorSelectionLeaveIntentArgs = {
};

/**
 * Deregister &#x60;origin&#x60; as a collator candidate. Note that the collator can only leave on session change. The &#x60;CandidacyBond&#x60; will be unreserved immediately. This call will fail if the total number of candidates would drop below &#x60;MinEligibleCollators&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function collatorSelectionLeaveIntent(
  args: CollatorSelectionLeaveIntentArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'leave_intent',
        pallet: 'collatorSelection',
      },
      ...info,
    },
    options
  );
}

export type CollatorSelectionRegisterAsCandidateArgs = {
};

/**
 * Register this account as a collator candidate. The account must (a) already have registered session keys and (b) be able to reserve the &#x60;CandidacyBond&#x60;. This call is not available to &#x60;Invulnerable&#x60; collators.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function collatorSelectionRegisterAsCandidate(
  args: CollatorSelectionRegisterAsCandidateArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'register_as_candidate',
        pallet: 'collatorSelection',
      },
      ...info,
    },
    options
  );
}

export type CollatorSelectionRemoveInvulnerableArgs = {
  who: AccountId32 | string | Uint8Array
};

/**
 * Remove an account &#x60;who&#x60; from the list of &#x60;Invulnerables&#x60; collators. &#x60;Invulnerables&#x60; must be sorted. The origin for this call must be the &#x60;UpdateOrigin&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function collatorSelectionRemoveInvulnerable(
  args: CollatorSelectionRemoveInvulnerableArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'remove_invulnerable',
        pallet: 'collatorSelection',
      },
      ...info,
    },
    options
  );
}

export type CollatorSelectionSetCandidacyBondArgs = {
  bond: u128 | AnyNumber | Uint8Array
};

/**
 * Set the candidacy bond amount. If the candidacy bond is increased by this call, all current candidates which have a deposit lower than the new bond will be kicked from the list and get their deposits back. The origin for this call must be the &#x60;UpdateOrigin&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function collatorSelectionSetCandidacyBond(
  args: CollatorSelectionSetCandidacyBondArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_candidacy_bond',
        pallet: 'collatorSelection',
      },
      ...info,
    },
    options
  );
}

export type CollatorSelectionSetDesiredCandidatesArgs = {
  max: u32 | AnyNumber | Uint8Array
};

/**
 * Set the ideal number of non-invulnerable collators. If lowering this number, then the number of running collators could be higher than this figure. Aside from that edge case, there should be no other way to have more candidates than the desired number. The origin for this call must be the &#x60;UpdateOrigin&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function collatorSelectionSetDesiredCandidates(
  args: CollatorSelectionSetDesiredCandidatesArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_desired_candidates',
        pallet: 'collatorSelection',
      },
      ...info,
    },
    options
  );
}

export type CollatorSelectionSetInvulnerablesArgs = {
  updated: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]
};

/**
 * Set the list of invulnerable (fixed) collators. These collators must do some preparation, namely to have registered session keys. The call will remove any accounts that have not registered keys from the set. That is, it is non-atomic; the caller accepts all &#x60;AccountId&#x60;s passed in &#x60;new&#x60; _individually_ as acceptable Invulnerables, and is not proposing a _set_ of new Invulnerables. This call does not maintain mutual exclusivity of &#x60;Invulnerables&#x60; and &#x60;Candidates&#x60;. It is recommended to use a batch of &#x60;add_invulnerable&#x60; and &#x60;remove_invulnerable&#x60; instead. A &#x60;batch_all&#x60; can also be used to enforce atomicity. If any candidates are included in &#x60;new&#x60;, they should be removed with &#x60;remove_invulnerable_candidate&#x60; after execution. Must be called by the &#x60;UpdateOrigin&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function collatorSelectionSetInvulnerables(
  args: CollatorSelectionSetInvulnerablesArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_invulnerables',
        pallet: 'collatorSelection',
      },
      ...info,
    },
    options
  );
}

export type CollatorSelectionTakeCandidateSlotArgs = {
  deposit: u128 | AnyNumber | Uint8Array
  target: AccountId32 | string | Uint8Array
};

/**
 * The caller &#x60;origin&#x60; replaces a candidate &#x60;target&#x60; in the collator candidate list by reserving &#x60;deposit&#x60;. The amount &#x60;deposit&#x60; reserved by the caller must be greater than the existing bond of the target it is trying to replace. This call will fail if the caller is already a collator candidate or invulnerable, the caller does not have registered session keys, the target is not a collator candidate, and/or the &#x60;deposit&#x60; amount cannot be reserved.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function collatorSelectionTakeCandidateSlot(
  args: CollatorSelectionTakeCandidateSlotArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'take_candidate_slot',
        pallet: 'collatorSelection',
      },
      ...info,
    },
    options
  );
}

export type CollatorSelectionUpdateBondArgs = {
  newDeposit: u128 | AnyNumber | Uint8Array
};

/**
 * Update the candidacy bond of collator candidate &#x60;origin&#x60; to a new amount &#x60;new_deposit&#x60;. Setting a &#x60;new_deposit&#x60; that is lower than the current deposit while &#x60;origin&#x60; is occupying a top-&#x60;DesiredCandidates&#x60; slot is not allowed. This call will fail if &#x60;origin&#x60; is not a collator candidate, the updated bond is lower than the minimum candidacy bond, and/or the amount cannot be reserved.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function collatorSelectionUpdateBond(
  args: CollatorSelectionUpdateBondArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'update_bond',
        pallet: 'collatorSelection',
      },
      ...info,
    },
    options
  );
}

export type MessageQueueExecuteOverweightArgs = {
  /**
  *  The origin from which the message to be executed arrived.
  */
  messageOrigin: CumulusPrimitivesCoreAggregateMessageOrigin | { Here: any } | { Parent: any } | { Sibling: any } | string | Uint8Array
  /**
  *  The page in the queue in which the message to be executed is sitting.
  */
  page: u32 | AnyNumber | Uint8Array
  /**
  *  The index into the queue of the message to be executed.
  */
  index: u32 | AnyNumber | Uint8Array
  /**
  *  The maximum amount of weight allowed to be consumed in the execution
  */
  weightLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array
};

/**
 * Execute an overweight message. Temporary processing errors will be propagated whereas permanent errors are treated as success condition.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function messageQueueExecuteOverweight(
  args: MessageQueueExecuteOverweightArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'execute_overweight',
        pallet: 'messageQueue',
      },
      ...info,
    },
    options
  );
}

export type MessageQueueReapPageArgs = {
  messageOrigin: CumulusPrimitivesCoreAggregateMessageOrigin | { Here: any } | { Parent: any } | { Sibling: any } | string | Uint8Array
  pageIndex: u32 | AnyNumber | Uint8Array
};

/**
 * Remove a page which has no more messages remaining to be processed or is stale.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function messageQueueReapPage(
  args: MessageQueueReapPageArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'reap_page',
        pallet: 'messageQueue',
      },
      ...info,
    },
    options
  );
}

export type MultisigApproveAsMultiArgs = {
  /**
  *  The total number of approvals for this dispatch before it is executed.
  */
  threshold: u16 | AnyNumber | Uint8Array
  /**
  *  The accounts (other than the sender) who can approve this
  */
  otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]
  /**
  *  If this is the first approval, then this must be `None`. If it is
  */
  maybeTimepoint: Option<PalletMultisigTimepoint> | null | Uint8Array | PalletMultisigTimepoint | { height?: any; index?: any } | string
  /**
  *  The hash of the call to be executed.
  */
  callHash: U8aFixed | string | Uint8Array
  maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array
};

/**
 * Register approval for a dispatch to be made from a deterministic composite account if approved by a total of &#x60;threshold - 1&#x60; of &#x60;other_signatories&#x60;. Payment: &#x60;DepositBase&#x60; will be reserved if this is the first approval, plus &#x60;threshold&#x60; times &#x60;DepositFactor&#x60;. It is returned once this dispatch happens or is cancelled. The dispatch origin for this call must be _Signed_.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function multisigApproveAsMulti(
  args: MultisigApproveAsMultiArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'approve_as_multi',
        pallet: 'multisig',
      },
      ...info,
    },
    options
  );
}

export type MultisigAsMultiArgs = {
  /**
  *  The total number of approvals for this dispatch before it is executed.
  */
  threshold: u16 | AnyNumber | Uint8Array
  /**
  *  The accounts (other than the sender) who can approve this
  */
  otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]
  /**
  *  If this is the first approval, then this must be `None`. If it is
  */
  maybeTimepoint: Option<PalletMultisigTimepoint> | null | Uint8Array | PalletMultisigTimepoint | { height?: any; index?: any } | string
  /**
  *  The call to be executed.
  */
  call: Call | IMethod | string | Uint8Array
  maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array
};

/**
 * Register approval for a dispatch to be made from a deterministic composite account if approved by a total of &#x60;threshold - 1&#x60; of &#x60;other_signatories&#x60;. If there are enough, then dispatch the call. Payment: &#x60;DepositBase&#x60; will be reserved if this is the first approval, plus &#x60;threshold&#x60; times &#x60;DepositFactor&#x60;. It is returned once this dispatch happens or is cancelled. The dispatch origin for this call must be _Signed_.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function multisigAsMulti(
  args: MultisigAsMultiArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'as_multi',
        pallet: 'multisig',
      },
      ...info,
    },
    options
  );
}

export type MultisigAsMultiThreshold1Args = {
  /**
  *  The accounts (other than the sender) who are part of the
  */
  otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]
  /**
  *  The call to be executed.
  */
  call: Call | IMethod | string | Uint8Array
};

/**
 * Immediately dispatch a multi-signature call using a single approval from the caller. The dispatch origin for this call must be _Signed_.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function multisigAsMultiThreshold1(
  args: MultisigAsMultiThreshold1Args,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'as_multi_threshold_1',
        pallet: 'multisig',
      },
      ...info,
    },
    options
  );
}

export type MultisigCancelAsMultiArgs = {
  /**
  *  The total number of approvals for this dispatch before it is executed.
  */
  threshold: u16 | AnyNumber | Uint8Array
  /**
  *  The accounts (other than the sender) who can approve this
  */
  otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]
  /**
  *  The timepoint (block number and transaction index) of the first approval
  */
  timepoint: PalletMultisigTimepoint | { height?: any; index?: any } | string | Uint8Array
  /**
  *  The hash of the call to be executed.
  */
  callHash: U8aFixed | string | Uint8Array
};

/**
 * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously for this operation will be unreserved on success. The dispatch origin for this call must be _Signed_.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function multisigCancelAsMulti(
  args: MultisigCancelAsMultiArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'cancel_as_multi',
        pallet: 'multisig',
      },
      ...info,
    },
    options
  );
}

export type NftsApproveItemAttributesArgs = {
  /**
  *  A collection of the item.
  */
  collection: u32 | AnyNumber | Uint8Array
  /**
  *  The item that holds attributes.
  */
  item: u32 | AnyNumber | Uint8Array
  /**
  *  The account to delegate permission to change attributes of the item.
  */
  delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
};

/**
 * Approve item&#x27;s attributes to be changed by a delegated third-party account. Origin must be Signed and must be an owner of the &#x60;item&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsApproveItemAttributes(
  args: NftsApproveItemAttributesArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'approve_item_attributes',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsApproveTransferArgs = {
  /**
  *  The collection of the item to be approved for delegated transfer.
  */
  collection: u32 | AnyNumber | Uint8Array
  /**
  *  The item to be approved for delegated transfer.
  */
  item: u32 | AnyNumber | Uint8Array
  /**
  *  The account to delegate permission to transfer the item.
  */
  delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  /**
  *  Optional deadline for the approval. Specified by providing the
  */
  maybeDeadline: Option<u32> | null | Uint8Array | u32 | AnyNumber
};

/**
 * Approve an item to be transferred by a delegated third-party account. Origin must be either &#x60;ForceOrigin&#x60; or Signed and the sender should be the Owner of the &#x60;item&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsApproveTransfer(
  args: NftsApproveTransferArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'approve_transfer',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsBurnArgs = {
  /**
  *  The collection of the item to be burned.
  */
  collection: u32 | AnyNumber | Uint8Array
  /**
  *  The item to be burned.
  */
  item: u32 | AnyNumber | Uint8Array
};

/**
 * Destroy a single item. The origin must conform to &#x60;ForceOrigin&#x60; or must be Signed and the signing account must be the owner of the &#x60;item&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsBurn(
  args: NftsBurnArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'burn',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsBuyItemArgs = {
  /**
  *  The collection of the item.
  */
  collection: u32 | AnyNumber | Uint8Array
  /**
  *  The item the sender wants to buy.
  */
  item: u32 | AnyNumber | Uint8Array
  /**
  *  The price the sender is willing to pay.
  */
  bidPrice: u128 | AnyNumber | Uint8Array
};

/**
 * Allows to buy an item if it&#x27;s up for sale. Origin must be Signed and must not be the owner of the &#x60;item&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsBuyItem(
  args: NftsBuyItemArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'buy_item',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsCancelApprovalArgs = {
  /**
  *  The collection of the item of whose approval will be cancelled.
  */
  collection: u32 | AnyNumber | Uint8Array
  /**
  *  The item of the collection of whose approval will be cancelled.
  */
  item: u32 | AnyNumber | Uint8Array
  /**
  *  The account that is going to loose their approval.
  */
  delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
};

/**
 * Cancel one of the transfer approvals for a specific item. Origin must be either:
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsCancelApproval(
  args: NftsCancelApprovalArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'cancel_approval',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsCancelItemAttributesApprovalArgs = {
  /**
  *  Collection that the item is contained within.
  */
  collection: u32 | AnyNumber | Uint8Array
  /**
  *  The item that holds attributes.
  */
  item: u32 | AnyNumber | Uint8Array
  /**
  *  The previously approved account to remove.
  */
  delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  witness: PalletNftsCancelAttributesApprovalWitness | { accountAttributes?: any } | string | Uint8Array
};

/**
 * Cancel the previously provided approval to change item&#x27;s attributes. All the previously set attributes by the &#x60;delegate&#x60; will be removed. Origin must be Signed and must be an owner of the &#x60;item&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsCancelItemAttributesApproval(
  args: NftsCancelItemAttributesApprovalArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'cancel_item_attributes_approval',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsCancelSwapArgs = {
  offeredCollection: u32 | AnyNumber | Uint8Array
  offeredItem: u32 | AnyNumber | Uint8Array
};

/**
 * Cancel an atomic swap. Origin must be Signed. Origin must be an owner of the &#x60;item&#x60; if the deadline hasn&#x27;t expired.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsCancelSwap(
  args: NftsCancelSwapArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'cancel_swap',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsClaimSwapArgs = {
  /**
  *  The collection of the item to be sent.
  */
  sendCollection: u32 | AnyNumber | Uint8Array
  /**
  *  The item to be sent.
  */
  sendItem: u32 | AnyNumber | Uint8Array
  /**
  *  The collection of the item to be received.
  */
  receiveCollection: u32 | AnyNumber | Uint8Array
  /**
  *  The item to be received.
  */
  receiveItem: u32 | AnyNumber | Uint8Array
  /**
  *  A price that was previously agreed on.
  */
  witnessPrice: Option<PalletNftsPriceWithDirection> | null | Uint8Array | PalletNftsPriceWithDirection | { amount?: any; direction?: any } | string
};

/**
 * Claim an atomic swap. This method executes a pending swap, that was created by a counterpart before. Origin must be Signed and must be an owner of the &#x60;item&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsClaimSwap(
  args: NftsClaimSwapArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'claim_swap',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsClearAllTransferApprovalsArgs = {
  /**
  *  The collection of the item of whose approvals will be cleared.
  */
  collection: u32 | AnyNumber | Uint8Array
  /**
  *  The item of the collection of whose approvals will be cleared.
  */
  item: u32 | AnyNumber | Uint8Array
};

/**
 * Cancel all the approvals of a specific item. Origin must be either:
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsClearAllTransferApprovals(
  args: NftsClearAllTransferApprovalsArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'clear_all_transfer_approvals',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsClearAttributeArgs = {
  /**
  *  The identifier of the collection whose item's metadata to clear.
  */
  collection: u32 | AnyNumber | Uint8Array
  /**
  *  The identifier of the item whose metadata to clear.
  */
  maybeItem: Option<u32> | null | Uint8Array | u32 | AnyNumber
  /**
  *  Attribute's namespace.
  */
  namespace: PalletNftsAttributeNamespace | { Pallet: any } | { CollectionOwner: any } | { ItemOwner: any } | { Account: any } | string | Uint8Array
  /**
  *  The key of the attribute.
  */
  key: Bytes | string | Uint8Array
};

/**
 * Clear an attribute for a collection or item. Origin must be either &#x60;ForceOrigin&#x60; or Signed and the sender should be the Owner of the attribute. Any deposit is freed for the collection&#x27;s owner.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsClearAttribute(
  args: NftsClearAttributeArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'clear_attribute',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsClearCollectionMetadataArgs = {
  /**
  *  The identifier of the collection whose metadata to clear.
  */
  collection: u32 | AnyNumber | Uint8Array
};

/**
 * Clear the metadata for a collection. Origin must be either &#x60;ForceOrigin&#x60; or &#x60;Signed&#x60; and the sender should be the Admin of the &#x60;collection&#x60;. Any deposit is freed for the collection&#x27;s owner.
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
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'clear_collection_metadata',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsClearMetadataArgs = {
  /**
  *  The identifier of the collection whose item's metadata to clear.
  */
  collection: u32 | AnyNumber | Uint8Array
  /**
  *  The identifier of the item whose metadata to clear.
  */
  item: u32 | AnyNumber | Uint8Array
};

/**
 * Clear the metadata for an item. Origin must be either &#x60;ForceOrigin&#x60; or Signed and the sender should be the Admin of the &#x60;collection&#x60;. Any deposit is freed for the collection&#x27;s owner.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsClearMetadata(
  args: NftsClearMetadataArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'clear_metadata',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsCreateArgs = {
};

/**
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsCreate(
  args: NftsCreateArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'create',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsCreateSwapArgs = {
  offeredCollection: u32 | AnyNumber | Uint8Array
  offeredItem: u32 | AnyNumber | Uint8Array
  /**
  *  The collection of the desired item.
  */
  desiredCollection: u32 | AnyNumber | Uint8Array
  maybeDesiredItem: Option<u32> | null | Uint8Array | u32 | AnyNumber
  /**
  *  The price an owner is willing to pay or receive for the desired `item`.
  */
  maybePrice: Option<PalletNftsPriceWithDirection> | null | Uint8Array | PalletNftsPriceWithDirection | { amount?: any; direction?: any } | string
  /**
  *  A deadline for the swap. Specified by providing the number of blocks
  */
  duration: u32 | AnyNumber | Uint8Array
};

/**
 * Register a new atomic swap, declaring an intention to send an &#x60;item&#x60; in exchange for &#x60;desired_item&#x60; from origin to target on the current blockchain. The target can execute the swap during the specified &#x60;duration&#x60; of blocks (if set). Additionally, the price could be set for the desired &#x60;item&#x60;. Origin must be Signed and must be an owner of the &#x60;item&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsCreateSwap(
  args: NftsCreateSwapArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'create_swap',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsDestroyArgs = {
  /**
  *  The identifier of the collection to be destroyed.
  */
  collection: u32 | AnyNumber | Uint8Array
  /**
  *  Information on the items minted in the collection. This must be
  */
  witness: PalletNftsDestroyWitness | { itemMetadatas?: any; itemConfigs?: any; attributes?: any } | string | Uint8Array
};

/**
 * Destroy a collection of fungible items. The origin must conform to &#x60;ForceOrigin&#x60; or must be &#x60;Signed&#x60; and the sender must be the owner of the &#x60;collection&#x60;. NOTE: The collection must have 0 items to be destroyed.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsDestroy(
  args: NftsDestroyArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'destroy',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsForceCollectionConfigArgs = {
  /**
  *  The identifier of the collection.
  */
  collection: u32 | AnyNumber | Uint8Array
  /**
  *  The new config of this collection.
  */
  config: PalletNftsCollectionConfig | { settings?: any; maxSupply?: any; mintSettings?: any } | string | Uint8Array
};

/**
 * Change the config of a collection. Origin must be &#x60;ForceOrigin&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsForceCollectionConfig(
  args: NftsForceCollectionConfigArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'force_collection_config',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsForceCollectionOwnerArgs = {
  /**
  *  The identifier of the collection.
  */
  collection: u32 | AnyNumber | Uint8Array
  /**
  *  The new Owner of this collection.
  */
  owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
};

/**
 * Change the Owner of a collection. Origin must be &#x60;ForceOrigin&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsForceCollectionOwner(
  args: NftsForceCollectionOwnerArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'force_collection_owner',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsForceCreateArgs = {
  /**
  *  The owner of this collection of items. The owner has full superuser
  */
  owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  config: PalletNftsCollectionConfig | { settings?: any; maxSupply?: any; mintSettings?: any } | string | Uint8Array
};

/**
 * Issue a new collection of non-fungible items from a privileged origin. This new collection has no items initially. The origin must conform to &#x60;ForceOrigin&#x60;. Unlike &#x60;create&#x60;, no funds are reserved.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsForceCreate(
  args: NftsForceCreateArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'force_create',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsForceMintArgs = {
  /**
  *  The collection of the item to be minted.
  */
  collection: u32 | AnyNumber | Uint8Array
  /**
  *  An identifier of the new item.
  */
  item: u32 | AnyNumber | Uint8Array
  /**
  *  Account into which the item will be minted.
  */
  mintTo: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  /**
  *  A config of the new item.
  */
  itemConfig: PalletNftsItemConfig | { settings?: any } | string | Uint8Array
};

/**
 * Mint an item of a particular collection from a privileged origin. The origin must conform to &#x60;ForceOrigin&#x60; or must be &#x60;Signed&#x60; and the sender must be the Issuer of the &#x60;collection&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsForceMint(
  args: NftsForceMintArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'force_mint',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsForceSetAttributeArgs = {
  /**
  *  An optional owner of the attribute.
  */
  setAs: Option<AccountId32> | null | Uint8Array | AccountId32 | string
  /**
  *  The identifier of the collection whose item's metadata to set.
  */
  collection: u32 | AnyNumber | Uint8Array
  /**
  *  The identifier of the item whose metadata to set.
  */
  maybeItem: Option<u32> | null | Uint8Array | u32 | AnyNumber
  /**
  *  Attribute's namespace.
  */
  namespace: PalletNftsAttributeNamespace | { Pallet: any } | { CollectionOwner: any } | { ItemOwner: any } | { Account: any } | string | Uint8Array
  /**
  *  The key of the attribute.
  */
  key: Bytes | string | Uint8Array
  /**
  *  The value to which to set the attribute.
  */
  value: Bytes | string | Uint8Array
};

/**
 * Force-set an attribute for a collection or item. Origin must be &#x60;ForceOrigin&#x60;. If the attribute already exists and it was set by another account, the deposit will be returned to the previous owner.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsForceSetAttribute(
  args: NftsForceSetAttributeArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'force_set_attribute',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsLockCollectionArgs = {
  /**
  *  The collection to be locked.
  */
  collection: u32 | AnyNumber | Uint8Array
  /**
  *  The settings to be locked.
  */
  lockSettings: u64 | AnyNumber | Uint8Array
};

/**
 * Disallows specified settings for the whole collection. Origin must be Signed and the sender should be the Owner of the &#x60;collection&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsLockCollection(
  args: NftsLockCollectionArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'lock_collection',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsLockItemPropertiesArgs = {
  /**
  *  The collection if the `item`.
  */
  collection: u32 | AnyNumber | Uint8Array
  /**
  *  An item to be locked.
  */
  item: u32 | AnyNumber | Uint8Array
  /**
  *  Specifies whether the metadata should be locked.
  */
  lockMetadata: bool | boolean | Uint8Array
  /**
  *  Specifies whether the attributes in the `CollectionOwner` namespace
  */
  lockAttributes: bool | boolean | Uint8Array
};

/**
 * Disallows changing the metadata or attributes of the item. Origin must be either &#x60;ForceOrigin&#x60; or Signed and the sender should be the Admin of the &#x60;collection&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsLockItemProperties(
  args: NftsLockItemPropertiesArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'lock_item_properties',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsLockItemTransferArgs = {
  /**
  *  The collection of the item to be changed.
  */
  collection: u32 | AnyNumber | Uint8Array
  /**
  *  The item to become non-transferable.
  */
  item: u32 | AnyNumber | Uint8Array
};

/**
 * Disallow further unprivileged transfer of an item. Origin must be Signed and the sender should be the Freezer of the &#x60;collection&#x60;.
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
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'lock_item_transfer',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsMintArgs = {
  collection: u32 | AnyNumber | Uint8Array
  item: u32 | AnyNumber | Uint8Array
  mintTo: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
};

/**
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsMint(
  args: NftsMintArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'mint',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsMintPreSignedArgs = {
  /**
  *  The pre-signed approval that consists of the information about the item,
  */
  mintData: PalletNftsPreSignedMint | { collection?: any; item?: any; attributes?: any; metadata?: any; onlyAccount?: any; deadline?: any; mintPrice?: any } | string | Uint8Array
  /**
  *  The signature of the `data` object.
  */
  signature: SpRuntimeMultiSignature | { Ed25519: any } | { Sr25519: any } | { Ecdsa: any } | string | Uint8Array
  /**
  *  The `data` object's signer. Should be an Issuer of the collection.
  */
  signer: AccountId32 | string | Uint8Array
};

/**
 * Mint an item by providing the pre-signed approval. Origin must be Signed.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsMintPreSigned(
  args: NftsMintPreSignedArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'mint_pre_signed',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsPayTipsArgs = {
  /**
  *  Tips array.
  */
  tips: Vec<PalletNftsItemTip> | (PalletNftsItemTip | { collection?: any; item?: any; receiver?: any; amount?: any } | string | Uint8Array)[]
};

/**
 * Allows to pay the tips. Origin must be Signed.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsPayTips(
  args: NftsPayTipsArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'pay_tips',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsRedepositArgs = {
  /**
  *  The collection of the items to be reevaluated.
  */
  collection: u32 | AnyNumber | Uint8Array
  /**
  *  The items of the collection whose deposits will be reevaluated.
  */
  items: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]
};

/**
 * Re-evaluate the deposits on some items. Origin must be Signed and the sender should be the Owner of the &#x60;collection&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsRedeposit(
  args: NftsRedepositArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'redeposit',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsSetAcceptOwnershipArgs = {
  /**
  *  The identifier of the collection whose ownership the signer is
  */
  maybeCollection: Option<u32> | null | Uint8Array | u32 | AnyNumber
};

/**
 * Set (or reset) the acceptance of ownership for a particular account. Origin must be &#x60;Signed&#x60; and if &#x60;maybe_collection&#x60; is &#x60;Some&#x60;, then the signer must have a provider reference.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsSetAcceptOwnership(
  args: NftsSetAcceptOwnershipArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_accept_ownership',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsSetAttributeArgs = {
  /**
  *  The identifier of the collection whose item's metadata to set.
  */
  collection: u32 | AnyNumber | Uint8Array
  /**
  *  The identifier of the item whose metadata to set.
  */
  maybeItem: Option<u32> | null | Uint8Array | u32 | AnyNumber
  /**
  *  Attribute's namespace.
  */
  namespace: PalletNftsAttributeNamespace | { Pallet: any } | { CollectionOwner: any } | { ItemOwner: any } | { Account: any } | string | Uint8Array
  /**
  *  The key of the attribute.
  */
  key: Bytes | string | Uint8Array
  /**
  *  The value to which to set the attribute.
  */
  value: Bytes | string | Uint8Array
};

/**
 * Set an attribute for a collection or item. Origin must be Signed and must conform to the namespace ruleset:
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsSetAttribute(
  args: NftsSetAttributeArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_attribute',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsSetAttributesPreSignedArgs = {
  /**
  *  The pre-signed approval that consists of the information about the item,
  */
  data: PalletNftsPreSignedAttributes | { collection?: any; item?: any; attributes?: any; namespace?: any; deadline?: any } | string | Uint8Array
  /**
  *  The signature of the `data` object.
  */
  signature: SpRuntimeMultiSignature | { Ed25519: any } | { Sr25519: any } | { Ecdsa: any } | string | Uint8Array
  /**
  *  The `data` object's signer. Should be an Admin of the collection for the
  */
  signer: AccountId32 | string | Uint8Array
};

/**
 * Set attributes for an item by providing the pre-signed approval. Origin must be Signed and must be an owner of the &#x60;data.item&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsSetAttributesPreSigned(
  args: NftsSetAttributesPreSignedArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_attributes_pre_signed',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsSetCollectionMaxSupplyArgs = {
  /**
  *  The identifier of the collection to change.
  */
  collection: u32 | AnyNumber | Uint8Array
  /**
  *  The maximum number of items a collection could have.
  */
  maxSupply: u32 | AnyNumber | Uint8Array
};

/**
 * Set the maximum number of items a collection could have. Origin must be either &#x60;ForceOrigin&#x60; or &#x60;Signed&#x60; and the sender should be the Owner of the &#x60;collection&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsSetCollectionMaxSupply(
  args: NftsSetCollectionMaxSupplyArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_collection_max_supply',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsSetCollectionMetadataArgs = {
  /**
  *  The identifier of the item whose metadata to update.
  */
  collection: u32 | AnyNumber | Uint8Array
  /**
  *  The general information of this item. Limited in length by `StringLimit`.
  */
  data: Bytes | string | Uint8Array
};

/**
 * Set the metadata for a collection. Origin must be either &#x60;ForceOrigin&#x60; or &#x60;Signed&#x60; and the sender should be the Admin of the &#x60;collection&#x60;. If the origin is &#x60;Signed&#x60;, then funds of signer are reserved according to the formula: &#x60;MetadataDepositBase + DepositPerByte * data.len&#x60; taking into account any already reserved funds.
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
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_collection_metadata',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsSetMetadataArgs = {
  /**
  *  The identifier of the collection whose item's metadata to set.
  */
  collection: u32 | AnyNumber | Uint8Array
  /**
  *  The identifier of the item whose metadata to set.
  */
  item: u32 | AnyNumber | Uint8Array
  /**
  *  The general information of this item. Limited in length by `StringLimit`.
  */
  data: Bytes | string | Uint8Array
};

/**
 * Set the metadata for an item. Origin must be either &#x60;ForceOrigin&#x60; or Signed and the sender should be the Admin of the &#x60;collection&#x60;. If the origin is Signed, then funds of signer are reserved according to the formula: &#x60;MetadataDepositBase + DepositPerByte * data.len&#x60; taking into account any already reserved funds.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsSetMetadata(
  args: NftsSetMetadataArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_metadata',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsSetPriceArgs = {
  /**
  *  The collection of the item.
  */
  collection: u32 | AnyNumber | Uint8Array
  /**
  *  The item to set the price for.
  */
  item: u32 | AnyNumber | Uint8Array
  /**
  *  The price for the item. Pass `None`, to reset the price.
  */
  price: Option<u128> | null | Uint8Array | u128 | AnyNumber
  whitelistedBuyer: Option<MultiAddress> | null | Uint8Array | MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string
};

/**
 * Set (or reset) the price for an item. Origin must be Signed and must be the owner of the &#x60;item&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsSetPrice(
  args: NftsSetPriceArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_price',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsSetTeamArgs = {
  /**
  *  The collection whose team should be changed.
  */
  collection: u32 | AnyNumber | Uint8Array
  /**
  *  The new Issuer of this collection.
  */
  issuer: Option<MultiAddress> | null | Uint8Array | MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string
  /**
  *  The new Admin of this collection.
  */
  admin: Option<MultiAddress> | null | Uint8Array | MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string
  /**
  *  The new Freezer of this collection.
  */
  freezer: Option<MultiAddress> | null | Uint8Array | MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string
};

/**
 * Change the Issuer, Admin and Freezer of a collection. Origin must be either &#x60;ForceOrigin&#x60; or Signed and the sender should be the Owner of the &#x60;collection&#x60;. Note: by setting the role to &#x60;None&#x60; only the &#x60;ForceOrigin&#x60; will be able to change it after to &#x60;Some(account)&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsSetTeam(
  args: NftsSetTeamArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_team',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsTransferArgs = {
  /**
  *  The collection of the item to be transferred.
  */
  collection: u32 | AnyNumber | Uint8Array
  /**
  *  The item to be transferred.
  */
  item: u32 | AnyNumber | Uint8Array
  /**
  *  The account to receive ownership of the item.
  */
  dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
};

/**
 * Move an item from the sender account to another. Origin must be Signed and the signing account must be either:
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsTransfer(
  args: NftsTransferArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'transfer',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsTransferOwnershipArgs = {
  /**
  *  The collection whose owner should be changed.
  */
  collection: u32 | AnyNumber | Uint8Array
  newOwner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
};

/**
 * Change the Owner of a collection. Origin must be Signed and the sender should be the Owner of the &#x60;collection&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsTransferOwnership(
  args: NftsTransferOwnershipArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'transfer_ownership',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsUnlockItemTransferArgs = {
  /**
  *  The collection of the item to be changed.
  */
  collection: u32 | AnyNumber | Uint8Array
  /**
  *  The item to become transferable.
  */
  item: u32 | AnyNumber | Uint8Array
};

/**
 * Re-allow unprivileged transfer of an item. Origin must be Signed and the sender should be the Freezer of the &#x60;collection&#x60;.
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
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'unlock_item_transfer',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type NftsUpdateMintSettingsArgs = {
  /**
  *  The identifier of the collection to change.
  */
  collection: u32 | AnyNumber | Uint8Array
  /**
  *  The new mint settings.
  */
  mintSettings: PalletNftsMintSettings | { mintType?: any; price?: any; startBlock?: any; endBlock?: any; defaultItemSettings?: any } | string | Uint8Array
};

/**
 * Update mint settings. Origin must be either &#x60;ForceOrigin&#x60; or &#x60;Signed&#x60; and the sender should be the Issuer of the &#x60;collection&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsUpdateMintSettings(
  args: NftsUpdateMintSettingsArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'update_mint_settings',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

export type ParachainSystemAuthorizeUpgradeArgs = {
  codeHash: H256 | string | Uint8Array
  checkVersion: bool | boolean | Uint8Array
};

/**
 * Authorize an upgrade to a given &#x60;code_hash&#x60; for the runtime. The runtime can be supplied later. The &#x60;check_version&#x60; parameter sets a boolean flag for whether or not the runtime&#x27;s spec version and name should be verified on upgrade. Since the authorization only has a hash, it cannot actually perform the verification. This call requires Root origin.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function parachainSystemAuthorizeUpgrade(
  args: ParachainSystemAuthorizeUpgradeArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'authorize_upgrade',
        pallet: 'parachainSystem',
      },
      ...info,
    },
    options
  );
}

export type ParachainSystemEnactAuthorizedUpgradeArgs = {
  code: Bytes | string | Uint8Array
};

/**
 * Provide the preimage (runtime binary) &#x60;code&#x60; for an upgrade that has been authorized. If the authorization required a version check, this call will ensure the spec name remains unchanged and that the spec version has increased. Note that this function will not apply the new &#x60;code&#x60;, but only attempt to schedule the upgrade with the Relay Chain. All origins are allowed.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function parachainSystemEnactAuthorizedUpgrade(
  args: ParachainSystemEnactAuthorizedUpgradeArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'enact_authorized_upgrade',
        pallet: 'parachainSystem',
      },
      ...info,
    },
    options
  );
}

export type ParachainSystemSetValidationDataArgs = {
  data: CumulusPrimitivesParachainInherentParachainInherentData | { validationData?: any; relayChainState?: any; downwardMessages?: any; horizontalMessages?: any } | string | Uint8Array
};

/**
 * Set the current validation data. This should be invoked exactly once per block. It will panic at the finalization phase if the call was not invoked. The dispatch origin for this call must be &#x60;Inherent&#x60; As a side effect, this function upgrades the current validation function if the appropriate time has come.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function parachainSystemSetValidationData(
  args: ParachainSystemSetValidationDataArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_validation_data',
        pallet: 'parachainSystem',
      },
      ...info,
    },
    options
  );
}

export type ParachainSystemSudoSendUpwardMessageArgs = {
  message: Bytes | string | Uint8Array
};

/**
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function parachainSystemSudoSendUpwardMessage(
  args: ParachainSystemSudoSendUpwardMessageArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'sudo_send_upward_message',
        pallet: 'parachainSystem',
      },
      ...info,
    },
    options
  );
}

export type PolkadotXcmClaimAssetsArgs = {
  /**
  *  The exact assets that were trapped. Use the version to specify what version
  */
  assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
  /**
  *  The location/account where the claimed assets will be deposited.
  */
  beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
};

/**
 * Claims assets trapped on this pallet because of leftover assets during XCM execution.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function polkadotXcmClaimAssets(
  args: PolkadotXcmClaimAssetsArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'claim_assets',
        pallet: 'polkadotXcm',
      },
      ...info,
    },
    options
  );
}

export type PolkadotXcmExecuteArgs = {
  message: XcmVersionedXcm | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
  maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array
};

/**
 * Execute an XCM message from a local, signed, origin. An event is deposited indicating whether &#x60;msg&#x60; could be executed completely or only partially. No more than &#x60;max_weight&#x60; will be used in its attempted execution. If this is less than the maximum amount of weight that the message could take to be executed, then no execution attempt will be made.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function polkadotXcmExecute(
  args: PolkadotXcmExecuteArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'execute',
        pallet: 'polkadotXcm',
      },
      ...info,
    },
    options
  );
}

export type PolkadotXcmForceDefaultXcmVersionArgs = {
  /**
  *  The default XCM encoding version, or `None` to disable.
  */
  maybeXcmVersion: Option<u32> | null | Uint8Array | u32 | AnyNumber
};

/**
 * Set a safe XCM version (the version that XCM should be encoded with if the most recent version a destination can accept is unknown).
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function polkadotXcmForceDefaultXcmVersion(
  args: PolkadotXcmForceDefaultXcmVersionArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'force_default_xcm_version',
        pallet: 'polkadotXcm',
      },
      ...info,
    },
    options
  );
}

export type PolkadotXcmForceSubscribeVersionNotifyArgs = {
  /**
  *  The location to which we should subscribe for XCM version notifications.
  */
  location: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
};

/**
 * Ask a location to notify us regarding their XCM version and any changes to it.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function polkadotXcmForceSubscribeVersionNotify(
  args: PolkadotXcmForceSubscribeVersionNotifyArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'force_subscribe_version_notify',
        pallet: 'polkadotXcm',
      },
      ...info,
    },
    options
  );
}

export type PolkadotXcmForceSuspensionArgs = {
  /**
  *  `true` to suspend, `false` to resume.
  */
  suspended: bool | boolean | Uint8Array
};

/**
 * Set or unset the global suspension state of the XCM executor.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function polkadotXcmForceSuspension(
  args: PolkadotXcmForceSuspensionArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'force_suspension',
        pallet: 'polkadotXcm',
      },
      ...info,
    },
    options
  );
}

export type PolkadotXcmForceUnsubscribeVersionNotifyArgs = {
  /**
  *  The location to which we are currently subscribed for XCM version
  */
  location: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
};

/**
 * Require that a particular destination should no longer notify us regarding any XCM version changes.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function polkadotXcmForceUnsubscribeVersionNotify(
  args: PolkadotXcmForceUnsubscribeVersionNotifyArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'force_unsubscribe_version_notify',
        pallet: 'polkadotXcm',
      },
      ...info,
    },
    options
  );
}

export type PolkadotXcmForceXcmVersionArgs = {
  /**
  *  The destination that is being described.
  */
  location: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array
  version: u32 | AnyNumber | Uint8Array
};

/**
 * Extoll that a particular destination can be communicated with through a particular version of XCM.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function polkadotXcmForceXcmVersion(
  args: PolkadotXcmForceXcmVersionArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'force_xcm_version',
        pallet: 'polkadotXcm',
      },
      ...info,
    },
    options
  );
}

export type PolkadotXcmLimitedReserveTransferAssetsArgs = {
  /**
  *  Destination context for the assets. Will typically be `[Parent,
  */
  dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
  /**
  *  A beneficiary location for the assets in the context of `dest`. Will
  */
  beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
  /**
  *  The assets to be withdrawn. This should include the assets used to pay the
  */
  assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
  /**
  *  The index into `assets` of the item which should be used to pay
  */
  feeAssetItem: u32 | AnyNumber | Uint8Array
  /**
  *  The remote-side weight limit, if any, for the XCM fee purchase.
  */
  weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array
};

/**
 * Transfer some assets from the local chain to the destination chain through their local, destination or remote reserve. &#x60;assets&#x60; must have same reserve location and may not be teleportable to &#x60;dest&#x60;.  - &#x60;assets&#x60; have local reserve: transfer assets to sovereign account of destination    chain and forward a notification XCM to &#x60;dest&#x60; to mint and deposit reserve-based    assets to &#x60;beneficiary&#x60;.  - &#x60;assets&#x60; have destination reserve: burn local assets and forward a notification to    &#x60;dest&#x60; chain to withdraw the reserve assets from this chain&#x27;s sovereign account and    deposit them to &#x60;beneficiary&#x60;.  - &#x60;assets&#x60; have remote reserve: burn local assets, forward XCM to reserve chain to move    reserves from this chain&#x27;s SA to &#x60;dest&#x60; chain&#x27;s SA, and forward another XCM to &#x60;dest&#x60;    to mint and deposit reserve-based assets to &#x60;beneficiary&#x60;. Fee payment on the destination side is made from the asset in the &#x60;assets&#x60; vector of index &#x60;fee_asset_item&#x60;, up to enough to pay for &#x60;weight_limit&#x60; of weight. If more weight is needed than &#x60;weight_limit&#x60;, then the operation will fail and the sent assets may be at risk.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function polkadotXcmLimitedReserveTransferAssets(
  args: PolkadotXcmLimitedReserveTransferAssetsArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'limited_reserve_transfer_assets',
        pallet: 'polkadotXcm',
      },
      ...info,
    },
    options
  );
}

export type PolkadotXcmLimitedTeleportAssetsArgs = {
  /**
  *  Destination context for the assets. Will typically be `[Parent,
  */
  dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
  /**
  *  A beneficiary location for the assets in the context of `dest`. Will
  */
  beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
  /**
  *  The assets to be withdrawn. This should include the assets used to pay the
  */
  assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
  /**
  *  The index into `assets` of the item which should be used to pay
  */
  feeAssetItem: u32 | AnyNumber | Uint8Array
  /**
  *  The remote-side weight limit, if any, for the XCM fee purchase.
  */
  weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array
};

/**
 * Teleport some assets from the local chain to some destination chain. Fee payment on the destination side is made from the asset in the &#x60;assets&#x60; vector of index &#x60;fee_asset_item&#x60;, up to enough to pay for &#x60;weight_limit&#x60; of weight. If more weight is needed than &#x60;weight_limit&#x60;, then the operation will fail and the sent assets may be at risk.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function polkadotXcmLimitedTeleportAssets(
  args: PolkadotXcmLimitedTeleportAssetsArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'limited_teleport_assets',
        pallet: 'polkadotXcm',
      },
      ...info,
    },
    options
  );
}

export type PolkadotXcmReserveTransferAssetsArgs = {
  /**
  *  Destination context for the assets. Will typically be `[Parent,
  */
  dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
  /**
  *  A beneficiary location for the assets in the context of `dest`. Will
  */
  beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
  /**
  *  The assets to be withdrawn. This should include the assets used to pay the
  */
  assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
  /**
  *  The index into `assets` of the item which should be used to pay
  */
  feeAssetItem: u32 | AnyNumber | Uint8Array
};

/**
 * Transfer some assets from the local chain to the destination chain through their local, destination or remote reserve. &#x60;assets&#x60; must have same reserve location and may not be teleportable to &#x60;dest&#x60;.  - &#x60;assets&#x60; have local reserve: transfer assets to sovereign account of destination    chain and forward a notification XCM to &#x60;dest&#x60; to mint and deposit reserve-based    assets to &#x60;beneficiary&#x60;.  - &#x60;assets&#x60; have destination reserve: burn local assets and forward a notification to    &#x60;dest&#x60; chain to withdraw the reserve assets from this chain&#x27;s sovereign account and    deposit them to &#x60;beneficiary&#x60;.  - &#x60;assets&#x60; have remote reserve: burn local assets, forward XCM to reserve chain to move    reserves from this chain&#x27;s SA to &#x60;dest&#x60; chain&#x27;s SA, and forward another XCM to &#x60;dest&#x60;    to mint and deposit reserve-based assets to &#x60;beneficiary&#x60;. **This function is deprecated: Use &#x60;limited_reserve_transfer_assets&#x60; instead.** Fee payment on the destination side is made from the asset in the &#x60;assets&#x60; vector of index &#x60;fee_asset_item&#x60;. The weight limit for fees is not provided and thus is unlimited, with all fees taken as needed from the asset.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function polkadotXcmReserveTransferAssets(
  args: PolkadotXcmReserveTransferAssetsArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'reserve_transfer_assets',
        pallet: 'polkadotXcm',
      },
      ...info,
    },
    options
  );
}

export type PolkadotXcmSendArgs = {
  dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
  message: XcmVersionedXcm | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
};

/**
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function polkadotXcmSend(
  args: PolkadotXcmSendArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'send',
        pallet: 'polkadotXcm',
      },
      ...info,
    },
    options
  );
}

export type PolkadotXcmTeleportAssetsArgs = {
  /**
  *  Destination context for the assets. Will typically be `[Parent,
  */
  dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
  /**
  *  A beneficiary location for the assets in the context of `dest`. Will
  */
  beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
  /**
  *  The assets to be withdrawn. This should include the assets used to pay the
  */
  assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
  /**
  *  The index into `assets` of the item which should be used to pay
  */
  feeAssetItem: u32 | AnyNumber | Uint8Array
};

/**
 * Teleport some assets from the local chain to some destination chain. **This function is deprecated: Use &#x60;limited_teleport_assets&#x60; instead.** Fee payment on the destination side is made from the asset in the &#x60;assets&#x60; vector of index &#x60;fee_asset_item&#x60;. The weight limit for fees is not provided and thus is unlimited, with all fees taken as needed from the asset.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function polkadotXcmTeleportAssets(
  args: PolkadotXcmTeleportAssetsArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'teleport_assets',
        pallet: 'polkadotXcm',
      },
      ...info,
    },
    options
  );
}

export type PolkadotXcmTransferAssetsArgs = {
  /**
  *  Destination context for the assets. Will typically be `X2(Parent,
  */
  dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
  /**
  *  A beneficiary location for the assets in the context of `dest`. Will
  */
  beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
  /**
  *  The assets to be withdrawn. This should include the assets used to pay the
  */
  assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
  /**
  *  The index into `assets` of the item which should be used to pay
  */
  feeAssetItem: u32 | AnyNumber | Uint8Array
  /**
  *  The remote-side weight limit, if any, for the XCM fee purchase.
  */
  weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array
};

/**
 * Transfer some assets from the local chain to the destination chain through their local, destination or remote reserve, or through teleports. Fee payment on the destination side is made from the asset in the &#x60;assets&#x60; vector of index &#x60;fee_asset_item&#x60; (hence referred to as &#x60;fees&#x60;), up to enough to pay for &#x60;weight_limit&#x60; of weight. If more weight is needed than &#x60;weight_limit&#x60;, then the operation will fail and the sent assets may be at risk. &#x60;assets&#x60; (excluding &#x60;fees&#x60;) must have same reserve location or otherwise be teleportable to &#x60;dest&#x60;, no limitations imposed on &#x60;fees&#x60;.  - for local reserve: transfer assets to sovereign account of destination chain and    forward a notification XCM to &#x60;dest&#x60; to mint and deposit reserve-based assets to    &#x60;beneficiary&#x60;.  - for destination reserve: burn local assets and forward a notification to &#x60;dest&#x60; chain    to withdraw the reserve assets from this chain&#x27;s sovereign account and deposit them    to &#x60;beneficiary&#x60;.  - for remote reserve: burn local assets, forward XCM to reserve chain to move reserves    from this chain&#x27;s SA to &#x60;dest&#x60; chain&#x27;s SA, and forward another XCM to &#x60;dest&#x60; to mint    and deposit reserve-based assets to &#x60;beneficiary&#x60;.  - for teleports: burn local assets and forward XCM to &#x60;dest&#x60; chain to mint/teleport    assets and deposit them to &#x60;beneficiary&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function polkadotXcmTransferAssets(
  args: PolkadotXcmTransferAssetsArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'transfer_assets',
        pallet: 'polkadotXcm',
      },
      ...info,
    },
    options
  );
}

export type PolkadotXcmTransferAssetsUsingTypeAndThenArgs = {
  /**
  *  Destination context for the assets. Will typically be `[Parent,
  */
  dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
  /**
  *  The assets to be withdrawn. This should include the assets used to pay the
  */
  assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
  /**
  *  The XCM `TransferType` used to transfer the `assets`.
  */
  assetsTransferType: StagingXcmExecutorAssetTransferTransferType | { Teleport: any } | { LocalReserve: any } | { DestinationReserve: any } | { RemoteReserve: any } | string | Uint8Array
  /**
  *  One of the included `assets` to be used to pay fees.
  */
  remoteFeesId: XcmVersionedAssetId | { V3: any } | { V4: any } | string | Uint8Array
  /**
  *  The XCM `TransferType` used to transfer the `fees` assets.
  */
  feesTransferType: StagingXcmExecutorAssetTransferTransferType | { Teleport: any } | { LocalReserve: any } | { DestinationReserve: any } | { RemoteReserve: any } | string | Uint8Array
  /**
  *  The XCM to be executed on `dest` chain as the last step of the
  */
  customXcmOnDest: XcmVersionedXcm | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array
  /**
  *  The remote-side weight limit, if any, for the XCM fee purchase.
  */
  weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array
};

/**
 * Transfer assets from the local chain to the destination chain using explicit transfer types for assets and fees. &#x60;assets&#x60; must have same reserve location or may be teleportable to &#x60;dest&#x60;. Caller must provide the &#x60;assets_transfer_type&#x60; to be used for &#x60;assets&#x60;:  - &#x60;TransferType::LocalReserve&#x60;: transfer assets to sovereign account of destination    chain and forward a notification XCM to &#x60;dest&#x60; to mint and deposit reserve-based    assets to &#x60;beneficiary&#x60;.  - &#x60;TransferType::DestinationReserve&#x60;: burn local assets and forward a notification to    &#x60;dest&#x60; chain to withdraw the reserve assets from this chain&#x27;s sovereign account and    deposit them to &#x60;beneficiary&#x60;.  - &#x60;TransferType::RemoteReserve(reserve)&#x60;: burn local assets, forward XCM to &#x60;reserve&#x60;    chain to move reserves from this chain&#x27;s SA to &#x60;dest&#x60; chain&#x27;s SA, and forward another    XCM to &#x60;dest&#x60; to mint and deposit reserve-based assets to &#x60;beneficiary&#x60;. Typically    the remote &#x60;reserve&#x60; is Asset Hub.  - &#x60;TransferType::Teleport&#x60;: burn local assets and forward XCM to &#x60;dest&#x60; chain to    mint/teleport assets and deposit them to &#x60;beneficiary&#x60;. On the destination chain, as well as any intermediary hops, &#x60;BuyExecution&#x60; is used to buy execution using transferred &#x60;assets&#x60; identified by &#x60;remote_fees_id&#x60;. Make sure enough of the specified &#x60;remote_fees_id&#x60; asset is included in the given list of &#x60;assets&#x60;. &#x60;remote_fees_id&#x60; should be enough to pay for &#x60;weight_limit&#x60;. If more weight is needed than &#x60;weight_limit&#x60;, then the operation will fail and the sent assets may be at risk. &#x60;remote_fees_id&#x60; may use different transfer type than rest of &#x60;assets&#x60; and can be specified through &#x60;fees_transfer_type&#x60;. The caller needs to specify what should happen to the transferred assets once they reach the &#x60;dest&#x60; chain. This is done through the &#x60;custom_xcm_on_dest&#x60; parameter, which contains the instructions to execute on &#x60;dest&#x60; as a final step.   This is usually as simple as:   &#x60;Xcm(vec![DepositAsset { assets: Wild(AllCounted(assets.len())), beneficiary }])&#x60;,   but could be something more exotic like sending the &#x60;assets&#x60; even further.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function polkadotXcmTransferAssetsUsingTypeAndThen(
  args: PolkadotXcmTransferAssetsUsingTypeAndThenArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'transfer_assets_using_type_and_then',
        pallet: 'polkadotXcm',
      },
      ...info,
    },
    options
  );
}

export type PriceIndexSetPriceIndexArgs = {
  /**
  *  The multiplier value to set for the price index.
  */
  multiplier: u32 | AnyNumber | Uint8Array
  /**
  *  The divider value to set for the price index.
  */
  divider: u32 | AnyNumber | Uint8Array
};

/**
 * Sets the price index with a specified multiplier and divider. This function can only be called by an authorized origin, which can be either the force origin or a designated price index admin. The force origin has higher privileges. If the origin is not the force origin, the caller must be the current price index admin. # Parameters
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function priceIndexSetPriceIndex(
  args: PriceIndexSetPriceIndexArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_price_index',
        pallet: 'priceIndex',
      },
      ...info,
    },
    options
  );
}

export type SessionPurgeKeysArgs = {
};

/**
 * Removes any session key(s) of the function caller. This doesn&#x27;t take effect until the next session. The dispatch origin of this function must be Signed and the account must be either be convertible to a validator ID using the chain&#x27;s typical addressing system (this usually means being a controller account) or directly convertible into a validator ID (which usually means being a stash account). ## Complexity
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function sessionPurgeKeys(
  args: SessionPurgeKeysArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'purge_keys',
        pallet: 'session',
      },
      ...info,
    },
    options
  );
}

export type SessionSetKeysArgs = {
  keys: TraitAssetHubRuntimeSessionKeys | { aura?: any } | string | Uint8Array
  proof: Bytes | string | Uint8Array
};

/**
 * Sets the session key(s) of the function caller to &#x60;keys&#x60;. Allows an account to set its session key prior to becoming a validator. This doesn&#x27;t take effect until the next session. The dispatch origin of this function must be signed. ## Complexity
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function sessionSetKeys(
  args: SessionSetKeysArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_keys',
        pallet: 'session',
      },
      ...info,
    },
    options
  );
}

export type SudoRemoveKeyArgs = {
};

/**
 * Permanently removes the sudo key. **This cannot be un-done.**
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function sudoRemoveKey(
  args: SudoRemoveKeyArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'remove_key',
        pallet: 'sudo',
      },
      ...info,
    },
    options
  );
}

export type SudoSetKeyArgs = {
  updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
};

/**
 * Authenticates the current sudo key and sets the given AccountId (&#x60;new&#x60;) as the new sudo key.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function sudoSetKey(
  args: SudoSetKeyArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_key',
        pallet: 'sudo',
      },
      ...info,
    },
    options
  );
}

export type SudoSudoArgs = {
  call: Call | IMethod | string | Uint8Array
};

/**
 * Authenticates the sudo key and dispatches a function call with &#x60;Root&#x60; origin.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function sudoSudo(
  args: SudoSudoArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'sudo',
        pallet: 'sudo',
      },
      ...info,
    },
    options
  );
}

export type SudoSudoAsArgs = {
  who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  call: Call | IMethod | string | Uint8Array
};

/**
 * Authenticates the sudo key and dispatches a function call with &#x60;Signed&#x60; origin from a given account. The dispatch origin for this call must be _Signed_.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function sudoSudoAs(
  args: SudoSudoAsArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'sudo_as',
        pallet: 'sudo',
      },
      ...info,
    },
    options
  );
}

export type SudoSudoUncheckedWeightArgs = {
  call: Call | IMethod | string | Uint8Array
  weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array
};

/**
 * Authenticates the sudo key and dispatches a function call with &#x60;Root&#x60; origin. This function does not check the weight of the call, and instead allows the Sudo user to specify the weight of the call. The dispatch origin for this call must be _Signed_.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function sudoSudoUncheckedWeight(
  args: SudoSudoUncheckedWeightArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'sudo_unchecked_weight',
        pallet: 'sudo',
      },
      ...info,
    },
    options
  );
}

export type SystemApplyAuthorizedUpgradeArgs = {
  code: Bytes | string | Uint8Array
};

/**
 * Provide the preimage (runtime binary) &#x60;code&#x60; for an upgrade that has been authorized. If the authorization required a version check, this call will ensure the spec name remains unchanged and that the spec version has increased. Depending on the runtime&#x27;s &#x60;OnSetCode&#x60; configuration, this function may directly apply the new &#x60;code&#x60; in the same block or attempt to schedule the upgrade. All origins are allowed.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function systemApplyAuthorizedUpgrade(
  args: SystemApplyAuthorizedUpgradeArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'apply_authorized_upgrade',
        pallet: 'system',
      },
      ...info,
    },
    options
  );
}

export type SystemAuthorizeUpgradeArgs = {
  codeHash: H256 | string | Uint8Array
};

/**
 * Authorize an upgrade to a given &#x60;code_hash&#x60; for the runtime. The runtime can be supplied later. This call requires Root origin.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function systemAuthorizeUpgrade(
  args: SystemAuthorizeUpgradeArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'authorize_upgrade',
        pallet: 'system',
      },
      ...info,
    },
    options
  );
}

export type SystemAuthorizeUpgradeWithoutChecksArgs = {
  codeHash: H256 | string | Uint8Array
};

/**
 * Authorize an upgrade to a given &#x60;code_hash&#x60; for the runtime. The runtime can be supplied later. WARNING: This authorizes an upgrade that will take place without any safety checks, for example that the spec name remains the same and that the version number increases. Not recommended for normal use. Use &#x60;authorize_upgrade&#x60; instead. This call requires Root origin.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function systemAuthorizeUpgradeWithoutChecks(
  args: SystemAuthorizeUpgradeWithoutChecksArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'authorize_upgrade_without_checks',
        pallet: 'system',
      },
      ...info,
    },
    options
  );
}

export type SystemKillPrefixArgs = {
  prefix: Bytes | string | Uint8Array
  subkeys: u32 | AnyNumber | Uint8Array
};

/**
 * Kill all storage items with a key that starts with the given prefix. **NOTE:** We rely on the Root origin to provide us the number of subkeys under the prefix we are removing to accurately calculate the weight of this function.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function systemKillPrefix(
  args: SystemKillPrefixArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'kill_prefix',
        pallet: 'system',
      },
      ...info,
    },
    options
  );
}

export type SystemKillStorageArgs = {
  keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]
};

/**
 * Kill some items from storage.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function systemKillStorage(
  args: SystemKillStorageArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'kill_storage',
        pallet: 'system',
      },
      ...info,
    },
    options
  );
}

export type SystemRemarkArgs = {
  remark: Bytes | string | Uint8Array
};

/**
 * Make some on-chain remark. Can be executed by every &#x60;origin&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function systemRemark(
  args: SystemRemarkArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'remark',
        pallet: 'system',
      },
      ...info,
    },
    options
  );
}

export type SystemRemarkWithEventArgs = {
  remark: Bytes | string | Uint8Array
};

/**
 * Make some on-chain remark and emit event.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function systemRemarkWithEvent(
  args: SystemRemarkWithEventArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'remark_with_event',
        pallet: 'system',
      },
      ...info,
    },
    options
  );
}

export type SystemSetCodeArgs = {
  code: Bytes | string | Uint8Array
};

/**
 * Set the new runtime code.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function systemSetCode(
  args: SystemSetCodeArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_code',
        pallet: 'system',
      },
      ...info,
    },
    options
  );
}

export type SystemSetCodeWithoutChecksArgs = {
  code: Bytes | string | Uint8Array
};

/**
 * Set the new runtime code without doing any checks of the given &#x60;code&#x60;. Note that runtime upgrades will not run if this is called with a not-increasing spec version!
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function systemSetCodeWithoutChecks(
  args: SystemSetCodeWithoutChecksArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_code_without_checks',
        pallet: 'system',
      },
      ...info,
    },
    options
  );
}

export type SystemSetHeapPagesArgs = {
  pages: u64 | AnyNumber | Uint8Array
};

/**
 * Set the number of pages in the WebAssembly environment&#x27;s heap.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function systemSetHeapPages(
  args: SystemSetHeapPagesArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_heap_pages',
        pallet: 'system',
      },
      ...info,
    },
    options
  );
}

export type SystemSetStorageArgs = {
  items: Vec<ITuple<[Bytes, Bytes]>> | ([Bytes | string | Uint8Array, Bytes | string | Uint8Array])[]
};

/**
 * Set some items of storage.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function systemSetStorage(
  args: SystemSetStorageArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_storage',
        pallet: 'system',
      },
      ...info,
    },
    options
  );
}

export type TimestampSetArgs = {
  now: Compact<u64> | AnyNumber | Uint8Array
};

/**
 * Set the current time. This call should be invoked exactly once per block. It will panic at the finalization phase, if this call hasn&#x27;t been invoked by that time. The timestamp should be greater than the previous one by the amount specified by [&#x60;Config::MinimumPeriod&#x60;]. The dispatch origin for this call must be _None_. This dispatch class is _Mandatory_ to ensure it gets executed in the block. Be aware that changing the complexity of this call could result exhausting the resources in a block to execute any other calls. ## Complexity
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function timestampSet(
  args: TimestampSetArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set',
        pallet: 'timestamp',
      },
      ...info,
    },
    options
  );
}

export type UserFreeTransactionsAppAgentBlacklistAddressArgs = {
  appAgentId: u32 | AnyNumber | Uint8Array
  addresses: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]
};

/**
 * Blacklist an address by an app agent. Only callable by an admin of the app agent.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function userFreeTransactionsAppAgentBlacklistAddress(
  args: UserFreeTransactionsAppAgentBlacklistAddressArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'app_agent_blacklist_address',
        pallet: 'userFreeTransactions',
      },
      ...info,
    },
    options
  );
}

export type UserFreeTransactionsAppAgentUnblacklistAddressArgs = {
  appAgentId: u32 | AnyNumber | Uint8Array
  addresses: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]
};

/**
 * Unblacklist an address by an app agent. Only callable by an admin of the app agent.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function userFreeTransactionsAppAgentUnblacklistAddress(
  args: UserFreeTransactionsAppAgentUnblacklistAddressArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'app_agent_unblacklist_address',
        pallet: 'userFreeTransactions',
      },
      ...info,
    },
    options
  );
}

export type UserFreeTransactionsBlacklistAddressArgs = {
  addresses: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]
};

/**
 * Blacklist an address. Only callable by the ForceOrigin.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function userFreeTransactionsBlacklistAddress(
  args: UserFreeTransactionsBlacklistAddressArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'blacklist_address',
        pallet: 'userFreeTransactions',
      },
      ...info,
    },
    options
  );
}

export type UserFreeTransactionsClearAppAgentsFreeTransferInfosArgs = {
};

/**
 * Clear free transfer infos of appagents. Only callable by the ForceOrigin.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function userFreeTransactionsClearAppAgentsFreeTransferInfos(
  args: UserFreeTransactionsClearAppAgentsFreeTransferInfosArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'clear_app_agents_free_transfer_infos',
        pallet: 'userFreeTransactions',
      },
      ...info,
    },
    options
  );
}

export type UserFreeTransactionsClearAssetLastTransferBlocksArgs = {
};

/**
 * Clear last transfers of fingible tokens. Only callable by the ForceOrigin.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function userFreeTransactionsClearAssetLastTransferBlocks(
  args: UserFreeTransactionsClearAssetLastTransferBlocksArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'clear_asset_last_transfer_blocks',
        pallet: 'userFreeTransactions',
      },
      ...info,
    },
    options
  );
}

export type UserFreeTransactionsClearNftLastTransferBlocksArgs = {
};

/**
 * Clear last transfers of NFTs. Only callable by the ForceOrigin.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function userFreeTransactionsClearNftLastTransferBlocks(
  args: UserFreeTransactionsClearNftLastTransferBlocksArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'clear_nft_last_transfer_blocks',
        pallet: 'userFreeTransactions',
      },
      ...info,
    },
    options
  );
}

export type UserFreeTransactionsClearUserFreeTransferInfosArgs = {
};

/**
 * Clear free transfer infos of users. Only callable by the ForceOrigin.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function userFreeTransactionsClearUserFreeTransferInfos(
  args: UserFreeTransactionsClearUserFreeTransferInfosArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'clear_user_free_transfer_infos',
        pallet: 'userFreeTransactions',
      },
      ...info,
    },
    options
  );
}

export type UserFreeTransactionsSetFreeTransfersEnabledArgs = {
  enabled: bool | boolean | Uint8Array
};

/**
 * Enable or disable free transfers. Only callable by the ForceOrigin.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function userFreeTransactionsSetFreeTransfersEnabled(
  args: UserFreeTransactionsSetFreeTransfersEnabledArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_free_transfers_enabled',
        pallet: 'userFreeTransactions',
      },
      ...info,
    },
    options
  );
}

export type UserFreeTransactionsUnblacklistAddressArgs = {
  addresses: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]
};

/**
 * Unblacklist an address. Only callable by the ForceOrigin.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function userFreeTransactionsUnblacklistAddress(
  args: UserFreeTransactionsUnblacklistAddressArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'unblacklist_address',
        pallet: 'userFreeTransactions',
      },
      ...info,
    },
    options
  );
}

export type UserTransactionsSubmitTransferAllBalancesArgs = {
  dest: AccountId32 | string | Uint8Array
  keepAlive: bool | boolean | Uint8Array
};

/**
 * Submits a transfer_all call using the given parameter Works similar to &#x60;submit_transfer_balances&#x60;
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function userTransactionsSubmitTransferAllBalances(
  args: UserTransactionsSubmitTransferAllBalancesArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'submit_transfer_all_balances',
        pallet: 'userTransactions',
      },
      ...info,
    },
    options
  );
}

export type UserTransactionsSubmitTransferAssetsArgs = {
  id: u32 | AnyNumber | Uint8Array
  target: AccountId32 | string | Uint8Array
  amount: u128 | AnyNumber | Uint8Array
};

/**
 * Submits a transfer of assets using the provided runtime call. This function performs the following steps: 1. Verifies the origin and retrieves the caller&#x27;s account ID. 2. Builds a runtime call for transferring the specified assets. 3. Processes the call. # Arguments * &#x60;origin&#x60;: The runtime origin. * &#x60;id&#x60;: The asset ID to be transferred. * &#x60;target&#x60;: The target account ID. * &#x60;amount&#x60;: The amount of assets to transfer. # Returns Returns a &#x60;DispatchResultWithPostInfo&#x60; indicating whether the transfer was successful. # Errors Returns an error if:
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function userTransactionsSubmitTransferAssets(
  args: UserTransactionsSubmitTransferAssetsArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'submit_transfer_assets',
        pallet: 'userTransactions',
      },
      ...info,
    },
    options
  );
}

export type UserTransactionsSubmitTransferBalancesArgs = {
  dest: AccountId32 | string | Uint8Array
  value: u128 | AnyNumber | Uint8Array
};

/**
 * Submits a transfer using the provided runtime call. # Steps 1. Verifies the origin and retrieves the caller&#x27;s account ID. 2. Checks if the call is allowed by the specified filters. 3. If the call is for a target recipient:    - Attempts to retrieve the app agent address.    - If the recipient is not a transactional address, dispatches the call with fees.    - If a transfer channel does not exist, tries to create one or dispatches the call at      cost.    - Tries to dispatch the call via the transfer channel.    - If dispatching via transfer channel fails, tries to dispatch using fees as a      fallback. # Cost of the call
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function userTransactionsSubmitTransferBalances(
  args: UserTransactionsSubmitTransferBalancesArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'submit_transfer_balances',
        pallet: 'userTransactions',
      },
      ...info,
    },
    options
  );
}

export type UserTransactionsSubmitTransferNftsArgs = {
  collection: u32 | AnyNumber | Uint8Array
  item: u32 | AnyNumber | Uint8Array
  dest: AccountId32 | string | Uint8Array
};

/**
 * Submits a transfer of NFTs using the provided runtime call. This function performs the following steps: 1. Verifies the origin and retrieves the caller&#x27;s account ID. 2. Builds a runtime call for transferring the specified NFT. 3. Processes the call. # Arguments * &#x60;origin&#x60;: The runtime origin. * &#x60;collection&#x60;: The collection ID of the NFT. * &#x60;item&#x60;: The item ID of the NFT. * &#x60;dest&#x60;: The destination account ID. # Returns Returns a &#x60;DispatchResultWithPostInfo&#x60; indicating whether the transfer was successful. # Errors Returns an error if:
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function userTransactionsSubmitTransferNfts(
  args: UserTransactionsSubmitTransferNftsArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'submit_transfer_nfts',
        pallet: 'userTransactions',
      },
      ...info,
    },
    options
  );
}

export type UserVerificationSetUserLevelArgs = {
  user: AccountId32 | string | Uint8Array
  level: TraitPrimitivesUserVerificationUserLevel | 'Anonymous' | 'Registered' | 'Level1' | 'Level2' | 'Level3' | number | Uint8Array
};

/**
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function userVerificationSetUserLevel(
  args: UserVerificationSetUserLevelArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_user_level',
        pallet: 'userVerification',
      },
      ...info,
    },
    options
  );
}

export type UtilityAsDerivativeArgs = {
  index: u16 | AnyNumber | Uint8Array
  call: Call | IMethod | string | Uint8Array
};

/**
 * Send a call through an indexed pseudonym of the sender. Filter from origin are passed along. The call will be dispatched with an origin which use the same filter as the origin of this call. NOTE: If you need to ensure that any account-based filtering is not honored (i.e. because you expect &#x60;proxy&#x60; to have been used prior in the call stack and you do not want the call restrictions to apply to any sub-accounts), then use &#x60;as_multi_threshold_1&#x60; in the Multisig pallet instead. NOTE: Prior to version *12, this was called &#x60;as_limited_sub&#x60;. The dispatch origin for this call must be _Signed_.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function utilityAsDerivative(
  args: UtilityAsDerivativeArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'as_derivative',
        pallet: 'utility',
      },
      ...info,
    },
    options
  );
}

export type UtilityBatchArgs = {
  /**
  *  The calls to be dispatched from the same origin. The number of call must not
  */
  calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]
};

/**
 * Send a batch of dispatch calls. May be called from any origin except &#x60;None&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function utilityBatch(
  args: UtilityBatchArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'batch',
        pallet: 'utility',
      },
      ...info,
    },
    options
  );
}

export type UtilityBatchAllArgs = {
  /**
  *  The calls to be dispatched from the same origin. The number of call must not
  */
  calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]
};

/**
 * Send a batch of dispatch calls and atomically execute them. The whole transaction will rollback and fail if any of the calls failed. May be called from any origin except &#x60;None&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function utilityBatchAll(
  args: UtilityBatchAllArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'batch_all',
        pallet: 'utility',
      },
      ...info,
    },
    options
  );
}

export type UtilityDispatchAsArgs = {
  asOrigin: TraitAssetHubRuntimeOriginCaller | { system: any } | { Void: any } | { PolkadotXcm: any } | { CumulusXcm: any } | string | Uint8Array
  call: Call | IMethod | string | Uint8Array
};

/**
 * Dispatches a function call with a provided origin. The dispatch origin for this call must be _Root_. ## Complexity
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function utilityDispatchAs(
  args: UtilityDispatchAsArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'dispatch_as',
        pallet: 'utility',
      },
      ...info,
    },
    options
  );
}

export type UtilityForceBatchArgs = {
  /**
  *  The calls to be dispatched from the same origin. The number of call must not
  */
  calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]
};

/**
 * Send a batch of dispatch calls. Unlike &#x60;batch&#x60;, it allows errors and won&#x27;t interrupt. May be called from any origin except &#x60;None&#x60;.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function utilityForceBatch(
  args: UtilityForceBatchArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'force_batch',
        pallet: 'utility',
      },
      ...info,
    },
    options
  );
}

export type UtilityWithWeightArgs = {
  call: Call | IMethod | string | Uint8Array
  weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array
};

/**
 * Dispatch a function call with a specified weight. This function does not check the weight of the call, and instead allows the Root origin to specify the weight of the call. The dispatch origin for this call must be _Root_.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function utilityWithWeight(
  args: UtilityWithWeightArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'with_weight',
        pallet: 'utility',
      },
      ...info,
    },
    options
  );
}

export type VestingForceRemoveVestingScheduleArgs = {
  /**
  *  An account that has a vesting schedule
  */
  target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  /**
  *  The vesting schedule index that should be removed
  */
  scheduleIndex: u32 | AnyNumber | Uint8Array
};

/**
 * Force remove a vesting schedule The dispatch origin for this call must be _Root_.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function vestingForceRemoveVestingSchedule(
  args: VestingForceRemoveVestingScheduleArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'force_remove_vesting_schedule',
        pallet: 'vesting',
      },
      ...info,
    },
    options
  );
}

export type VestingForceVestedTransferArgs = {
  /**
  *  The account whose funds should be transferred.
  */
  source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  /**
  *  The account that should be transferred the vested funds.
  */
  target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  /**
  *  The vesting schedule attached to the transfer.
  */
  schedule: PalletVestingVestingInfo | { locked?: any; perBlock?: any; startingBlock?: any } | string | Uint8Array
};

/**
 * Force a vested transfer. The dispatch origin for this call must be _Root_.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function vestingForceVestedTransfer(
  args: VestingForceVestedTransferArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'force_vested_transfer',
        pallet: 'vesting',
      },
      ...info,
    },
    options
  );
}

export type VestingMergeSchedulesArgs = {
  /**
  *  index of the first schedule to merge.
  */
  schedule1Index: u32 | AnyNumber | Uint8Array
  /**
  *  index of the second schedule to merge.
  */
  schedule2Index: u32 | AnyNumber | Uint8Array
};

/**
 * Merge two vesting schedules together, creating a new vesting schedule that unlocks over the highest possible start and end blocks. If both schedules have already started the current block will be used as the schedule start; with the caveat that if one schedule is finished by the current block, the other will be treated as the new merged schedule, unmodified. NOTE: If &#x60;schedule1_index &#x3D;&#x3D; schedule2_index&#x60; this is a no-op. NOTE: This will unlock all schedules through the current block prior to merging. NOTE: If both schedules have ended by the current block, no new schedule will be created and both will be removed. Merged schedule attributes:
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function vestingMergeSchedules(
  args: VestingMergeSchedulesArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'merge_schedules',
        pallet: 'vesting',
      },
      ...info,
    },
    options
  );
}

export type VestingVestArgs = {
};

/**
 * Unlock any vested funds of the sender account. The dispatch origin for this call must be _Signed_ and the sender must have funds still locked under this pallet. Emits either &#x60;VestingCompleted&#x60; or &#x60;VestingUpdated&#x60;. ## Complexity
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function vestingVest(
  args: VestingVestArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'vest',
        pallet: 'vesting',
      },
      ...info,
    },
    options
  );
}

export type VestingVestedTransferArgs = {
  /**
  *  The account receiving the vested funds.
  */
  target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
  /**
  *  The vesting schedule attached to the transfer.
  */
  schedule: PalletVestingVestingInfo | { locked?: any; perBlock?: any; startingBlock?: any } | string | Uint8Array
};

/**
 * Create a vested transfer. The dispatch origin for this call must be _Signed_.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function vestingVestedTransfer(
  args: VestingVestedTransferArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'vested_transfer',
        pallet: 'vesting',
      },
      ...info,
    },
    options
  );
}

export type VestingVestOtherArgs = {
  /**
  *  The account whose vested funds should be unlocked. Must have funds still
  */
  target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
};

/**
 * Unlock any vested funds of a &#x60;target&#x60; account. The dispatch origin for this call must be _Signed_.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function vestingVestOther(
  args: VestingVestOtherArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'vest_other',
        pallet: 'vesting',
      },
      ...info,
    },
    options
  );
}

export type XcmpQueueResumeXcmExecutionArgs = {
};

/**
 * Resumes all XCM executions for the XCMP queue. Note that this function doesn&#x27;t change the status of the in/out bound channels.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function xcmpQueueResumeXcmExecution(
  args: XcmpQueueResumeXcmExecutionArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'resume_xcm_execution',
        pallet: 'xcmpQueue',
      },
      ...info,
    },
    options
  );
}

export type XcmpQueueSuspendXcmExecutionArgs = {
};

/**
 * Suspends all XCM executions for the XCMP queue, regardless of the sender&#x27;s origin.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function xcmpQueueSuspendXcmExecution(
  args: XcmpQueueSuspendXcmExecutionArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'suspend_xcm_execution',
        pallet: 'xcmpQueue',
      },
      ...info,
    },
    options
  );
}

export type XcmpQueueUpdateDropThresholdArgs = {
  updated: u32 | AnyNumber | Uint8Array
};

/**
 * Overwrites the number of pages which must be in the queue after which we drop any further messages from the channel.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function xcmpQueueUpdateDropThreshold(
  args: XcmpQueueUpdateDropThresholdArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'update_drop_threshold',
        pallet: 'xcmpQueue',
      },
      ...info,
    },
    options
  );
}

export type XcmpQueueUpdateResumeThresholdArgs = {
  updated: u32 | AnyNumber | Uint8Array
};

/**
 * Overwrites the number of pages which the queue must be reduced to before it signals that message sending may recommence after it has been suspended.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function xcmpQueueUpdateResumeThreshold(
  args: XcmpQueueUpdateResumeThresholdArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'update_resume_threshold',
        pallet: 'xcmpQueue',
      },
      ...info,
    },
    options
  );
}

export type XcmpQueueUpdateSuspendThresholdArgs = {
  updated: u32 | AnyNumber | Uint8Array
};

/**
 * Overwrites the number of pages which must be in the queue for the other side to be told to suspend their sending.
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function xcmpQueueUpdateSuspendThreshold(
  args: XcmpQueueUpdateSuspendThresholdArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'update_suspend_threshold',
        pallet: 'xcmpQueue',
      },
      ...info,
    },
    options
  );
}

