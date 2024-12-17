import {
  type BaseTxInfo,
  defineMethod,
  type OptionsWithMeta,
  type UnsignedTransaction,
} from '@substrate/txwrapper-core';

/**
 * Arguments required to transfer ownership of NFT collection.
 */
export interface NFTsSetAcceptOwnershipArgs {
  /**
   * The ID of the NFT collection.
   */
  maybeCollection?: number;
}

/**
 * Accept ownership over NFT collection.
 *
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function nftsSetAcceptOwnership(
  args: NFTsSetAcceptOwnershipArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_accept_ownership',
        pallet: 'nfts',
      },
      ...info,
    },
    options
  );
}
