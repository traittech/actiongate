import {
  deriveAddress,
  getRegistry,
  methods,
  PolkadotSS58Format,
  BaseTxInfo,
  UnsignedTransaction,
  OptionsWithMeta,
} from '@substrate/txwrapper-polkadot';

import { TransactionService } from '../adapter/datagate';
import { clearingTransaction } from '../txwrapper/appTransactions/clearingTransaction';
import { TxMetadata } from '../types/tx';

import { loadConfig } from './config';
import logger from './logger';

import type { KeyringPair } from '@polkadot/keyring/types';

const config = loadConfig();
const txService = new TransactionService(config.datagate_api.uri);

/**
 * Builds an unsigned transaction based on the provided module and function names and parameters.
 *
 * @param moduleName - The name of the module.
 * @param functionName - The name of the function within the module.
 * @param params - The parameters for the extrinsic function.
 * @param info - Base transaction information.
 * @param options - Additional options with metadata.
 * @returns An unsigned transaction.
 *
 * @throws If the transaction is unsupported.
 */
export function buildUnsignedTransaction(
  moduleName: string,
  functionName: string,
  params: any[],
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  logger.info(`Building unsigned transaction for module: ${moduleName}, function: ${functionName}`);
  if (moduleName === 'balances' && functionName === 'transferKeepAlive') {
    return methods.balances.transferKeepAlive(
      {
        value: params[1],
        dest: { id: params[0] },
      },
      info,
      options
    );
  }

  if (moduleName === 'balances' && functionName === 'transferAllowDeath') {
    return methods.balances.transferAllowDeath(
      {
        value: params[1],
        dest: { id: params[0] },
      },
      info,
      options
    );
  }

  if (moduleName === 'assets' && functionName === 'transfer') {
    return methods.assets.transfer(
      {
        amount: params[2],
        id: params[1],
        target: params[0],
      },
      info,
      options
    );
  }

  if (moduleName === 'appTransactions' && functionName === 'submitClearingTransaction') {
    return clearingTransaction(
      {
        appAgentId: params[0],
        atomics: params[1],
      },
      info,
      options
    );
  }

  logger.error(`Unsupported transaction: module ${moduleName}, function ${functionName}`);
  throw new Error('Unsupported Transaction!');
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
