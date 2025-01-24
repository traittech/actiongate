import { z } from 'zod';

import { UINT32Schema } from '../common';

export const NftWitnessSchema = z.object({
  itemMetadatas: UINT32Schema,
  itemConfigs: UINT32Schema,
  attributes: UINT32Schema,
});