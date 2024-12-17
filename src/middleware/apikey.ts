import { Request, Response, NextFunction } from 'express';

import { loadConfig } from '../functions/config';

const expectedApiKeys = loadConfig().api_keys;
const apiKeysEnabled = loadConfig().api_keys_enabled;

const excludedPaths = ['/api-docs', '/api-docs.json'];

/**
 * Middleware to check the API key in the request headers.
 *
 * @param req - The Express Request object.
 * @param res - The Express Response object.
 * @param next - The Express NextFunction callback to pass control to the next middleware.
 */
const checkApiKey = (req: Request, res: Response, next: NextFunction): void => {
  // Skip checks if the API keys are disabled
  if (!apiKeysEnabled) {
    return next();
  }

  // Skip checkApiKey for excluded paths
  if (excludedPaths.some((path) => req.path.startsWith(path))) {
    return next();
  }

  const apiKey = req.headers['x-api-key'] as string | undefined;
  if (!apiKey || expectedApiKeys.includes(apiKey)) {
    res.status(403).json({ error: 'Access is forbidden due to the wrong API key.' });
  } else {
    next();
  }
};

export default checkApiKey;
