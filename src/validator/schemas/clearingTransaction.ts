import { z } from "zod";

import { ActionType } from '../../types/api/actions';

export const SignatorySchema = z.string();

export const AppAgentIdSchema = z.number().min(0);

export const ActionTypeSchema = z.nativeEnum(ActionType);

export const ActionArgsSchema = z.object({}).passthrough(); // matches any args objects

export const CTActionOriginSchema = z.union([
  z.object({ AppAgentId: z.any() }),
  z.object({ AppAgentAddress: z.string() }),
  z.object({ TransactionalAddressId: z.any() }),
  z.object({ TransactionalAddress: z.any() }),
  z.object({ NamedAddress: z.any() }),
  z.object({ NamedAddressName: z.any() }),
]);

export const CTAtomicActionSchema = z.object({
  actionType: ActionTypeSchema,
  origin: CTActionOriginSchema,
  arguments: ActionArgsSchema,
});

export const CTAtomicSchema = z.object({
  actions: z.array(CTAtomicActionSchema),
});

export const ClearingTransactionPayloadSchema = z.object({
  signatory: SignatorySchema,
  app_agent_id: AppAgentIdSchema,
  atomics: z.array(CTAtomicSchema),
})