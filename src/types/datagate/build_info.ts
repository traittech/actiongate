import { Metadata } from './common';

/**
 * Represents the data related to the blockchain state and address.
 */
export interface BuildInfoResponseData {
  /**
   * The origin of the transaction.
   */
  tx_origin: string;
  /**
   * The next transaction index for the address (same as nonce onchain).
   */
  tx_origin_next_tx_index: number;
  /**
   * The free native token balance for the address.
   */
  tx_origin_free_native_token_balance: number;
  /**
   * The genesis block hash of the chain.
   */
  chain_genesis_block_hash: string;
  /**
   * The name of the chain.
   */
  chain_name: string;
  /**
   * The SS58 format of the chain.
   */
  chain_ss58_format: number;
  /**
   * The hash of the current block.
   */
  block_hash: string;
  /**
   * The index of the current block.
   */
  block_index: number;
  /**
   * The timestamp of the current block.
   */
  block_timestamp: number;
  /**
   * The name of the runtime specification.
   */
  runtime_spec_name: string;
  /**
   * The version of the runtime specification.
   */
  runtime_spec_version: number;
  /**
   * The version of the runtime transaction.
   */
  runtime_transaction_version: number;
  /**
   * The raw runtime metadata in hexadecimal format.
   */
  runtime_metadata_raw: `0x${string}`;
}

/**
 * Represents the API response for /tx/build_info.
 */
export interface BuildInfoResponse {
  /**
   * Metadata about the request and blockchain head.
   */
  metadata: Metadata;
  /**
   * Data related to the blockchain state and address.
   */
  data: BuildInfoResponseData;
}
