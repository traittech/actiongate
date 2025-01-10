import { z } from "zod";

import { isValidSS58 } from '../checks';
import { u32_MIN, u32_MAX, u128_MIN, u128_MAX, ss58_LENGTH, text_MAX_LENGTH } from '../consts';

const isAnyNumberLike = z.union([z.string(), z.number(), z.bigint()]);

const isAnyNumberInRange = (min: bigint, max: bigint) => isAnyNumberLike.pipe(
  z.coerce.bigint()
    .gte(min, `Value must be greater or equal to ${min}`)
    .lte(max, `Value must be fewer or equal to ${max}`)
);

export const BlockchainGenericAddressSchema = z
  .string()
  .length(ss58_LENGTH, { message: `String must be exactly ${ss58_LENGTH} characters long` })
  .refine((v) => isValidSS58(v), { message: 'String is not valid SS58 encoded address' });

export const BlockchainGenericIdSchema = isAnyNumberInRange(u32_MIN, u32_MAX);

export const BlockchainGenericBalanceSchema = isAnyNumberInRange(u128_MIN, u128_MAX);

export const BlockchainGenericBooleanSchema = z.boolean();

export const BlockchainGenericTextSchema = z
  .string()
  .max(text_MAX_LENGTH, { message: `String must be fewer or equal ${text_MAX_LENGTH} characters long` });