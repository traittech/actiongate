import {
  type BaseTxInfo,
  defineMethod,
  type OptionsWithMeta,
  type UnsignedTransaction,
} from '@substrate/txwrapper-core';

/**
 * Arguments required to mint an NFT item.
 */
export interface NFTsMint {
  /**
   * The ID of the NFT collection.
   */
  collection: number;
  /**
   * The ID of the NFT item.
   */
  item: number;
  /**
   * The receiver of the token.
   */
  mintTo: string;
}

/**
 * Mint and NFT item.
 *
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsMint(args: NFTsMint, info: BaseTxInfo, options: OptionsWithMeta): UnsignedTransaction {
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
