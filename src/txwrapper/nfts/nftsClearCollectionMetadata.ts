import {
  type BaseTxInfo,
  defineMethod,
  type OptionsWithMeta,
  type UnsignedTransaction,
} from '@substrate/txwrapper-core';

/**
 * Arguments required to clear metadata of NFT collection.
 */
export interface NFTsClearCollectionMetadata {
  /**
   * The ID of the NFT collection.
   */
  collection: number;
}

/**
 * Clear metadata of NFT collection.
 *
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsClearCollectionMetadata(
  args: NFTsClearCollectionMetadata,
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
