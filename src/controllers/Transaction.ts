import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";

import { createSignedTransactionAndBroadcast } from '../functions/builders/tx-builder';
import { createClearingTransactionAndBroadcast } from '../functions/builders/clearing-tx-builder';
import { loadConfig, getPrivateKeyById } from '../functions/config';
import logger from '../functions/logger';
import { getKeyringPairByPrivateKey } from '../functions/keyring';
import { TransactionPayloadSchema, ClearingTransactionPayloadSchema } from '../validator/schemas';

import type { TransactionPayload, TransactionResponse } from '../types/api/transaction';
import type { ClearingTransactionPayload } from '../types/api/clearingTransaction';

const config = loadConfig();

/**
 * Controller to handle transaction submission.
 */
@Route('submit')
export class SubmitTransactionsController extends Controller {
  protected readonly config = loadConfig();

  protected onSuccess(signedTxHash: string): TransactionResponse {
    logger.info('Transaction submitted successfully');

    this.setStatus(200);

    // Create response based on the processing result
    const response: TransactionResponse = {
      status: 'TransactionSubmitted',
      tx_hash: signedTxHash,
    };

    return response;
  }

  protected onError(code: number, description: string, error?: any): TransactionResponse {
    logger.error(description, error);

    this.setStatus(code);

    const response: TransactionResponse = {
      status: 'failed',
      error_code: code,
      error_description: description,
    };

    return response;
  }

  @Post('/transaction')
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

      const privateKey = getPrivateKeyById(config, payload.signatory);

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

  @Post('/clearing_transaction')
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

      const privateKey = getPrivateKeyById(config, payload.signatory);

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
