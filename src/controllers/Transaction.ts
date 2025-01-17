import {
  Body,
  Controller,
  Post,
  Route,
  Response,
  Tags,
} from "tsoa";

import { createSignedTransactionAndBroadcast } from '../functions/builders/tx-builder';
import { createClearingTransactionAndBroadcast } from '../functions/builders/clearing-tx-builder';
import { loadConfig, getPrivateKeyById } from '../functions/config';
import logger from '../functions/logger';
import { getKeyringPairByPrivateKey } from '../functions/keyring';
import { TransactionPayloadSchema, ClearingTransactionPayloadSchema } from '../validator/schemas';

import type { TransactionPayload, TransactionResponse, TransactionErrorResponse, TransactionSuccessResponse } from '../types/api/transaction';
import type { ClearingTransactionPayload } from '../types/api/clearingTransaction';

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
   * @description Helper to return error transaction response
   * @param code HTTP error code
   * @param description Text description of error
   * @param error `Error` runtime object
   * @returns Transaction response {@link TransactionErrorResponse}
   */
  protected onError(code: number, description: string, error?: any): TransactionErrorResponse {
    logger.error(description, error);

    this.setStatus(code);

    const response: TransactionErrorResponse = {
      status: 'failed',
      error_code: code,
      error_description: description,
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
  @Tags('Transactions')
  @Response<TransactionSuccessResponse>(200, 'Success', {
    status: 'TransactionSubmitted',
    tx_hash: '0xe77b9882786d10a803919033a92a4b59dc1671edb86f81203c273a5c30b44ea7'
  })
  @Response<TransactionErrorResponse>(400, 'Bad Request', {
    status: 'failed',
    error_code: 400,
    error_description: 'Missing required fields in payload'
  })
  @Response<TransactionErrorResponse>(404, 'Not Found', {
    status: 'failed',
    error_code: 404,
    error_description: 'Signatory not found'
  })
  @Response<TransactionErrorResponse>(500, 'Internal Server Error', {
    status: 'failed',
    error_code: 500,
    error_description: 'Error creating and broadcasting transaction'
  })
  public async submitTransaction(@Body() payload: TransactionPayload): Promise<TransactionResponse> {
    try {
      logger.info('>> submitTransaction endpoint');

      // Validate required fields (basic validation)
      try {
        TransactionPayloadSchema.parse(payload);
      } catch (error) {
        return this.onError(400, 'Missing or invalid required fields in payload', error);
      }

      // Retrieve the private key for the signatory
      logger.info('Retrieving private key for the signatory...');

      const privateKey = getPrivateKeyById(this.config, payload.signatory);

      if (!privateKey) {
        return this.onError(404, 'Signatory not found');
      }

      const callerKeyPair = getKeyringPairByPrivateKey(privateKey);

      // Create and broadcast the signed transaction
      logger.info('Creating and broadcasting signed transaction...');

      const signedTx = await createSignedTransactionAndBroadcast(callerKeyPair, payload);

      return this.onSuccess(signedTx);
    } catch(error) {
      return this.onError(500, 'Error creating and broadcasting transaction', error);
    }
  }

  /**
   * @summary Submit a clearing transaction
   * @description Submits a clearing transaction and returns the transaction hash.
   * @param payload Payload for submitting a clearing transaction
   * @returns Submitted transaction hash
   */
  @Post('/clearing_transaction')
  @Tags('Transactions')
  @Response<TransactionSuccessResponse>(200, 'Success', {
    status: 'TransactionSubmitted',
    tx_hash: '0xe77b9882786d10a803919033a92a4b59dc1671edb86f81203c273a5c30b44ea7'
  })
  @Response<TransactionErrorResponse>(400, 'Bad Request', {
    status: 'failed',
    error_code: 400,
    error_description: 'Missing required fields in payload'
  })
  @Response<TransactionErrorResponse>(404, 'Not Found', {
    status: 'failed',
    error_code: 404,
    error_description: 'Signatory not found'
  })
  @Response<TransactionErrorResponse>(500, 'Internal Server Error', {
    status: 'failed',
    error_code: 500,
    error_description: 'Error creating and broadcasting clearing transaction'
  })
  public async submitClearingTransaction(@Body() payload: ClearingTransactionPayload): Promise<TransactionResponse> {
    try {
      logger.info('>> submitClearingTransaction endpoint');
  
      // Validate required fields (basic validation)
      try {
        ClearingTransactionPayloadSchema.parse(payload);
      } catch (error) {
        return this.onError(400, 'Missing or invalid required fields in payload', error);
      }

      // Retrieve the private key for the signatory
      logger.debug('Retrieving private key for the signatory...');

      const privateKey = getPrivateKeyById(this.config, payload.signatory);

      if (!privateKey) {
        return this.onError(404, 'Signatory not found');
      }

      const callerKeyPair = getKeyringPairByPrivateKey(privateKey);

      // Create and broadcast the signed clearing transaction
      logger.info('Creating and broadcasting signed clearing transaction...');

      const signedTx = await createClearingTransactionAndBroadcast(callerKeyPair, payload);
  
      return this.onSuccess(signedTx);
    } catch (error) {
      return this.onError(500, 'Error creating and broadcasting clearing transaction', error);
    }
  }
}
