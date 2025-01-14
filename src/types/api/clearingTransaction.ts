import type { CTAtomicAction } from '../../txwrapper';

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
