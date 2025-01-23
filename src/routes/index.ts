import { Router } from 'express';

import { loadConfig } from '../functions/config';
import checkApiKey from '../middleware/apikey';
import enforceHttps from '../middleware/enforceHttps';

import { RegisterRoutes as RegisterControllersRoutes } from './api';
import { RegisterRoutes as RegisterDocsRoutes } from './docs';

export const router = Router();

// Apply checkApiKey middleware to all routes
router.use(checkApiKey);

// If ssl is enabled, enforce redirect to https
if (loadConfig().api_ssl_enabled) {
  router.use(enforceHttps);
}

// Controllers routes
RegisterControllersRoutes(router);
// Documentation routes
RegisterDocsRoutes(router);

export default router;
