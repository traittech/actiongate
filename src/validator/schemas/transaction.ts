import { z } from 'zod';

import { TransactionType } from '../../types/api/actions';

export const SignatorySchema = z.string();

export const TransactionTypeSchema = z.nativeEnum(TransactionType);

export const TransactionArgsSchema = z.object({}).passthrough(); // matches any args objects

export const TxActionSchema = z.object({
  actionType: TransactionTypeSchema,
  arguments: TransactionArgsSchema,
});

export const TransactionPayloadSchema = z.object({
  signatory: SignatorySchema,
  tx: TxActionSchema,
});
