import type { ActionType } from './actions';
import type {
  BlockchainGenericId,
  BlockchainGenericAddressId,
  BlockchainGenericAccount,
  BlockchainAddressName,
} from './common';
import type { CTAtomicAction, ActionArgs } from '../../txwrapper';

/**
 * The origin type for each Action in CT
 */
export type CTActionOrigin =
  | {
      /** The ID of the application agent. */
      AppAgentId: BlockchainGenericId;
    }
  | {
      /** The address of the application agent. */
      AppAgentAddress: BlockchainGenericAccount;
    }
  | {
      /** The ID of the transactional address. */
      TransactionalAddressId: BlockchainGenericAddressId;
    }
  | {
      /** The transactional address. */
      TransactionalAddress: BlockchainGenericAccount;
    }
  | {
      /** The named address. */
      NamedAddress: BlockchainGenericAccount;
    }
  | {
      /** The name of the named address. */
      NamedAddressName: BlockchainAddressName;
    };

/**
 * Action call presented as object, or string encoded method (with arguments) in hex.
 */
export type CTActionCall = { callIndex?: string; args?: string } | string;

/**
 * Represents an action in a clearing transaction.
 *
 * Tuple `[CTActionOrigin, CTActionCall]`
 *
 * [WARNING]: `openapi v3` doesn't support `tuple` type.
 */
export type CTAction = Array<CTActionOrigin | CTActionCall>;

/**
 * A nested array of actions (Vec<Vec<Action>> in rust).
 */
export type CTAtomicActions = CTAction[][];

export interface ICTAtomicAction {
  /**
   * The type of transaction to be performed
   */
  actionType: ActionType;

  /**
   * The arguments for the transaction.
   */
  arguments: ActionArgs;

  /**
   * The origin responsible for the transaction.
   */
  origin: CTActionOrigin;
}

/**
 * Represents an atomic operation.
 */
export interface CTAtomic {
  /**
   * A list of actions that make up the atomic operation.
   */
  actions: CTAtomicAction[];
}

/**
 * Payload for a clearing transaction.
 */
export interface ClearingTransactionPayload {
  /**
   * The signatory responsible for the transaction.
   */
  signatory: string;

  /**
   * The ID of the application agent initiating the transaction.
   */
  appAgentId: BlockchainGenericId;

  /**
   * A list of atomic operations included in the transaction.
   */
  atomics: CTAtomic[];
}
