import type { BlockchainAddressName, BlockchainGenericAccount } from '../common';

export type NamedAddressInput = { Address: BlockchainGenericAccount } | { Name: BlockchainAddressName };
