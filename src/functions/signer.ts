import { EXTRINSIC_VERSION } from '@polkadot/types/extrinsic/v4/Extrinsic';
import { createMetadata, OptionsWithMeta } from '@substrate/txwrapper-polkadot';

import { loadConfig } from '../functions/config';

import logger from './logger';

import type { KeyringPair } from '@polkadot/keyring/types';

const config = loadConfig();

/**
 * Signs the given payload with the provided keyring pair.
 *
 * @param pair - The keyring pair used to sign the payload.
 * @param signingPayload - The payload to sign, as a hexadecimal string.
 * @param options - Additional options including the registry and metadata RPC.
 * @returns The signature of the signed payload, as a hexadecimal string.
 */
export function signWith(pair: KeyringPair, signingPayload: string, options: OptionsWithMeta): `0x${string}` {
  const { registry, metadataRpc } = options;

  // Important! The registry needs to be updated with the latest metadata, so make
  // sure to run `registry.setMetadata(metadata)` before signing.
  registry.setMetadata(createMetadata(registry, metadataRpc));

  logger.debug('Creating extrinsic payload and signing...');
  const { signature } = registry
    .createType('ExtrinsicPayload', signingPayload, {
      version: EXTRINSIC_VERSION,
    })
    .sign(pair);

  logger.info('Payload signed successfully.');
  return signature as unknown as `0x${string}`;
}
