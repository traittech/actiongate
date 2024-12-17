#!/bin/bash

# API endpoint
CLEARING_TRANSACTION_ENDPOINT="localhost:8080/submit/clearing_transaction"

# Request headers
REQUEST_HEADERS=(
  --header "api-key: api-key-1"
  --header "Content-Type: application/json"
)

# Request body
CLEARING_TRANSACTION_REQUEST='{
  "signatory": "ADMIN_1",
  "app_agent_id": 1,
  "atomics": [
    {
      "actions": [
        {
          "origin": {
            "appagentaddress": "ttrENnXUfsdTDFwweKjK1dSvCXcAtVVQ9xgARy8iBisAFfc5e"
          },
          "module_name": "balances",
          "function_name": "transferKeepAlive",
          "arguments": [
            "ttrENnXUfsdTDFwweKjK1dSvCXcAtVVQ9xgARy8iBisAFfc5e",
            "1"
          ]
        }
      ]
    }
  ]
}'

# Execute the curl command
curl --location "$CLEARING_TRANSACTION_ENDPOINT" \
  "${REQUEST_HEADERS[@]}" \
  --data "$CLEARING_TRANSACTION_REQUEST"