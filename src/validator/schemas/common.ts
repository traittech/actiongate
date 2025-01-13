import { z } from "zod";

import { isValidSS58 } from '../checks';
import { u32_MIN, u32_MAX, u128_MIN, u128_MAX, ss58_LENGTH, text_MAX_LENGTH } from '../consts';

const isAnyNumberLike = z.union([z.string(), z.number(), z.bigint()]);

const isAnyNumberInRange = (min: bigint, max: bigint) => isAnyNumberLike.pipe(
  z.coerce.bigint()
    .gte(min, `Value must be greater or equal to ${min}`)
    .lte(max, `Value must be fewer or equal to ${max}`)
);

const u32Schema = isAnyNumberInRange(u32_MIN, u32_MAX);

const u128Schema = isAnyNumberInRange(u128_MIN, u128_MAX);

const booleanSchema = z.boolean();

export const BlockchainGenericAccountSchema = z
  .string()
  .length(ss58_LENGTH, { message: `String must be exactly ${ss58_LENGTH} characters long` })
  .refine((v) => isValidSS58(v), { message: 'String is not valid SS58 encoded address' });

export const BlockchainGenericIdSchema = u32Schema;

export const BlockchainGenericBalanceSchema = u128Schema;

export const BlockchainGenericBooleanSchema = booleanSchema;

export const BlockchainGenericTextSchema = z
  .string()
  .max(text_MAX_LENGTH, { message: `String must be fewer or equal ${text_MAX_LENGTH} characters long` });

export const NftWitnessSchema = z.object({
  itemMetadatas: u32Schema,
  itemConfigs: u32Schema,
  attributes: u32Schema,
})