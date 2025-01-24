import { base58Decode, decodeAddress } from '@polkadot/util-crypto';

export const isValidSS58 = (address: string): boolean => {
  try {
    base58Decode(address);
    decodeAddress(address, false);
    return true;
  } catch {
    return false;
  }
};
