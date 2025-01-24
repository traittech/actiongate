import type { BlockchainGenericBalance, BlockchainGenericBoolean, BlockchainGenericId } from '../common';

export type FungibleTokenDetails = {
  id: BlockchainGenericId;
  minDeposit?: BlockchainGenericBalance;
  maxDeposit?: BlockchainGenericBalance;
};

type FungibleDepositAllowAll = 'AllowAll';

type FungibleDepositAllowFungible = {
  AllowedFungibleTokens: {
    allowOwnTokens: BlockchainGenericBoolean;
    allowedTokens: FungibleTokenDetails[];
  };
};

type FungibleDepositDisallowFungible = {
  DisallowedFungibleTokens: {
    disallowedTokens: BlockchainGenericId[];
  };
};

export type FungibleDepositPermissionsType =
  | FungibleDepositAllowAll
  | FungibleDepositAllowFungible
  | FungibleDepositDisallowFungible;

type NftsDepositAllowAll = 'AllowAll';

type NftsDepositAllowNftCollections = {
  AllowedNftCollections: {
    allowOwnCollections: BlockchainGenericBoolean;
    allowedCollections: BlockchainGenericId[];
  };
};

type NftsDepositDisallowNftCollections = {
  DisallowedNftCollections: {
    disallowedCollections: BlockchainGenericId[];
  };
};

export type NftsDepositPermissionType =
  | NftsDepositAllowAll
  | NftsDepositAllowNftCollections
  | NftsDepositDisallowNftCollections;

export type NativeDepositPermissionsDetails = {
  allowed: BlockchainGenericBoolean;
  minDeposit?: BlockchainGenericBalance;
  maxDeposit?: BlockchainGenericBalance;
};

export type AppDepositPermissions = {
  native: NativeDepositPermissionsDetails;
  fungibles: FungibleDepositPermissionsType;
  nftCollections: NftsDepositPermissionType;
};
