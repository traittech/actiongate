import { z } from 'zod';

import { ArgsSchema, ActionTypeSchema, SignatorySchema } from './transaction';

export const AppAgentIdSchema = z.number().min(0);

export const CTActionOriginSchema = z.union([
  z.object({ AppAgentId: z.any() }),
  z.object({ AppAgentAddress: z.string() }),
  z.object({ TransactionalAddressId: z.any() }),
  z.object({ TransactionalAddress: z.any() }),
  z.object({ NamedAddress: z.any() }),
  z.object({ NamedAddressName: z.any() }),
]);

export const CTActionCallSchema = z.union([
  z
    .object({
      callIndex: z.string(),
      args: z.string(),
    })
    .partial(),
  z.string(),
]);

export const CTActionSchema = z.tuple([
  CTActionOriginSchema,
  CTActionCallSchema,
]);

export const CTAtomicActionSchema = z.object({
  actionType: ActionTypeSchema,
  origin: CTActionOriginSchema,
  arguments: ArgsSchema,
});

export const CTAtomicActionsSchema = z.array(z.array(CTActionSchema));

export const CTAtomicSchema = z.object({
  actions: z.array(CTAtomicActionSchema),
});

export const ClearingTransactionPayloadSchema = z.object({
  signatory: SignatorySchema,
  appAgentId: AppAgentIdSchema,
  atomics: z.array(CTAtomicSchema),
});
