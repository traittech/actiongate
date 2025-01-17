/**
 * The smallest value that can be represented by `u32` integer type.
 */
export const u32_MIN = BigInt(0);

/**
 * The largest value that can be represented by `u32` integer type (2^32 − 1).
 */
export const u32_MAX = BigInt('4294967295');

/**
 * The smallest value that can be represented by `u128` integer type.
 */
export const u128_MIN = BigInt(0);

/**
 * The largest value that can be represented by `u128` integer type (2^128 − 1).
 */
export const u128_MAX = BigInt('340282366920938463463374607431768211455');

/**
 * SS58 address has a 49 characters length
 */
export const ss58_LENGTH = 49;

/**
 * Text max length is defined by `StringLimit` in blockchain
 */
export const text_MAX_LENGTH = 256;
