import * as fs from 'fs';
import * as path from 'path';

import Keyring from '@polkadot/keyring';

import { createClearingTransactionAndBroadcast } from '../functions/clearing-tx-builder';
import logger from '../functions/logger';
import { ActionType } from '../types/api/actions';

import type {
  ClearingTransactionPayload,
  BalancesTransferKeepAliveArguments,
  CTAction,
} from '../types/api/clearingTransaction';

// Mock config
jest.mock('../functions/config', () => ({
  loadConfig: () => ({
    api_keys_enabled: false,
    api_keys: [],
    api_ssl_enabled: false,
    api_ssl: {
      sslKeyPath: '/path/to/ssl/key.pem',
      sslCertPath: '/path/to/ssl/cert.pem',
    },
    datagate_api: {
      uri: 'http://localhost:3000',
    },
    tx_build: {
      tx_life_time: 64,
    },
    blockchain: {
      ss58_code: 5335,
    },
    admin_keys: [
      {
        id: 'ADMIN_1',
        private_key: '0x0000000000000000000000000000000000000000000000000000000000000000',
      },
    ],
    logs: {
      logLevel: 'debug',
      logFile: 'actiongate.log',
    },
  }),
}));

// Mock DataGate
jest.mock('../adapter/datagate', () => ({
  TransactionService: jest.fn().mockImplementation(() => ({
    submitTransaction: jest.fn().mockResolvedValue('mocked-tx-hash'),

    getBuildInfo: jest.fn().mockImplementation(() => {
      const buildInfoPath = path.resolve(__dirname, 'mocked_build_info.json');
      const buildInfo = JSON.parse(fs.readFileSync(buildInfoPath, 'utf-8'));
      logger.info(`resolving getBuildInfo mock with ${buildInfo.data.tx_origin}`);
      return buildInfo;
    }),
  })),
}));

// Tests
describe('Clearing Transaction Builder', () => {
  const aliceMnemonic = 'bottom drive obey lake curtain smoke basket hold race lonely fit walk//Alice';
  const aliceAddress = 'ttmojTij44xvCLsMZ1KHEyRfgcc26aJVdiy8xttuyoUQ8Li8s';

  const keyring = new Keyring({ ss58Format: 5335, type: 'ed25519' });
  keyring.addFromMnemonic(aliceMnemonic);
  const aliceKeyringPair = keyring.getPairs()[0];

  describe('Balances Pallet', () => {
    it('should build balances_transferKeepAlive transaction', async () => {
      const payload: ClearingTransactionPayload = {
        signatory: 'ADMIN_1',
        app_agent_id: 1,
        atomics: [
          {
            actions: [
              {
                actionType: ActionType.BalancesTransferKeepAlive,
                origin: { AppAgentAddress: aliceAddress },
                arguments: {
                  dest: aliceAddress,
                  value: 1000,
                },
              },
            ],
          },
        ],
      };

      const result = await createClearingTransactionAndBroadcast(aliceKeyringPair, payload);
      expect(result).toHaveLength(66);
    });

    it('should build balances_transfer transaction', async () => {
      const payload: ClearingTransactionPayload = {
        signatory: 'ADMIN_1',
        app_agent_id: 1,
        atomics: [
          {
            actions: [
              {
                actionType: ActionType.BalancesTransferAllowDeath,
                origin: { AppAgentAddress: aliceAddress },
                arguments: {
                  dest: aliceAddress,
                  value: 1000,
                },
              },
            ],
          },
        ],
      };

      const result = await createClearingTransactionAndBroadcast(aliceKeyringPair, payload);
      expect(result).toHaveLength(66);
    });
  });

  describe('NFT Pallet', () => {
    it('should build nft_mintCollection transaction', async () => {
      const payload: ClearingTransactionPayload = {
        signatory: 'ADMIN_1',
        app_agent_id: 1,
        atomics: [
          {
            actions: [
              {
                actionType: ActionType.NftsCreateCollection,
                origin: { AppAgentAddress: aliceAddress },
                arguments: {
                  metadata:
                    'https://trait-wallet-demo-account.trait.tech/game-a/nft-collection-a-a/nft-token-a-a-c/nft-token-a-a-c.json',
                  max: 1000,
                  symbol: 'MYNFT',
                },
              },
            ],
          },
        ],
      };

      const result = await createClearingTransactionAndBroadcast(aliceKeyringPair, payload);
      expect(result).toHaveLength(66);
    });

    it('should build nft_mintItem transaction', async () => {
      const payload: ClearingTransactionPayload = {
        signatory: 'ADMIN_1',
        app_agent_id: 1,
        atomics: [
          {
            actions: [
              {
                actionType: ActionType.NftsMintItem,
                origin: { AppAgentAddress: aliceAddress },
                arguments: {
                  collection: 1,
                  item: 1,
                  mintTo: aliceAddress,
                },
              },
            ],
          },
        ],
      };

      const result = await createClearingTransactionAndBroadcast(aliceKeyringPair, payload);
      expect(result).toHaveLength(66);
    });
  });

  describe('Assets Pallet', () => {
    it('should build assets_create transaction', async () => {
      const payload: ClearingTransactionPayload = {
        signatory: 'ADMIN_1',
        app_agent_id: 1,
        atomics: [
          {
            actions: [
              {
                actionType: ActionType.AssetsCreate,
                origin: { AppAgentAddress: aliceAddress },
                arguments: {
                  minBalance: 1,
                },
              },
            ],
          },
        ],
      };

      const result = await createClearingTransactionAndBroadcast(aliceKeyringPair, payload);
      expect(result).toHaveLength(66);
    });

    it('should build assets_transfer transaction', async () => {
      const payload: ClearingTransactionPayload = {
        signatory: 'ADMIN_1',
        app_agent_id: 1,
        atomics: [
          {
            actions: [
              {
                actionType: ActionType.AssetsTransfer,
                origin: { AppAgentAddress: aliceAddress },
                arguments: {
                  id: 1,
                  target: aliceAddress,
                  amount: 1000,
                },
              },
            ],
          },
        ],
      };

      const result = await createClearingTransactionAndBroadcast(aliceKeyringPair, payload);
      expect(result).toHaveLength(66);
    });
  });

  describe('Error Handling', () => {
    it('should throw error for unsupported action type', async () => {
      const payload: ClearingTransactionPayload = {
        signatory: 'ADMIN_1',
        app_agent_id: 1,
        atomics: [
          {
            actions: [
              {
                actionType: 'unknown_action' as ActionType,
                origin: { AppAgentAddress: aliceAddress },
                arguments: {
                  dest: aliceAddress,
                  value: 1000,
                } as BalancesTransferKeepAliveArguments,
              } as CTAction,
            ],
          },
        ],
      };

      await expect(createClearingTransactionAndBroadcast(aliceKeyringPair, payload)).rejects.toThrow(
        'Unsupported action type: unknown_action'
      );
    });
  });
});
