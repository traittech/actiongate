import { HttpError, HttpStatusCode } from '../http';
import { loadConfig } from '../functions/config';

import type { Request } from 'express';

const apiKeys = loadConfig().api_keys;
const apiKeysEnabled = loadConfig().api_keys_enabled;

export async function expressAuthentication(req: Request, securityName: string): Promise<void> {
  if (apiKeysEnabled) {
    if (securityName === 'ApiKeyAuth') {
      const apiKey = req.headers['x-api-key'] as string | undefined;

      if (!apiKey) {
        return Promise.reject(
          new HttpError('Access denied without API key in "X-API-KEY" header.', HttpStatusCode.Unauthorized)
        );
      }

      if (!apiKeys.includes(apiKey)) {
        return Promise.reject(
          new HttpError('Access is forbidden due to the wrong API key.', HttpStatusCode.Forbidden)
        );
      }
    }
  }

  return Promise.resolve();
}
