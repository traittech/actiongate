import {
  type BaseTxInfo,
  defineMethod,
  type OptionsWithMeta,
  type UnsignedTransaction,
} from '@substrate/txwrapper-core';

/**
 * Arguments required to create a fungible token.
 */
export interface AssetsCreateArgs {
  /**
   * Min balance of an account in a fungible token.
   */
  minBalance: number;
}

/**
 * Construct a fungible token.
 *
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsCreate(args: AssetsCreateArgs, info: BaseTxInfo, options: OptionsWithMeta): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'create',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}
