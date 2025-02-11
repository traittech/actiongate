import type {
  BlockchainAddressName,
  BlockchainGenericAccount,
  BlockchainGenericId,
  BlockchainGenericBoolean,
  UINT32,
} from '../common';

export type NamedAddressInput = { Address: BlockchainGenericAccount } | { Name: BlockchainAddressName };

type FungibleDestroyDetail = {
  id: BlockchainGenericId;
  accounts: UINT32;
  approvals: UINT32;
};

type NonFungibleDestroyDetail = {
  collectionId: UINT32;
  itemId: UINT32;
}

type OwnFungibleDestroyDetail = {
  id: BlockchainGenericId;
  accounts: UINT32;
  approvals: UINT32;
  finishDestroy: BlockchainGenericBoolean;
};

type OwnNonFungibleDestroyDetail = {
  collectionId: BlockchainGenericId;
  items: BlockchainGenericId[];
  finishDestroy: BlockchainGenericBoolean;
};

type PoolAddressDestroyInfo = {
  address: BlockchainGenericAccount;
  fungibles: FungibleDestroyDetail[];
  nonFungibles: NonFungibleDestroyDetail[];
};

export type AppAgentDestroyInfo = {
  ownFungibles: OwnFungibleDestroyDetail[];
  ownNonFungibles: OwnNonFungibleDestroyDetail[];
  controlledAddressesInfos: PoolAddressDestroyInfo[];
  appAgentFungibles: FungibleDestroyDetail[];
  appAgentNonFungibles: NonFungibleDestroyDetail[];
};
