import type { ActionType } from './actions';
import type { CTAtomicAction } from '../../txwrapper';

/**
 * The origin type for each Action in CT
 */
export type CTActionOrigin =
  | {
      /** The ID of the application agent. */
      AppAgentId: any
    }
  | {
      /** The address of the application agent. */
      AppAgentAddress: string
    }
  | {
      /** The ID of the transactional address. */
      TransactionalAddressId: any
    }
  | {
      /** The transactional address. */
      TransactionalAddress: any
    }
  | {
      /** The named address. */
      NamedAddress: any
    }
  | {
      /** The name of the named address. */
      NamedAddressName: any
    };

/**
 * Action call presented as object, or string encoded method (with arguments) in hex.
 */
export type CTActionCall = { callIndex?: string; args?: string } | string;

/**
 * Represents an action in a clearing transaction.
 */
export type CTAction = Array<CTActionOrigin | CTActionCall>;

// /**
//  * Represents an action in a clearing transaction.
//  */
// export type CTAction = [
//   // The origin of the action
//   CTActionOrigin,
//   /**
//    * The call to be made by the action
//    * To take advantage of txwrapper methods, this could be UnsignedTransaction.method.
//    */
//   CTActionCall,
// ];

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
  app_agent_id: number;

  /**
   * A list of atomic operations included in the transaction.
   */
  atomics: CTAtomic[];
}

/**
 * Response from a clearing transaction request.
 */
export interface ClearingTransactionResponse {
  /**
   * The status of the transaction.
   */
  status: string;

  /**
   * The transaction hash, if available.
   */
  tx_hash?: string;

  /**
   * An error code, if the transaction failed.
   */
  error_code?: number;

  /**
   * A description of the error, if the transaction failed.
   */
  error_description?: string;
}

/**
 * Information about extrinsics allowed
 */
export interface ExtrinsicInfo {
  /**
   * The name of the module where the action is defined.
   */
  module_name: string;

  /**
   * The name of the function to be executed.
   */
  function_name: string;
}

/**
 * Interface representing the information about an app agent.
 */
export interface AppAgentInfo {
  /**
   * Unique identifier for the app agent.
   */
  id: number;

  /**
   * Address associated with the app agent.
   */
  address: string;

  /**
   * Address of the owner of the app agent.
   */
  owner: string;

  /**
   * List of addresses with admin rights for the app agent.
   */
  admins: string[];

  /**
   * Address where the app agent collects funds.
   */
  collectorAddress: string;

  /**
   * List of cold storage addresses associated with the app agent.
   */
  coldAddresses: string[];

  /**
   * List of addresses allowed to spend from the cold storage addresses.
   */
  allowedToSpendFromColdAddress: string[];

  /**
   * Current status of the app agent. Can be 'Active' or 'Inactive'.
   */
  status: 'Active' | 'Inactive';

  /**
   * Filters applied to the admin functions of the app agent.
   * Represented as key-value pairs where the key is the filter name and the value is the filter criteria.
   */
  adminFilters: Record<string, ExtrinsicInfo>;

  /**
   * Filters applied to the global functions of the app agent.
   * Represented as key-value pairs where the key is the filter name and the value is the filter criteria.
   */
  globalFilters: ExtrinsicInfo[];

  /**
   * Clearing points balance for the app agent.
   */
  clearingPointsBalance: string;

  /**
   * Action points balance for the app agent.
   */
  actionPointsBalance: string;
}
