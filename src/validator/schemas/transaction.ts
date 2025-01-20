import { z } from 'zod';

import { ActionType } from '../../types/api/actions';

export const SignatorySchema = z.string();

export const ArgsSchema = z.object({}).passthrough(); // matches any args objects

export const ActionTypeSchema = z.nativeEnum(ActionType);

export const TxActionSchema = z.object({
  actionType: ActionTypeSchema,
  arguments: ArgsSchema,
});

export const TransactionPayloadSchema = z.object({
  signatory: SignatorySchema,
  tx: TxActionSchema,
});
