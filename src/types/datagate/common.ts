/**
 * Represents the context of a request, including block details.
 */
export interface RequestContext {
  /**
   * The hash of the block associated with the request.
   */
  block_hash: string;
  /**
   * The index of the block associated with the request.
   */
  block_index: number;
  /**
   * The timestamp of the block associated with the request.
   */
  block_timestamp: number;
}

/**
 * Represents the current state of the blockchain head, including block details.
 */
export interface BlockchainHead {
  /**
   * The hash of the current blockchain head block.
   */
  block_hash: string;
  /**
   * The index of the current blockchain head block.
   */
  block_index: number;
  /**
   * The timestamp of the current blockchain head block.
   */
  block_timestamp: number;
}

/**
 * Represents metadata about the request and the blockchain head.
 */
export interface Metadata {
  /**
   * Context of the request, including block details.
   */
  request_context: RequestContext;
  /**
   * Current state of the blockchain head, including block details.
   */
  blockchain_head: BlockchainHead;
}
