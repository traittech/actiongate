#!/bin/bash

# API endpoint
CLEARING_TRANSACTION_ENDPOINT="localhost:8080/submit/clearing_transaction"

# Request headers
REQUEST_HEADERS=(
  --header "api-key: api-key-1"
  --header "Content-Type: application/json"
)

# Request body
# It contains one atomic.
# The atomic contains two actions:
# - mint NFT item to the hot wallet. Address was encoded with traitkeyless lib
# - set NFT metadata
#
# Note
# Origin of actions is the AppAgent adddress.
# It's always the owner & manager of NFT collections.
# You can set it interchangiably:
# - "origin": { "AppAgentId": 1000 }
# - "origin": { "AppAgentAddress": "ttrQFvYHrGzMthGLMaqY5BT84sK7R6bKyAjih9rmNEXm5TqLd" }
CLEARING_TRANSACTION_REQUEST='{
  "signatory": "ADMIN_1",
  "app_agent_id": 1000,
  "atomics": [
    {
      "actions": [
        {
          "actionType": "nftsMintItem",
          "origin": {
            "AppAgentId": 1000
          },
          "arguments": {
            "collection": 1000,
            "item": 1,
            "mintTo": "ttrQFvYHrkh9LtUJSBdr9qNk63Rv8pKWDXtUtqhCA3wTBY8EM"
          }
        },
        {
          "actionType": "nftsSetItemMetadata",
          "origin": {
            "AppAgentAddress": "ttrQFvYHrGzMthGLMaqY5BT84sK7R6bKyAjih9rmNEXm5TqLd"
          },
          "arguments": {
            "collection": 1000,
            "item": 1,
            "data": "https://trait-wallet-demo-account.trait.tech/game-a/nft-collection-a-a/nft-token-a-a-c/nft-token-a-a-c.json"
          }
        }
      ]
    }
  ]
}'

# Execute the curl command
curl --location "$CLEARING_TRANSACTION_ENDPOINT" \
  "${REQUEST_HEADERS[@]}" \
  --data "$CLEARING_TRANSACTION_REQUEST"