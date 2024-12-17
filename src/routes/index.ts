import express, { Request, Response, NextFunction } from 'express';

import clearingtransactionController from '../controllers/ClearingTransaction';
import transactionController from '../controllers/Transaction';
import { loadConfig } from '../functions/config';
import checkApiKey from '../middleware/apikey';
import enforceHttps from '../middleware/enforceHttps';
import { swaggerSpec, swaggerUi } from '../swagger';

const router = express.Router();

// Apply checkApiKey middleware to all routes
router.use(checkApiKey);

if (!loadConfig().api_ssl_enabled) {
  router.use(enforceHttps);
}

// Define route handlers
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
router.use('/api-docs.json', (req, res) => {
  res.json(swaggerSpec);
});
router.post('/submit/transaction', transactionController.submitTransaction);
router.post('/submit/clearing_transaction', clearingtransactionController.submitClearingTransaction);

export default router;
