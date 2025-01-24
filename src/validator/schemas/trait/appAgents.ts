import { z } from 'zod';

import { BlockchainGenericAccountSchema, BlockchainAddressNameSchema } from '../common';

export const NamedAddressInputSchema = z.union([
  z.object({ Address: BlockchainGenericAccountSchema }),
  z.object({ Name: BlockchainAddressNameSchema }),
]);
