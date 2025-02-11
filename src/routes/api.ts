/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import {  fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SubmitTransactionsController } from './../controllers/Transaction';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "TransactionSuccessResponse": {
        "dataType": "refObject",
        "properties": {
            "status": {"dataType":"string","required":true},
            "tx_hash": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionErrorResponse": {
        "dataType": "refObject",
        "properties": {
            "status": {"dataType":"string","required":true},
            "error_code": {"dataType":"double"},
            "error_description": {"dataType":"string"},
            "error_details": {"dataType":"any"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionResponse": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"TransactionSuccessResponse"},{"ref":"TransactionErrorResponse"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.BalancesTransfer": {
        "dataType": "refEnum",
        "enums": ["balances.transferAllowDeath"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BlockchainGenericAccount": {
        "dataType": "refAlias",
        "type": {"dataType":"string","validators":{"minLength":{"value":49},"maxLength":{"value":49}}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BlockchainGenericAccountId": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"ref":"BlockchainGenericAccount","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UINT128": {
        "dataType": "refAlias",
        "type": {"dataType":"string","validators":{"pattern":{"value":"^\\d{1,39}$"}}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BlockchainGenericBalance": {
        "dataType": "refAlias",
        "type": {"ref":"UINT128","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AnyJson": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"double"},{"dataType":"boolean"},{"dataType":"enum","enums":[null]},{"dataType":"undefined"},{"dataType":"array","array":{"dataType":"refAlias","ref":"AnyJson"}},{"dataType":"nestedObjectLiteral","nestedProperties":{},"additionalProperties":{"ref":"AnyJson"}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Record_string.AnyJson_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{},"additionalProperties":{"ref":"AnyJson"},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BalancesTransferArgs": {
        "dataType": "refObject",
        "properties": {
            "dest": {"ref":"BlockchainGenericAccountId","required":true},
            "value": {"ref":"BlockchainGenericBalance","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppAgentsAddAdmin": {
        "dataType": "refEnum",
        "enums": ["appAgents.addAdmin"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppAgentsAddAdminToNamedAddress": {
        "dataType": "refEnum",
        "enums": ["appAgents.addAdminToNamedAddressDispatch"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppAgentsAllowAdminColdWallet": {
        "dataType": "refEnum",
        "enums": ["appAgents.allowAdminColdWalletDispatch"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppAgentsChangeHotWallet": {
        "dataType": "refEnum",
        "enums": ["appAgents.changeHotWallet"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppAgentsChangeOwnerCancel": {
        "dataType": "refEnum",
        "enums": ["appAgents.changeOwnerCancel"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppAgentsChangeOwnerComplete": {
        "dataType": "refEnum",
        "enums": ["appAgents.changeOwnerComplete"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppAgentsChangeOwnerInit": {
        "dataType": "refEnum",
        "enums": ["appAgents.changeOwnerInit"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppAgentsClearAdminDispatchFilter": {
        "dataType": "refEnum",
        "enums": ["appAgents.clearAdminDispatchFilter"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppAgentsClearAppAgentMetadata": {
        "dataType": "refEnum",
        "enums": ["appAgents.clearAppAgentMetadata"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppAgentsCompleteDestroyAppAgent": {
        "dataType": "refEnum",
        "enums": ["appAgents.completeDestroyAppAgent"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppAgentsCreateAppAgent": {
        "dataType": "refEnum",
        "enums": ["appAgents.createAppAgent"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppAgentsDisableAdminColdWalletDispatch": {
        "dataType": "refEnum",
        "enums": ["appAgents.disableAdminColdWalletDispatch"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppAgentsDisableHotWallet": {
        "dataType": "refEnum",
        "enums": ["appAgents.disableHotWallet"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppAgentsEnableHotWallet": {
        "dataType": "refEnum",
        "enums": ["appAgents.enableHotWallet"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppAgentsInitiateDestroyAppAgent": {
        "dataType": "refEnum",
        "enums": ["appAgents.initiateDestroyAppAgent"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppAgentsPauseAppAgent": {
        "dataType": "refEnum",
        "enums": ["appAgents.pauseAppAgent"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppAgentsProcessDestroy": {
        "dataType": "refEnum",
        "enums": ["appAgents.processDestroy"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppAgentsReactivateAppAgent": {
        "dataType": "refEnum",
        "enums": ["appAgents.reactivateAppAgent"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppAgentsRemoveAdmin": {
        "dataType": "refEnum",
        "enums": ["appAgents.removeAdmin"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppAgentsRemoveAdminFromNamedAddressDispatch": {
        "dataType": "refEnum",
        "enums": ["appAgents.removeAdminFromNamedAddressDispatch"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppAgentsSetAdminDispatchFilter": {
        "dataType": "refEnum",
        "enums": ["appAgents.setAdminDispatchFilter"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppAgentsSetAppAgentMetadata": {
        "dataType": "refEnum",
        "enums": ["appAgents.setAppAgentMetadata"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppAgentsUnpauseAppAgent": {
        "dataType": "refEnum",
        "enums": ["appAgents.unpauseAppAgent"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppSubscriptionsSetAppPayOnDemandMode": {
        "dataType": "refEnum",
        "enums": ["appSubscriptions.setAppPayOnDemandMode"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppSubscriptionsSetAppSubscriptionTier": {
        "dataType": "refEnum",
        "enums": ["appSubscriptions.setAppSubscriptionTier"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppTransferFiltersBlockAddressDeposits": {
        "dataType": "refEnum",
        "enums": ["appTransferFilters.blockAddressDeposits"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppTransferFiltersSetAppDepositPermissions": {
        "dataType": "refEnum",
        "enums": ["appTransferFilters.setAppDepositPermissions"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppTransferFiltersUnblockAddressDeposits": {
        "dataType": "refEnum",
        "enums": ["appTransferFilters.unblockAddressDeposits"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AssetsTransfer": {
        "dataType": "refEnum",
        "enums": ["assets.transfer"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AssetsTransferKeepAlive": {
        "dataType": "refEnum",
        "enums": ["assets.transferKeepAlive"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.BalancesTransferKeepAlive": {
        "dataType": "refEnum",
        "enums": ["balances.transferKeepAlive"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.BalancesTransferAll": {
        "dataType": "refEnum",
        "enums": ["balances.transferAll"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.NftsTransferItem": {
        "dataType": "refEnum",
        "enums": ["nfts.transfer"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TxType": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"ExtrinsicType.AppAgentsAddAdmin"},{"ref":"ExtrinsicType.AppAgentsAddAdminToNamedAddress"},{"ref":"ExtrinsicType.AppAgentsAllowAdminColdWallet"},{"ref":"ExtrinsicType.AppAgentsChangeHotWallet"},{"ref":"ExtrinsicType.AppAgentsChangeOwnerCancel"},{"ref":"ExtrinsicType.AppAgentsChangeOwnerComplete"},{"ref":"ExtrinsicType.AppAgentsChangeOwnerInit"},{"ref":"ExtrinsicType.AppAgentsClearAdminDispatchFilter"},{"ref":"ExtrinsicType.AppAgentsClearAppAgentMetadata"},{"ref":"ExtrinsicType.AppAgentsCompleteDestroyAppAgent"},{"ref":"ExtrinsicType.AppAgentsCreateAppAgent"},{"ref":"ExtrinsicType.AppAgentsDisableAdminColdWalletDispatch"},{"ref":"ExtrinsicType.AppAgentsDisableHotWallet"},{"ref":"ExtrinsicType.AppAgentsEnableHotWallet"},{"ref":"ExtrinsicType.AppAgentsInitiateDestroyAppAgent"},{"ref":"ExtrinsicType.AppAgentsPauseAppAgent"},{"ref":"ExtrinsicType.AppAgentsProcessDestroy"},{"ref":"ExtrinsicType.AppAgentsReactivateAppAgent"},{"ref":"ExtrinsicType.AppAgentsRemoveAdmin"},{"ref":"ExtrinsicType.AppAgentsRemoveAdminFromNamedAddressDispatch"},{"ref":"ExtrinsicType.AppAgentsSetAdminDispatchFilter"},{"ref":"ExtrinsicType.AppAgentsSetAppAgentMetadata"},{"ref":"ExtrinsicType.AppAgentsUnpauseAppAgent"},{"ref":"ExtrinsicType.AppSubscriptionsSetAppPayOnDemandMode"},{"ref":"ExtrinsicType.AppSubscriptionsSetAppSubscriptionTier"},{"ref":"ExtrinsicType.AppTransferFiltersBlockAddressDeposits"},{"ref":"ExtrinsicType.AppTransferFiltersSetAppDepositPermissions"},{"ref":"ExtrinsicType.AppTransferFiltersUnblockAddressDeposits"},{"ref":"ExtrinsicType.AssetsTransfer"},{"ref":"ExtrinsicType.AssetsTransferKeepAlive"},{"ref":"ExtrinsicType.BalancesTransfer"},{"ref":"ExtrinsicType.BalancesTransferKeepAlive"},{"ref":"ExtrinsicType.BalancesTransferAll"},{"ref":"ExtrinsicType.NftsTransferItem"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BalancesTransferKeepAliveArgs": {
        "dataType": "refObject",
        "properties": {
            "dest": {"ref":"BlockchainGenericAccountId","required":true},
            "value": {"ref":"BlockchainGenericBalance","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BlockchainGenericBoolean": {
        "dataType": "refAlias",
        "type": {"dataType":"boolean","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BalancesTransferAllArgs": {
        "dataType": "refObject",
        "properties": {
            "dest": {"ref":"BlockchainGenericAccountId","required":true},
            "keepAlive": {"ref":"BlockchainGenericBoolean","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UINT32": {
        "dataType": "refAlias",
        "type": {"dataType":"integer","validators":{"minimum":{"value":0},"maximum":{"value":4294967295}}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BlockchainGenericId": {
        "dataType": "refAlias",
        "type": {"ref":"UINT32","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsTransferArgs": {
        "dataType": "refObject",
        "properties": {
            "id": {"ref":"BlockchainGenericId","required":true},
            "target": {"ref":"BlockchainGenericAccountId","required":true},
            "amount": {"ref":"BlockchainGenericBalance","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsTransferKeepAliveArgs": {
        "dataType": "refObject",
        "properties": {
            "id": {"ref":"BlockchainGenericId","required":true},
            "target": {"ref":"BlockchainGenericAccountId","required":true},
            "amount": {"ref":"BlockchainGenericBalance","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsTransferItemArgs": {
        "dataType": "refObject",
        "properties": {
            "collection": {"ref":"BlockchainGenericId","required":true},
            "item": {"ref":"BlockchainGenericId","required":true},
            "dest": {"ref":"BlockchainGenericAccountId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsCreateAppAgentArgs": {
        "dataType": "refObject",
        "properties": {
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsInitiateDestroyAppAgentArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OwnFungibleDestroyDetail": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"finishDestroy":{"ref":"BlockchainGenericBoolean","required":true},"approvals":{"ref":"UINT32","required":true},"accounts":{"ref":"UINT32","required":true},"id":{"ref":"BlockchainGenericId","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OwnNonFungibleDestroyDetail": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"finishDestroy":{"ref":"BlockchainGenericBoolean","required":true},"items":{"dataType":"array","array":{"dataType":"refAlias","ref":"BlockchainGenericId"},"required":true},"collectionId":{"ref":"BlockchainGenericId","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FungibleDestroyDetail": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"approvals":{"ref":"UINT32","required":true},"accounts":{"ref":"UINT32","required":true},"id":{"ref":"BlockchainGenericId","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NonFungibleDestroyDetail": {
        "dataType": "refAlias",
        "type": {"dataType":"array","array":{"dataType":"refAlias","ref":"UINT32"},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PoolAddressDestroyInfo": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"nonFungibles":{"dataType":"array","array":{"dataType":"refAlias","ref":"NonFungibleDestroyDetail"},"required":true},"fungibles":{"dataType":"array","array":{"dataType":"refAlias","ref":"FungibleDestroyDetail"},"required":true},"address":{"ref":"BlockchainGenericAccount","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentDestroyInfo": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"appAgentNonFungibles":{"dataType":"array","array":{"dataType":"refAlias","ref":"NonFungibleDestroyDetail"},"required":true},"appAgentFungibles":{"dataType":"array","array":{"dataType":"refAlias","ref":"FungibleDestroyDetail"},"required":true},"controlledAddressesInfos":{"dataType":"array","array":{"dataType":"refAlias","ref":"PoolAddressDestroyInfo"},"required":true},"ownNonFungibles":{"dataType":"array","array":{"dataType":"refAlias","ref":"OwnNonFungibleDestroyDetail"},"required":true},"ownFungibles":{"dataType":"array","array":{"dataType":"refAlias","ref":"OwnFungibleDestroyDetail"},"required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsProcessDestroyArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "destroyInfo": {"ref":"AppAgentDestroyInfo","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsCompleteDestroyAppAgentArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "destroyInfos": {"ref":"AppAgentDestroyInfo","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsReactivateAppAgentArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsPauseAppAgentArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsUnpauseAppAgentArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsChangeOwnerInitArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "proposedOwner": {"ref":"BlockchainGenericAccount","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsChangeOwnerCompleteArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsChangeOwnerCancelArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BlockchainGenericText": {
        "dataType": "refAlias",
        "type": {"dataType":"string","validators":{"maxLength":{"value":256}}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsSetAppAgentMetadataArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "data": {"ref":"BlockchainGenericText","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsClearAppAgentMetadataArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsEnableHotWalletArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsDisableHotWalletArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BlockchainAddressName": {
        "dataType": "refAlias",
        "type": {"dataType":"string","validators":{"minLength":{"value":10},"maxLength":{"value":10},"pattern":{"value":"^[0-9a-zA-Z\\-#]+$"}}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NamedAddressInput": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"nestedObjectLiteral","nestedProperties":{"Address":{"ref":"BlockchainGenericAccount","required":true}}},{"dataType":"nestedObjectLiteral","nestedProperties":{"Name":{"ref":"BlockchainAddressName","required":true}}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsChangeHotWalletArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "newHotWallet": {"ref":"NamedAddressInput","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsAddAdminArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "admin": {"ref":"BlockchainGenericAccount","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsRemoveAdminArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "admin": {"ref":"BlockchainGenericAccount","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UINT64": {
        "dataType": "refAlias",
        "type": {"dataType":"long","validators":{"minimum":{"value":0},"maximum":{"value":18446744073709552000}}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsSetAdminDispatchFilterArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "admin": {"ref":"BlockchainGenericAccount","required":true},
            "newPermissions": {"ref":"UINT64","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsClearAdminDispatchFilterArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "admin": {"ref":"BlockchainGenericAccount","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsAllowAdminColdWalletArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "admin": {"ref":"BlockchainGenericAccount","required":true},
            "coldWallet": {"ref":"BlockchainGenericAccount","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsDisableAdminColdWalletDispatchArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "admin": {"ref":"BlockchainGenericAccount","required":true},
            "coldWallet": {"ref":"BlockchainGenericAccount","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsAddAdminToNamedAddressArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "admin": {"ref":"BlockchainGenericAccount","required":true},
            "namedAddress": {"ref":"BlockchainGenericAccount","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsRemoveAdminFromNamedAddressDispatchArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "admin": {"ref":"BlockchainGenericAccount","required":true},
            "namedAddress": {"ref":"BlockchainGenericAccount","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppSubscriptionsSetAppSubscriptionTierArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "subscriptionTierId": {"ref":"BlockchainGenericId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppPayOnDemandMode": {
        "dataType": "refEnum",
        "enums": ["AppAgent","Admin","Disabled"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppSubscriptionsSetAppPayOnDemandModeArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "payOnDemandMode": {"ref":"AppPayOnDemandMode","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppTransferFiltersBlockAddressDepositsArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "keylessAddress": {"ref":"BlockchainGenericAccount","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppTransferFiltersUnblockAddressDepositsArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "keylessAddress": {"ref":"BlockchainGenericAccount","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NativeDepositPermissionsDetails": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"maxDeposit":{"ref":"BlockchainGenericBalance"},"minDeposit":{"ref":"BlockchainGenericBalance"},"allowed":{"ref":"BlockchainGenericBoolean","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FungibleDepositAllowAll": {
        "dataType": "refAlias",
        "type": {"dataType":"enum","enums":["AllowAll"],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FungibleTokenDetails": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"maxDeposit":{"ref":"BlockchainGenericBalance"},"minDeposit":{"ref":"BlockchainGenericBalance"},"id":{"ref":"BlockchainGenericId","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FungibleDepositAllowFungible": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"AllowedFungibleTokens":{"dataType":"nestedObjectLiteral","nestedProperties":{"allowedTokens":{"dataType":"array","array":{"dataType":"refAlias","ref":"FungibleTokenDetails"},"required":true},"allowOwnTokens":{"ref":"BlockchainGenericBoolean","required":true}},"required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FungibleDepositDisallowFungible": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"DisallowedFungibleTokens":{"dataType":"nestedObjectLiteral","nestedProperties":{"disallowedTokens":{"dataType":"array","array":{"dataType":"refAlias","ref":"BlockchainGenericId"},"required":true}},"required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FungibleDepositPermissionsType": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"FungibleDepositAllowAll"},{"ref":"FungibleDepositAllowFungible"},{"ref":"FungibleDepositDisallowFungible"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsDepositAllowAll": {
        "dataType": "refAlias",
        "type": {"dataType":"enum","enums":["AllowAll"],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsDepositAllowNftCollections": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"AllowedNftCollections":{"dataType":"nestedObjectLiteral","nestedProperties":{"allowedCollections":{"dataType":"array","array":{"dataType":"refAlias","ref":"BlockchainGenericId"},"required":true},"allowOwnCollections":{"ref":"BlockchainGenericBoolean","required":true}},"required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsDepositDisallowNftCollections": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"DisallowedNftCollections":{"dataType":"nestedObjectLiteral","nestedProperties":{"disallowedCollections":{"dataType":"array","array":{"dataType":"refAlias","ref":"BlockchainGenericId"},"required":true}},"required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsDepositPermissionType": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"NftsDepositAllowAll"},{"ref":"NftsDepositAllowNftCollections"},{"ref":"NftsDepositDisallowNftCollections"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppDepositPermissions": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"nftCollections":{"ref":"NftsDepositPermissionType","required":true},"fungibles":{"ref":"FungibleDepositPermissionsType","required":true},"native":{"ref":"NativeDepositPermissionsDetails","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppTransferFiltersSetAppDepositPermissionsArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "permissions": {"ref":"AppDepositPermissions","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TxArgs": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"BalancesTransferArgs"},{"ref":"BalancesTransferKeepAliveArgs"},{"ref":"BalancesTransferAllArgs"},{"ref":"AssetsTransferArgs"},{"ref":"AssetsTransferKeepAliveArgs"},{"ref":"NftsTransferItemArgs"},{"ref":"AppAgentsCreateAppAgentArgs"},{"ref":"AppAgentsInitiateDestroyAppAgentArgs"},{"ref":"AppAgentsProcessDestroyArgs"},{"ref":"AppAgentsCompleteDestroyAppAgentArgs"},{"ref":"AppAgentsReactivateAppAgentArgs"},{"ref":"AppAgentsPauseAppAgentArgs"},{"ref":"AppAgentsUnpauseAppAgentArgs"},{"ref":"AppAgentsChangeOwnerInitArgs"},{"ref":"AppAgentsChangeOwnerCompleteArgs"},{"ref":"AppAgentsChangeOwnerCancelArgs"},{"ref":"AppAgentsSetAppAgentMetadataArgs"},{"ref":"AppAgentsClearAppAgentMetadataArgs"},{"ref":"AppAgentsEnableHotWalletArgs"},{"ref":"AppAgentsDisableHotWalletArgs"},{"ref":"AppAgentsChangeHotWalletArgs"},{"ref":"AppAgentsAddAdminArgs"},{"ref":"AppAgentsRemoveAdminArgs"},{"ref":"AppAgentsSetAdminDispatchFilterArgs"},{"ref":"AppAgentsClearAdminDispatchFilterArgs"},{"ref":"AppAgentsAllowAdminColdWalletArgs"},{"ref":"AppAgentsDisableAdminColdWalletDispatchArgs"},{"ref":"AppAgentsAddAdminToNamedAddressArgs"},{"ref":"AppAgentsRemoveAdminFromNamedAddressDispatchArgs"},{"ref":"AppSubscriptionsSetAppSubscriptionTierArgs"},{"ref":"AppSubscriptionsSetAppPayOnDemandModeArgs"},{"ref":"AppTransferFiltersBlockAddressDepositsArgs"},{"ref":"AppTransferFiltersUnblockAddressDepositsArgs"},{"ref":"AppTransferFiltersSetAppDepositPermissionsArgs"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BalancesTransferTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.BalancesTransfer","required":true},
            "arguments": {"ref":"BalancesTransferArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BalancesTransferKeepAliveTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.BalancesTransferKeepAlive","required":true},
            "arguments": {"ref":"BalancesTransferKeepAliveArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BalancesTransferAllTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.BalancesTransferAll","required":true},
            "arguments": {"ref":"BalancesTransferAllArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsTransferTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AssetsTransfer","required":true},
            "arguments": {"ref":"AssetsTransferArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsTransferKeepAliveTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AssetsTransferKeepAlive","required":true},
            "arguments": {"ref":"AssetsTransferKeepAliveArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsTransferItemTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.NftsTransferItem","required":true},
            "arguments": {"ref":"NftsTransferItemArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsCreateAppAgentTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppAgentsCreateAppAgent","required":true},
            "arguments": {"ref":"AppAgentsCreateAppAgentArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsInitiateDestroyAppAgentTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppAgentsInitiateDestroyAppAgent","required":true},
            "arguments": {"ref":"AppAgentsInitiateDestroyAppAgentArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsProcessDestroyTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppAgentsProcessDestroy","required":true},
            "arguments": {"ref":"AppAgentsProcessDestroyArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsCompleteDestroyAppAgentTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppAgentsCompleteDestroyAppAgent","required":true},
            "arguments": {"ref":"AppAgentsCompleteDestroyAppAgentArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsReactivateAppAgentTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppAgentsReactivateAppAgent","required":true},
            "arguments": {"ref":"AppAgentsReactivateAppAgentArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsPauseAppAgentTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppAgentsPauseAppAgent","required":true},
            "arguments": {"ref":"AppAgentsPauseAppAgentArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsUnpauseAppAgentTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppAgentsUnpauseAppAgent","required":true},
            "arguments": {"ref":"AppAgentsUnpauseAppAgentArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsChangeOwnerInitTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppAgentsChangeOwnerInit","required":true},
            "arguments": {"ref":"AppAgentsChangeOwnerInitArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsChangeOwnerCompleteTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppAgentsChangeOwnerComplete","required":true},
            "arguments": {"ref":"AppAgentsChangeOwnerCompleteArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsChangeOwnerCancelTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppAgentsChangeOwnerCancel","required":true},
            "arguments": {"ref":"AppAgentsChangeOwnerCancelArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsSetAppAgentMetadataTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppAgentsSetAppAgentMetadata","required":true},
            "arguments": {"ref":"AppAgentsSetAppAgentMetadataArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsClearAppAgentMetadataTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppAgentsClearAppAgentMetadata","required":true},
            "arguments": {"ref":"AppAgentsClearAppAgentMetadataArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsEnableHotWalletTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppAgentsEnableHotWallet","required":true},
            "arguments": {"ref":"AppAgentsEnableHotWalletArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsDisableHotWalletTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppAgentsDisableHotWallet","required":true},
            "arguments": {"ref":"AppAgentsDisableHotWalletArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsChangeHotWalletTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppAgentsChangeHotWallet","required":true},
            "arguments": {"ref":"AppAgentsChangeHotWalletArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsAddAdminTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppAgentsAddAdmin","required":true},
            "arguments": {"ref":"AppAgentsAddAdminArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsRemoveAdminTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppAgentsRemoveAdmin","required":true},
            "arguments": {"ref":"AppAgentsRemoveAdminArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsSetAdminDispatchFilterTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppAgentsSetAdminDispatchFilter","required":true},
            "arguments": {"ref":"AppAgentsSetAdminDispatchFilterArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsClearAdminDispatchFilterTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppAgentsClearAdminDispatchFilter","required":true},
            "arguments": {"ref":"AppAgentsClearAdminDispatchFilterArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsAllowAdminColdWalletTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppAgentsAllowAdminColdWallet","required":true},
            "arguments": {"ref":"AppAgentsAllowAdminColdWalletArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsDisableAdminColdWalletDispatchTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppAgentsDisableAdminColdWalletDispatch","required":true},
            "arguments": {"ref":"AppAgentsDisableAdminColdWalletDispatchArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsAddAdminToNamedAddressTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppAgentsAddAdminToNamedAddress","required":true},
            "arguments": {"ref":"AppAgentsAddAdminToNamedAddressArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsRemoveAdminFromNamedAddressDispatchTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppAgentsRemoveAdminFromNamedAddressDispatch","required":true},
            "arguments": {"ref":"AppAgentsRemoveAdminFromNamedAddressDispatchArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppSubscriptionsSetAppSubscriptionTierTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppSubscriptionsSetAppSubscriptionTier","required":true},
            "arguments": {"ref":"AppSubscriptionsSetAppSubscriptionTierArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppSubscriptionsSetAppPayOnDemandModeTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppSubscriptionsSetAppPayOnDemandMode","required":true},
            "arguments": {"ref":"AppSubscriptionsSetAppPayOnDemandModeArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppTransferFiltersBlockAddressDepositsTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppTransferFiltersBlockAddressDeposits","required":true},
            "arguments": {"ref":"AppTransferFiltersBlockAddressDepositsArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppTransferFiltersUnblockAddressDepositsTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppTransferFiltersUnblockAddressDeposits","required":true},
            "arguments": {"ref":"AppTransferFiltersUnblockAddressDepositsArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppTransferFiltersSetAppDepositPermissionsTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppTransferFiltersSetAppDepositPermissions","required":true},
            "arguments": {"ref":"AppTransferFiltersSetAppDepositPermissionsArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Tx": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"BalancesTransferTx"},{"ref":"BalancesTransferKeepAliveTx"},{"ref":"BalancesTransferAllTx"},{"ref":"AssetsTransferTx"},{"ref":"AssetsTransferKeepAliveTx"},{"ref":"NftsTransferItemTx"},{"ref":"AppAgentsCreateAppAgentTx"},{"ref":"AppAgentsInitiateDestroyAppAgentTx"},{"ref":"AppAgentsProcessDestroyTx"},{"ref":"AppAgentsCompleteDestroyAppAgentTx"},{"ref":"AppAgentsReactivateAppAgentTx"},{"ref":"AppAgentsPauseAppAgentTx"},{"ref":"AppAgentsUnpauseAppAgentTx"},{"ref":"AppAgentsChangeOwnerInitTx"},{"ref":"AppAgentsChangeOwnerCompleteTx"},{"ref":"AppAgentsChangeOwnerCancelTx"},{"ref":"AppAgentsSetAppAgentMetadataTx"},{"ref":"AppAgentsClearAppAgentMetadataTx"},{"ref":"AppAgentsEnableHotWalletTx"},{"ref":"AppAgentsDisableHotWalletTx"},{"ref":"AppAgentsChangeHotWalletTx"},{"ref":"AppAgentsAddAdminTx"},{"ref":"AppAgentsRemoveAdminTx"},{"ref":"AppAgentsSetAdminDispatchFilterTx"},{"ref":"AppAgentsClearAdminDispatchFilterTx"},{"ref":"AppAgentsAllowAdminColdWalletTx"},{"ref":"AppAgentsDisableAdminColdWalletDispatchTx"},{"ref":"AppAgentsAddAdminToNamedAddressTx"},{"ref":"AppAgentsRemoveAdminFromNamedAddressDispatchTx"},{"ref":"AppSubscriptionsSetAppSubscriptionTierTx"},{"ref":"AppSubscriptionsSetAppPayOnDemandModeTx"},{"ref":"AppTransferFiltersBlockAddressDepositsTx"},{"ref":"AppTransferFiltersUnblockAddressDepositsTx"},{"ref":"AppTransferFiltersSetAppDepositPermissionsTx"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionPayload": {
        "dataType": "refObject",
        "properties": {
            "signatory": {"dataType":"string","required":true},
            "tx": {"ref":"Tx","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BlockchainGenericAddressId": {
        "dataType": "refAlias",
        "type": {"ref":"UINT128","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTActionOrigin": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"nestedObjectLiteral","nestedProperties":{"AppAgentId":{"ref":"BlockchainGenericId","required":true}}},{"dataType":"nestedObjectLiteral","nestedProperties":{"AppAgentAddress":{"ref":"BlockchainGenericAccount","required":true}}},{"dataType":"nestedObjectLiteral","nestedProperties":{"TransactionalAddressId":{"ref":"BlockchainGenericAddressId","required":true}}},{"dataType":"nestedObjectLiteral","nestedProperties":{"TransactionalAddress":{"ref":"BlockchainGenericAccount","required":true}}},{"dataType":"nestedObjectLiteral","nestedProperties":{"NamedAddress":{"ref":"BlockchainGenericAccount","required":true}}},{"dataType":"nestedObjectLiteral","nestedProperties":{"NamedAddressName":{"ref":"BlockchainAddressName","required":true}}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppTransferChannelsEstablishTransferChannel": {
        "dataType": "refEnum",
        "enums": ["appTransferChannels.establishTransferChannel"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AppTransferChannelsRemoveTransferChannel": {
        "dataType": "refEnum",
        "enums": ["appTransferChannels.removeTransferChannel"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AssetsCreate": {
        "dataType": "refEnum",
        "enums": ["assets.create"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AssetsStartDestroy": {
        "dataType": "refEnum",
        "enums": ["assets.startDestroy"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AssetsDestroyAccounts": {
        "dataType": "refEnum",
        "enums": ["assets.destroyAccounts"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AssetsDestroyApprovals": {
        "dataType": "refEnum",
        "enums": ["assets.destroyApprovals"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AssetsFinishDestroy": {
        "dataType": "refEnum",
        "enums": ["assets.finishDestroy"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AssetsMint": {
        "dataType": "refEnum",
        "enums": ["assets.mint"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AssetsBurn": {
        "dataType": "refEnum",
        "enums": ["assets.burn"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AssetsForceTransfer": {
        "dataType": "refEnum",
        "enums": ["assets.forceTransfer"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AssetsFreezeAccount": {
        "dataType": "refEnum",
        "enums": ["assets.freeze"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AssetsThawAccount": {
        "dataType": "refEnum",
        "enums": ["assets.thaw"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AssetsFreezeAsset": {
        "dataType": "refEnum",
        "enums": ["assets.freezeAsset"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AssetsThawAsset": {
        "dataType": "refEnum",
        "enums": ["assets.thawAsset"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AssetsTransferOwnership": {
        "dataType": "refEnum",
        "enums": ["assets.transferOwnership"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AssetsSetMinBalance": {
        "dataType": "refEnum",
        "enums": ["assets.setMinBalance"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.AssetsSetMetadata": {
        "dataType": "refEnum",
        "enums": ["assets.setMetadata"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.NftsCreateCollection": {
        "dataType": "refEnum",
        "enums": ["nfts.create"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.NftsDestroyCollection": {
        "dataType": "refEnum",
        "enums": ["nfts.destroy"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.NftsTransferCollectionOwnership": {
        "dataType": "refEnum",
        "enums": ["nfts.transferOwnership"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.NftsAcceptCollectionOwnership": {
        "dataType": "refEnum",
        "enums": ["nfts.setAcceptOwnership"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.NftsSetCollectionMetadata": {
        "dataType": "refEnum",
        "enums": ["nfts.setCollectionMetadata"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.NftsClearCollectionMetadata": {
        "dataType": "refEnum",
        "enums": ["nfts.clearCollectionMetadata"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.NftsMintItem": {
        "dataType": "refEnum",
        "enums": ["nfts.mint"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.NftsBurnItem": {
        "dataType": "refEnum",
        "enums": ["nfts.burn"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.NftsLockItemTransfer": {
        "dataType": "refEnum",
        "enums": ["nfts.lockItemTransfer"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.NftsUnlockItemTransfer": {
        "dataType": "refEnum",
        "enums": ["nfts.unlockItemTransfer"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.NftsSetItemMetadata": {
        "dataType": "refEnum",
        "enums": ["nfts.setMetadata"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExtrinsicType.NftsClearItemMetadata": {
        "dataType": "refEnum",
        "enums": ["nfts.clearMetadata"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"ExtrinsicType.AppTransferChannelsEstablishTransferChannel"},{"ref":"ExtrinsicType.AppTransferChannelsRemoveTransferChannel"},{"ref":"ExtrinsicType.AssetsCreate"},{"ref":"ExtrinsicType.AssetsStartDestroy"},{"ref":"ExtrinsicType.AssetsDestroyAccounts"},{"ref":"ExtrinsicType.AssetsDestroyApprovals"},{"ref":"ExtrinsicType.AssetsFinishDestroy"},{"ref":"ExtrinsicType.AssetsMint"},{"ref":"ExtrinsicType.AssetsBurn"},{"ref":"ExtrinsicType.AssetsTransfer"},{"ref":"ExtrinsicType.AssetsTransferKeepAlive"},{"ref":"ExtrinsicType.AssetsForceTransfer"},{"ref":"ExtrinsicType.AssetsFreezeAccount"},{"ref":"ExtrinsicType.AssetsThawAccount"},{"ref":"ExtrinsicType.AssetsFreezeAsset"},{"ref":"ExtrinsicType.AssetsThawAsset"},{"ref":"ExtrinsicType.AssetsTransferOwnership"},{"ref":"ExtrinsicType.AssetsSetMinBalance"},{"ref":"ExtrinsicType.AssetsSetMetadata"},{"ref":"ExtrinsicType.BalancesTransfer"},{"ref":"ExtrinsicType.BalancesTransferKeepAlive"},{"ref":"ExtrinsicType.BalancesTransferAll"},{"ref":"ExtrinsicType.NftsCreateCollection"},{"ref":"ExtrinsicType.NftsDestroyCollection"},{"ref":"ExtrinsicType.NftsTransferCollectionOwnership"},{"ref":"ExtrinsicType.NftsAcceptCollectionOwnership"},{"ref":"ExtrinsicType.NftsSetCollectionMetadata"},{"ref":"ExtrinsicType.NftsClearCollectionMetadata"},{"ref":"ExtrinsicType.NftsMintItem"},{"ref":"ExtrinsicType.NftsBurnItem"},{"ref":"ExtrinsicType.NftsTransferItem"},{"ref":"ExtrinsicType.NftsLockItemTransfer"},{"ref":"ExtrinsicType.NftsUnlockItemTransfer"},{"ref":"ExtrinsicType.NftsSetItemMetadata"},{"ref":"ExtrinsicType.NftsClearItemMetadata"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsCreateArgs": {
        "dataType": "refObject",
        "properties": {
            "minBalance": {"ref":"BlockchainGenericBalance","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsStartDestroyArgs": {
        "dataType": "refObject",
        "properties": {
            "id": {"ref":"BlockchainGenericId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsDestroyAccountsArgs": {
        "dataType": "refObject",
        "properties": {
            "id": {"ref":"BlockchainGenericId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsDestroyApprovalsArgs": {
        "dataType": "refObject",
        "properties": {
            "id": {"ref":"BlockchainGenericId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsFinishDestroyArgs": {
        "dataType": "refObject",
        "properties": {
            "id": {"ref":"BlockchainGenericId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsMintArgs": {
        "dataType": "refObject",
        "properties": {
            "id": {"ref":"BlockchainGenericId","required":true},
            "beneficiary": {"ref":"BlockchainGenericAccountId","required":true},
            "amount": {"ref":"BlockchainGenericBalance","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsBurnArgs": {
        "dataType": "refObject",
        "properties": {
            "id": {"ref":"BlockchainGenericId","required":true},
            "who": {"ref":"BlockchainGenericAccountId","required":true},
            "amount": {"ref":"BlockchainGenericBalance","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsForceTransferArgs": {
        "dataType": "refObject",
        "properties": {
            "id": {"ref":"BlockchainGenericId","required":true},
            "source": {"ref":"BlockchainGenericAccountId","required":true},
            "dest": {"ref":"BlockchainGenericAccountId","required":true},
            "amount": {"ref":"BlockchainGenericBalance","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsFreezeAccountArgs": {
        "dataType": "refObject",
        "properties": {
            "id": {"ref":"BlockchainGenericId","required":true},
            "who": {"ref":"BlockchainGenericAccountId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsThawAccountArgs": {
        "dataType": "refObject",
        "properties": {
            "id": {"ref":"BlockchainGenericId","required":true},
            "who": {"ref":"BlockchainGenericAccountId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsFreezeAssetArgs": {
        "dataType": "refObject",
        "properties": {
            "id": {"ref":"BlockchainGenericId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsThawAssetArgs": {
        "dataType": "refObject",
        "properties": {
            "id": {"ref":"BlockchainGenericId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsTransferOwnershipArgs": {
        "dataType": "refObject",
        "properties": {
            "id": {"ref":"BlockchainGenericId","required":true},
            "owner": {"ref":"BlockchainGenericAccountId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsSetMetadataArgs": {
        "dataType": "refObject",
        "properties": {
            "id": {"ref":"BlockchainGenericId","required":true},
            "data": {"ref":"BlockchainGenericText","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsSetMinBalanceArgs": {
        "dataType": "refObject",
        "properties": {
            "id": {"ref":"BlockchainGenericId","required":true},
            "minBalance": {"ref":"BlockchainGenericBalance","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsCreateCollectionArgs": {
        "dataType": "refObject",
        "properties": {
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftWitness": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"attributes":{"ref":"UINT32","required":true},"itemConfigs":{"ref":"UINT32","required":true},"itemMetadatas":{"ref":"UINT32","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsDestroyCollectionArgs": {
        "dataType": "refObject",
        "properties": {
            "collection": {"ref":"BlockchainGenericId","required":true},
            "witness": {"ref":"NftWitness","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsMintItemArgs": {
        "dataType": "refObject",
        "properties": {
            "collection": {"ref":"BlockchainGenericId","required":true},
            "item": {"ref":"BlockchainGenericId","required":true},
            "mintTo": {"ref":"BlockchainGenericAccountId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsBurnItemArgs": {
        "dataType": "refObject",
        "properties": {
            "collection": {"ref":"BlockchainGenericId","required":true},
            "item": {"ref":"BlockchainGenericId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsLockItemTransferArgs": {
        "dataType": "refObject",
        "properties": {
            "collection": {"ref":"BlockchainGenericId","required":true},
            "item": {"ref":"BlockchainGenericId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsUnlockItemTransferArgs": {
        "dataType": "refObject",
        "properties": {
            "collection": {"ref":"BlockchainGenericId","required":true},
            "item": {"ref":"BlockchainGenericId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsTransferCollectionOwnershipArgs": {
        "dataType": "refObject",
        "properties": {
            "collection": {"ref":"BlockchainGenericId","required":true},
            "newOwner": {"ref":"BlockchainGenericAccountId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsSetItemMetadataArgs": {
        "dataType": "refObject",
        "properties": {
            "collection": {"ref":"BlockchainGenericId","required":true},
            "item": {"ref":"BlockchainGenericId","required":true},
            "data": {"ref":"BlockchainGenericText","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsClearItemMetadataArgs": {
        "dataType": "refObject",
        "properties": {
            "collection": {"ref":"BlockchainGenericId","required":true},
            "item": {"ref":"BlockchainGenericId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsSetCollectionMetadataArgs": {
        "dataType": "refObject",
        "properties": {
            "collection": {"ref":"BlockchainGenericId","required":true},
            "data": {"ref":"BlockchainGenericText","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsClearCollectionMetadataArgs": {
        "dataType": "refObject",
        "properties": {
            "collection": {"ref":"BlockchainGenericId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsAcceptCollectionOwnershipArgs": {
        "dataType": "refObject",
        "properties": {
            "maybeCollection": {"ref":"BlockchainGenericId"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppTransferChannelsEstablishTransferChannelArgs": {
        "dataType": "refObject",
        "properties": {
            "senderAccount": {"ref":"BlockchainGenericAccount","required":true},
            "transfersLimitResetPeriod": {"ref":"BlockchainGenericId","required":true},
            "transfersLimitPerPeriod": {"ref":"BlockchainGenericBalance","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppTransferChannelsRemoveTransferChannelArgs": {
        "dataType": "refObject",
        "properties": {
            "senderAccount": {"ref":"BlockchainGenericAccount","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionArgs": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"BalancesTransferArgs"},{"ref":"BalancesTransferKeepAliveArgs"},{"ref":"BalancesTransferAllArgs"},{"ref":"AssetsCreateArgs"},{"ref":"AssetsStartDestroyArgs"},{"ref":"AssetsDestroyAccountsArgs"},{"ref":"AssetsDestroyApprovalsArgs"},{"ref":"AssetsFinishDestroyArgs"},{"ref":"AssetsMintArgs"},{"ref":"AssetsBurnArgs"},{"ref":"AssetsTransferArgs"},{"ref":"AssetsTransferKeepAliveArgs"},{"ref":"AssetsForceTransferArgs"},{"ref":"AssetsFreezeAccountArgs"},{"ref":"AssetsThawAccountArgs"},{"ref":"AssetsFreezeAssetArgs"},{"ref":"AssetsThawAssetArgs"},{"ref":"AssetsTransferOwnershipArgs"},{"ref":"AssetsSetMetadataArgs"},{"ref":"AssetsSetMinBalanceArgs"},{"ref":"NftsCreateCollectionArgs"},{"ref":"NftsDestroyCollectionArgs"},{"ref":"NftsMintItemArgs"},{"ref":"NftsBurnItemArgs"},{"ref":"NftsTransferItemArgs"},{"ref":"NftsLockItemTransferArgs"},{"ref":"NftsUnlockItemTransferArgs"},{"ref":"NftsTransferCollectionOwnershipArgs"},{"ref":"NftsSetItemMetadataArgs"},{"ref":"NftsClearItemMetadataArgs"},{"ref":"NftsSetCollectionMetadataArgs"},{"ref":"NftsClearCollectionMetadataArgs"},{"ref":"NftsAcceptCollectionOwnershipArgs"},{"ref":"AppTransferChannelsEstablishTransferChannelArgs"},{"ref":"AppTransferChannelsRemoveTransferChannelArgs"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BalancesTransferAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.BalancesTransfer","required":true},
            "arguments": {"ref":"BalancesTransferArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BalancesTransferKeepAliveAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.BalancesTransferKeepAlive","required":true},
            "arguments": {"ref":"BalancesTransferKeepAliveArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BalancesTransferAllAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.BalancesTransferAll","required":true},
            "arguments": {"ref":"BalancesTransferAllArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsCreateAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AssetsCreate","required":true},
            "arguments": {"ref":"AssetsCreateArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsStartDestroyAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AssetsStartDestroy","required":true},
            "arguments": {"ref":"AssetsStartDestroyArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsDestroyAccountsAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AssetsDestroyAccounts","required":true},
            "arguments": {"ref":"AssetsDestroyAccountsArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsDestroyApprovalsAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AssetsDestroyApprovals","required":true},
            "arguments": {"ref":"AssetsDestroyApprovalsArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsFinishDestroyAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AssetsFinishDestroy","required":true},
            "arguments": {"ref":"AssetsFinishDestroyArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsMintAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AssetsMint","required":true},
            "arguments": {"ref":"AssetsMintArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsBurnAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AssetsBurn","required":true},
            "arguments": {"ref":"AssetsBurnArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsTransferAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AssetsTransfer","required":true},
            "arguments": {"ref":"AssetsTransferArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsTransferKeepAliveAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AssetsTransferKeepAlive","required":true},
            "arguments": {"ref":"AssetsTransferKeepAliveArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsForceTransferAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AssetsForceTransfer","required":true},
            "arguments": {"ref":"AssetsForceTransferArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsFreezeAccountAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AssetsFreezeAccount","required":true},
            "arguments": {"ref":"AssetsFreezeAccountArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsThawAccountAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AssetsThawAccount","required":true},
            "arguments": {"ref":"AssetsThawAccountArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsFreezeAssetAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AssetsFreezeAsset","required":true},
            "arguments": {"ref":"AssetsFreezeAssetArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsThawAssetAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AssetsThawAsset","required":true},
            "arguments": {"ref":"AssetsThawAssetArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsTransferOwnershipAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AssetsTransferOwnership","required":true},
            "arguments": {"ref":"AssetsTransferOwnershipArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsSetMetadataAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AssetsSetMetadata","required":true},
            "arguments": {"ref":"AssetsSetMetadataArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsSetMinBalanceAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AssetsSetMinBalance","required":true},
            "arguments": {"ref":"AssetsSetMinBalanceArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsCreateCollectionAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.NftsCreateCollection","required":true},
            "arguments": {"ref":"NftsCreateCollectionArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsDestroyCollectionAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.NftsDestroyCollection","required":true},
            "arguments": {"ref":"NftsDestroyCollectionArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsMintItemAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.NftsMintItem","required":true},
            "arguments": {"ref":"NftsMintItemArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsBurnItemAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.NftsBurnItem","required":true},
            "arguments": {"ref":"NftsBurnItemArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsTransferItemAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.NftsTransferItem","required":true},
            "arguments": {"ref":"NftsTransferItemArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsLockItemTransferAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.NftsLockItemTransfer","required":true},
            "arguments": {"ref":"NftsLockItemTransferArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsUnlockItemTransferAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.NftsUnlockItemTransfer","required":true},
            "arguments": {"ref":"NftsUnlockItemTransferArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsTransferCollectionOwnershipAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.NftsTransferCollectionOwnership","required":true},
            "arguments": {"ref":"NftsTransferCollectionOwnershipArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsSetItemMetadataAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.NftsSetItemMetadata","required":true},
            "arguments": {"ref":"NftsSetItemMetadataArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsClearItemMetadataAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.NftsClearItemMetadata","required":true},
            "arguments": {"ref":"NftsClearItemMetadataArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsSetCollectionMetadataAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.NftsSetCollectionMetadata","required":true},
            "arguments": {"ref":"NftsSetCollectionMetadataArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsClearCollectionMetadataAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.NftsClearCollectionMetadata","required":true},
            "arguments": {"ref":"NftsClearCollectionMetadataArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsAcceptCollectionOwnershipAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.NftsAcceptCollectionOwnership","required":true},
            "arguments": {"ref":"NftsAcceptCollectionOwnershipArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppTransferChannelsEstablishTransferChannelAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppTransferChannelsEstablishTransferChannel","required":true},
            "arguments": {"ref":"AppTransferChannelsEstablishTransferChannelArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppTransferChannelsRemoveTransferChannelAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ExtrinsicType.AppTransferChannelsRemoveTransferChannel","required":true},
            "arguments": {"ref":"AppTransferChannelsRemoveTransferChannelArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicAction": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"BalancesTransferAction"},{"ref":"BalancesTransferKeepAliveAction"},{"ref":"BalancesTransferAllAction"},{"ref":"AssetsCreateAction"},{"ref":"AssetsStartDestroyAction"},{"ref":"AssetsDestroyAccountsAction"},{"ref":"AssetsDestroyApprovalsAction"},{"ref":"AssetsFinishDestroyAction"},{"ref":"AssetsMintAction"},{"ref":"AssetsBurnAction"},{"ref":"AssetsTransferAction"},{"ref":"AssetsTransferKeepAliveAction"},{"ref":"AssetsForceTransferAction"},{"ref":"AssetsFreezeAccountAction"},{"ref":"AssetsThawAccountAction"},{"ref":"AssetsFreezeAssetAction"},{"ref":"AssetsThawAssetAction"},{"ref":"AssetsTransferOwnershipAction"},{"ref":"AssetsSetMetadataAction"},{"ref":"AssetsSetMinBalanceAction"},{"ref":"NftsCreateCollectionAction"},{"ref":"NftsDestroyCollectionAction"},{"ref":"NftsMintItemAction"},{"ref":"NftsBurnItemAction"},{"ref":"NftsTransferItemAction"},{"ref":"NftsLockItemTransferAction"},{"ref":"NftsUnlockItemTransferAction"},{"ref":"NftsTransferCollectionOwnershipAction"},{"ref":"NftsSetItemMetadataAction"},{"ref":"NftsClearItemMetadataAction"},{"ref":"NftsSetCollectionMetadataAction"},{"ref":"NftsClearCollectionMetadataAction"},{"ref":"NftsAcceptCollectionOwnershipAction"},{"ref":"AppTransferChannelsEstablishTransferChannelAction"},{"ref":"AppTransferChannelsRemoveTransferChannelAction"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomic": {
        "dataType": "refObject",
        "properties": {
            "actions": {"dataType":"array","array":{"dataType":"refAlias","ref":"CTAtomicAction"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ClearingTransactionPayload": {
        "dataType": "refObject",
        "properties": {
            "signatory": {"dataType":"string","required":true},
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "atomics": {"dataType":"array","array":{"dataType":"refObject","ref":"CTAtomic"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa




export function RegisterRoutes(app: Router) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################


    
        const argsSubmitTransactionsController_submitTransaction: Record<string, TsoaRoute.ParameterSchema> = {
                payload: {"in":"body","name":"payload","required":true,"ref":"TransactionPayload"},
        };
        app.post('/submit/transaction',
            ...(fetchMiddlewares<RequestHandler>(SubmitTransactionsController)),
            ...(fetchMiddlewares<RequestHandler>(SubmitTransactionsController.prototype.submitTransaction)),

            async function SubmitTransactionsController_submitTransaction(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsSubmitTransactionsController_submitTransaction, request, response });

                const controller = new SubmitTransactionsController();

              await templateService.apiHandler({
                methodName: 'submitTransaction',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsSubmitTransactionsController_submitClearingTransaction: Record<string, TsoaRoute.ParameterSchema> = {
                payload: {"in":"body","name":"payload","required":true,"ref":"ClearingTransactionPayload"},
        };
        app.post('/submit/clearing_transaction',
            ...(fetchMiddlewares<RequestHandler>(SubmitTransactionsController)),
            ...(fetchMiddlewares<RequestHandler>(SubmitTransactionsController.prototype.submitClearingTransaction)),

            async function SubmitTransactionsController_submitClearingTransaction(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsSubmitTransactionsController_submitClearingTransaction, request, response });

                const controller = new SubmitTransactionsController();

              await templateService.apiHandler({
                methodName: 'submitClearingTransaction',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
