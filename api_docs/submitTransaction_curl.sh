#!/bin/bash

# API endpoint
TRANSACTION_ENDPOINT="localhost:8080/submit/transaction"

# Request headers
REQUEST_HEADERS=(
  --header "api-key: api-key-1"
  --header "Content-Type: application/json"
)

# Request body
TRANSACTION_REQUEST='{
  "signatory": "ADMIN_1",
  "tx": {
    "actionType": "assets.transfer",
    "arguments": {
      "id": 200,
      "target": "ttrENnXUfsdTDFwweKjK1dSvCXcAtVVQ9xgARy8iBisAFfc5e",
      "amount": "200"
    }
  }
}'

# Execute the curl command
curl --location "$TRANSACTION_ENDPOINT" \
  "${REQUEST_HEADERS[@]}" \
  --data "$TRANSACTION_REQUEST"