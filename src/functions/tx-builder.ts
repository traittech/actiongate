import { construct } from '@substrate/txwrapper-polkadot';

import { TransactionService } from '../adapter/datagate';
import { loadConfig } from '../functions/config';

import logger from './logger';
import { signWith } from './signer';
import { generateTxMetadata, buildUnsignedTransaction } from './tx-helper';

import type { KeyringPair } from '@polkadot/keyring/types';

const config = loadConfig();
const txService = new TransactionService(config.datagate_api.uri);

/**
 * Creates a signed transaction and broadcasts it.
 *
 * @param pair - The keyring pair to sign with.
 * @param moduleName - The module name of the extrinsic.
 * @param functionName - The function name of the extrinsic.
 * @param params - The parameters for the extrinsic function.
 * @returns The transaction hash.
 *
 * @throws Will throw an error if there is an issue during transaction creation or broadcasting.
 */
export async function createSignedTransactionAndBroadcast(
  pair: KeyringPair,
  moduleName: string,
  functionName: string,
  params: any[]
): Promise<string> {
  try {
    // Generate metadata, base transaction info, and options
    logger.debug('Generating transaction metadata...');
    const { registry, baseTxInfo, options } = await generateTxMetadata(pair);

    // Build the unsigned transaction
    logger.info(
      `Building unsigned transaction for module: ${moduleName}, function: ${functionName} with params ${params}`
    );
    const unsigned = buildUnsignedTransaction(moduleName, functionName, params, baseTxInfo, options);

    // Construct the signing payload from the unsigned transaction
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
    logger.error('Error creating and broadcasting signed transaction:', error);
    throw new Error('Failed to create and broadcast signed transaction');
  }
}
