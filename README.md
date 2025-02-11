# ActionGate

The app provides a convenient REST API to submit new transactions to the TRAIT blockchain.

Main features:

- Encapsulation of transaction building. App receives parameters of the transaction to be built and submitted to the blockchain and does all required work. As a result users of the app don't need to dive deep into intricate details of building the transactions.
- Management of private keys. At launch, the application receives private keys through the application config and uses them to sign transactions. You can ensure high security of keys using standard devops security methods.
- API authorisation. Access to the ActionGate API is controlled by the keys passed in the HTTP header.
- SSL enforcement. ActionGate API uses SSL to encrypt communication.

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/traittech/actiongate.git
cd actiongate
yarn install
```

## Configuration

Configuration is loaded from a configuration file. Ensure you have a configuration file named `config.json` in the root of the project.
You can use the `example-config.json` as a template to generate your config file.

Expected format :

```json
{
  "api_keys_enabled": true,
  "api_keys": ["api-key-1", "api-key-2"],
  "api_ssl_enabled": false,
  "api_ssl": {
    "sslKeyPath": "/path/to/ssl/key.pem",
    "sslCertPath": "/path/to/ssl/cert.pem"
  },
  "datagate_api": {
    "uri": "https://api.trait.tech"
  },
  "tx_build": {
    "tx_life_time": 64
  },
  "blockchain": {
    "ss58_code": 5335
  },
  "admin_keys": [
    {
      "id": "ADMIN_1",
      "private_key": "0x0000000000000000000000000000000000000000000000000000000000000000"
    }
  ],
  "logs": {
    "logLevel": "debug",
    "logFile": "actiongate.log"
  }
}
```

Config file terms explained:

- `api_keys_enabled`: if `true` check API key provided in HTTP header to authorise ActionGate API requests.
- `api_keys`: The API keys used for authorise requests to ActionGate API.
- `api_ssl_enabled`: if `true` enforce using of SSL for API requests.
- `api_ssl`: SSL certificates
  - `sslKeyPath`: The file path to the SSL key file. This key is used for HTTPS encryption.
  - `sslCertPath`: The file path to the SSL certificate file. This certificate is used alongside the SSL key to establish secure HTTPS connections.
- `datagate_api`: The base URI of the DataGate API. This is the endpoint where your service will send transaction-related requests, such as submitting transactions or fetching build info.
- `tx_life_time`: The lifetime of a transaction, measured in blocks. This defines how long a transaction remains valid in the blockchain before it is considered expired. The default is 64
- `ss58_code`: The SS58 address format code for the blockchain network. SS58 is a format for encoding blockchain addresses in a way that is recognizable by the network. The default is 5335 for TRAIT chain.
- `admin_keys`: List of accounts that can sign transactions. Typically admins of AppAgents.
  - `id`: A unique identifier for a private key. This identifier is used to specify which private key shall sign a transaction submitted via ActionGate API.
  - `private_key`: The private key associated with the specified ID. This private key is used for signing transactions.
- `logs`: configuration of logging

## API Endpoints

Detailed API documentation is available in [API Documentation](api_docs/API.md)

### Submit Transaction

```
URL: /submit/transaction
Method: POST
Middleware: enforceHttps (in production)
Description: Submits a transaction.
Controller: SubmitTransactionsController.submitTransaction
```

### Submit Clearing Transaction

```
URL: /submit/clearing_transaction
Method: POST
Middleware: enforceHttps (in production)
Description: Submits a clearing transaction using typed actions.
Controller: SubmitTransactionsController.submitClearingTransaction
```

## Running the Application

```bash
yarn build
yarn start
```

You can also use `yarn run dev` to automatically reload files during local development.

### Using mock datagate

A mock datagate has been provided for local testing, to run mock datagate, you can do the following

1. Ensure you are running a trait parachain node
2. Update the node endpoint in /mocks/data/app.js
3. `cd mocks/datagate`
4. `npm i` && `node app.js`

This will start a local mock of data gate at port 7000

## Logs

The app is configured to work with winston logger, on every run the logs are output to both console and actiongate.log file
