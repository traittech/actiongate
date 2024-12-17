/**
 * Payload for a transaction.
 */
export interface TransactionPayload {
  /**
   * The signatory responsible for the transaction.
   */
  signatory: string;

  /**
   * The name of the module where the function to be executed is defined.
   */
  module_name: string;

  /**
   * The name of the function to be executed.
   */
  function_name: string;

  /**
   * The arguments to be passed to the function.
   */
  arguments: any[];
}

/**
 * Response from a transaction request.
 */
export interface TransactionResponse {
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
