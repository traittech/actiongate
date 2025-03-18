import { z } from 'zod';

import {
  BlockchainGenericAccountSchema,
  BlockchainAddressNameSchema,
  BlockchainGenericIdSchema,
  BlockchainGenericBooleanSchema,
  UINT32Schema,
} from '../common';

export const NamedAddressInputSchema = z.union([
  z.object({ Address: BlockchainGenericAccountSchema }),
  z.object({ Name: BlockchainAddressNameSchema }),
]);

const FungibleDestroyDetailSchema = z.object({
  id: BlockchainGenericIdSchema,
  accounts: UINT32Schema,
  approvals: UINT32Schema,
});

/**
 * Override `{ collectionId: UINT32; itemId: UINT32; }` is used for API.
 *
 * Tuple `[UINT32, UINT32]` used in blockchain.
 */
const NonFungibleDestroyDetailSchema = z
  .object({
    collectionId: UINT32Schema,
    itemId: UINT32Schema,
  })
  .transform((v) => {
    return [v.collectionId, v.itemId];
  });

const OwnFungibleDestroyDetailSchema = z.object({
  id: BlockchainGenericIdSchema,
  accounts: UINT32Schema,
  approvals: UINT32Schema,
  finishDestroy: BlockchainGenericBooleanSchema,
});

const OwnNonFungibleDestroyDetailSchema = z.object({
  collectionId: BlockchainGenericIdSchema,
  items: z.array(BlockchainGenericIdSchema),
  finishDestroy: BlockchainGenericBooleanSchema,
});

const PoolAddressDestroyInfoSchema = z.object({
  address: BlockchainGenericAccountSchema,
  fungibles: z.array(FungibleDestroyDetailSchema),
  nonFungibles: z.array(NonFungibleDestroyDetailSchema),
});

export const AppAgentDestroyInfoSchema = z.object({
  ownFungibles: z.array(OwnFungibleDestroyDetailSchema),
  ownNonFungibles: z.array(OwnNonFungibleDestroyDetailSchema),
  controlledAddressesInfos: z.array(PoolAddressDestroyInfoSchema),
  appAgentFungibles: z.array(FungibleDestroyDetailSchema),
  appAgentNonFungibles: z.array(NonFungibleDestroyDetailSchema),
});
