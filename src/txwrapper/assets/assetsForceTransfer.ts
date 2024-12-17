import {
  type BaseTxInfo,
  defineMethod,
  type OptionsWithMeta,
  type UnsignedTransaction,
} from '@substrate/txwrapper-core';

/**
 * Arguments required to mint fungible tokens.
 */
export interface AssetsForceTransferArgs {
  /**
   * The ID of a fungible token.
   */
  id: number;
  /**
   * The account that will send the tokens.
   */
  source: string;
  /**
   * The account that will receive the tokens.
   */
  dest: string;
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
export function assetsForceTransfer(
  args: AssetsForceTransferArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'force_transfer',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}
