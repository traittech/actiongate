import { Keyring } from '@polkadot/api';
import { Request, Response, NextFunction } from 'express';

import { createClearingTransactionAndBroadcast } from '../functions/clearing-tx-builder';
import { loadConfig, getPrivateKeyById } from '../functions/config';
import logger from '../functions/logger';
import { ClearingTransactionPayload, ClearingTransactionResponse } from '../types/api/clearingTransaction';
import { ClearingTransactionPayloadSchema } from '../validator/schemas/clearingTransaction';

const config = loadConfig();
const keyring = new Keyring({ type: 'sr25519' });

/**
 * Controller to handle the submission of a clearing transaction.
 *
 * @param req - The Express Request object.
 * @param res - The Express Response object.
 * @param next - The Express NextFunction callback to pass control to the next middleware.
 */
const submitClearingTransaction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // Extract and validate the payload
    logger.info('>> submitClearingTransaction endpoint');
    const payload: ClearingTransactionPayload = req.body;

    // Validate required fields (basic validation)
    try {
      ClearingTransactionPayloadSchema.parse(payload);
    } catch (error) {
      logger.error('Missing or invalid required fields in payload', error);
      res.status(400).json({
        status: 'failed',
        error_code: 400,
        error_description: 'Missing or invalid required fields in payload',
      });
      return;
    }

    // Retrieve the private key for the signatory
    logger.debug('Retrieving private key for the signatory...');
    const privateKey = getPrivateKeyById(config, payload.signatory);
    if (!privateKey) {
      logger.error('Signatory not found');
      res.status(404).json({
        status: 'failed',
        error_code: 404,
        error_description: 'Signatory not found',
      });
      return;
    }

    // Add the key pair to the keyring
    const callerKeyPair = keyring.addFromUri(privateKey);
    keyring.setSS58Format(config.blockchain.ss58_code);
    logger.info(`Calling Account: ${callerKeyPair.address}`);

    // Create and broadcast the signed clearing transaction
    logger.info('Creating and broadcasting signed clearing transaction...');
    const signedTx = await createClearingTransactionAndBroadcast(callerKeyPair, payload);

    // Create response based on the processing result
    const response: ClearingTransactionResponse = {
      status: 'TransactionSubmitted',
      tx_hash: signedTx,
    };

    // Send the response
    logger.info('Transaction submitted successfully');
    res.json(response);
  } catch (error) {
    logger.error('Error creating and broadcasting clearing transaction:', error);
    // Handle unexpected errors
    res.status(500).json({
      status: 'failed',
      error_code: 500,
      error_description: 'Internal server error',
    });
    next(error);
  }
};

export default { submitClearingTransaction };
