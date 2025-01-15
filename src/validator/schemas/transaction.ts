import { z } from 'zod';

export const SignatorySchema = z.string();

export const ArgsSchema = z.object({}).passthrough(); // matches any args objects

export const TransactionPayloadSchema = z.object({
  signatory: SignatorySchema,
  module_name: z.string(),
  function_name: z.string(),
  arguments: ArgsSchema,
});
