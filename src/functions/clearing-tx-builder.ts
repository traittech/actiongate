import { construct } from '@substrate/txwrapper-polkadot';

import { TransactionService } from '../adapter/datagate';
import { loadConfig } from '../functions/config';
import { buildCTAction } from '../txwrapper/calls';

import logger from './logger';
import { signWith } from './signer';
import { generateTxMetadata, buildUnsignedTransaction } from './tx-helper';

import type { ClearingTransactionPayload } from '../types/api/clearingTransaction';
import type { CTAction } from '../types/api/common';
import type { KeyringPair } from '@polkadot/keyring/types';

const config = loadConfig();
const txService = new TransactionService(config.datagate_api.uri);

/**
 * Creates a clearing transaction and broadcasts it.
 *
 * @param pair - The keyring pair to sign with.
 * @param payload - The payload for the clearing transaction.
 * @returns The transaction hash.
 *
 * @throws Will throw an error if there is an issue during transaction creation or broadcasting.
 */
export async function createClearingTransactionAndBroadcast(
  pair: KeyringPair,
  payload: ClearingTransactionPayload
): Promise<string> {
  try {
    // Generate metadata, base transaction info, and options
    logger.debug('Generating transaction metadata...');
    const { registry, baseTxInfo, options } = await generateTxMetadata(pair);

    const unsignedAtomics: CTAction[][] = [];

    // Build unsigned atomics
    logger.info(`Building unsigned atomics with payload ${payload}`);
    for (const atomic of payload.atomics) {
      const unsignedActions: CTAction[] = [];

      for (const action of atomic.actions) {
        const actionTxType: CTAction = buildCTAction(action, baseTxInfo, options);
        unsignedActions.push(actionTxType);
      }

      unsignedAtomics.push(unsignedActions);
    }

    // Build the unsigned clearing transaction
    logger.debug('Building unsigned clearing transaction...');
    const unsigned = buildUnsignedTransaction(
      'appTransactions',
      'submitClearingTransaction',
      [payload.app_agent_id, unsignedAtomics],
      baseTxInfo,
      options
    );

    // Construct the signing payload from an unsigned transaction
    logger.debug('Constructing signing payload...');
    const signingPayload = construct.signingPayload(unsigned, { registry });

    // Sign the payload
    logger.debug('Signing the payload...');
    const signature = signWith(pair, signingPayload, {
      metadataRpc: baseTxInfo.metadataRpc,
      registry,
    });

    // Serialize the signed transaction
    logger.debug('Serializing signed transaction...');
    const tx = construct.signedTx(unsigned, signature, {
      metadataRpc: baseTxInfo.metadataRpc,
      registry,
    });

    // Derive the transaction hash of the signed transaction offline
    const expectedTxHash = construct.txHash(tx);
    logger.info(`Expected Tx Hash: ${expectedTxHash}`);

    // Broadcast the transaction
    logger.info('Broadcasting the transaction...');
    const broadcast = await txService.submitTransaction(tx);

    logger.info('Transaction broadcasted successfully');
    logger.debug(broadcast);

    return expectedTxHash;
  } catch (error) {
    logger.error('Error creating and broadcasting clearing transaction:', error);
    throw new Error(`Failed to create and broadcast clearing transaction: ${error}`);
  }
}
