import { ApiPromise, WsProvider } from '@polkadot/api';
import axios from 'axios';
import bodyParser from 'body-parser';
import express from 'express';

const wsProvider = new WsProvider('ws://127.0.0.1:9955');

const app = express();
const PORT = process.env.PORT || 7000;

app.use(bodyParser.json());

app.post('/tx/submit', async (req, res) => {
  const { tx_hex } = req.body;
  try {
    const api = await ApiPromise.create({ provider: wsProvider });
    const hash = await api.rpc.author.submitExtrinsic(tx_hex);

    res.json(hash);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      res.status(500).json({ error: `Error submitting transaction: ${error.message}` });
    } else {
      res.status(500).json({ error: 'Unknown error submitting transaction' });
    }
  }
});

app.post('/tx/build_info', async (req, res) => {
  try {
    const { context } = req.body;
    console.log({ context });
    const api = await ApiPromise.create({ provider: wsProvider });
    const { block } = await api.rpc.chain.getBlock();
    const blockHash = await api.rpc.chain.getBlockHash();
    const genesisHash = await api.rpc.chain.getBlockHash(0);
    const metadataRpc = await api.rpc.state.getMetadata();
    const accountInfo = await api.query.system.account(context.tx_origin);
    let chainName = await api.rpc.system.chain();
    let properties = await api.rpc.system.properties();
    const { specVersion, transactionVersion, specName } = await await api.rpc.state.getRuntimeVersion();

    let response = {
      metadata: {
        request_context: {
          block_hash: blockHash,
          block_index: block.header.number,
          block_timestamp: 0,
        },
        blockchain_head: {
          block_hash: blockHash,
          block_index: block.header.number,
          block_timestamp: 0,
        },
      },
      data: {
        tx_origin_next_tx_index: accountInfo.nonce,
        tx_origin_free_native_token_balance: accountInfo.data.free,
        chain_genesis_block_hash: genesisHash,
        chain_name: chainName,
        chain_ss58_format: properties.ss58Format,
        block_hash: blockHash,
        block_index: block.header.number,
        block_timestamp: 0,
        runtime_spec_name: specName,
        runtime_spec_version: specVersion,
        runtime_transaction_version: transactionVersion,
        runtime_metadata_raw: metadataRpc.toHex(),
      },
    };

    res.json(response);
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      console.log(error);
      res.status(500).json({ error: `Error getting RPC info: ${error.message}` });
    } else {
      console.log('Unknown error getting RPC info');
      res.status(500).json({ error: 'Unknown error getting RPC info' });
    }
  }
});

app.get('/tx/examine/clearing_transaction', async (req, res) => {
  try {
    const appAgentId = req.query.paramName;
    const api = await ApiPromise.create({ provider: wsProvider });

    const {
      id,
      address,
      owner,
      admins,
      collectorAddress,
      coldAddresses,
      allowedToSpendFromColdAddress,
      status,
      adminFilters,
    } = await api.query.appAgents(appAgentId);
    const clearingPointsBalance = await api.query.transferResources.clearingPointsBalance(appAgentId);
    const actionPointsBalance = await api.query.transferResources.actionPointsBalance(appAgentId);
    const globalFilters = [
      {
        module_name: 'balances',
        function_name: 'transfer_keep_alive',
      },
      {
        module_name: 'assets',
        function_name: 'create',
      },
    ];

    let response = {
      id,
      address,
      owner,
      admins,
      collectorAddress,
      coldAddresses,
      allowedToSpendFromColdAddress,
      status,
      adminFilters,
      clearingPointsBalance,
      actionPointsBalance,
      globalFilters,
    };

    res.json(response);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      res.status(500).json({ error: `Error getting RPC info: ${error.message}` });
    } else {
      res.status(500).json({ error: 'Unknown error getting RPC info' });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
