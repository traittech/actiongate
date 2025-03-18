import { z } from 'zod';

import { AppPayOnDemandMode } from '../../../types/api/trait';
import { BlockchainGenericBalanceSchema, UINT32Schema } from '../common';

export const PayOnDemandSchema = z.object({
  extraCtPrice: BlockchainGenericBalanceSchema,
  extraCtActionPrice: BlockchainGenericBalanceSchema,
});

export const AppPayOnDemandModeSchema = z.nativeEnum(AppPayOnDemandMode);

export const AppSubscriptionTierDetailsSchema = z.object({
  includedCtNumber: UINT32Schema,
  includedCtActionsNumber: UINT32Schema,
  includedAnonymousTransfers: UINT32Schema,
  price: BlockchainGenericBalanceSchema,
  payOnDemand: PayOnDemandSchema,
  billingPeriodLength: UINT32Schema,
});
