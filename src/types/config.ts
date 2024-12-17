/**
 * Represents a private key with an associated ID.
 */
export interface PrivateKey {
  /**
   * The unique identifier for the private key.
   */
  id: string;

  /**
   * The private key value.
   */
  private_key: string;
}

/**
 * Configuration structure for the application.
 */
export interface Config {
  /**
   * Check API keys to authorise requests.
   */
  api_keys_enabled: boolean;

  /**
   * List of API keys to check authentication of requests.
   */
  api_keys: string[];

  /**
   * Enable SSL.
   */
  api_ssl_enabled: boolean;

  /**
   * API configuration settings.
   */
  api_ssl: {
    /**
     * The sslKey path (required if isDev = false).
     */
    sslKeyPath: string;
    /**
     * The sslCertPath path (required if isDev = false).
     */
    sslCertPath: string;
  };

  /**
   * Data gate API configuration settings.
   */
  datagate_api: {
    /**
     * The URI of the data gate API.
     */
    uri: string;
  };

  /**
   * Transaction build configuration settings.
   */
  tx_build: {
    /**
     * The lifetime of a transaction in blocks.
     */
    tx_life_time: number;
  };

  /**
   * Blockchain configuration settings.
   */
  blockchain: {
    /**
     * The SS58 code for the blockchain network (Default for TRAIT network is 5335).
     */
    ss58_code: number;
  };

  /**
   * A list of admin keys used by the application.
   */
  admin_keys: PrivateKey[];

  logs: {
    /**
     * The log level
     */
    logLevel: string;
    /**
     * The log file
     */
    logFile: string;
  };
}
