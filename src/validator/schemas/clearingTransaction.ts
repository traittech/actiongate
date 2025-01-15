import { z } from 'zod';

import { ActionType } from '../../types/api/actions';

import { ArgsSchema, SignatorySchema } from './transaction';

export const AppAgentIdSchema = z.number().min(0);

export const ActionTypeSchema = z.nativeEnum(ActionType);

export const CTActionOriginSchema = z.union([
  z.object({ AppAgentId: z.any() }),
  z.object({ AppAgentAddress: z.string() }),
  z.object({ TransactionalAddressId: z.any() }),
  z.object({ TransactionalAddress: z.any() }),
  z.object({ NamedAddress: z.any() }),
  z.object({ NamedAddressName: z.any() }),
]);

export const CTActionSchema = z.tuple([
  CTActionOriginSchema,
  z.union([
    z
      .object({
        callIndex: z.string(),
        args: z.string(),
      })
      .partial(),
    z.string(),
  ]),
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
  app_agent_id: AppAgentIdSchema,
  atomics: z.array(CTAtomicSchema),
});
