import {
  type BaseTxInfo,
  defineMethod,
  type OptionsWithMeta,
  type UnsignedTransaction,
} from '@substrate/txwrapper-core';

/**
 * Arguments required to mint fungible tokens.
 */
export interface AssetsMintArgs {
  /**
   * The ID of a fungible token.
   */
  id: number;
  /**
   * The account that will receive the tokens.
   */
  beneficiary: string;
  /**
   * Amount of tokens to mint.
   */
  amount: number;
}

/**
 * Mint a fungible token.
 *
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsMint(args: AssetsMintArgs, info: BaseTxInfo, options: OptionsWithMeta): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'mint',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}
