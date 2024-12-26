import type { ActionType } from './actions';

/**
 * The origin type for each Action in CT
 */
export type CTActionOrigin =
  | { AppAgentId: any }
  | { AppAgentAddress: string }
  | { TransactionalAddressId: any }
  | { TransactionalAddress: any }
  | { NamedAddress: any }
  | { NamedAddressName: any };

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

export type CTAtomicActionGeneric<ActionTypeName extends ActionType, ActionArgs> = {
  /**
   * The type of action to be performed
   */
  actionType: ActionTypeName;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;

  /**
   * The arguments for the action.
   */
  arguments: ActionArgs;
};

/**
 * Common blockchain types
 */

export type BlockchainGenericAddress = string;

// Asset Id, Collection Id, Agent Id
export type BlockchainGenericId = number;

export type BlockchainGenericBalance = number;

export type NftWitness = {
  itemMetadatas: number;
  itemConfigs: number;
  attributes: number;
};
