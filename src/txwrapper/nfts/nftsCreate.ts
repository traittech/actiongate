import {
  type BaseTxInfo,
  defineMethod,
  type OptionsWithMeta,
  type UnsignedTransaction,
} from '@substrate/txwrapper-core';

/**
 * Arguments required to create NFT collection.
 */
/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface NFTsCreateArgs {}

/**
 * Construct an NFT collection.
 *
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsCreate(args: NFTsCreateArgs, info: BaseTxInfo, options: OptionsWithMeta): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'create',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}
