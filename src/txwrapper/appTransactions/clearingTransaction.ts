import { defineMethod } from '@substrate/txwrapper-core';

import type { BaseTxInfo, OptionsWithMeta, UnsignedTransaction } from '@substrate/txwrapper-core';

import type { CTAction } from '../../types/api/common';

/**
 * Arguments required to create a clearing transaction.
 */
export interface ClearingTransactionArgs {
  /**
   * The id of the app agent.
   */
  appAgentId: string;
  /**
   * A nested array of actions (Vec<Vec<Action>> in rust).
   */
  atomics: CTAction[][];
}

/**
 * Construct a clearing transaction.
 *
 * @param args - The arguments to construct the transaction.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 */
export function clearingTransaction(
  args: ClearingTransactionArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        // @ts-expect-error Needed until types are updated in txwrapper-core
        args,
        name: 'submitClearingTransaction',
        pallet: 'appTransactions',
      },
      ...info,
    },
    options
  );
}
