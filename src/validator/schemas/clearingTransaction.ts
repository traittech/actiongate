import { z } from 'zod';

import { BlockchainGenericIdSchema, BlockchainGenericAddressIdSchema, BlockchainGenericAccountSchema, BlockchainAddressNameSchema } from './common';
import { ArgsSchema, ActionTypeSchema, SignatorySchema } from './transaction';

export const CTActionOriginSchema = z.union([
  z.object({ AppAgentId: BlockchainGenericIdSchema }),
  z.object({ AppAgentAddress: BlockchainGenericAccountSchema }),
  z.object({ TransactionalAddressId: BlockchainGenericAddressIdSchema }),
  z.object({ TransactionalAddress: BlockchainGenericAccountSchema }),
  z.object({ NamedAddress: BlockchainGenericAccountSchema }),
  z.object({ NamedAddressName: BlockchainAddressNameSchema }),
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
  appAgentId: BlockchainGenericIdSchema,
  atomics: z.array(CTAtomicSchema),
});
