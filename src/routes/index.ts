import { Router } from 'express';

import { RegisterRoutes } from './api';
import { loadConfig } from '../functions/config';
import checkApiKey from '../middleware/apikey';
import enforceHttps from '../middleware/enforceHttps';
import { SwaggerUi, swaggerDocument } from '../swagger';

export const router = Router();

// Apply checkApiKey middleware to all routes
router.use(checkApiKey);

if (!loadConfig().api_ssl_enabled) {
  router.use(enforceHttps);
}

// Controllers routes
RegisterRoutes(router);

// Define route handlers
router.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocument));
router.use('/api-docs.json', (req, res) => {
  res.json(swaggerDocument);
});

export default router;
