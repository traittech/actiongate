import { Keyring } from '@polkadot/api';

import { loadConfig } from './config';
import logger from './logger';

import type { KeyringPair } from '@polkadot/keyring/types';

const config = loadConfig();
const keyring = new Keyring({ type: 'sr25519' });

keyring.setSS58Format(config.blockchain.ss58_code);

export function getKeyringPairByPrivateKey(privateKey: string): KeyringPair {
  // Add the key pair to the keyring
  const callerKeyPair = keyring.addFromUri(privateKey);
  logger.info(`Calling Account: ${callerKeyPair.address}`);

  return callerKeyPair;
}
