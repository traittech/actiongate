import { z } from 'zod';

import { AdminType } from '../../types/api/trait';
import { u32Schema, BlockchainGenericAccountSchema, BlockchainAddressNameSchema } from './common';

export const AdminTypeSchema = z.nativeEnum(AdminType);

export const NamedAddressInputSchema = z.union([
  z.object({ Address: BlockchainGenericAccountSchema }),
  z.object({ Name: BlockchainAddressNameSchema }),
]);

export const NftWitnessSchema = z.object({
  itemMetadatas: u32Schema,
  itemConfigs: u32Schema,
  attributes: u32Schema,
});