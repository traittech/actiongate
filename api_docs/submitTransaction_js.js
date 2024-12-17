const TRANSACTION_ENDPOINT = 'localhost:8080/submit/transaction';

const transactionHeaders = new Headers({
  'api-key': 'api-key-1',
  'Content-Type': 'application/json',
});

const transactionPayload = {
  signatory: 'ADMIN_1',
  module_name: 'assets',
  function_name: 'transfer',
  arguments: ['5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty', '200', '200'],
  origin: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
};

const transactionRequest = {
  method: 'POST',
  headers: transactionHeaders,
  body: JSON.stringify(transactionPayload),
  redirect: 'follow',
};

async function submitTransaction() {
  try {
    const response = await fetch(TRANSACTION_ENDPOINT, transactionRequest);
    const result = await response.json();
    console.log('Transaction result:', result);
    return result;
  } catch (error) {
    console.error('Error submitting transaction:', error);
    throw error;
  }
}

// Execute the transaction
submitTransaction();
