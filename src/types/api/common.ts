/**
 * Common blockchain types
 */

export type BlockchainAddress = string;

export type Balance = number;

export type CollectionId = number;

export type ItemId = number;

export type AssetId = number;

export type u32 = number;

export type NftWitness = {
  itemMetadatas: number;
  itemConfigs: number;
  attributes: number;
};