import { Metadata } from './common';

/**
 * Represents the status data of an API response.
 */
export interface TxStatusResponseData {
  /**
   * The status code of the response.
   */
  status_code: string;
  /**
   * The status text of the response.
   */
  status_text: string;
}

/**
 * Represents the API response of /tx/status
 */
export interface TxStatusResponse {
  /**
   * Metadata about the request and blockchain head.
   */
  metadata: Metadata;
  /**
   * Status data of the response.
   */
  data: TxStatusResponseData;
}
