import { z } from 'zod';

import { Txs } from '../../types/api/actions';

export const SignatorySchema = z.string();

export const TxTypeSchema = z.enum(Txs);

export const TxArgsSchema = z.object({}).passthrough(); // matches any args objects

export const TxSchema = z.object({
  actionType: TxTypeSchema,
  arguments: TxArgsSchema,
});

export const TransactionPayloadSchema = z.object({
  signatory: SignatorySchema,
  tx: TxSchema,
});
