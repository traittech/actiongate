import axios, { type AxiosResponse } from 'axios';

import logger from '../functions/logger';
import { BuildInfoResponse } from '../types/datagate/build_info';
import { TxStatusResponse } from '../types/datagate/tx_status';
import { TxSubmitResponse } from '../types/datagate/tx_submit';

/**
 * Service for handling transactions.
 */
export class TransactionService {
  constructor(private baseURL: string) {}

  /**
   * Submits a new transaction.
   *
   * @param tx - The transaction data.
   * @returns A promise that resolves to the API response.
   */
  async submitTransaction(tx: any): Promise<TxSubmitResponse> {
    try {
      logger.debug('Submitting transaction...');
      const response: AxiosResponse<TxSubmitResponse> = await axios.post(`${this.baseURL}/tx/submit`, { tx_hex: tx });
      logger.debug('Transaction submitted successfully.');
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        logger.error(`Error submitting transaction: ${error.message}`);
        throw new Error(`Error submitting transaction: ${error.message}`);
      } else {
        logger.error('Unknown error submitting transaction');
        throw new Error('Unknown error submitting transaction');
      }
    }
  }

  /**
   * Checks the status of a submitted transaction.
   *
   * @param txHash - The hash of the transaction to check.
   * @returns A promise that resolves to the API response.
   */
  async checkTransactionStatus(txHash: string): Promise<TxStatusResponse> {
    try {
      logger.debug(`Checking transaction status for txHash: ${txHash}...`);
      const response: AxiosResponse<TxStatusResponse> = await axios.post(`${this.baseURL}/tx/status`, {
        tx_hash: txHash,
      });
      logger.debug('Transaction status retrieved successfully.');
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        logger.error(`Error checking transaction status: ${error.message}`);
        throw new Error(`Error checking transaction status: ${error.message}`);
      } else {
        logger.error('Unknown error checking transaction status');
        throw new Error('Unknown error checking transaction status');
      }
    }
  }

  /**
   * Retrieves Build information.
   *
   * @param address - The address for which to retrieve the build information.
   * @returns A promise that resolves to the RPC information.
   */
  async getBuildInfo(address: string): Promise<BuildInfoResponse> {
    try {
      logger.debug(`Retrieving build information for address: ${address}...`);
      const response: AxiosResponse<BuildInfoResponse> = await axios.post(`${this.baseURL}/tx/build_info`, {
        context: { tx_origin: address },
      });
      logger.debug('Build information retrieved successfully.');
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        logger.error(`Error reading getBuildInfo: ${error.message}`);
        throw new Error(`Error reading getBuildInfo: ${error.message}`);
      } else {
        logger.error('Unknown error reading getBuildInfo');
        throw new Error('Unknown error reading getBuildInfo');
      }
    }
  }
}

export default TransactionService;
