import type { TxType } from './actions';
import type { Tx, TxArgs } from '../../txwrapper';

export interface ITx {
  /**
   * The type of transaction to be performed
   */
  actionType: TxType;

  /**
   * The arguments for the transaction.
   */
  arguments: TxArgs;
}

/**
 * Payload for a transaction.
 */
export interface TransactionPayload {
  /**
   * The signatory responsible for the transaction.
   */
  signatory: string;

  /**
   * Transaction data
   */
  tx: Tx;
}

export interface BaseTransactionResponse {
  /**
   * The status of the transaction.
   */
  status: string;
}

export interface TransactionErrorResponse extends BaseTransactionResponse {
  /**
   * An error code, if the transaction failed.
   */
  error_code?: number;

  /**
   * A description of the error, if the transaction failed.
   */
  error_description?: string;

  /**
   * A details of the error
   */
  error_details?: any;
}

export interface TransactionSuccessResponse extends BaseTransactionResponse {
  /**
   * The transaction hash, if available.
   */
  tx_hash: string;
}

/**
 * Response from a transaction request.
 */
export type TransactionResponse = TransactionSuccessResponse | TransactionErrorResponse;
