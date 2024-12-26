// Auto-generated, do not edit
/* eslint-disable */

import { defineMethod } from '@substrate/txwrapper-core';

import type { BaseTxInfo, OptionsWithMeta, UnsignedTransaction } from '@substrate/txwrapper-core';

import type {
  BlockchainGenericAddress,
  BlockchainGenericBalance,
  BlockchainGenericId,
  CTAction,
  NftWitness
} from '../types/api/common';

/**
 * Arguments required to submit a Clearing transaction.
 */
export type AppTransactionsSubmitClearingTransactionArgs = {
  appAgentId: BlockchainGenericId;
  atomics: CTAction[][];
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
        args,
        name: 'submit_clearing_transaction',
        pallet: 'appTransactions',
      },
      ...info,
    },
    options
  );
}

/**
 * Arguments required to reduce the balance of &#x60;who&#x60; by as much as possible up to &#x60;amount&#x60; assets of &#x60;id&#x60;.
 */
export type AssetsBurnArgs = {
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

/**
 * Arguments required to destroy all accounts associated with a given asset.
 */
export type AssetsDestroyAccountsArgs = {
  /**
  *  The identifier of the asset to be destroyed. This must identify an existing asset.
  */
  id: BlockchainGenericId;
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
        args,
        name: 'destroy_accounts',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

/**
 * Arguments required to destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit).
 */
export type AssetsDestroyApprovalsArgs = {
  /**
  *  The identifier of the asset to be destroyed. This must identify an existing asset.
  */
  id: BlockchainGenericId;
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
        args,
        name: 'destroy_approvals',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

/**
 * Arguments required to complete destroying asset and unreserve currency.
 */
export type AssetsFinishDestroyArgs = {
  /**
  *  The identifier of the asset to be destroyed. This must identify an existing asset.
  */
  id: BlockchainGenericId;
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
        args,
        name: 'finish_destroy',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

/**
 * Arguments required to move some assets from one account to another.
 */
export type AssetsForceTransferArgs = {
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
        args,
        name: 'force_transfer',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

/**
 * Arguments required to disallow further unprivileged transfers of an asset &#x60;id&#x60; from an account &#x60;who&#x60;. &#x60;who&#x60;
 */
export type AssetsFreezeArgs = {
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
        args,
        name: 'freeze',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

/**
 * Arguments required to disallow further unprivileged transfers for the asset class.
 */
export type AssetsFreezeAssetArgs = {
  /**
  *  The identifier of the asset to be frozen.
  */
  id: BlockchainGenericId;
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
        args,
        name: 'freeze_asset',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

/**
 * Arguments required to mint assets of a particular class.
 */
export type AssetsMintArgs = {
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
        args,
        name: 'mint',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

/**
 * Arguments required to set the raw metadata for an asset.
 */
export type AssetsSetMetadataArgs = {
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
        args,
        name: 'set_metadata',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

/**
 * Arguments required to sets the minimum balance of an asset.
 */
export type AssetsSetMinBalanceArgs = {
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
        args,
        name: 'set_min_balance',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

/**
 * Arguments required to start the process of destroying a fungible asset class.
 */
export type AssetsStartDestroyArgs = {
  /**
  *  The identifier of the asset to be destroyed. This must identify an existing asset.
  */
  id: BlockchainGenericId;
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
        args,
        name: 'start_destroy',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

/**
 * Arguments required to allow unprivileged transfers to and from an account again.
 */
export type AssetsThawArgs = {
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
        args,
        name: 'thaw',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

/**
 * Arguments required to allow unprivileged transfers for the asset again.
 */
export type AssetsThawAssetArgs = {
  /**
  *  The identifier of the asset to be thawed.
  */
  id: BlockchainGenericId;
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
        args,
        name: 'thaw_asset',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

/**
 * Arguments required to move some assets from the sender account to another.
 */
export type AssetsTransferArgs = {
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

/**
 * Arguments required to move some assets from the sender account to another, keeping the sender account alive.
 */
export type AssetsTransferKeepAliveArgs = {
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

/**
 * Arguments required to change the Owner of an asset.
 */
export type AssetsTransferOwnershipArgs = {
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
        args,
        name: 'transfer_ownership',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}

/**
 * Arguments required to transfer the entire transferable balance from the caller account.
 */
export type BalancesTransferAllArgs = {
  /**
  *  The recipient of the transfer.
  */
  dest: BlockchainGenericAddress;
  keepAlive: boolean;
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
        args,
        name: 'transfer_all',
        pallet: 'balances',
      },
      ...info,
    },
    options
  );
}

/**
 * Arguments required to transfer some liquid free balance to another account.
 */
export type BalancesTransferAllowDeathArgs = {
  dest: BlockchainGenericAddress;
  value: BlockchainGenericBalance;
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
        args,
        name: 'transfer_allow_death',
        pallet: 'balances',
      },
      ...info,
    },
    options
  );
}

/**
 * Arguments required to same as the [&#x60;transfer_allow_death&#x60;] call, but with a check that the transfer will not
 */
export type BalancesTransferKeepAliveArgs = {
  dest: BlockchainGenericAddress;
  value: BlockchainGenericBalance;
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
        args,
        name: 'transfer_keep_alive',
        pallet: 'balances',
      },
      ...info,
    },
    options
  );
}

/**
 * Arguments required to destroy a single item.
 */
export type NftsBurnArgs = {
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
        args,
        name: 'burn',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

/**
 * Arguments required to clear the metadata for a collection.
 */
export type NftsClearCollectionMetadataArgs = {
  /**
  *  The identifier of the collection whose metadata to clear.
  */
  collection: BlockchainGenericId;
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
        args,
        name: 'clear_collection_metadata',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

/**
 * Arguments required to clear the metadata for an item.
 */
export type NftsClearMetadataArgs = {
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
        args,
        name: 'create',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

/**
 * Arguments required to destroy a collection of fungible items.
 */
export type NftsDestroyArgs = {
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
        args,
        name: 'destroy',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

/**
 * Arguments required to disallow further unprivileged transfer of an item.
 */
export type NftsLockItemTransferArgs = {
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
  args: NftsMintArgs,
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

/**
 * Arguments required to set (or reset) the acceptance of ownership for a particular account.
 */
export type NftsSetAcceptOwnershipArgs = {
  /**
  *  The identifier of the collection whose ownership the signer is willing to accept, or if `None`, an indication that the signer is willing to accept no ownership transferal.
  */
  maybeCollection: number | null | undefined;
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
        args,
        name: 'set_accept_ownership',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

/**
 * Arguments required to set the metadata for a collection.
 */
export type NftsSetCollectionMetadataArgs = {
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
        args,
        name: 'set_collection_metadata',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

/**
 * Arguments required to set the metadata for an item.
 */
export type NftsSetMetadataArgs = {
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
        args,
        name: 'set_metadata',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

/**
 * Arguments required to move an item from the sender account to another.
 */
export type NftsTransferArgs = {
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
  args: NftsTransferArgs,
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

/**
 * Arguments required to change the Owner of a collection.
 */
export type NftsTransferOwnershipArgs = {
  /**
  *  The collection whose owner should be changed.
  */
  collection: BlockchainGenericId;
  newOwner: BlockchainGenericAddress;
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
        args,
        name: 'transfer_ownership',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

/**
 * Arguments required to re-allow unprivileged transfer of an item.
 */
export type NftsUnlockItemTransferArgs = {
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
        args,
        name: 'unlock_item_transfer',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}

