import { Keyring } from '@polkadot/api';
import { Request, Response, NextFunction } from 'express';

import { createSignedTransactionAndBroadcast } from '../functions/builders/tx-builder';
import { loadConfig, getPrivateKeyById } from '../functions/config';
import logger from '../functions/logger';
import { TransactionPayloadSchema } from '../validator/schemas';

import type { TransactionPayload, TransactionResponse } from '../types/api/transaction';

const config = loadConfig();
const keyring = new Keyring({ type: 'sr25519' });

/**
 * Controller to handle transaction submission.
 *
 * @param req - The Express Request object.
 * @param res - The Express Response object.
 * @param next - The Express NextFunction callback to pass control to the next middleware.
 */
const submitTransaction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // Extract and validate the payload
    logger.info('>> submitTransaction endpoint ');
    const payload: TransactionPayload = req.body;

    // Validate required fields (basic validation)
    try {
      TransactionPayloadSchema.parse(payload);
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
    logger.info('Retrieving private key for the signatory...');
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

    // Create and broadcast the signed transaction
    logger.info('Creating and broadcasting signed transaction...');
    const signedTx = await createSignedTransactionAndBroadcast(
      callerKeyPair,
      payload.module_name,
      payload.function_name,
      payload.arguments
    );

    // Create response based on the processing result
    const response: TransactionResponse = {
      status: 'TransactionSubmitted',
      tx_hash: signedTx,
    };

    // Send the response
    logger.info('Transaction submitted successfully');
    res.json(response);
  } catch (error) {
    logger.error('Error creating and broadcasting transaction:', error);
    // Handle unexpected errors
    res.status(500).json({
      status: 'failed',
      error_code: 500,
      error_description: 'Internal server error',
    });
    next(error);
  }
};

export default { submitTransaction };
