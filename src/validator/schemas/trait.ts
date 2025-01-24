import { z } from 'zod';

import { AdminType, PayOnDemandMode } from '../../types/api/trait';
import { UINT32Schema, BlockchainGenericAccountSchema, BlockchainAddressNameSchema, BlockchainGenericBalanceSchema } from './common';

export const AdminTypeSchema = z.nativeEnum(AdminType);

export const NamedAddressInputSchema = z.union([
  z.object({ Address: BlockchainGenericAccountSchema }),
  z.object({ Name: BlockchainAddressNameSchema }),
]);

const PayOnDemandSchema = z.object({
  extraCtPrice: BlockchainGenericBalanceSchema,
  extraCtActionPrice: BlockchainGenericBalanceSchema,
});

export const PayOnDemandModeSchema = z.nativeEnum(PayOnDemandMode);

export const AppSubscriptionTierDetailsSchema = z.object({
  includedCtNumber: UINT32Schema,
  includedCtActionsNumber: UINT32Schema,
  includedAnonymousTransfers: UINT32Schema,
  price: BlockchainGenericBalanceSchema,
  payOnDemand: PayOnDemandSchema,
  billingPeriodLength: UINT32Schema,
});

export const NftWitnessSchema = z.object({
  itemMetadatas: UINT32Schema,
  itemConfigs: UINT32Schema,
  attributes: UINT32Schema,
});