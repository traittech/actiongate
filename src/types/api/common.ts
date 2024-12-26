/**
 * Common blockchain types
 */

export type BlockchainAddress = string;

export type Balance = number;

export type AssetId = number;

export type NftWitness = {
  itemMetadatas: number;
  itemConfigs: number;
  attributes: number;
};