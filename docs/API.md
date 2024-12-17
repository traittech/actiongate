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
  "app_agent_id": number,
  "atomics": [
    {
      "actions": Action[]
    }
  ]
}
```

### Supported Actions

#### Balances Pallet

1. Transfer Keep Alive

```json
{
  "action": "balances_transferKeepAlive",
  "origin": {
    "appagentaddress": "5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL"
  },
  "arguments": {
    "dest": "5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL",
    "value": 1000
  }
}
```

2. Transfer

```json
{
  "action": "balances_transfer",
  "origin": {
    "appagentaddress": "5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL"
  },
  "arguments": {
    "dest": "5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL",
    "value": 1000
  }
}
```

3. Transfer All

```json
{
  "action": "balances_transferAll",
  "origin": {
    "appagentaddress": "5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL"
  },
  "arguments": {
    "dest": "5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL",
    "keepAlive": true
  }
}
```

#### NFT Pallet

1. Mint Collection

```json
{
  "action": "nft_mintCollection",
  "origin": {
    "appagentaddress": "5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL"
  },
  "arguments": {
    "metadata": "ipfs://QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG",
    "max": 1000,
    "symbol": "MYNFT"
  }
}
```

2. Mint Item

```json
{
  "action": "nft_mintItem",
  "origin": {
    "appagentaddress": "5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL"
  },
  "arguments": {
    "collection": 1,
    "metadata": "ipfs://QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG",
    "quantity": 1,
    "owner": "5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL"
  }
}
```

3. Transfer NFT

```json
{
  "action": "nft_transfer",
  "origin": {
    "appagentaddress": "5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL"
  },
  "arguments": {
    "collection": 1,
    "item": 1,
    "dest": "5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL"
  }
}
```

#### Assets Pallet

1. Create Asset

```json
{
  "action": "assets_create",
  "origin": {
    "appagentaddress": "5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL"
  },
  "arguments": {
    "id": 1,
    "admin": "5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL",
    "minBalance": 1
  }
}
```

2. Transfer Asset

```json
{
  "action": "assets_transfer",
  "origin": {
    "appagentaddress": "5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL"
  },
  "arguments": {
    "id": 1,
    "target": "5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL",
    "amount": 1000
  }
}
```

3. Set Asset Metadata

```json
{
  "action": "assets_setMetadata",
  "origin": {
    "appagentaddress": "5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL"
  },
  "arguments": {
    "id": 1,
    "name": "My Asset",
    "symbol": "ASSET",
    "decimals": 18
  }
}
```

### Response

```typescript
{
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
  "error": "Unsupported action type: unknown_action"
}
```
