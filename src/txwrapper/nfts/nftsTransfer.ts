import {
  type BaseTxInfo,
  defineMethod,
  type OptionsWithMeta,
  type UnsignedTransaction,
} from '@substrate/txwrapper-core';

/**
 * Arguments required to transfer NFTs.
 */
export interface NFTsTransferArgs {
  /**
   * The recipient address, SS58 encoded.
   */
  dest: string;
  /**
   * The ID of the NFT collection.
   */
  collection: number;
  /**
   * The item ID of the NFT within the collection.
   */
  item: number;
}

/**
 * Construct an NFT transfer transaction.
 *
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsTransfer(args: NFTsTransferArgs, info: BaseTxInfo, options: OptionsWithMeta): UnsignedTransaction {
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
