import {
  type BaseTxInfo,
  defineMethod,
  type OptionsWithMeta,
  type UnsignedTransaction,
} from '@substrate/txwrapper-core';

/**
 * Arguments required to set metadata of a fungible token.
 */
export interface AssetsSetMetadataArgs {
  /**
   * The ID of a fungible token.
   */
  id: number;
  /**
   * The metadata.
   */
  data: string;
}

/**
 * Set metadata of a fungible token.
 *
 * @param args - The arguments of the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function assetsSetMetadata(
  args: AssetsSetMetadataArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'set_metadata',
        pallet: 'assets',
      },
      ...info,
    },
    options
  );
}
