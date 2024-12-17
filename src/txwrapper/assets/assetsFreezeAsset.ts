import {
  type BaseTxInfo,
  defineMethod,
  type OptionsWithMeta,
  type UnsignedTransaction,
} from '@substrate/txwrapper-core';

/**
 * Arguments required to freeze a fungible token.
 */
export interface AssetsFreezeAssetArgs {
  /**
   * The ID of a fungible token.
   */
  id: number;
}

/**
 * Freeze a fungible token.
 *
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsFreezeAsset(
  args: AssetsFreezeAssetArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'freeze_asset',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}
