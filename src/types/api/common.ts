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

/**
 * A nested array of actions (Vec<Vec<Action>> in rust).
 */
export type CTAtomicActions = CTAction[][];

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
