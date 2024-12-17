import {
  type BaseTxInfo,
  defineMethod,
  type OptionsWithMeta,
  type UnsignedTransaction,
} from '@substrate/txwrapper-core';

/**
 * Arguments required to clear metadata of NFT item.
 */
export interface NFTsClearMetadata {
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
 * Clear metadata of NFT item.
 *
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsClearMetadata(
  args: NFTsClearMetadata,
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
