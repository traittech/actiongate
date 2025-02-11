import { Body, Controller, Post, Route, Response, Security, Tags } from 'tsoa';

import { createClearingTransactionAndBroadcast } from '../functions/builders/clearing-tx-builder';
import { createSignedTransactionAndBroadcast } from '../functions/builders/tx-builder';
import { loadConfig, getSignatoryPrivateKey } from '../functions/config';
import { getKeyringPairByPrivateKey } from '../functions/keyring';
import logger from '../functions/logger';

import type { ClearingTransactionPayload } from '../types/api/clearingTransaction';
import type {
  TransactionPayload,
  TransactionResponse,
  TransactionErrorResponse,
  TransactionSuccessResponse,
} from '../types/api/transaction';

/**
 * Controller to handle transaction submission.
 */
@Route('submit')
export class SubmitTransactionsController extends Controller {
  protected readonly config = loadConfig();

  /**
   * @description Helper to return success transaction response
   * @param hash Transaction hash
   * @returns Transaction response {@link TransactionSuccessResponse}
   */
  protected onSuccess(hash: string): TransactionSuccessResponse {
    logger.info('Transaction submitted successfully');

    this.setStatus(200);

    // Create response based on the processing result
    const response: TransactionSuccessResponse = {
      status: 'TransactionSubmitted',
      tx_hash: hash,
    };

    return response;
  }

  /**
   * @summary Submit a transaction
   * @description Submits a transaction and returns the transaction hash.
   * @param payload Payload for submitting a transaction
   * @returns Submitted transaction hash
   */
  @Post('/transaction')
  @Response<TransactionSuccessResponse>(200, 'Success', {
    status: 'TransactionSubmitted',
    tx_hash: '0xe77b9882786d10a803919033a92a4b59dc1671edb86f81203c273a5c30b44ea7',
  })
  @Response<TransactionErrorResponse>(422, 'Unprocessable Entity', {
    status: 'failed',
    error_code: 422,
    error_description: 'Validation Error',
  })
  @Response<TransactionErrorResponse>(500, 'Internal Server Error', {
    status: 'failed',
    error_code: 500,
    error_description: 'Internal Server Error',
  })
  @Security('ApiKeyAuth')
  @Tags('Transactions')
  public async submitTransaction(@Body() payload: TransactionPayload): Promise<TransactionResponse> {
    try {
      logger.info('>> submitTransaction endpoint');

      // Retrieve the private key for the signatory
      logger.info('Retrieving private key for the signatory...');
      const privateKey = getSignatoryPrivateKey(this.config, payload.signatory);

      const callerKeyPair = getKeyringPairByPrivateKey(privateKey);

      // Create and broadcast the signed transaction
      logger.info('Creating and broadcasting signed transaction...');

      const signedTx = await createSignedTransactionAndBroadcast(callerKeyPair, payload);

      return this.onSuccess(signedTx);
    } catch (error) {
      logger.error('Error creating and broadcasting transaction:', error);
      throw error;
    }
  }

  /**
   * @summary Submit a clearing transaction
   * @description Submits a clearing transaction and returns the transaction hash.
   * @param payload Payload for submitting a clearing transaction
   * @returns Submitted transaction hash
   */
  @Post('/clearing_transaction')
  @Response<TransactionSuccessResponse>(200, 'Success', {
    status: 'TransactionSubmitted',
    tx_hash: '0xe77b9882786d10a803919033a92a4b59dc1671edb86f81203c273a5c30b44ea7',
  })
  @Response<TransactionErrorResponse>(422, 'Unprocessable Entity', {
    status: 'failed',
    error_code: 422,
    error_description: 'Validation Error',
  })
  @Response<TransactionErrorResponse>(500, 'Internal Server Error', {
    status: 'failed',
    error_code: 500,
    error_description: 'Internal Server Error',
  })
  @Security('ApiKeyAuth')
  @Tags('Transactions')
  public async submitClearingTransaction(@Body() payload: ClearingTransactionPayload): Promise<TransactionResponse> {
    try {
      logger.info('>> submitClearingTransaction endpoint');

      // Retrieve the private key for the signatory
      logger.info('Retrieving private key for the signatory...');
      const privateKey = getSignatoryPrivateKey(this.config, payload.signatory);

      const callerKeyPair = getKeyringPairByPrivateKey(privateKey);

      // Create and broadcast the signed clearing transaction
      logger.info('Creating and broadcasting signed clearing transaction...');

      const signedTx = await createClearingTransactionAndBroadcast(callerKeyPair, payload);

      return this.onSuccess(signedTx);
    } catch (error) {
      logger.error('Error creating and broadcasting clearing transaction:', error);
      throw error;
    }
  }
}
