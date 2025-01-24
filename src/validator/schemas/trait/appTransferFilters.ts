import { z } from 'zod';

import {
  BlockchainGenericIdSchema,
  BlockchainGenericBalanceSchema,
  BlockchainGenericBooleanSchema,
} from '../common';

export const FungibleTokenDetailsSchema = z.object({
  id: BlockchainGenericIdSchema,
  minDeposit: BlockchainGenericBalanceSchema.optional(),
  maxDeposit: BlockchainGenericBalanceSchema.optional(),
});

const FungibleDepositAllowAllSchema = z.literal('AllowAll');

const FungibleDepositAllowFungibleSchema = z.object({
  AllowedFungibleTokens: z.object({
    allowOwnTokens: BlockchainGenericBooleanSchema,
    allowedTokens: z.array(FungibleTokenDetailsSchema),
  }),
});

const FungibleDepositDisallowFungibleSchema = z.object({
  DisallowedFungibleTokens: z.object({
    disallowedTokens: z.array(BlockchainGenericIdSchema),
  }),
});

export const FungibleDepositPermissionsTypeSchema = z.union([
  FungibleDepositAllowAllSchema,
  FungibleDepositAllowFungibleSchema,
  FungibleDepositDisallowFungibleSchema,
]);

const NftsDepositAllowAllSchema = z.literal('AllowAll');

const NftsDepositAllowNftCollectionsSchema = z.object({
  AllowedNftCollections: z.object({
    allowOwnCollections: BlockchainGenericBooleanSchema,
    allowedCollections: z.array(BlockchainGenericIdSchema),
  }),
});

const NftsDepositDisallowNftCollectionsSchema = z.object({
  DisallowedNftCollections: z.object({
    disallowedCollections: z.array(BlockchainGenericIdSchema),
  })
});

export const NftsDepositPermissionTypeSchema = z.union([
  NftsDepositAllowAllSchema,
  NftsDepositAllowNftCollectionsSchema,
  NftsDepositDisallowNftCollectionsSchema
]);

export const NativeDepositPermissionsDetailsSchema = z.object({
  allowed: BlockchainGenericBooleanSchema,
  minDeposit: BlockchainGenericBalanceSchema.optional(),
  maxDeposit: BlockchainGenericBalanceSchema.optional(),
});

export const AppDepositPermissionsSchema = z.object({
  native: NativeDepositPermissionsDetailsSchema,
  fungibles: FungibleDepositPermissionsTypeSchema,
  nftCollections: NftsDepositPermissionTypeSchema,
});