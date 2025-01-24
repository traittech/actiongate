import type { BlockchainGenericAccount, BlockchainAddressName, BlockchainGenericBalance, UINT32 } from './common';

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

type PayOnDemand = {
  extraCtPrice: BlockchainGenericBalance;
  extraCtActionPrice: BlockchainGenericBalance;
};

export enum PayOnDemandMode {
  AppAgent = 'AppAgent',
  Admin = 'Admin',
  Disabled = 'Disabled',
};

export type AppSubscriptionTierDetails = {
  includedCtNumber: UINT32;
  includedCtActionsNumber: UINT32;
  includedAnonymousTransfers: UINT32;
  price: BlockchainGenericBalance;
  payOnDemand: PayOnDemand;
  billingPeriodLength: UINT32;
};

export type NftWitness = {
  itemMetadatas: UINT32;
  itemConfigs: UINT32;
  attributes: UINT32;
};
