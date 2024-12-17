import { createLogger, format, transports } from 'winston';

import { loadConfig } from './config';
const config = loadConfig();

// logger will write to console and actiongate.log
const logger = createLogger({
  level: config.logs.logLevel,
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`)
  ),
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`)
      ),
    }),
    new transports.File({ filename: config.logs.logFile }),
  ],
});

export default logger;
