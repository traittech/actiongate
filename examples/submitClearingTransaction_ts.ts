import {
  ClearingTransactionPayload,
  ClearingTransactionResponse,
  CTActionOrigin,
  BalancesTransferKeepAliveArguments,
  CTAction,
  CTAtomic,
  ActionType,
} from '../src/types/api/clearingTransaction';

const CLEARING_TRANSACTION_ENDPOINT = 'localhost:8080/submit/clearing_transaction';

const clearingTransactionHeaders = new Headers({
  'api-key': 'api-key-1',
  'Content-Type': 'application/json',
});

// Define the action origin with proper typing
const actionOrigin: CTActionOrigin = {
  AppAgentAddress: 1,
};

// Define the transfer arguments with proper typing
const transferArgs: BalancesTransferKeepAliveArguments = {
  dest: 'ttrENnXUfsdTDFwweKjK1dSvCXcAtVVQ9xgARy8iBisAFfc5e',
  value: 1,
};

// Define the action with proper typing
const action: CTAction = {
  action: ActionType.BalancesTransferKeepAlive,
  origin: actionOrigin,
  arguments: transferArgs,
};

// Define the atomic operation with proper typing
const atomic: Atomic = {
  actions: [action],
};

// Define the clearing transaction payload with proper typing
const clearingTransactionPayload: ClearingTransactionPayload = {
  signatory: 'ADMIN_1',
  app_agent_id: 1,
  atomics: [atomic],
};

const clearingTransactionRequest = {
  method: 'POST',
  headers: clearingTransactionHeaders,
  body: JSON.stringify(clearingTransactionPayload),
  redirect: 'follow' as const,
};

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

// Execute the clearing transaction
submitClearingTransaction();
