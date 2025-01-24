import type {
  BlockchainGenericBalance,
  UINT32
} from '../common';

export type PayOnDemand = {
  extraCtPrice: BlockchainGenericBalance;
  extraCtActionPrice: BlockchainGenericBalance;
};

export enum AppPayOnDemandMode {
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