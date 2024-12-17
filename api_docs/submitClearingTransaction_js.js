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
const clearingTransactionPayload = {
  signatory: 'ADMIN_1',
  app_agent_id: 1,
  atomics: [
    {
      actions: [
        {
          actionType: 'nftsMintItem',
          origin: {
            AppAgentId: 1000,
          },
          arguments: {
            collection: 1000,
            item: 1,
            mintTo: 'ttrQFvYHrkh9LtUJSBdr9qNk63Rv8pKWDXtUtqhCA3wTBY8EM',
          },
        },
        {
          actionType: 'nftsSetItemMetadata',
          origin: {
            AppAgentAddress: 'ttrQFvYHrGzMthGLMaqY5BT84sK7R6bKyAjih9rmNEXm5TqLd',
          },
          arguments: {
            collection: 1000,
            item: 1,
            data: 'https://trait-wallet-demo-account.trait.tech/game-a/nft-collection-a-a/nft-token-a-a-c/nft-token-a-a-c.json',
          },
        },
      ],
    },
  ],
};

const clearingTransactionRequest = {
  method: 'POST',
  headers: clearingTransactionHeaders,
  body: JSON.stringify(clearingTransactionPayload),
  redirect: 'follow',
};

async function submitClearingTransaction() {
  try {
    const response = await fetch(CLEARING_TRANSACTION_ENDPOINT, clearingTransactionRequest);
    const result = await response.json();
    console.log('Clearing transaction result:', result);
    return result;
  } catch (error) {
    console.error('Error submitting clearing transaction:', error);
    throw error;
  }
}

// Execute the transaction
submitClearingTransaction();
