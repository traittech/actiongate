import { z } from 'zod';

import { AllowedActions, TransactionType } from '../../types/api/actions';

export const SignatorySchema = z.string();

export const ArgsSchema = z.object({}).passthrough(); // matches any args objects

export const TransactionTypeSchema = z.nativeEnum(TransactionType);

export const ActionTypeSchema = z.enum(AllowedActions);

export const TxActionSchema = z.object({
  actionType: TransactionTypeSchema,
  arguments: ArgsSchema,
});

export const TransactionPayloadSchema = z.object({
  signatory: SignatorySchema,
  tx: TxActionSchema,
});
