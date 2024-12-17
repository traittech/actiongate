import {
  type BaseTxInfo,
  defineMethod,
  type OptionsWithMeta,
  type UnsignedTransaction,
} from '@substrate/txwrapper-core';

/**
 * Arguments required to lock transfer of an NFT item.
 */
export interface NFTsLockItemTransfer {
  /**
   * The ID of the NFT collection.
   */
  collection: number;
  /**
   * The ID of the NFT item.
   */
  item: number;
}

/**
 * Lock transfer of an NFT item.
 *
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsLockItemTransfer(
  args: NFTsLockItemTransfer,
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
