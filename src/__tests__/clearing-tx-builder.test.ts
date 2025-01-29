import * as fs from 'fs';
import * as path from 'path';

import Keyring from '@polkadot/keyring';

import { createClearingTransactionAndBroadcast } from '../functions/builders/clearing-tx-builder';
import logger from '../functions/logger';
import { TransactionType } from '../types/api/actions';
import { u32_MIN, u32_MAX, u128_MAX, ss58_LENGTH, text_MAX_LENGTH } from '../validator/consts';

import type { CTAtomicAction } from '../txwrapper';
import type { ClearingTransactionPayload } from '../types/api/clearingTransaction';
import type { ZodIssue } from 'zod';

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
  // appAgentOwnerAddress = 'ttqRZiq3D4jbPMCDzsWV5PmdXCH3rEtChCkfgfA6CXYQQyYKb';
  const appAgentOwnerPhrase = 'street firm worth record skin taste legend lobster magnet stove drive side';
  const appAgentAddress = 'ttrornXohYufjszoigJBX4VpvhGQv5VkTPDEzbu6sUiTR6R4y';
  const appAgentId = 1018;

  const keyring = new Keyring({ ss58Format: 5335, type: 'ed25519' });
  const appAgentKeyringPair = keyring.addFromMnemonic(appAgentOwnerPhrase);
  const signatory = 'ADMIN_1';

  describe('Balances Pallet', () => {
    it('should build balances_transferKeepAlive transaction', async () => {
      const payload: ClearingTransactionPayload = {
        signatory,
        appAgentId,
        atomics: [
          {
            actions: [
              {
                actionType: TransactionType.BalancesTransferKeepAlive,
                origin: { AppAgentAddress: appAgentAddress },
                arguments: {
                  dest: {
                    id: appAgentAddress,
                  },
                  value: 1000,
                },
              },
            ],
          },
        ],
      };

      const result = await createClearingTransactionAndBroadcast(appAgentKeyringPair, payload);
      expect(result).toHaveLength(66);
    });

    it('should build balances_transfer transaction', async () => {
      const payload: ClearingTransactionPayload = {
        signatory,
        appAgentId,
        atomics: [
          {
            actions: [
              {
                actionType: TransactionType.BalancesTransferAllowDeath,
                origin: { AppAgentAddress: appAgentAddress },
                arguments: {
                  dest: {
                    id: appAgentAddress,
                  },
                  value: 1000,
                },
              },
            ],
          },
        ],
      };

      const result = await createClearingTransactionAndBroadcast(appAgentKeyringPair, payload);
      expect(result).toHaveLength(66);
    });
  });

  describe('NFT Pallet', () => {
    it('should build nft_mintCollection transaction', async () => {
      const payload: ClearingTransactionPayload = {
        signatory,
        appAgentId,
        atomics: [
          {
            actions: [
              {
                actionType: TransactionType.NftsCreateCollection,
                origin: { AppAgentAddress: appAgentAddress },
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

      const result = await createClearingTransactionAndBroadcast(appAgentKeyringPair, payload);
      expect(result).toHaveLength(66);
    });

    it('should build nft_mintItem transaction', async () => {
      const payload: ClearingTransactionPayload = {
        signatory,
        appAgentId,
        atomics: [
          {
            actions: [
              {
                actionType: TransactionType.NftsMintItem,
                origin: { AppAgentAddress: appAgentAddress },
                arguments: {
                  collection: 1,
                  item: 1,
                  mintTo: {
                    id: appAgentAddress,
                  },
                },
              },
            ],
          },
        ],
      };

      const result = await createClearingTransactionAndBroadcast(appAgentKeyringPair, payload);
      expect(result).toHaveLength(66);
    });
  });

  describe('Assets Pallet', () => {
    it('should build assets_create transaction', async () => {
      const payload: ClearingTransactionPayload = {
        signatory,
        appAgentId,
        atomics: [
          {
            actions: [
              {
                actionType: TransactionType.AssetsCreate,
                origin: { AppAgentAddress: appAgentAddress },
                arguments: {
                  minBalance: 1,
                },
              },
            ],
          },
        ],
      };

      const result = await createClearingTransactionAndBroadcast(appAgentKeyringPair, payload);
      expect(result).toHaveLength(66);
    });

    it('should build assets_transfer transaction', async () => {
      const payload: ClearingTransactionPayload = {
        signatory,
        appAgentId,
        atomics: [
          {
            actions: [
              {
                actionType: TransactionType.AssetsTransfer,
                origin: { AppAgentAddress: appAgentAddress },
                arguments: {
                  id: 1,
                  target: {
                    id: appAgentAddress,
                  },
                  amount: 1000,
                },
              },
            ],
          },
        ],
      };

      const result = await createClearingTransactionAndBroadcast(appAgentKeyringPair, payload);
      expect(result).toHaveLength(66);
    });
  });

  describe('Error Handling', () => {
    it('should throw error for unsupported action type', async () => {
      const payload: ClearingTransactionPayload = {
        signatory,
        appAgentId,
        atomics: [
          {
            actions: [
              {
                actionType: 'unknown_action' as TransactionType,
                origin: { AppAgentAddress: appAgentAddress },
                arguments: {
                  dest: appAgentAddress,
                  value: 1000,
                },
              } as CTAtomicAction,
            ],
          },
        ],
      };

      await expect(createClearingTransactionAndBroadcast(appAgentKeyringPair, payload)).rejects.toThrow(
        'Unsupported transaction type: unknown_action'
      );
    });
  });

  describe('Clearing transaction action args validation errors', () => {
    it('Action args: Numbers with overflow (u32)', async () => {
      const payload: ClearingTransactionPayload = {
        signatory,
        appAgentId,
        atomics: [
          {
            actions: [
              {
                actionType: TransactionType.NftsLockItemTransfer,
                origin: { AppAgentAddress: appAgentAddress },
                arguments: {
                  collection: Number(u32_MIN - BigInt(1)), // error: fewer than min
                  item: Number(u32_MAX + BigInt(1)), // error: greater than max
                },
              } as CTAtomicAction,
            ],
          },
        ],
      };

      try {
        await createClearingTransactionAndBroadcast(appAgentKeyringPair, payload);
      } catch (error) {
        const errors = JSON.parse((error as any).message) as ZodIssue[];
        const collectionError = errors.find((e) => e.path[0] === 'collection');
        const itemError = errors.find((e) => e.path[0] === 'item');

        expect(collectionError?.message).toEqual(`Value must be greater or equal to ${u32_MIN.toString()}`);
        expect(itemError?.message).toEqual(`Value must be fewer or equal to ${u32_MAX.toString()}`);
      }
    });

    it('Action args: Invalid address length & Number with overflow (u128)', async () => {
      const payload: ClearingTransactionPayload = {
        signatory,
        appAgentId,
        atomics: [
          {
            actions: [
              {
                actionType: TransactionType.BalancesTransferKeepAlive,
                origin: { AppAgentAddress: appAgentAddress },
                arguments: {
                  dest: {
                    id: '12312321', // invalid length
                  },
                  value: (u128_MAX + BigInt(1)).toString(), // error: greater than max
                },
              } as CTAtomicAction,
            ],
          },
        ],
      };

      try {
        await createClearingTransactionAndBroadcast(appAgentKeyringPair, payload);
      } catch (error) {
        const errors = JSON.parse((error as any).message) as ZodIssue[];
        const destErrors = errors.filter((e) => e.path[0] === 'dest');
        const valueErrors = errors.filter((e) => e.path[0] === 'value');

        expect(destErrors[0]?.message).toEqual(`String must be exactly ${ss58_LENGTH} characters long`);
        expect(valueErrors[0]?.message).toEqual(`Value must be fewer or equal to ${u128_MAX.toString()}`);
      }
    });

    it('Action args: Invalid ss58 address', async () => {
      const payload: ClearingTransactionPayload = {
        signatory,
        appAgentId,
        atomics: [
          {
            actions: [
              {
                actionType: TransactionType.BalancesTransferAll,
                origin: { AppAgentAddress: appAgentAddress },
                arguments: {
                  dest: {
                    id: appAgentAddress.slice(0, -1).concat('z'), // invalid encoded ss58
                  },
                  keepAlive: true,
                },
              } as CTAtomicAction,
            ],
          },
        ],
      };

      try {
        await createClearingTransactionAndBroadcast(appAgentKeyringPair, payload);
      } catch (error) {
        const errors = JSON.parse((error as any).message) as ZodIssue[];
        const destErrors = errors.filter((e) => e.path[0] === 'dest');

        expect(destErrors[0]?.message).toEqual(`String is not valid SS58 encoded address`);
      }
    });

    it('Action args: Invalid metadata text length', async () => {
      const payload: ClearingTransactionPayload = {
        signatory,
        appAgentId,
        atomics: [
          {
            actions: [
              {
                actionType: TransactionType.AssetsSetMetadata,
                origin: { AppAgentAddress: appAgentAddress },
                arguments: {
                  id: 1,
                  data: 's'.repeat(257), // text overflow
                },
              } as CTAtomicAction,
            ],
          },
        ],
      };

      try {
        await createClearingTransactionAndBroadcast(appAgentKeyringPair, payload);
      } catch (error) {
        const errors = JSON.parse((error as any).message) as ZodIssue[];
        const dataErrors = errors.filter((e) => e.path[0] === 'data');

        expect(dataErrors[0]?.message).toEqual(`String must be fewer or equal ${text_MAX_LENGTH} characters long`);
      }
    });
  });
});
