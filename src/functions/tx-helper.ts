import { deriveAddress, getRegistry, PolkadotSS58Format } from '@substrate/txwrapper-polkadot';

import { TransactionService } from '../adapter/datagate';
import { buildUnsignedTransaction } from '../txwrapper';
import { TxMetadata } from '../types/tx';

import { loadConfig } from './config';
import logger from './logger';

import type { CTAtomicAction } from '../txwrapper';
import type { CTAction } from '../types/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { BaseTxInfo, OptionsWithMeta } from '@substrate/txwrapper-core';

const config = loadConfig();
const txService = new TransactionService(config.datagate_api.uri);

/**
 * Builds clearing transaction action from atomic action.
 * @param action - Atomic action.
 * @param baseTxInfo - Base transaction information.
 * @param options - Additional options including the registry and metadata RPC.
 * @returns An action in clearing transaction.
 */
export function buildCTAction(action: CTAtomicAction, baseTxInfo: BaseTxInfo, options: OptionsWithMeta): CTAction {
  const unsigned = buildUnsignedTransaction(action, baseTxInfo, options);
  const ctAction: CTAction = [action.origin, unsigned.method];

  return ctAction;
}

/**
 * Generates transaction metadata based on the provided keyring pair.
 *
 * @param pair - The keyring pair to derive address and metadata.
 * @returns A promise that resolves to the transaction metadata.
 * @throws Will throw an error if there is an issue fetching build info or creating the registry.
 */
export async function generateTxMetadata(pair: KeyringPair): Promise<TxMetadata> {
  try {
    logger.debug(`Generating transaction metadata for address: ${pair.address}`);
    const buildInfo = await txService.getBuildInfo(pair.address);
    if (!buildInfo || !buildInfo.data) {
      logger.error('Failed to fetch build info or build info data is missing');
      throw new Error('Failed to fetch build info or build info data is missing');
    }

    const registry = getRegistry({
      chainName: buildInfo.data.chain_name,
      specName: 'asset-hub-westend',
      specVersion: buildInfo.data.runtime_spec_version,
      metadataRpc: buildInfo.data.runtime_metadata_raw,
    });

    if (!registry) {
      logger.error('Failed to create registry');
      throw new Error('Failed to create registry');
    }

    const baseTxInfo: BaseTxInfo = {
      address: deriveAddress(pair.publicKey, PolkadotSS58Format.substrate),
      blockHash: buildInfo.data.block_hash,
      blockNumber: registry.createType('BlockNumber', buildInfo.data.block_index).toNumber(),
      eraPeriod: config.tx_build.tx_life_time,
      genesisHash: buildInfo.data.chain_genesis_block_hash,
      metadataRpc: buildInfo.data.runtime_metadata_raw,
      nonce: buildInfo.data.tx_origin_next_tx_index,
      specVersion: buildInfo.data.runtime_spec_version,
      tip: 0,
      transactionVersion: buildInfo.data.runtime_transaction_version,
    };

    const options: OptionsWithMeta = {
      metadataRpc: buildInfo.data.runtime_metadata_raw,
      registry,
    };

    logger.debug('Transaction metadata generated successfully');
    return {
      registry,
      baseTxInfo,
      options,
    };
  } catch (error) {
    logger.error('Error generating transaction metadata:', error);
    throw new Error('Failed to generate transaction metadata');
  }
}
