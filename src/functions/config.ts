import * as fs from 'fs';
import * as path from 'path';

import { Config } from '../types/config';

export function loadConfig(): Config {
  // Load and parse config.json
  const configPath = path.resolve(__dirname, '../../config.json');
  const config: Config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  return config;
}

// Function to get the private_key by id
export function getPrivateKeyById(config: Config, id: string): string {
  const privateKey = config.admin_keys.find((key) => key.id === id);
  if (!privateKey) {
    throw new Error(`Private key with id '${id}' does not exist`);
  }
  return privateKey.private_key;
}
