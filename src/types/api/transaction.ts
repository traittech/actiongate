import type { ActionType } from './actions';
import type { TxAction, TransactionArgs } from '../../txwrapper';

export interface ITxAction {
  /**
   * The type of transaction to be performed
   */
  actionType: ActionType;

  /**
   * The arguments for the transaction.
   */
  arguments: TransactionArgs;
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
  tx: TxAction;
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