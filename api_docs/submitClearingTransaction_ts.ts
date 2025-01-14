import { ActionType } from '../src/types/api/actions';

import type { ClearingTransactionPayload, ClearingTransactionResponse, CTAtomic } from '../src/types/api/clearingTransaction';
import type { CTActionOrigin } from '../src/types/api/common';
import type { CTAtomicAction, NftsMintItemArgs, NftsSetItemMetadataArgs } from '../src/txwrapper';

// API endpoint
const CLEARING_TRANSACTION_ENDPOINT = 'localhost:8080/submit/clearing_transaction';

// Request headers
const clearingTransactionHeaders = new Headers({
  'api-key': 'api-key-1',
  'Content-Type': 'application/json',
});

// Request body
// It contains one atomic.
// The atomic contains two actions:
// - mint NFT item to the hot wallet. Address was encoded with traitkeyless lib
// - set NFT metadata
//
// Note
// Origin of actions is the AppAgent adddress.
// It's always the owner & manager of NFT collections.
// You can set it interchangiably:
// - "origin": { "AppAgentId": 1000 }
// - "origin": { "AppAgentAddress": "ttrQFvYHrGzMthGLMaqY5BT84sK7R6bKyAjih9rmNEXm5TqLd" }

// Define the first action
const actionOneOrigin: CTActionOrigin = {
  AppAgentId: 1000,
};
const actionOneArgs: NftsMintItemArgs = {
  collection: 1000,
  item: 1,
  mintTo: 'ttrQFvYHrkh9LtUJSBdr9qNk63Rv8pKWDXtUtqhCA3wTBY8EM',
};
const actionOne: CTAtomicAction = {
  actionType: ActionType.NftsMintItem,
  origin: actionOneOrigin,
  arguments: actionOneArgs,
};

// Define the second action
const actionTwoOrigin: CTActionOrigin = {
  AppAgentAddress: 'ttrQFvYHrGzMthGLMaqY5BT84sK7R6bKyAjih9rmNEXm5TqLd',
};
const actionTwoArgs: NftsSetItemMetadataArgs = {
  collection: 1000,
  item: 1,
  data: 'https://trait-wallet-demo-account.trait.tech/game-a/nft-collection-a-a/nft-token-a-a-c/nft-token-a-a-c.json',
};
const actionTwo: CTAtomicAction = {
  actionType: ActionType.NftsSetItemMetadata,
  origin: actionTwoOrigin,
  arguments: actionTwoArgs,
};

// Define the atomic operation
const atomic: CTAtomic = {
  actions: [actionOne, actionTwo],
};

// Define the clearing transaction payload
const clearingTransactionPayload: ClearingTransactionPayload = {
  signatory: 'ADMIN_1',
  app_agent_id: 1000,
  atomics: [atomic],
};

// Define the request
const clearingTransactionRequest = {
  method: 'POST',
  headers: clearingTransactionHeaders,
  body: JSON.stringify(clearingTransactionPayload),
  redirect: 'follow' as const,
};

// Execute the clearing transaction
async function submitClearingTransaction(): Promise<ClearingTransactionResponse> {
  try {
    const response = await fetch(CLEARING_TRANSACTION_ENDPOINT, clearingTransactionRequest);
    const result = (await response.json()) as ClearingTransactionResponse;
    console.log('Clearing transaction result:', result);
    return result;
  } catch (error) {
    console.error('Error submitting clearing transaction:', error);
    throw error;
  }
}
submitClearingTransaction();
