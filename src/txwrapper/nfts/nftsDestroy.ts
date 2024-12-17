import {
  type BaseTxInfo,
  defineMethod,
  type OptionsWithMeta,
  type UnsignedTransaction,
} from '@substrate/txwrapper-core';

/**
 * Arguments required to destroy NFT collection.
 */
export interface NFTsDestroyArgs {
  /**
   * The ID of the NFT collection.
   */
  collection: number;
  /**
   * The information about destroyed on-chain data.
   */
  witness: {
    itemMetadatas: number;
    itemConfigs: number;
    attributes: number;
  };
}

/**
 * Destroy an NFT collection.
 *
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsDestroy(args: NFTsDestroyArgs, info: BaseTxInfo, options: OptionsWithMeta): UnsignedTransaction {
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
