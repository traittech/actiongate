import { z } from 'zod';

import { isValidSS58 } from '../checks';
import { u32_MIN, u32_MAX, u64_MIN, u64_MAX, u128_MIN, u128_MAX, ss58_LENGTH, text_MAX_LENGTH, addressName_REGEX } from '../consts';

/**
 * Number could be presented with number or string types
 */
const isNumberish = z.union([z.string(), z.number()]);

/**
 * Utility for creating a number validation range: [`min`; `max`]
 * @param min min bigint value
 * @param max max bigint value
 * @returns Number presented as string - to prevent overflow
 */
const isNumberishInRange = (min: bigint, max: bigint) =>
  isNumberish.pipe(
    z.coerce
      .bigint()
      .gte(min, `Value must be greater or equal to ${min}`)
      .lte(max, `Value must be fewer or equal to ${max}`)
      .transform((v) => v.toString())
  );

/**
 * `u32` number validation schema
 */
export const UINT32Schema = isNumberishInRange(u32_MIN, u32_MAX);

/**
 * `u32` number validation schema
 */
export const UINT64Schema = isNumberishInRange(u64_MIN, u64_MAX);

/**
 * `u128` number validation schema
 */
export const UINT128Schema = isNumberishInRange(u128_MIN, u128_MAX);

/**
 * `bool` boolean validation schema
 */
export const booleanSchema = z.boolean();

export const BlockchainGenericAccountSchema = z
  .string()
  .length(ss58_LENGTH, { message: `String must be exactly ${ss58_LENGTH} characters long` })
  .refine((v) => isValidSS58(v), { message: 'String is not valid SS58 encoded address' });

export const BlockchainGenericTextSchema = z
  .string()
  .max(text_MAX_LENGTH, { message: `String must be fewer or equal ${text_MAX_LENGTH} characters long` });

export const BlockchainAddressNameSchema = z
  .string()
  .length(10, { message: `String must be exactly ${10} characters long` })
  .regex(addressName_REGEX);

export const BlockchainGenericIdSchema = UINT32Schema;

export const BlockchainGenericAddressIdSchema = u128Schema;

export const BlockchainGenericBalanceSchema = u128Schema;

export const BlockchainGenericBooleanSchema = booleanSchema;
