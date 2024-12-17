const CLEARING_TRANSACTION_ENDPOINT = 'localhost:8080/submit/clearing_transaction';

const clearingTransactionHeaders = new Headers({
  'api-key': 'api-key-1',
  'Content-Type': 'application/json',
});

const clearingTransactionPayload = {
  signatory: 'ADMIN_1',
  app_agent_id: 1,
  atomics: [
    {
      actions: [
        {
          origin: {
            appagentaddress: '5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL',
          },
          module_name: 'balances',
          function_name: 'transferKeepAlive',
          arguments: ['5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL', '1'],
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
