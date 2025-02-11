import { loadConfig } from '../functions/config';

import type { Request } from 'express';

const apiKeys = loadConfig().api_keys;
const apiKeysEnabled = loadConfig().api_keys_enabled;

export async function expressAuthentication(req: Request, securityName: string): Promise<void> {
  if (apiKeysEnabled) {
    if (securityName === 'ApiKeyAuth') {
      const apiKey = req.headers['x-api-key'] as string | undefined;

      if (!(apiKey && apiKeys.includes(apiKey))) {
        return Promise.reject(new Error('Access is forbidden due to the wrong API key.'));
      }
    }
  }

  return Promise.resolve();
}
