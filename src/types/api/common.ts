import type { CTActionOrigin } from './clearingTransaction';

/**
 * Represents an action in a clearing transaction.
 */
export type CTAction = [
  // The origin of the action
  CTActionOrigin,
  /**
   * The call to be made by the action
   * To take advantage of txwrapper methods, this could be UnsignedTransaction.method.
   */
  { callIndex?: string; args?: string } | string,
];

/**
 * Common blockchain types
 */

export type BlockchainGenericAddress = string;

// Asset Id, Collection Id, Agent Id
export type BlockchainGenericId = number;

export type Balance = number;

export type NftWitness = {
  itemMetadatas: number;
  itemConfigs: number;
  attributes: number;
};