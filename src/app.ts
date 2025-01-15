import fs from 'fs';
import http from 'http';
import https from 'https';

import express from 'express';

import { loadConfig } from './functions/config';
import logger from './functions/logger';
import indexRouter from './routes/index';

const config = loadConfig();
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/', indexRouter);

// Start server
const PORT = process.env.PORT || 8080;

if (config.api_ssl_enabled) {
  // Start HTTPS server
  https
    .createServer(
      {
        key: fs.readFileSync(config.api_ssl.sslKeyPath),
        cert: fs.readFileSync(config.api_ssl.sslCertPath),
      },
      app
    )
    .listen(PORT, () => {
      logger.info(`ACTIONGATE Server is running on HTTPS port ${PORT}`);
      logger.info(`Config: ${JSON.stringify(config)}`);
    });
} else {
  // Start HTTP server
  http.createServer(app).listen(PORT, () => {
    logger.info(`ACTIONGATE Server is running in DEV mode on HTTP port ${PORT}`);
    logger.info(`Config: ${JSON.stringify(config)}`);
  });
}
