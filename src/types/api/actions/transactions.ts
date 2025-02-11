import { ExtrinsicType } from './extrinsics';

// Transactions allowed for `/submit/transaction`
export const Txs = [
  ExtrinsicType.AppAgentsAddAdmin,
  ExtrinsicType.AppAgentsAddAdminToNamedAddress,
  ExtrinsicType.AppAgentsAllowAdminColdWallet,
  ExtrinsicType.AppAgentsChangeHotWallet,
  ExtrinsicType.AppAgentsChangeOwnerCancel,
  ExtrinsicType.AppAgentsChangeOwnerComplete,
  ExtrinsicType.AppAgentsChangeOwnerInit,
  ExtrinsicType.AppAgentsClearAdminDispatchFilter,
  ExtrinsicType.AppAgentsClearAppAgentMetadata,
  ExtrinsicType.AppAgentsCompleteDestroyAppAgent,
  ExtrinsicType.AppAgentsCreateAppAgent,
  ExtrinsicType.AppAgentsDisableAdminColdWalletDispatch,
  ExtrinsicType.AppAgentsDisableHotWallet,
  ExtrinsicType.AppAgentsEnableHotWallet,
  ExtrinsicType.AppAgentsInitiateDestroyAppAgent,
  ExtrinsicType.AppAgentsPauseAppAgent,
  ExtrinsicType.AppAgentsProcessDestroy,
  ExtrinsicType.AppAgentsReactivateAppAgent,
  ExtrinsicType.AppAgentsRemoveAdmin,
  ExtrinsicType.AppAgentsRemoveAdminFromNamedAddressDispatch,
  ExtrinsicType.AppAgentsSetAdminDispatchFilter,
  ExtrinsicType.AppAgentsSetAppAgentMetadata,
  ExtrinsicType.AppAgentsUnpauseAppAgent,

  ExtrinsicType.AppSubscriptionsSetAppPayOnDemandMode,
  ExtrinsicType.AppSubscriptionsSetAppSubscriptionTier,

  ExtrinsicType.AppTransferFiltersBlockAddressDeposits,
  ExtrinsicType.AppTransferFiltersSetAppDepositPermissions,
  ExtrinsicType.AppTransferFiltersUnblockAddressDeposits,

  ExtrinsicType.AssetsTransfer,
  ExtrinsicType.AssetsTransferKeepAlive,

  ExtrinsicType.BalancesTransferAll,
  ExtrinsicType.BalancesTransfer,
  ExtrinsicType.BalancesTransferKeepAlive,

  ExtrinsicType.NftsTransferItem,
] as const;

export const AllowedTxs = [...Txs];

export type TxType = (typeof Txs)[number];