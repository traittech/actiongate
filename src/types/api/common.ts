// Common blockchain types

/**
 * Number presented as plain number or string
 */
export type Numberish = number | string;

/**
 * Blockchain account address, represented by SS58 string
 */
export type BlockchainGenericAccount = string;

/**
 * Asset Id, Collection Id, Agent Id (u32)
 */
export type BlockchainGenericId = Numberish;

/**
 * Amount, Balance (u128)
 */
export type BlockchainGenericBalance = Numberish;

/**
 * Text or metadata represented by string (Bytes). Limit is defined in `StringLimit` const.
 */
export type BlockchainGenericText = string;

/**
 * Boolean type for blockchain (bool)
 */
export type BlockchainGenericBoolean = boolean;

export type NftWitness = {
  itemMetadatas: Numberish;
  itemConfigs: Numberish;
  attributes: Numberish;
};
