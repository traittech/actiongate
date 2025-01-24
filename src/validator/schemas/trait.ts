import { z } from 'zod';

import { AdminType } from '../../types/api/trait';
import { UINT32Schema, BlockchainGenericAccountSchema, BlockchainAddressNameSchema } from './common';

export const AdminTypeSchema = z.nativeEnum(AdminType);

export const NamedAddressInputSchema = z.union([
  z.object({ Address: BlockchainGenericAccountSchema }),
  z.object({ Name: BlockchainAddressNameSchema }),
]);

export const NftWitnessSchema = z.object({
  itemMetadatas: UINT32Schema,
  itemConfigs: UINT32Schema,
  attributes: UINT32Schema,
});