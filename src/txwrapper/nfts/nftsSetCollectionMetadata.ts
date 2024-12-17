import {
  type BaseTxInfo,
  defineMethod,
  type OptionsWithMeta,
  type UnsignedTransaction,
} from '@substrate/txwrapper-core';

/**
 * Arguments required to set metadata of NFT collection.
 */
export interface NFTsSetCollectionMetadata {
  /**
   * The ID of the NFT collection.
   */
  collection: number;
  /**
   * The metadata.
   */
  data: string;
}

/**
 * Set metadata of NFT collection.
 *
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsSetCollectionMetadata(
  args: NFTsSetCollectionMetadata,
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
