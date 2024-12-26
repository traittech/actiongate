// Auto-generated, do not edit
/* eslint-disable */

import { defineMethod } from '@substrate/txwrapper-core';

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/submittable';

import type { BaseTxInfo, OptionsWithMeta, UnsignedTransaction } from '@substrate/txwrapper-core';

import type { Bytes, Compact, bool, u128, u32 } from '@polkadot/types-codec';
import type { AnyNumber } from '@polkadot/types-codec/types';
import type { MultiAddress } from '@polkadot/types/interfaces/runtime';

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
  *  The identifier of the asset to be destroyed. This must identify an existing asset.
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
  *  The identifier of the asset to be destroyed. This must identify an existing asset.
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
  *  The identifier of the asset to be destroyed. This must identify an existing asset.
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
  *  The amount by which the `source`'s balance of assets should be reduced and `dest`'s balance increased. The amount actually transferred may be slightly greater in the case that the transfer would otherwise take the `source` balance above zero but below the minimum balance. Must be greater than zero.
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

export type AssetsStartDestroyArgs = {
  /**
  *  The identifier of the asset to be destroyed. This must identify an existing asset.
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
  *  The amount by which the sender's balance of assets should be reduced and `target`'s balance increased. The amount actually transferred may be slightly greater in the case that the transfer would otherwise take the sender balance above zero but below the minimum balance. Must be greater than zero.
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
  *  The amount by which the sender's balance of assets should be reduced and `target`'s balance increased. The amount actually transferred may be slightly greater in the case that the transfer would otherwise take the sender balance above zero but below the minimum balance. Must be greater than zero.
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

export type BalancesTransferAllArgs = {
  /**
  *  The recipient of the transfer.
  */
  dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array
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

