# ActionGate API Documentation

## Clearing Transactions

Clearing transactions allow you to perform various operations on the blockchain through typed actions. This makes it easier to interact with different pallets without needing to know the internal module and function names.

### Endpoint

```
POST /submit/clearing_transaction
```

### Request Format

```typescript
{
  "signatory": string,
  "appAgentId": number,
  "atomics": [
    {
      "actions": Action[]
    }
  ]
}
```

### Response

```typescript
{
  "status": "TransactionSubmitted",
  "txHash": string
}
```

### Error Handling

The API will return appropriate HTTP status codes:

- 200: Success
- 400: Bad Request (invalid payload)
- 401: Unauthorized
- 500: Internal Server Error

Error responses will include a message explaining what went wrong:

```json
{
  "error": "Unsupported transaction type: unknown_action"
}
```
