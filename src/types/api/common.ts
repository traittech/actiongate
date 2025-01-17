// Common blockchain types

/**
 * Numeric value, presented as plain number
 * @isInt
 * @minimum 0
 * @maximum 4294967295
 */
export type UINT32 = number;

/**
 * Numeric value, presented as plain number or string
 * @inLong
 * @minimum 0
 * @maximum 340282366920938463463374607431768211455
 */
export type UINT128 = number | string;

/**
 * The account address on the blockchain.
 * Typically, it is a string of alphanumeric characters, encoded in SS58 format.
 */
export type BlockchainGenericAccount = string;

/**
 * A unique identifier (Asset, Collection, Agent).
 * Typically, it is a numeric value.
 */
export type BlockchainGenericId = UINT32;

/**
 * The balance, represented as a numeric value (number or string).
 */
export type BlockchainGenericBalance = UINT128;

/**
 * Text or metadata represented by string.
 * Characters limit is defined in `StringLimit` const on blockchain.
 * @isString
 * @maxLength 256
 */
export type BlockchainGenericText = string;

/**
 * Boolean type for blockchain (bool)
 */
export type BlockchainGenericBoolean = boolean;

export type NftWitness = {
  itemMetadatas: UINT32;
  itemConfigs: UINT32;
  attributes: UINT32;
};
