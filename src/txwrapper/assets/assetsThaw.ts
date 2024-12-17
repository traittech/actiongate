import {
  type BaseTxInfo,
  defineMethod,
  type OptionsWithMeta,
  type UnsignedTransaction,
} from '@substrate/txwrapper-core';

/**
 * Arguments required to thaw an account of fungible token.
 */
export interface AssetsThawArgs {
  /**
   * The ID of a fungible token.
   */
  id: number;
  /**
   * The account that will be thawed.
   */
  who: string;
}

/**
 * Thaw an account of fungible token.
 *
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsThaw(args: AssetsThawArgs, info: BaseTxInfo, options: OptionsWithMeta): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'thaw',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}
