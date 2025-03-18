import { isAddress } from '@polkadot/util-crypto';

import { loadConfig } from '../functions/config';

const ss58Code = loadConfig().blockchain.ss58_code;

export const isValidSS58 = (address: string): boolean => {
  try {
    return isAddress(address, false, ss58Code);
  } catch {
    return false;
  }
};
