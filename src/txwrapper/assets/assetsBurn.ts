import {
  type BaseTxInfo,
  defineMethod,
  type OptionsWithMeta,
  type UnsignedTransaction,
} from '@substrate/txwrapper-core';

/**
 * Arguments required to burn fungible tokens.
 */
export interface AssetsBurnArgs {
  /**
   * The ID of a fungible token.
   */
  id: number;
  /**
   * The account that will loose the tokens.
   */
  who: string;
  /**
   * Amount of tokens to burn.
   */
  amount: number;
}

/**
 * Burn a fungible token.
 *
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsBurn(args: AssetsBurnArgs, info: BaseTxInfo, options: OptionsWithMeta): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'burn',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}
