import { Metadata } from './common';

/**
 * Represents successful transaction submission details.
 */
export interface SuccessInfo {
  /**
   * The transaction hash.
   */
  tx_hash: string;
}

/**
 * Represents the transaction data of an API response.
 */
export interface TxSubmitResponseData {
  /**
   * Indicates if the transaction was accepted.
   */
  acceptance: boolean;
  /**
   * Information about successful transaction submission.
   */
  success_info: SuccessInfo | null;
  /**
   * Information about transaction rejection, if any.
   */
  rejection_info: any | null;
}

/**
 * Represents the API response for /tx/submit
 */
export interface TxSubmitResponse {
  /**
   * Metadata about the request and blockchain head.
   */
  metadata: Metadata;
  /**
   * Transaction data of the response.
   */
  data: TxSubmitResponseData;
}
