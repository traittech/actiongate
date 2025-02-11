import fs from 'fs';
import http from 'http';
import https from 'https';

import { app } from './app';
import { loadConfig } from './functions/config';
import logger from './functions/logger';

import type { Config } from './types/config';
import type { Express } from 'express';

function createServer(app: Express, config: Config) {
  const isSSL = config.api_ssl_enabled;
  const server = isSSL
    ? https.createServer(
        {
          key: fs.readFileSync(config.api_ssl.sslKeyPath),
          cert: fs.readFileSync(config.api_ssl.sslCertPath),
        },
        app
      )
    : http.createServer(app);
  const protocol = isSSL ? 'https' : 'http';

  return { server, protocol };
}

const config = loadConfig();

const PORT = process.env.PORT || 8080;

const { server, protocol } = createServer(app, config);

server.listen(PORT, () => {
  logger.info(`ACTIONGATE Server is running on ${protocol} port ${PORT}`);
  logger.info(`Config: ${JSON.stringify(config)}`);
});
