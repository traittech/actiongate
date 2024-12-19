// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/storage';

import type { ApiTypes, AugmentedQuery, QueryableStorageEntry } from '@polkadot/api-base/types';
import type { BTreeMap, BTreeSet, Bytes, Null, Option, Struct, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { AnyNumber, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H256 } from '@polkadot/types/interfaces/runtime';
import type { Observable } from '@polkadot/types/types';

export type __AugmentedQuery<ApiType extends ApiTypes> = AugmentedQuery<ApiType, () => unknown>;
export type __QueryableStorageEntry<ApiType extends ApiTypes> = QueryableStorageEntry<ApiType>;

declare module '@polkadot/api-base/types/storage' {
  interface AugmentedQueries<ApiType extends ApiTypes> {
    admins: {
      palletAdminsStorage: AugmentedQuery<ApiType, (arg: TraitPrimitivesPalletAdminsPalletAdminType | 'AppAgentForce' | 'AppAgentGarbageCollector' | 'AppSubscriptions' | 'AppTransactions' | 'PriceIndex' | 'UserFreeTransactions' | 'UserVerification' | 'Assets' | 'Nfts' | number | Uint8Array) => Observable<Option<PalletAdminsPalletAdminStorageValue>>, [TraitPrimitivesPalletAdminsPalletAdminType]> & QueryableStorageEntry<ApiType, [TraitPrimitivesPalletAdminsPalletAdminType]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    appAgents: {
      /**
       * Metadata of an App Agent
       **/
      appAgentMetadatasStorage: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletAppAgentsMetadataAppAgentMetadatasStorageValue>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Details of an App Agent
       **/
      appAgentsStorage: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<TraitPrimitivesAppAgentsDetailsAppAgentDetails>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Reentrancy guard for AppAgent status changes
       * Should be false always, used to prevent reentrancy in update_app_agent_status
       **/
      appAgentStatusReentrancyGuard: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Storage for Admins allowed to use named addresses
       * The storage is in the format of:
       * - first key: ID of AppAgent
       * - second key: NamedAddress
       * - value: vector of allowed admin addresses
       * If an entry (AppAgent ID, NamedAddress) is present in this storage then only listed admins
       * allowed to dispatch from the named address. If there is no record (AppAgent ID,
       * NamedAddress) - then no restrictions apply.
       **/
      namedAddressPermissionsStorage: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<PalletAppAgentsAppagentNamedAddressPermissionsStorageValue>>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
      /**
       * Next App Agent ID
       **/
      nextAppAgentIdStorage: AugmentedQuery<ApiType, () => Observable<PalletAppAgentsAppagentNextAppAgentIdStorageValue>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    appResources: {
      /**
       * Mapping of accountID to action points balance
       **/
      actionPointsBalanceStorage: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletAppResourcesPointsBalance>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Mapping of accountID to clearning transaction points balance
       **/
      clearingPointsBalanceStorage: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletAppResourcesPointsBalance>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    appSubscriptions: {
      /**
       * Details of subscription of an app agent
       **/
      appSubscriptionInfosStorage: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<TraitPrimitivesAppSubscriptionsAppSubscriptionInfo>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Contains information about available subscription tiers.
       **/
      appSubscriptionTiersStorage: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<TraitPrimitivesAppSubscriptionsAppSubscriptionTierInfo>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * What id should be used as next subscription tier id. Should be incremented every time after
       * subscription tier was created.
       **/
      nextAppSubscriptionTierIdStorage: AugmentedQuery<ApiType, () => Observable<PalletAppSubscriptionsSubscriptionTierIdValue>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Stores the next block where the subscription payments shall be processed
       * This is helpful to identify and process subscription payments, since the payments are
       * executed in on_idle format the execution is dependent on the weight available to us. So this
       * means that not all payments scheduled in the block can be processed. This storage will only
       * be updated once all the payments in a block are completed.
       **/
      subscriptionPaymentNextBlockToProcessStorage: AugmentedQuery<ApiType, () => Observable<PalletAppSubscriptionsSubscriptionPaymentNextBlockToProcessStorageValue>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Map block number (as a time unit) to the vector of regular subscribers' payments to
       * schedule next regular payment.
       * 
       * This storage is only used to initiate the processing of the subscription payments.
       * The actual state of subscription and corresponding payments is determined
       * only based on info stored in `AppSubscriptionInfosStorage`.
       * 
       * This storage may contain redundant entries that must be skipped.
       * Such entries may arise due to changes to subscription / appagent or other reasons.
       **/
      subscriptionPaymentsByBlockNumberStorage: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<PalletAppSubscriptionsSubscriptionPaymentsByBlockNumberStorageValue>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    appTransferChannels: {
      /**
       * Stores information about the transfer channels ordered by the cleaning block
       **/
      appTransferChannelsByExpiryStorage: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array, arg3: AccountId32 | string | Uint8Array) => Observable<bool>, [u32, AccountId32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32, AccountId32]>;
      appTransferChannelsStorage: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<PalletAppTransferChannelsTransferChannelData>>, [AccountId32, AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32, AccountId32]>;
      /**
       * Stores the next block to remove expired transfer channels
       * This is helpful to identify and process transfer channel removal, since the deletion is
       * executed in on_idle the execution is dependent on the weight available to us. So this
       * means that not all deletions scheduled in the block can be processed. This storage will only
       * be updated once all the deletions in a block are completed.
       **/
      transferChannelExpiryNextBlockToProcessStorage: AugmentedQuery<ApiType, () => Observable<PalletAppTransferChannelsTransferChannelExpiryNextBlockToProcessStorageValue>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    appTransferFilters: {
      /**
       * Info about deposit permissions set by an AppAgent
       **/
      appDepositPermissionsStorage: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<TraitPrimitivesAppTransferFiltersAppDepositPermissions>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * TAs marked as blocked by an app-agent
       **/
      blockedAddressDepositsStorage: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<bool>>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    assets: {
      /**
       * The holdings of a specific account for a specific asset.
       **/
      account: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<PalletAssetsAssetAccount>>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
      /**
       * Approved balance transfers. First balance is the amount approved for transfer. Second
       * is the amount of `T::Currency` reserved for storing this.
       * First key is the asset ID, second key is the owner and third key is the delegate.
       **/
      approvals: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array, arg3: AccountId32 | string | Uint8Array) => Observable<Option<PalletAssetsApproval>>, [u32, AccountId32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32, AccountId32]>;
      /**
       * Details of an asset.
       **/
      asset: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletAssetsAssetDetails>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Metadata of an asset.
       **/
      metadata: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<PalletAssetsAssetMetadata>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The asset ID enforced for the next asset creation, if any present. Otherwise, this storage
       * item has no effect.
       * 
       * This can be useful for setting up constraints for IDs of the new assets. For example, by
       * providing an initial [`NextAssetId`] and using the [`crate::AutoIncAssetId`] callback, an
       * auto-increment model can be applied to all new asset IDs.
       * 
       * The initial next asset ID can be set using the [`GenesisConfig`] or the
       * [SetNextAssetId](`migration::next_asset_id::SetNextAssetId`) migration.
       **/
      nextAssetId: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * RawMetadata of an asset.
       **/
      rawMetadata: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<PalletAssetsRawAssetMetadata>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    aura: {
      /**
       * The current authority set.
       **/
      authorities: AugmentedQuery<ApiType, () => Observable<Vec<SpConsensusAuraSr25519AppSr25519Public>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current slot of this block.
       * 
       * This will be set in `on_initialize`.
       **/
      currentSlot: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    auraExt: {
      /**
       * Serves as cache for the authorities.
       * 
       * The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
       * but we require the old authorities to verify the seal when validating a PoV. This will
       * always be updated to the latest AuRa authorities in `on_finalize`.
       **/
      authorities: AugmentedQuery<ApiType, () => Observable<Vec<SpConsensusAuraSr25519AppSr25519Public>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Current slot paired with a number of authored blocks.
       * 
       * Updated on each block initialization.
       **/
      slotInfo: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[u64, u32]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    authorship: {
      /**
       * Author of current block.
       **/
      author: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    balances: {
      /**
       * The Balances pallet example of storing the balance of an account.
       * 
       * # Example
       * 
       * ```nocompile
       * impl pallet_balances::Config for Runtime {
       * type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
       * }
       * ```
       * 
       * You can also store the balance of an account in the `System` pallet.
       * 
       * # Example
       * 
       * ```nocompile
       * impl pallet_balances::Config for Runtime {
       * type AccountStore = System
       * }
       * ```
       * 
       * But this comes with tradeoffs, storing account balances in the system pallet stores
       * `frame_system` data alongside the account data contrary to storing account balances in the
       * `Balances` pallet, which uses a `StorageMap` to store balances data only.
       * NOTE: This is only used in the case that this pallet is used to store balances.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletBalancesAccountData>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Freeze locks on account balances.
       **/
      freezes: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<FrameSupportTokensMiscIdAmount>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Holds on account balances.
       **/
      holds: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<{
    readonly id: TraitAssetHubRuntimeRuntimeHoldReason;
    readonly amount: u128;
  } & Struct>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The total units of outstanding deactivated balance in the system.
       **/
      inactiveIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Any liquidity locks on some account balances.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       * 
       * Use of locks is deprecated in favour of freezes. See `https://github.com/paritytech/substrate/pull/12951/`
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesBalanceLock>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Named reserves on some account balances.
       * 
       * Use of reserves is deprecated in favour of holds. See `https://github.com/paritytech/substrate/pull/12951/`
       **/
      reserves: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesReserveData>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The total units issued in the system.
       **/
      totalIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    collatorSelection: {
      /**
       * Fixed amount to deposit to become a collator.
       * 
       * When a collator calls `leave_intent` they immediately receive the deposit back.
       **/
      candidacyBond: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The (community, limited) collation candidates. `Candidates` and `Invulnerables` should be
       * mutually exclusive.
       * 
       * This list is sorted in ascending order by deposit and when the deposits are equal, the least
       * recently updated is considered greater.
       **/
      candidateList: AugmentedQuery<ApiType, () => Observable<Vec<PalletCollatorSelectionCandidateInfo>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Desired number of candidates.
       * 
       * This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
       **/
      desiredCandidates: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The invulnerable, permissioned collators. This list must be sorted.
       **/
      invulnerables: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Last block authored by collator.
       **/
      lastAuthoredBlock: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<u32>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    messageQueue: {
      /**
       * The index of the first and last (non-empty) pages.
       **/
      bookStateFor: AugmentedQuery<ApiType, (arg: CumulusPrimitivesCoreAggregateMessageOrigin | { Here: any } | { Parent: any } | { Sibling: any } | string | Uint8Array) => Observable<PalletMessageQueueBookState>, [CumulusPrimitivesCoreAggregateMessageOrigin]> & QueryableStorageEntry<ApiType, [CumulusPrimitivesCoreAggregateMessageOrigin]>;
      /**
       * The map of page indices to pages.
       **/
      pages: AugmentedQuery<ApiType, (arg1: CumulusPrimitivesCoreAggregateMessageOrigin | { Here: any } | { Parent: any } | { Sibling: any } | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletMessageQueuePage>>, [CumulusPrimitivesCoreAggregateMessageOrigin, u32]> & QueryableStorageEntry<ApiType, [CumulusPrimitivesCoreAggregateMessageOrigin, u32]>;
      /**
       * The origin at which we should begin servicing.
       **/
      serviceHead: AugmentedQuery<ApiType, () => Observable<Option<CumulusPrimitivesCoreAggregateMessageOrigin>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    multisig: {
      /**
       * The set of open multisig operations.
       **/
      multisigs: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: U8aFixed | string | Uint8Array) => Observable<Option<PalletMultisigMultisig>>, [AccountId32, U8aFixed]> & QueryableStorageEntry<ApiType, [AccountId32, U8aFixed]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    nfts: {
      /**
       * The items held by any given account; set out this way so that items owned by a single
       * account can be enumerated.
       **/
      account: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array, arg3: u32 | AnyNumber | Uint8Array) => Observable<Option<Null>>, [AccountId32, u32, u32]> & QueryableStorageEntry<ApiType, [AccountId32, u32, u32]>;
      /**
       * Attributes of a collection.
       **/
      attribute: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: Option<u32> | null | Uint8Array | u32 | AnyNumber, arg3: PalletNftsAttributeNamespace | { Pallet: any } | { CollectionOwner: any } | { ItemOwner: any } | { Account: any } | string | Uint8Array, arg4: Bytes | string | Uint8Array) => Observable<Option<ITuple<[Bytes, PalletNftsAttributeDeposit]>>>, [u32, Option<u32>, PalletNftsAttributeNamespace, Bytes]> & QueryableStorageEntry<ApiType, [u32, Option<u32>, PalletNftsAttributeNamespace, Bytes]>;
      /**
       * Details of a collection.
       **/
      collection: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletNftsCollectionDetails>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The collections owned by any given account; set out this way so that collections owned by
       * a single account can be enumerated.
       **/
      collectionAccount: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<Null>>, [AccountId32, u32]> & QueryableStorageEntry<ApiType, [AccountId32, u32]>;
      /**
       * Config of a collection.
       **/
      collectionConfigOf: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletNftsCollectionConfig>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Metadata of a collection.
       **/
      collectionMetadataOf: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletNftsCollectionMetadata>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The items in existence and their ownership details.
       * Stores collection roles as per account.
       **/
      collectionRoleOf: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<u8>>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
      /**
       * The items in existence and their ownership details.
       **/
      item: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletNftsItemDetails>>, [u32, u32]> & QueryableStorageEntry<ApiType, [u32, u32]>;
      /**
       * Item attribute approvals.
       **/
      itemAttributesApprovalsOf: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<BTreeSet<AccountId32>>, [u32, u32]> & QueryableStorageEntry<ApiType, [u32, u32]>;
      /**
       * Config of an item.
       **/
      itemConfigOf: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletNftsItemConfig>>, [u32, u32]> & QueryableStorageEntry<ApiType, [u32, u32]>;
      /**
       * Metadata of an item.
       **/
      itemMetadataOf: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletNftsItemMetadata>>, [u32, u32]> & QueryableStorageEntry<ApiType, [u32, u32]>;
      /**
       * A price of an item.
       **/
      itemPriceOf: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u128, Option<AccountId32>]>>>, [u32, u32]> & QueryableStorageEntry<ApiType, [u32, u32]>;
      /**
       * Stores the `CollectionId` that is going to be used for the next collection.
       * This gets incremented whenever a new collection is created.
       **/
      nextCollectionId: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The collection, if any, of which an account is willing to take ownership.
       **/
      ownershipAcceptance: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<u32>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Handles all the pending swaps.
       **/
      pendingSwapOf: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletNftsPendingSwap>>, [u32, u32]> & QueryableStorageEntry<ApiType, [u32, u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    parachainInfo: {
      parachainId: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    parachainSystem: {
      /**
       * Storage field that keeps track of bandwidth used by the unincluded segment along with the
       * latest HRMP watermark. Used for limiting the acceptance of new blocks with
       * respect to relay chain constraints.
       **/
      aggregatedUnincludedSegment: AugmentedQuery<ApiType, () => Observable<Option<CumulusPalletParachainSystemUnincludedSegmentSegmentTracker>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The number of HRMP messages we observed in `on_initialize` and thus used that number for
       * announcing the weight of `on_initialize` and `on_finalize`.
       **/
      announcedHrmpMessagesPerCandidate: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * A custom head data that should be returned as result of `validate_block`.
       * 
       * See `Pallet::set_custom_validation_head_data` for more information.
       **/
      customValidationHeadData: AugmentedQuery<ApiType, () => Observable<Option<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Were the validation data set to notify the relay chain?
       **/
      didSetValidationCode: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The parachain host configuration that was obtained from the relay parent.
       * 
       * This field is meant to be updated each block with the validation data inherent. Therefore,
       * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
       * 
       * This data is also absent from the genesis.
       **/
      hostConfiguration: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV7AbridgedHostConfiguration>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * HRMP messages that were sent in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      hrmpOutboundMessages: AugmentedQuery<ApiType, () => Observable<Vec<PolkadotCorePrimitivesOutboundHrmpMessage>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * HRMP watermark that was set in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      hrmpWatermark: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The last downward message queue chain head we have observed.
       * 
       * This value is loaded before and saved after processing inbound downward messages carried
       * by the system inherent.
       **/
      lastDmqMqcHead: AugmentedQuery<ApiType, () => Observable<H256>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The message queue chain heads we have observed per each channel incoming channel.
       * 
       * This value is loaded before and saved after processing inbound downward messages carried
       * by the system inherent.
       **/
      lastHrmpMqcHeads: AugmentedQuery<ApiType, () => Observable<BTreeMap<u32, H256>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The relay chain block number associated with the last parachain block.
       * 
       * This is updated in `on_finalize`.
       **/
      lastRelayChainBlockNumber: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Validation code that is set by the parachain and is to be communicated to collator and
       * consequently the relay-chain.
       * 
       * This will be cleared in `on_initialize` of each new block if no other pallet already set
       * the value.
       **/
      newValidationCode: AugmentedQuery<ApiType, () => Observable<Option<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Upward messages that are still pending and not yet send to the relay chain.
       **/
      pendingUpwardMessages: AugmentedQuery<ApiType, () => Observable<Vec<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * In case of a scheduled upgrade, this storage field contains the validation code to be
       * applied.
       * 
       * As soon as the relay chain gives us the go-ahead signal, we will overwrite the
       * [`:code`][sp_core::storage::well_known_keys::CODE] which will result the next block process
       * with the new validation code. This concludes the upgrade process.
       **/
      pendingValidationCode: AugmentedQuery<ApiType, () => Observable<Bytes>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Number of downward messages processed in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      processedDownwardMessages: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The state proof for the last relay parent block.
       * 
       * This field is meant to be updated each block with the validation data inherent. Therefore,
       * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
       * 
       * This data is also absent from the genesis.
       **/
      relayStateProof: AugmentedQuery<ApiType, () => Observable<Option<SpTrieStorageProof>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The snapshot of some state related to messaging relevant to the current parachain as per
       * the relay parent.
       * 
       * This field is meant to be updated each block with the validation data inherent. Therefore,
       * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
       * 
       * This data is also absent from the genesis.
       **/
      relevantMessagingState: AugmentedQuery<ApiType, () => Observable<Option<CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The weight we reserve at the beginning of the block for processing DMP messages. This
       * overrides the amount set in the Config trait.
       **/
      reservedDmpWeightOverride: AugmentedQuery<ApiType, () => Observable<Option<SpWeightsWeightV2Weight>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The weight we reserve at the beginning of the block for processing XCMP messages. This
       * overrides the amount set in the Config trait.
       **/
      reservedXcmpWeightOverride: AugmentedQuery<ApiType, () => Observable<Option<SpWeightsWeightV2Weight>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Latest included block descendants the runtime accepted. In other words, these are
       * ancestors of the currently executing block which have not been included in the observed
       * relay-chain state.
       * 
       * The segment length is limited by the capacity returned from the [`ConsensusHook`] configured
       * in the pallet.
       **/
      unincludedSegment: AugmentedQuery<ApiType, () => Observable<Vec<CumulusPalletParachainSystemUnincludedSegmentAncestor>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Optional upgrade go-ahead signal from the relay-chain.
       * 
       * This storage item is a mirror of the corresponding value for the current parachain from the
       * relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
       * set after the inherent.
       **/
      upgradeGoAhead: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV7UpgradeGoAhead>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * An option which indicates if the relay-chain restricts signalling a validation code upgrade.
       * In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
       * candidate will be invalid.
       * 
       * This storage item is a mirror of the corresponding value for the current parachain from the
       * relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
       * set after the inherent.
       **/
      upgradeRestrictionSignal: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV7UpgradeRestriction>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The factor to multiply the base delivery fee by for UMP.
       **/
      upwardDeliveryFeeFactor: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Upward messages that were sent in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      upwardMessages: AugmentedQuery<ApiType, () => Observable<Vec<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The [`PersistedValidationData`] set for this block.
       * This value is expected to be set only once per block and it's never stored
       * in the trie.
       **/
      validationData: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV7PersistedValidationData>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    polkadotXcm: {
      /**
       * The existing asset traps.
       * 
       * Key is the blake2 256 hash of (origin, versioned `Assets`) pair. Value is the number of
       * times this pair has been trapped (usually just 1 if it exists at all).
       **/
      assetTraps: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<u32>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The current migration's stage, if any.
       **/
      currentMigration: AugmentedQuery<ApiType, () => Observable<Option<PalletXcmVersionMigrationStage>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Fungible assets which we know are locked on this chain.
       **/
      lockedFungibles: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<Vec<ITuple<[u128, XcmVersionedLocation]>>>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The ongoing queries.
       **/
      queries: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PalletXcmQueryStatus>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      /**
       * The latest available query index.
       **/
      queryCounter: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * If [`ShouldRecordXcm`] is set to true, then the last XCM program executed locally
       * will be stored here.
       * Runtime APIs can fetch the XCM that was executed by accessing this value.
       * 
       * Only relevant if this pallet is being used as the [`xcm_executor::traits::RecordXcm`]
       * implementation in the XCM executor configuration.
       **/
      recordedXcm: AugmentedQuery<ApiType, () => Observable<Option<Vec<StagingXcmV4Instruction>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Fungible assets which we know are locked on a remote chain.
       **/
      remoteLockedFungibles: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array, arg3: XcmVersionedAssetId | { V3: any } | { V4: any } | string | Uint8Array) => Observable<Option<PalletXcmRemoteLockedFungibleRecord>>, [u32, AccountId32, XcmVersionedAssetId]> & QueryableStorageEntry<ApiType, [u32, AccountId32, XcmVersionedAssetId]>;
      /**
       * Default version to encode XCM when latest version of destination is unknown. If `None`,
       * then the destinations whose XCM version is unknown are considered unreachable.
       **/
      safeXcmVersion: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Whether or not incoming XCMs (both executed locally and received) should be recorded.
       * Only one XCM program will be recorded at a time.
       * This is meant to be used in runtime APIs, and it's advised it stays false
       * for all other use cases, so as to not degrade regular performance.
       * 
       * Only relevant if this pallet is being used as the [`xcm_executor::traits::RecordXcm`]
       * implementation in the XCM executor configuration.
       **/
      shouldRecordXcm: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The Latest versions that we know various locations support.
       **/
      supportedVersion: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array) => Observable<Option<u32>>, [u32, XcmVersionedLocation]> & QueryableStorageEntry<ApiType, [u32, XcmVersionedLocation]>;
      /**
       * Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
       * the `u32` counter is the number of times that a send to the destination has been attempted,
       * which is used as a prioritization.
       **/
      versionDiscoveryQueue: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[XcmVersionedLocation, u32]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * All locations that we have requested version notifications from.
       **/
      versionNotifiers: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array) => Observable<Option<u64>>, [u32, XcmVersionedLocation]> & QueryableStorageEntry<ApiType, [u32, XcmVersionedLocation]>;
      /**
       * The target locations that are subscribed to our version changes, as well as the most recent
       * of our versions we informed them of.
       **/
      versionNotifyTargets: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array) => Observable<Option<ITuple<[u64, SpWeightsWeightV2Weight, u32]>>>, [u32, XcmVersionedLocation]> & QueryableStorageEntry<ApiType, [u32, XcmVersionedLocation]>;
      /**
       * Global suspension state of the XCM executor.
       **/
      xcmExecutionSuspended: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    priceIndex: {
      priceIndexStorage: AugmentedQuery<ApiType, () => Observable<Option<PalletPriceIndexPriceIndexStorageValue>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    session: {
      /**
       * Current index of the session.
       **/
      currentIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Indices of disabled validators.
       * 
       * The vec is always kept sorted so that we can find whether a given validator is
       * disabled using binary search. It gets cleared when `on_session_ending` returns
       * a new set of identities.
       **/
      disabledValidators: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The owner of a key. The key is the `KeyTypeId` + the encoded key.
       **/
      keyOwner: AugmentedQuery<ApiType, (arg: ITuple<[SpCoreCryptoKeyTypeId, Bytes]> | [SpCoreCryptoKeyTypeId | string | Uint8Array, Bytes | string | Uint8Array]) => Observable<Option<AccountId32>>, [ITuple<[SpCoreCryptoKeyTypeId, Bytes]>]> & QueryableStorageEntry<ApiType, [ITuple<[SpCoreCryptoKeyTypeId, Bytes]>]>;
      /**
       * The next session keys for a validator.
       **/
      nextKeys: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<TraitAssetHubRuntimeSessionKeys>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * True if the underlying economic identities or weighting behind the validators
       * has changed in the queued validator set.
       **/
      queuedChanged: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The queued keys for the next session. When the next session begins, these keys
       * will be used to determine the validator's session keys.
       **/
      queuedKeys: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AccountId32, TraitAssetHubRuntimeSessionKeys]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current set of validators.
       **/
      validators: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    sudo: {
      /**
       * The `AccountId` of the sudo key.
       **/
      key: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    system: {
      /**
       * The full account information for a particular account ID.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<FrameSystemAccountInfo>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Total length (in bytes) for all extrinsics put together, for the current block.
       **/
      allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * `Some` if a code upgrade has been authorized.
       **/
      authorizedUpgrade: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemCodeUpgradeAuthorization>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Map of block numbers to block hashes.
       **/
      blockHash: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<H256>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The current weight for the block.
       **/
      blockWeight: AugmentedQuery<ApiType, () => Observable<FrameSupportDispatchPerDispatchClassWeight>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Digest of the current block, also part of the block header.
       **/
      digest: AugmentedQuery<ApiType, () => Observable<SpRuntimeDigest>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The number of events in the `Events<T>` list.
       **/
      eventCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Events deposited for the current block.
       * 
       * NOTE: The item is unbound and should therefore never be read on chain.
       * It could otherwise inflate the PoV size of a block.
       * 
       * Events have a large in-memory size. Box the events to not go out-of-memory
       * just in case someone still reads them from within the runtime.
       **/
      events: AugmentedQuery<ApiType, () => Observable<Vec<FrameSystemEventRecord>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Mapping between a topic (represented by T::Hash) and a vector of indexes
       * of events in the `<Events<T>>` list.
       * 
       * All topic vectors have deterministic storage locations depending on the topic. This
       * allows light-clients to leverage the changes trie storage tracking mechanism and
       * in case of changes fetch the list of events of interest.
       * 
       * The value has the type `(BlockNumberFor<T>, EventIndex)` because if we used only just
       * the `EventIndex` then in case if the topic has the same contents on the next block
       * no notification will be triggered thus the event might be lost.
       **/
      eventTopics: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Vec<ITuple<[u32, u32]>>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The execution phase of the block.
       **/
      executionPhase: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemPhase>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Total extrinsics count for the current block.
       **/
      extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Extrinsics data for the current block (maps an extrinsic's index to its data).
       **/
      extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Whether all inherents have been applied.
       **/
      inherentsApplied: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
       **/
      lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemLastRuntimeUpgradeInfo>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current block number being processed. Set by `execute_block`.
       **/
      number: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Hash of the previous block.
       **/
      parentHash: AugmentedQuery<ApiType, () => Observable<H256>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
       * (default) if not.
       **/
      upgradedToTripleRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
       **/
      upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    timestamp: {
      /**
       * Whether the timestamp has been updated in this block.
       * 
       * This value is updated to `true` upon successful submission of a timestamp by a node.
       * It is then checked at the end of each block execution in the `on_finalize` hook.
       **/
      didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current time for the current block.
       **/
      now: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    transactionPayment: {
      nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      storageVersion: AugmentedQuery<ApiType, () => Observable<PalletTransactionPaymentReleases>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    userFreeTransactions: {
      /**
       * Mapping of app agents to their blacklisted accounts.
       * For every blocked account, stored as AppAgentId, BlockedAddress
       * Stored as a storage double map for faster retreival
       **/
      appAgentBlacklistStorage: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<bool>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
      /**
       * Mapping of app agents to their free transfer history.
       **/
      appAgentFreeTransfersInfoStorage: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletUserFreeTransactionsScoreFreeTransfersAccountInfo>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Stores the amount of assets that were received by the account via free transfers.
       **/
      assetTransferLocksStorage: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<PalletUserFreeTransactionsTransfersTimedBalanceLocks>>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
      /**
       * Stores the amount of native tokens that were received by the account via free transfers.
       **/
      balanceTransferLocksStorage: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletUserFreeTransactionsTransfersTimedBalanceLocks>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Mapping of blacklisted accounts.
       **/
      blacklistStorage: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<bool>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The block treshold values used to determine
       * if a free transfer is eligible to be included into the block
       **/
      blockThresholdScoreStorage: AugmentedQuery<ApiType, () => Observable<PalletUserFreeTransactionsScoreBlockThresholdScoreInfo>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Global setting to enable or disable free transfers.
       **/
      freeTransfersEnabledStorage: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Counter of the number of free transfers inincluded into the current block
       **/
      freeTransfersInPastBlocksStorage: AugmentedQuery<ApiType, () => Observable<PalletUserFreeTransactionsScoreFreeTransfersInPastBlocksStorageValue>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Counter of the number of free transfers processed in the current block
       **/
      freeTransfersProcessedInCurrentBlockStorage: AugmentedQuery<ApiType, () => Observable<PalletUserFreeTransactionsScoreFreeTransfersInBlockStorageValue>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Mapping of NFTs transferred to their last recorded free transfer block
       **/
      nftLastTransferStorage: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletUserFreeTransactionsTransfersNftLastTransferStorageValue>>, [u32, u32]> & QueryableStorageEntry<ApiType, [u32, u32]>;
      /**
       * Mapping of accounts to their free transfer history.
       **/
      userFreeTransfersInfoStorage: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletUserFreeTransactionsScoreFreeTransfersAccountInfo>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    userVerification: {
      userLevelsStorage: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletUserVerificationUserLevelStorageValue>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    vesting: {
      /**
       * Storage version of the pallet.
       * 
       * New networks start with latest version, as determined by the genesis build.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<PalletVestingReleases>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Information regarding the vesting of a given account.
       **/
      vesting: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<Vec<PalletVestingVestingInfo>>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    xcmpQueue: {
      /**
       * The factor to multiply the base delivery fee by.
       **/
      deliveryFeeFactor: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u128>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The suspended inbound XCMP channels. All others are not suspended.
       * 
       * This is a `StorageValue` instead of a `StorageMap` since we expect multiple reads per block
       * to different keys with a one byte payload. The access to `BoundedBTreeSet` will be cached
       * within the block and therefore only included once in the proof size.
       * 
       * NOTE: The PoV benchmarking cannot know this and will over-estimate, but the actual proof
       * will be smaller.
       **/
      inboundXcmpSuspended: AugmentedQuery<ApiType, () => Observable<BTreeSet<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The messages outbound in a given XCMP channel.
       **/
      outboundXcmpMessages: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u16 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32, u16]> & QueryableStorageEntry<ApiType, [u32, u16]>;
      /**
       * The non-empty XCMP channels in order of becoming non-empty, and the index of the first
       * and last outbound message. If the two indices are equal, then it indicates an empty
       * queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
       * than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
       * case of the need to send a high-priority signal message this block.
       * The bool is true if there is a signal message waiting to be sent.
       **/
      outboundXcmpStatus: AugmentedQuery<ApiType, () => Observable<Vec<CumulusPalletXcmpQueueOutboundChannelDetails>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The configuration which controls the dynamics of the outbound queue.
       **/
      queueConfig: AugmentedQuery<ApiType, () => Observable<CumulusPalletXcmpQueueQueueConfigData>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
       **/
      queueSuspended: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Any signal messages waiting to be sent.
       **/
      signalMessages: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
  } // AugmentedQueries
} // declare module
