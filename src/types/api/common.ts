// Common blockchain types

/**
 * A numeric `integer` value represented with `number` type
 * @isInt
 * @minimum 0
 * @maximum 4294967295
 */
export type UINT32 = number;

/**
 * A numeric `integer` value represented with `number` or `string` type
 * @isLong
 * @minimum 0
 * @maximum 18446744073709551615
 */
export type UINT64 = number;

/**
 * A numeric `integer` value represented with `string` type
 *
 * minimum: `0`
 *
 * maximum: `340282366920938463463374607431768211455`
 * @isString
 * @pattern ^\d{1,39}$
 */
export type UINT128 = string;

/**
 * The account address on the blockchain.
 * It is a string of alphanumeric characters, encoded in SS58 format, using `5335` prefix.
 * @isString
 * @minLength 49
 * @maxLength 49
 * @pattern ^tt[1-9a-zA-Z]{47}$
 * @example "ttmojTij44xvCLsMZ1KHEyRfgcc26aJVdiy8xttuyoUQ8Li8s"
 */
export type BlockchainGenericAccount = string;

export type BlockchainGenericAccountList = BlockchainGenericAccount[];

/**
 * A unique identifier (AssetId, CollectionId, AppAgentId).
 * Typically, it is a numeric value.
 */
export type BlockchainGenericId = UINT32;

/**
 * Unique address id on blockchain (TransactionalAddressId)
 * Typically, it is a numeric value.
 */
export type BlockchainGenericAddressId = UINT128;

/**
 * The balance, represented as a numeric value.
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
 * String of unicode chars exactly 10 chars long.
 * Only a subset of chars can be used: https://github.com/traittech/trait-keyless/blob/main/keyless-ts/src/keyless.ts#L39
 * @isString
 * @minLength 10
 * @maxLength 10
 * @pattern ^[0-9a-zA-Z\-#]+$
 */
export type BlockchainAddressName = string;

/**
 * Boolean type for blockchain (bool)
 * @example true
 */
export type BlockchainGenericBoolean = boolean;
