import {
  type BaseTxInfo,
  defineMethod,
  type OptionsWithMeta,
  type UnsignedTransaction,
} from '@substrate/txwrapper-core';

/**
 * Arguments required to set min account balance of a fungible token.
 */
export interface AssetsSetMinBalanceArgs {
  /**
   * The ID of a fungible token.
   */
  id: number;
  /**
   * The min account balance.
   */
  minBalance: number;
}

/**
 * Set min account balance of a fungible token.
 *
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsSetMinBalance(
  args: AssetsSetMinBalanceArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_min_balance',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}
