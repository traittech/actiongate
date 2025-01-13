import { z } from "zod";

import { isValidSS58 } from '../checks';
import { u32_MIN, u32_MAX, u128_MIN, u128_MAX, ss58_LENGTH, text_MAX_LENGTH } from '../consts';

/**
 * Number could be presented with number or string types
 */
const isNumberish = z.union([z.string(), z.number()]);

/**
 * Utility for creating a number validation range
 * @param min 
 * @param max 
 * @returns Number as string to prevent overflow
 */
const isNumberishInRange = (min: bigint, max: bigint) => isNumberish.pipe(
  z.coerce.bigint()
    .gte(min, `Value must be greater or equal to ${min}`)
    .lte(max, `Value must be fewer or equal to ${max}`)
    .transform((v) => v.toString())
);

/**
 * `u32` number validation schema
 */
const u32Schema = isNumberishInRange(u32_MIN, u32_MAX);

/**
 * `u128` number validation schema
 */
const u128Schema = isNumberishInRange(u128_MIN, u128_MAX);

/**
 * `bool` boolean validation schema
 */
const booleanSchema = z.boolean();

export const BlockchainGenericAccountSchema = z
  .string()
  .length(ss58_LENGTH, { message: `String must be exactly ${ss58_LENGTH} characters long` })
  .refine((v) => isValidSS58(v), { message: 'String is not valid SS58 encoded address' });

export const BlockchainGenericTextSchema = z
  .string()
  .max(text_MAX_LENGTH, { message: `String must be fewer or equal ${text_MAX_LENGTH} characters long` });

export const BlockchainGenericIdSchema = u32Schema;

export const BlockchainGenericBalanceSchema = u128Schema;

export const BlockchainGenericBooleanSchema = booleanSchema;

export const NftWitnessSchema = z.object({
  itemMetadatas: u32Schema,
  itemConfigs: u32Schema,
  attributes: u32Schema,
});