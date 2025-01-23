import type { BlockchainGenericAccount, BlockchainAddressName, UINT32 } from './common';

export enum AdminType {
  AppAgentForce = 'AppAgentForce',
  AppAgentGarbageCollector = 'AppAgentGarbageCollector',
  AppSubscriptions = 'AppSubscriptions',
  AppTransactions = 'AppTransactions',
  PriceIndex = 'PriceIndex',
  UserFreeTransactions = 'UserFreeTransactions',
  UserVerification = 'UserVerification',
  Assets = 'Assets',
  Nfts = 'Nfts',
}

export type NamedAddressInput = 
  | { Address: BlockchainGenericAccount }
  | { Name: BlockchainAddressName };

export type NftWitness = {
  itemMetadatas: UINT32;
  itemConfigs: UINT32;
  attributes: UINT32;
};
