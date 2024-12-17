import {
  type BaseTxInfo,
  defineMethod,
  type OptionsWithMeta,
  type UnsignedTransaction,
} from '@substrate/txwrapper-core';

/**
 * Arguments required to set metadata of a NFT item.
 */
export interface NFTsSetMetadata {
  /**
   * The ID of the NFT collection.
   */
  collection: number;
  /**
   * The ID of the NFT item.
   */
  item: number;
  /**
   * The metadata.
   */
  data: string;
}

/**
 * Set metadata of a NFT item.
 *
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsSetMetadata(
  args: NFTsSetMetadata,
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
