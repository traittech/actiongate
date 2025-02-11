import { defineMethod } from '@substrate/txwrapper-core';

import type { Args, BaseTxInfo, OptionsWithMeta, TxInfo, TxMethod, UnsignedTransaction } from '@substrate/txwrapper-core';

export function constructUnsignedTransaction(
  pallet: string,
  name: string,
  args: Args,
  baseTxInfo: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  const txMethod: TxMethod = { args, name, pallet };
  const txInfo: TxInfo = { method: txMethod, ...baseTxInfo };

  return defineMethod(txInfo, options);
}
