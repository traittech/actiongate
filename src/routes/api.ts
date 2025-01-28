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
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionResponse": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"TransactionSuccessResponse"},{"ref":"TransactionErrorResponse"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AdminsAddAdmin": {
        "dataType": "refEnum",
        "enums": ["admins.addPalletAdmin"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AdminType": {
        "dataType": "refEnum",
        "enums": ["AppAgentForce","AppAgentGarbageCollector","AppSubscriptions","AppTransactions","PriceIndex","UserFreeTransactions","UserVerification","Assets","Nfts"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BlockchainGenericAccount": {
        "dataType": "refAlias",
        "type": {"dataType":"string","validators":{"minLength":{"value":49},"maxLength":{"value":49}}},
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
    "AdminsAddAdminArgs": {
        "dataType": "refObject",
        "properties": {
            "adminType": {"ref":"AdminType","required":true},
            "admin": {"ref":"BlockchainGenericAccount","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType": {
        "dataType": "refEnum",
        "enums": ["admins.addPalletAdmin","admins.removePalletAdmin","appAgents.addAdmin","appAgents.addAdminToNamedAddressDispatch","appAgents.allowAdminColdWalletDispatch","appAgents.changeHotWallet","appAgents.changeOwnerCancel","appAgents.changeOwnerComplete","appAgents.changeOwnerInit","appAgents.clearAdminDispatchFilter","appAgents.clearAppAgentMetadata","appAgents.completeDestroyAppAgent","createAppAgent","appAgents.disableAdminColdWalletDispatch","appAgents.disableHotWallet","appAgents.enableHotWallet","appAgents.forceCreateAppAgent","appAgents.forceInitiateAppAgentDestroy","appAgents.forceInitiateAppAgentSuspension","appAgents.forceInitiateAppAgentUnsuspension","appAgents.initiateDestroyAppAgent","appAgents.pauseAppAgent","appAgents.processDestroy","appAgents.reactivateAppAgent","appAgents.removeAdmin","appAgents.removeAdminFromNamedAddressDispatch","appAgents.setAdminDispatchFilter","appAgents.setAppAgentMetadata","appAgents.unpauseAppAgent","appResources.setActionPointsBalance","appResources.setClearingPointsBalance","appSubscriptions.createAppSubscriptionTier","appSubscriptions.obsoleteAppSubscriptionTier","appSubscriptions.setAppPayOnDemandMode","appSubscriptions.setAppSubscriptionTier","appTransactions.submitClearingTransaction","appTransactions.forceSubmitClearingTransaction","appTransferChannels.establishTransferChannel","appTransferChannels.removeTransferChannel","appTransferFilters.blockAddressDeposits","appTransferFilters.setAppDepositPermissions","appTransferFilters.unblockAddressDeposits","assets.create","assets.startDestroy","assets.destroyAccounts","assets.destroyApprovals","assets.finishDestroy","assets.mint","assets.burn","assets.transfer","assets.transferKeepAlive","assets.forceTransfer","assets.freeze","assets.thaw","assets.freezeAsset","assets.thawAsset","assets.transferOwnership","assets.setMinBalance","assets.setMetadata","balances.transferAllowDeath","balances.transferKeepAlive","balances.transferAll","nfts.create","nfts.destroy","nfts.transferOwnership","nfts.setAcceptOwnership","nfts.setCollectionMetadata","nfts.clearCollectionMetadata","nfts.mint","nfts.burn","nfts.transfer","nfts.lockItemTransfer","nfts.unlockItemTransfer","nfts.setMetadata","nfts.clearMetadata","userFreeTransactions.appAgentBlacklistAddress","userFreeTransactions.appAgentUnblacklistAddress","userFreeTransactions.blacklistAddress","userFreeTransactions.clearAppAgentsFreeTransferInfos","userFreeTransactions.clearAssetLastTransferBlocks","userFreeTransactions.clearNftLastTransferBlocks","userFreeTransactions.clearUserFreeTransferInfos","userFreeTransactions.setFreeTransfersEnabled","userFreeTransactions.unblacklistAddress","userTransactions.submitTransferAllBalances","userTransactions.submitTransferAssets","userTransactions.submitTransferBalances","userTransactions.submitTransferNfts","userVerification.setUserLevel"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AdminsRemoveAdminArgs": {
        "dataType": "refObject",
        "properties": {
            "adminType": {"ref":"AdminType","required":true},
            "admin": {"ref":"BlockchainGenericAccount","required":true},
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
    "AppAgentsAddAdminArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "admin": {"ref":"BlockchainGenericAccount","required":true},
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
    "AppAgentsChangeOwnerCancelArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
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
    "AppAgentsChangeOwnerInitArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "proposedOwner": {"ref":"BlockchainGenericAccount","required":true},
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
    "AppAgentsClearAppAgentMetadataArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BlockchainGenericBoolean": {
        "dataType": "refAlias",
        "type": {"dataType":"boolean","validators":{}},
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
    "AppAgentsCompleteDestroyAppAgentArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "destroyInfos": {"ref":"AppAgentDestroyInfo","required":true},
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
    "AppAgentsDisableHotWalletArgs": {
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
    "AppAgentsForceCreateAppAgentArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentOwner": {"ref":"BlockchainGenericAccount","required":true},
            "appAgentBalancePayer": {"ref":"BlockchainGenericAccount","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsForceInitiateAppAgentDestroyArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsForceInitiateAppAgentSuspensionArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsForceInitiateAppAgentUnsuspensionArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
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
    "AppAgentsPauseAppAgentArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
        },
        "additionalProperties": false,
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
    "AppAgentsReactivateAppAgentArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
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
    "UINT64": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"long"},{"dataType":"string"}],"validators":{"minimum":{"value":0},"maximum":{"value":18446744073709552000}}},
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
    "AppAgentsUnpauseAppAgentArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UINT128": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"string"}],"validators":{"minimum":{"value":0},"maximum":{"value":3.402823669209385e+38}}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BlockchainGenericBalance": {
        "dataType": "refAlias",
        "type": {"ref":"UINT128","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppResourcesSetActionPointsBalanceArgs": {
        "dataType": "refObject",
        "properties": {
            "address": {"ref":"BlockchainGenericAccount","required":true},
            "balance": {"ref":"BlockchainGenericBalance","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppResourcesSetClearingPointsBalanceArgs": {
        "dataType": "refObject",
        "properties": {
            "address": {"ref":"BlockchainGenericAccount","required":true},
            "balance": {"ref":"BlockchainGenericBalance","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PayOnDemand": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"extraCtActionPrice":{"ref":"BlockchainGenericBalance","required":true},"extraCtPrice":{"ref":"BlockchainGenericBalance","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppSubscriptionTierDetails": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"billingPeriodLength":{"ref":"UINT32","required":true},"payOnDemand":{"ref":"PayOnDemand","required":true},"price":{"ref":"BlockchainGenericBalance","required":true},"includedAnonymousTransfers":{"ref":"UINT32","required":true},"includedCtActionsNumber":{"ref":"UINT32","required":true},"includedCtNumber":{"ref":"UINT32","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppSubscriptionsCreateAppSubscriptionTierArgs": {
        "dataType": "refObject",
        "properties": {
            "details": {"ref":"AppSubscriptionTierDetails","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppSubscriptionsObsoleteAppSubscriptionTierArgs": {
        "dataType": "refObject",
        "properties": {
            "tierToObsolete": {"ref":"BlockchainGenericId","required":true},
            "successorTier": {"ref":"BlockchainGenericId","required":true},
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
    "AppSubscriptionsSetAppSubscriptionTierArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "subscriptionTierId": {"ref":"BlockchainGenericId","required":true},
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
    "CTActionCall": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"nestedObjectLiteral","nestedProperties":{"args":{"dataType":"string"},"callIndex":{"dataType":"string"}}},{"dataType":"string"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAction": {
        "dataType": "refAlias",
        "type": {"dataType":"array","array":{"dataType":"union","subSchemas":[{"ref":"CTActionOrigin"},{"ref":"CTActionCall"}]},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActions": {
        "dataType": "refAlias",
        "type": {"dataType":"array","array":{"dataType":"array","array":{"dataType":"refAlias","ref":"CTAction"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppTransactionsForceSubmitClearingTransactionArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "extraFeePayer": {"ref":"BlockchainGenericAccount","required":true},
            "atomics": {"ref":"CTAtomicActions","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppTransactionsSubmitClearingTransactionArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "atomics": {"ref":"CTAtomicActions","required":true},
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
    "AppTransferFiltersBlockAddressDepositsArgs": {
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
    "AppTransferFiltersUnblockAddressDepositsArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "keylessAddress": {"ref":"BlockchainGenericAccount","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BlockchainGenericAccountId": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"ref":"BlockchainGenericAccount","required":true}},"validators":{}},
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
    "AssetsCreateArgs": {
        "dataType": "refObject",
        "properties": {
            "minBalance": {"ref":"BlockchainGenericBalance","required":true},
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
    "AssetsFreezeAssetArgs": {
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
    "AssetsStartDestroyArgs": {
        "dataType": "refObject",
        "properties": {
            "id": {"ref":"BlockchainGenericId","required":true},
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
    "AssetsThawAssetArgs": {
        "dataType": "refObject",
        "properties": {
            "id": {"ref":"BlockchainGenericId","required":true},
        },
        "additionalProperties": false,
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
    "AssetsTransferOwnershipArgs": {
        "dataType": "refObject",
        "properties": {
            "id": {"ref":"BlockchainGenericId","required":true},
            "owner": {"ref":"BlockchainGenericAccountId","required":true},
        },
        "additionalProperties": false,
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
    "BalancesTransferAllowDeathArgs": {
        "dataType": "refObject",
        "properties": {
            "dest": {"ref":"BlockchainGenericAccountId","required":true},
            "value": {"ref":"BlockchainGenericBalance","required":true},
        },
        "additionalProperties": false,
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
    "NftsBurnItemArgs": {
        "dataType": "refObject",
        "properties": {
            "collection": {"ref":"BlockchainGenericId","required":true},
            "item": {"ref":"BlockchainGenericId","required":true},
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
    "NftsClearItemMetadataArgs": {
        "dataType": "refObject",
        "properties": {
            "collection": {"ref":"BlockchainGenericId","required":true},
            "item": {"ref":"BlockchainGenericId","required":true},
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
    "NftsLockItemTransferArgs": {
        "dataType": "refObject",
        "properties": {
            "collection": {"ref":"BlockchainGenericId","required":true},
            "item": {"ref":"BlockchainGenericId","required":true},
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
    "NftsAcceptCollectionOwnershipArgs": {
        "dataType": "refObject",
        "properties": {
            "maybeCollection": {"ref":"BlockchainGenericId"},
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
    "NftsTransferCollectionOwnershipArgs": {
        "dataType": "refObject",
        "properties": {
            "collection": {"ref":"BlockchainGenericId","required":true},
            "newOwner": {"ref":"BlockchainGenericAccountId","required":true},
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
    "BlockchainGenericAccountList": {
        "dataType": "refAlias",
        "type": {"dataType":"array","array":{"dataType":"refAlias","ref":"BlockchainGenericAccount"},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserFreeTransactionsAppAgentBlacklistAddressArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "addresses": {"ref":"BlockchainGenericAccountList","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserFreeTransactionsAppAgentUnblacklistAddressArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "addresses": {"ref":"BlockchainGenericAccountList","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserFreeTransactionsBlacklistAddressArgs": {
        "dataType": "refObject",
        "properties": {
            "addresses": {"ref":"BlockchainGenericAccountList","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserFreeTransactionsClearAppAgentsFreeTransferInfosArgs": {
        "dataType": "refObject",
        "properties": {
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserFreeTransactionsClearAssetLastTransferBlocksArgs": {
        "dataType": "refObject",
        "properties": {
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserFreeTransactionsClearNftLastTransferBlocksArgs": {
        "dataType": "refObject",
        "properties": {
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserFreeTransactionsClearUserFreeTransferInfosArgs": {
        "dataType": "refObject",
        "properties": {
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserFreeTransactionsSetFreeTransfersEnabledArgs": {
        "dataType": "refObject",
        "properties": {
            "enabled": {"ref":"BlockchainGenericBoolean","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserFreeTransactionsUnblacklistAddressArgs": {
        "dataType": "refObject",
        "properties": {
            "addresses": {"ref":"BlockchainGenericAccountList","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserTransactionsSubmitTransferAllBalancesArgs": {
        "dataType": "refObject",
        "properties": {
            "dest": {"ref":"BlockchainGenericAccount","required":true},
            "keepAlive": {"ref":"BlockchainGenericBoolean","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserTransactionsSubmitTransferAssetsArgs": {
        "dataType": "refObject",
        "properties": {
            "id": {"ref":"BlockchainGenericId","required":true},
            "target": {"ref":"BlockchainGenericAccount","required":true},
            "amount": {"ref":"BlockchainGenericBalance","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserTransactionsSubmitTransferBalancesArgs": {
        "dataType": "refObject",
        "properties": {
            "dest": {"ref":"BlockchainGenericAccount","required":true},
            "value": {"ref":"BlockchainGenericBalance","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserTransactionsSubmitTransferNftsArgs": {
        "dataType": "refObject",
        "properties": {
            "collection": {"ref":"BlockchainGenericId","required":true},
            "item": {"ref":"BlockchainGenericId","required":true},
            "dest": {"ref":"BlockchainGenericAccount","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserLevel": {
        "dataType": "refEnum",
        "enums": ["Anonymous","Registered","Level1","Level2","Level3"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserVerificationSetUserLevelArgs": {
        "dataType": "refObject",
        "properties": {
            "user": {"ref":"BlockchainGenericAccount","required":true},
            "level": {"ref":"UserLevel","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionArgs": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"AdminsAddAdminArgs"},{"ref":"AdminsRemoveAdminArgs"},{"ref":"AppAgentsAddAdminArgs"},{"ref":"AppAgentsAddAdminToNamedAddressArgs"},{"ref":"AppAgentsAllowAdminColdWalletArgs"},{"ref":"AppAgentsChangeHotWalletArgs"},{"ref":"AppAgentsChangeOwnerCancelArgs"},{"ref":"AppAgentsChangeOwnerCompleteArgs"},{"ref":"AppAgentsChangeOwnerInitArgs"},{"ref":"AppAgentsClearAdminDispatchFilterArgs"},{"ref":"AppAgentsClearAppAgentMetadataArgs"},{"ref":"AppAgentsCompleteDestroyAppAgentArgs"},{"ref":"AppAgentsDisableAdminColdWalletDispatchArgs"},{"ref":"AppAgentsDisableHotWalletArgs"},{"ref":"AppAgentsEnableHotWalletArgs"},{"ref":"AppAgentsForceCreateAppAgentArgs"},{"ref":"AppAgentsForceInitiateAppAgentDestroyArgs"},{"ref":"AppAgentsForceInitiateAppAgentSuspensionArgs"},{"ref":"AppAgentsForceInitiateAppAgentUnsuspensionArgs"},{"ref":"AppAgentsInitiateDestroyAppAgentArgs"},{"ref":"AppAgentsPauseAppAgentArgs"},{"ref":"AppAgentsProcessDestroyArgs"},{"ref":"AppAgentsReactivateAppAgentArgs"},{"ref":"AppAgentsRemoveAdminArgs"},{"ref":"AppAgentsRemoveAdminFromNamedAddressDispatchArgs"},{"ref":"AppAgentsSetAdminDispatchFilterArgs"},{"ref":"AppAgentsSetAppAgentMetadataArgs"},{"ref":"AppAgentsUnpauseAppAgentArgs"},{"ref":"AppResourcesSetActionPointsBalanceArgs"},{"ref":"AppResourcesSetClearingPointsBalanceArgs"},{"ref":"AppSubscriptionsCreateAppSubscriptionTierArgs"},{"ref":"AppSubscriptionsObsoleteAppSubscriptionTierArgs"},{"ref":"AppSubscriptionsSetAppPayOnDemandModeArgs"},{"ref":"AppSubscriptionsSetAppSubscriptionTierArgs"},{"ref":"AppTransactionsForceSubmitClearingTransactionArgs"},{"ref":"AppTransactionsSubmitClearingTransactionArgs"},{"ref":"AppTransferChannelsEstablishTransferChannelArgs"},{"ref":"AppTransferChannelsRemoveTransferChannelArgs"},{"ref":"AppTransferFiltersBlockAddressDepositsArgs"},{"ref":"AppTransferFiltersSetAppDepositPermissionsArgs"},{"ref":"AppTransferFiltersUnblockAddressDepositsArgs"},{"ref":"AssetsBurnArgs"},{"ref":"AssetsCreateArgs"},{"ref":"AssetsDestroyAccountsArgs"},{"ref":"AssetsDestroyApprovalsArgs"},{"ref":"AssetsFinishDestroyArgs"},{"ref":"AssetsForceTransferArgs"},{"ref":"AssetsFreezeAccountArgs"},{"ref":"AssetsFreezeAssetArgs"},{"ref":"AssetsMintArgs"},{"ref":"AssetsSetMetadataArgs"},{"ref":"AssetsSetMinBalanceArgs"},{"ref":"AssetsStartDestroyArgs"},{"ref":"AssetsThawAccountArgs"},{"ref":"AssetsThawAssetArgs"},{"ref":"AssetsTransferArgs"},{"ref":"AssetsTransferKeepAliveArgs"},{"ref":"AssetsTransferOwnershipArgs"},{"ref":"BalancesTransferAllArgs"},{"ref":"BalancesTransferAllowDeathArgs"},{"ref":"BalancesTransferKeepAliveArgs"},{"ref":"NftsBurnItemArgs"},{"ref":"NftsClearCollectionMetadataArgs"},{"ref":"NftsClearItemMetadataArgs"},{"ref":"NftsCreateCollectionArgs"},{"ref":"NftsDestroyCollectionArgs"},{"ref":"NftsLockItemTransferArgs"},{"ref":"NftsMintItemArgs"},{"ref":"NftsAcceptCollectionOwnershipArgs"},{"ref":"NftsSetCollectionMetadataArgs"},{"ref":"NftsSetItemMetadataArgs"},{"ref":"NftsTransferItemArgs"},{"ref":"NftsTransferCollectionOwnershipArgs"},{"ref":"NftsUnlockItemTransferArgs"},{"ref":"UserFreeTransactionsAppAgentBlacklistAddressArgs"},{"ref":"UserFreeTransactionsAppAgentUnblacklistAddressArgs"},{"ref":"UserFreeTransactionsBlacklistAddressArgs"},{"ref":"UserFreeTransactionsClearAppAgentsFreeTransferInfosArgs"},{"ref":"UserFreeTransactionsClearAssetLastTransferBlocksArgs"},{"ref":"UserFreeTransactionsClearNftLastTransferBlocksArgs"},{"ref":"UserFreeTransactionsClearUserFreeTransferInfosArgs"},{"ref":"UserFreeTransactionsSetFreeTransfersEnabledArgs"},{"ref":"UserFreeTransactionsUnblacklistAddressArgs"},{"ref":"UserTransactionsSubmitTransferAllBalancesArgs"},{"ref":"UserTransactionsSubmitTransferAssetsArgs"},{"ref":"UserTransactionsSubmitTransferBalancesArgs"},{"ref":"UserTransactionsSubmitTransferNftsArgs"},{"ref":"UserVerificationSetUserLevelArgs"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AdminsAddAdminTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AdminsAddAdmin","required":true},
            "arguments": {"ref":"AdminsAddAdminArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AdminsRemoveAdmin": {
        "dataType": "refEnum",
        "enums": ["admins.removePalletAdmin"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AdminsRemoveAdminTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AdminsRemoveAdmin","required":true},
            "arguments": {"ref":"AdminsRemoveAdminArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppAgentsAddAdmin": {
        "dataType": "refEnum",
        "enums": ["appAgents.addAdmin"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsAddAdminTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppAgentsAddAdmin","required":true},
            "arguments": {"ref":"AppAgentsAddAdminArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppAgentsAddAdminToNamedAddress": {
        "dataType": "refEnum",
        "enums": ["appAgents.addAdminToNamedAddressDispatch"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsAddAdminToNamedAddressTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppAgentsAddAdminToNamedAddress","required":true},
            "arguments": {"ref":"AppAgentsAddAdminToNamedAddressArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppAgentsAllowAdminColdWallet": {
        "dataType": "refEnum",
        "enums": ["appAgents.allowAdminColdWalletDispatch"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsAllowAdminColdWalletTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppAgentsAllowAdminColdWallet","required":true},
            "arguments": {"ref":"AppAgentsAllowAdminColdWalletArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppAgentsChangeHotWallet": {
        "dataType": "refEnum",
        "enums": ["appAgents.changeHotWallet"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsChangeHotWalletTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppAgentsChangeHotWallet","required":true},
            "arguments": {"ref":"AppAgentsChangeHotWalletArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppAgentsChangeOwnerCancel": {
        "dataType": "refEnum",
        "enums": ["appAgents.changeOwnerCancel"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsChangeOwnerCancelTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppAgentsChangeOwnerCancel","required":true},
            "arguments": {"ref":"AppAgentsChangeOwnerCancelArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppAgentsChangeOwnerComplete": {
        "dataType": "refEnum",
        "enums": ["appAgents.changeOwnerComplete"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsChangeOwnerCompleteTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppAgentsChangeOwnerComplete","required":true},
            "arguments": {"ref":"AppAgentsChangeOwnerCompleteArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppAgentsChangeOwnerInit": {
        "dataType": "refEnum",
        "enums": ["appAgents.changeOwnerInit"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsChangeOwnerInitTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppAgentsChangeOwnerInit","required":true},
            "arguments": {"ref":"AppAgentsChangeOwnerInitArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppAgentsClearAdminDispatchFilter": {
        "dataType": "refEnum",
        "enums": ["appAgents.clearAdminDispatchFilter"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsClearAdminDispatchFilterTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppAgentsClearAdminDispatchFilter","required":true},
            "arguments": {"ref":"AppAgentsClearAdminDispatchFilterArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppAgentsClearAppAgentMetadata": {
        "dataType": "refEnum",
        "enums": ["appAgents.clearAppAgentMetadata"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsClearAppAgentMetadataTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppAgentsClearAppAgentMetadata","required":true},
            "arguments": {"ref":"AppAgentsClearAppAgentMetadataArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppAgentsCompleteDestroyAppAgent": {
        "dataType": "refEnum",
        "enums": ["appAgents.completeDestroyAppAgent"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsCompleteDestroyAppAgentTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppAgentsCompleteDestroyAppAgent","required":true},
            "arguments": {"ref":"AppAgentsCompleteDestroyAppAgentArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppAgentsDisableAdminColdWalletDispatch": {
        "dataType": "refEnum",
        "enums": ["appAgents.disableAdminColdWalletDispatch"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsDisableAdminColdWalletDispatchTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppAgentsDisableAdminColdWalletDispatch","required":true},
            "arguments": {"ref":"AppAgentsDisableAdminColdWalletDispatchArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppAgentsDisableHotWallet": {
        "dataType": "refEnum",
        "enums": ["appAgents.disableHotWallet"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsDisableHotWalletTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppAgentsDisableHotWallet","required":true},
            "arguments": {"ref":"AppAgentsDisableHotWalletArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppAgentsEnableHotWallet": {
        "dataType": "refEnum",
        "enums": ["appAgents.enableHotWallet"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsEnableHotWalletTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppAgentsEnableHotWallet","required":true},
            "arguments": {"ref":"AppAgentsEnableHotWalletArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppAgentsForceCreateAppAgent": {
        "dataType": "refEnum",
        "enums": ["appAgents.forceCreateAppAgent"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsForceCreateAppAgentTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppAgentsForceCreateAppAgent","required":true},
            "arguments": {"ref":"AppAgentsForceCreateAppAgentArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppAgentsForceInitiateAppAgentDestroy": {
        "dataType": "refEnum",
        "enums": ["appAgents.forceInitiateAppAgentDestroy"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsForceInitiateAppAgentDestroyTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppAgentsForceInitiateAppAgentDestroy","required":true},
            "arguments": {"ref":"AppAgentsForceInitiateAppAgentDestroyArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppAgentsForceInitiateAppAgentSuspension": {
        "dataType": "refEnum",
        "enums": ["appAgents.forceInitiateAppAgentSuspension"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsForceInitiateAppAgentSuspensionTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppAgentsForceInitiateAppAgentSuspension","required":true},
            "arguments": {"ref":"AppAgentsForceInitiateAppAgentSuspensionArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppAgentsForceInitiateAppAgentUnsuspension": {
        "dataType": "refEnum",
        "enums": ["appAgents.forceInitiateAppAgentUnsuspension"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsForceInitiateAppAgentUnsuspensionTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppAgentsForceInitiateAppAgentUnsuspension","required":true},
            "arguments": {"ref":"AppAgentsForceInitiateAppAgentUnsuspensionArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppAgentsInitiateDestroyAppAgent": {
        "dataType": "refEnum",
        "enums": ["appAgents.initiateDestroyAppAgent"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsInitiateDestroyAppAgentTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppAgentsInitiateDestroyAppAgent","required":true},
            "arguments": {"ref":"AppAgentsInitiateDestroyAppAgentArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppAgentsPauseAppAgent": {
        "dataType": "refEnum",
        "enums": ["appAgents.pauseAppAgent"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsPauseAppAgentTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppAgentsPauseAppAgent","required":true},
            "arguments": {"ref":"AppAgentsPauseAppAgentArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppAgentsProcessDestroy": {
        "dataType": "refEnum",
        "enums": ["appAgents.processDestroy"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsProcessDestroyTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppAgentsProcessDestroy","required":true},
            "arguments": {"ref":"AppAgentsProcessDestroyArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppAgentsReactivateAppAgent": {
        "dataType": "refEnum",
        "enums": ["appAgents.reactivateAppAgent"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsReactivateAppAgentTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppAgentsReactivateAppAgent","required":true},
            "arguments": {"ref":"AppAgentsReactivateAppAgentArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppAgentsRemoveAdmin": {
        "dataType": "refEnum",
        "enums": ["appAgents.removeAdmin"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsRemoveAdminTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppAgentsRemoveAdmin","required":true},
            "arguments": {"ref":"AppAgentsRemoveAdminArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppAgentsRemoveAdminFromNamedAddressDispatch": {
        "dataType": "refEnum",
        "enums": ["appAgents.removeAdminFromNamedAddressDispatch"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsRemoveAdminFromNamedAddressDispatchTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppAgentsRemoveAdminFromNamedAddressDispatch","required":true},
            "arguments": {"ref":"AppAgentsRemoveAdminFromNamedAddressDispatchArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppAgentsSetAdminDispatchFilter": {
        "dataType": "refEnum",
        "enums": ["appAgents.setAdminDispatchFilter"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsSetAdminDispatchFilterTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppAgentsSetAdminDispatchFilter","required":true},
            "arguments": {"ref":"AppAgentsSetAdminDispatchFilterArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppAgentsSetAppAgentMetadata": {
        "dataType": "refEnum",
        "enums": ["appAgents.setAppAgentMetadata"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsSetAppAgentMetadataTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppAgentsSetAppAgentMetadata","required":true},
            "arguments": {"ref":"AppAgentsSetAppAgentMetadataArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppAgentsUnpauseAppAgent": {
        "dataType": "refEnum",
        "enums": ["appAgents.unpauseAppAgent"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppAgentsUnpauseAppAgentTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppAgentsUnpauseAppAgent","required":true},
            "arguments": {"ref":"AppAgentsUnpauseAppAgentArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppResourcesSetActionPointsBalance": {
        "dataType": "refEnum",
        "enums": ["appResources.setActionPointsBalance"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppResourcesSetActionPointsBalanceTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppResourcesSetActionPointsBalance","required":true},
            "arguments": {"ref":"AppResourcesSetActionPointsBalanceArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppResourcesSetClearingPointsBalance": {
        "dataType": "refEnum",
        "enums": ["appResources.setClearingPointsBalance"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppResourcesSetClearingPointsBalanceTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppResourcesSetClearingPointsBalance","required":true},
            "arguments": {"ref":"AppResourcesSetClearingPointsBalanceArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppSubscriptionsCreateAppSubscriptionTier": {
        "dataType": "refEnum",
        "enums": ["appSubscriptions.createAppSubscriptionTier"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppSubscriptionsCreateAppSubscriptionTierTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppSubscriptionsCreateAppSubscriptionTier","required":true},
            "arguments": {"ref":"AppSubscriptionsCreateAppSubscriptionTierArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppSubscriptionsObsoleteAppSubscriptionTier": {
        "dataType": "refEnum",
        "enums": ["appSubscriptions.obsoleteAppSubscriptionTier"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppSubscriptionsObsoleteAppSubscriptionTierTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppSubscriptionsObsoleteAppSubscriptionTier","required":true},
            "arguments": {"ref":"AppSubscriptionsObsoleteAppSubscriptionTierArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppSubscriptionsSetAppPayOnDemandMode": {
        "dataType": "refEnum",
        "enums": ["appSubscriptions.setAppPayOnDemandMode"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppSubscriptionsSetAppPayOnDemandModeTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppSubscriptionsSetAppPayOnDemandMode","required":true},
            "arguments": {"ref":"AppSubscriptionsSetAppPayOnDemandModeArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppSubscriptionsSetAppSubscriptionTier": {
        "dataType": "refEnum",
        "enums": ["appSubscriptions.setAppSubscriptionTier"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppSubscriptionsSetAppSubscriptionTierTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppSubscriptionsSetAppSubscriptionTier","required":true},
            "arguments": {"ref":"AppSubscriptionsSetAppSubscriptionTierArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppTransactionsForceSubmitClearingTransaction": {
        "dataType": "refEnum",
        "enums": ["appTransactions.forceSubmitClearingTransaction"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppTransactionsForceSubmitClearingTransactionTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppTransactionsForceSubmitClearingTransaction","required":true},
            "arguments": {"ref":"AppTransactionsForceSubmitClearingTransactionArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppTransactionsSubmitClearingTransaction": {
        "dataType": "refEnum",
        "enums": ["appTransactions.submitClearingTransaction"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppTransactionsSubmitClearingTransactionTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppTransactionsSubmitClearingTransaction","required":true},
            "arguments": {"ref":"AppTransactionsSubmitClearingTransactionArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppTransferChannelsEstablishTransferChannel": {
        "dataType": "refEnum",
        "enums": ["appTransferChannels.establishTransferChannel"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppTransferChannelsEstablishTransferChannelTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppTransferChannelsEstablishTransferChannel","required":true},
            "arguments": {"ref":"AppTransferChannelsEstablishTransferChannelArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppTransferChannelsRemoveTransferChannel": {
        "dataType": "refEnum",
        "enums": ["appTransferChannels.removeTransferChannel"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppTransferChannelsRemoveTransferChannelTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppTransferChannelsRemoveTransferChannel","required":true},
            "arguments": {"ref":"AppTransferChannelsRemoveTransferChannelArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppTransferFiltersBlockAddressDeposits": {
        "dataType": "refEnum",
        "enums": ["appTransferFilters.blockAddressDeposits"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppTransferFiltersBlockAddressDepositsTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppTransferFiltersBlockAddressDeposits","required":true},
            "arguments": {"ref":"AppTransferFiltersBlockAddressDepositsArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppTransferFiltersSetAppDepositPermissions": {
        "dataType": "refEnum",
        "enums": ["appTransferFilters.setAppDepositPermissions"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppTransferFiltersSetAppDepositPermissionsTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppTransferFiltersSetAppDepositPermissions","required":true},
            "arguments": {"ref":"AppTransferFiltersSetAppDepositPermissionsArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AppTransferFiltersUnblockAddressDeposits": {
        "dataType": "refEnum",
        "enums": ["appTransferFilters.unblockAddressDeposits"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppTransferFiltersUnblockAddressDepositsTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AppTransferFiltersUnblockAddressDeposits","required":true},
            "arguments": {"ref":"AppTransferFiltersUnblockAddressDepositsArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AssetsBurn": {
        "dataType": "refEnum",
        "enums": ["assets.burn"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsBurnTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsBurn","required":true},
            "arguments": {"ref":"AssetsBurnArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AssetsCreate": {
        "dataType": "refEnum",
        "enums": ["assets.create"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsCreateTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsCreate","required":true},
            "arguments": {"ref":"AssetsCreateArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AssetsDestroyAccounts": {
        "dataType": "refEnum",
        "enums": ["assets.destroyAccounts"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsDestroyAccountsTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsDestroyAccounts","required":true},
            "arguments": {"ref":"AssetsDestroyAccountsArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AssetsDestroyApprovals": {
        "dataType": "refEnum",
        "enums": ["assets.destroyApprovals"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsDestroyApprovalsTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsDestroyApprovals","required":true},
            "arguments": {"ref":"AssetsDestroyApprovalsArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AssetsFinishDestroy": {
        "dataType": "refEnum",
        "enums": ["assets.finishDestroy"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsFinishDestroyTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsFinishDestroy","required":true},
            "arguments": {"ref":"AssetsFinishDestroyArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AssetsForceTransfer": {
        "dataType": "refEnum",
        "enums": ["assets.forceTransfer"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsForceTransferTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsForceTransfer","required":true},
            "arguments": {"ref":"AssetsForceTransferArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AssetsFreezeAccount": {
        "dataType": "refEnum",
        "enums": ["assets.freeze"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsFreezeAccountTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsFreezeAccount","required":true},
            "arguments": {"ref":"AssetsFreezeAccountArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AssetsFreezeAsset": {
        "dataType": "refEnum",
        "enums": ["assets.freezeAsset"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsFreezeAssetTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsFreezeAsset","required":true},
            "arguments": {"ref":"AssetsFreezeAssetArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AssetsMint": {
        "dataType": "refEnum",
        "enums": ["assets.mint"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsMintTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsMint","required":true},
            "arguments": {"ref":"AssetsMintArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AssetsSetMetadata": {
        "dataType": "refEnum",
        "enums": ["assets.setMetadata"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsSetMetadataTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsSetMetadata","required":true},
            "arguments": {"ref":"AssetsSetMetadataArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AssetsSetMinBalance": {
        "dataType": "refEnum",
        "enums": ["assets.setMinBalance"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsSetMinBalanceTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsSetMinBalance","required":true},
            "arguments": {"ref":"AssetsSetMinBalanceArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AssetsStartDestroy": {
        "dataType": "refEnum",
        "enums": ["assets.startDestroy"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsStartDestroyTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsStartDestroy","required":true},
            "arguments": {"ref":"AssetsStartDestroyArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AssetsThawAccount": {
        "dataType": "refEnum",
        "enums": ["assets.thaw"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsThawAccountTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsThawAccount","required":true},
            "arguments": {"ref":"AssetsThawAccountArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AssetsThawAsset": {
        "dataType": "refEnum",
        "enums": ["assets.thawAsset"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsThawAssetTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsThawAsset","required":true},
            "arguments": {"ref":"AssetsThawAssetArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AssetsTransfer": {
        "dataType": "refEnum",
        "enums": ["assets.transfer"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsTransferTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsTransfer","required":true},
            "arguments": {"ref":"AssetsTransferArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AssetsTransferKeepAlive": {
        "dataType": "refEnum",
        "enums": ["assets.transferKeepAlive"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsTransferKeepAliveTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsTransferKeepAlive","required":true},
            "arguments": {"ref":"AssetsTransferKeepAliveArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.AssetsTransferOwnership": {
        "dataType": "refEnum",
        "enums": ["assets.transferOwnership"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsTransferOwnershipTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsTransferOwnership","required":true},
            "arguments": {"ref":"AssetsTransferOwnershipArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.BalancesTransferAll": {
        "dataType": "refEnum",
        "enums": ["balances.transferAll"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BalancesTransferAllTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.BalancesTransferAll","required":true},
            "arguments": {"ref":"BalancesTransferAllArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.BalancesTransferAllowDeath": {
        "dataType": "refEnum",
        "enums": ["balances.transferAllowDeath"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BalancesTransferAllowDeathTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.BalancesTransferAllowDeath","required":true},
            "arguments": {"ref":"BalancesTransferAllowDeathArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.BalancesTransferKeepAlive": {
        "dataType": "refEnum",
        "enums": ["balances.transferKeepAlive"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BalancesTransferKeepAliveTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.BalancesTransferKeepAlive","required":true},
            "arguments": {"ref":"BalancesTransferKeepAliveArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.NftsBurnItem": {
        "dataType": "refEnum",
        "enums": ["nfts.burn"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsBurnItemTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.NftsBurnItem","required":true},
            "arguments": {"ref":"NftsBurnItemArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.NftsClearCollectionMetadata": {
        "dataType": "refEnum",
        "enums": ["nfts.clearCollectionMetadata"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsClearCollectionMetadataTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.NftsClearCollectionMetadata","required":true},
            "arguments": {"ref":"NftsClearCollectionMetadataArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.NftsClearItemMetadata": {
        "dataType": "refEnum",
        "enums": ["nfts.clearMetadata"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsClearItemMetadataTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.NftsClearItemMetadata","required":true},
            "arguments": {"ref":"NftsClearItemMetadataArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.NftsCreateCollection": {
        "dataType": "refEnum",
        "enums": ["nfts.create"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsCreateCollectionTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.NftsCreateCollection","required":true},
            "arguments": {"ref":"NftsCreateCollectionArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.NftsDestroyCollection": {
        "dataType": "refEnum",
        "enums": ["nfts.destroy"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsDestroyCollectionTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.NftsDestroyCollection","required":true},
            "arguments": {"ref":"NftsDestroyCollectionArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.NftsLockItemTransfer": {
        "dataType": "refEnum",
        "enums": ["nfts.lockItemTransfer"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsLockItemTransferTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.NftsLockItemTransfer","required":true},
            "arguments": {"ref":"NftsLockItemTransferArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.NftsMintItem": {
        "dataType": "refEnum",
        "enums": ["nfts.mint"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsMintItemTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.NftsMintItem","required":true},
            "arguments": {"ref":"NftsMintItemArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.NftsAcceptCollectionOwnership": {
        "dataType": "refEnum",
        "enums": ["nfts.setAcceptOwnership"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsAcceptCollectionOwnershipTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.NftsAcceptCollectionOwnership","required":true},
            "arguments": {"ref":"NftsAcceptCollectionOwnershipArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.NftsSetCollectionMetadata": {
        "dataType": "refEnum",
        "enums": ["nfts.setCollectionMetadata"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsSetCollectionMetadataTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.NftsSetCollectionMetadata","required":true},
            "arguments": {"ref":"NftsSetCollectionMetadataArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.NftsSetItemMetadata": {
        "dataType": "refEnum",
        "enums": ["nfts.setMetadata"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsSetItemMetadataTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.NftsSetItemMetadata","required":true},
            "arguments": {"ref":"NftsSetItemMetadataArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.NftsTransferItem": {
        "dataType": "refEnum",
        "enums": ["nfts.transfer"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsTransferItemTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.NftsTransferItem","required":true},
            "arguments": {"ref":"NftsTransferItemArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.NftsTransferCollectionOwnership": {
        "dataType": "refEnum",
        "enums": ["nfts.transferOwnership"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsTransferCollectionOwnershipTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.NftsTransferCollectionOwnership","required":true},
            "arguments": {"ref":"NftsTransferCollectionOwnershipArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.NftsUnlockItemTransfer": {
        "dataType": "refEnum",
        "enums": ["nfts.unlockItemTransfer"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsUnlockItemTransferTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.NftsUnlockItemTransfer","required":true},
            "arguments": {"ref":"NftsUnlockItemTransferArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.UserFreeTransactionsAppAgentBlacklistAddress": {
        "dataType": "refEnum",
        "enums": ["userFreeTransactions.appAgentBlacklistAddress"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserFreeTransactionsAppAgentBlacklistAddressTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.UserFreeTransactionsAppAgentBlacklistAddress","required":true},
            "arguments": {"ref":"UserFreeTransactionsAppAgentBlacklistAddressArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.UserFreeTransactionsAppAgentUnblacklistAddress": {
        "dataType": "refEnum",
        "enums": ["userFreeTransactions.appAgentUnblacklistAddress"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserFreeTransactionsAppAgentUnblacklistAddressTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.UserFreeTransactionsAppAgentUnblacklistAddress","required":true},
            "arguments": {"ref":"UserFreeTransactionsAppAgentUnblacklistAddressArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.UserFreeTransactionsBlacklistAddress": {
        "dataType": "refEnum",
        "enums": ["userFreeTransactions.blacklistAddress"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserFreeTransactionsBlacklistAddressTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.UserFreeTransactionsBlacklistAddress","required":true},
            "arguments": {"ref":"UserFreeTransactionsBlacklistAddressArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.UserFreeTransactionsClearAppAgentsFreeTransferInfos": {
        "dataType": "refEnum",
        "enums": ["userFreeTransactions.clearAppAgentsFreeTransferInfos"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserFreeTransactionsClearAppAgentsFreeTransferInfosTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.UserFreeTransactionsClearAppAgentsFreeTransferInfos","required":true},
            "arguments": {"ref":"UserFreeTransactionsClearAppAgentsFreeTransferInfosArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.UserFreeTransactionsClearAssetLastTransferBlocks": {
        "dataType": "refEnum",
        "enums": ["userFreeTransactions.clearAssetLastTransferBlocks"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserFreeTransactionsClearAssetLastTransferBlocksTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.UserFreeTransactionsClearAssetLastTransferBlocks","required":true},
            "arguments": {"ref":"UserFreeTransactionsClearAssetLastTransferBlocksArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.UserFreeTransactionsClearNftLastTransferBlocks": {
        "dataType": "refEnum",
        "enums": ["userFreeTransactions.clearNftLastTransferBlocks"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserFreeTransactionsClearNftLastTransferBlocksTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.UserFreeTransactionsClearNftLastTransferBlocks","required":true},
            "arguments": {"ref":"UserFreeTransactionsClearNftLastTransferBlocksArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.UserFreeTransactionsClearUserFreeTransferInfos": {
        "dataType": "refEnum",
        "enums": ["userFreeTransactions.clearUserFreeTransferInfos"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserFreeTransactionsClearUserFreeTransferInfosTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.UserFreeTransactionsClearUserFreeTransferInfos","required":true},
            "arguments": {"ref":"UserFreeTransactionsClearUserFreeTransferInfosArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.UserFreeTransactionsSetFreeTransfersEnabled": {
        "dataType": "refEnum",
        "enums": ["userFreeTransactions.setFreeTransfersEnabled"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserFreeTransactionsSetFreeTransfersEnabledTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.UserFreeTransactionsSetFreeTransfersEnabled","required":true},
            "arguments": {"ref":"UserFreeTransactionsSetFreeTransfersEnabledArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.UserFreeTransactionsUnblacklistAddress": {
        "dataType": "refEnum",
        "enums": ["userFreeTransactions.unblacklistAddress"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserFreeTransactionsUnblacklistAddressTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.UserFreeTransactionsUnblacklistAddress","required":true},
            "arguments": {"ref":"UserFreeTransactionsUnblacklistAddressArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.UserTransactionsSubmitTransferAllBalances": {
        "dataType": "refEnum",
        "enums": ["userTransactions.submitTransferAllBalances"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserTransactionsSubmitTransferAllBalancesTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.UserTransactionsSubmitTransferAllBalances","required":true},
            "arguments": {"ref":"UserTransactionsSubmitTransferAllBalancesArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.UserTransactionsSubmitTransferAssets": {
        "dataType": "refEnum",
        "enums": ["userTransactions.submitTransferAssets"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserTransactionsSubmitTransferAssetsTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.UserTransactionsSubmitTransferAssets","required":true},
            "arguments": {"ref":"UserTransactionsSubmitTransferAssetsArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.UserTransactionsSubmitTransferBalances": {
        "dataType": "refEnum",
        "enums": ["userTransactions.submitTransferBalances"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserTransactionsSubmitTransferBalancesTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.UserTransactionsSubmitTransferBalances","required":true},
            "arguments": {"ref":"UserTransactionsSubmitTransferBalancesArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.UserTransactionsSubmitTransferNfts": {
        "dataType": "refEnum",
        "enums": ["userTransactions.submitTransferNfts"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserTransactionsSubmitTransferNftsTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.UserTransactionsSubmitTransferNfts","required":true},
            "arguments": {"ref":"UserTransactionsSubmitTransferNftsArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionType.UserVerificationSetUserLevel": {
        "dataType": "refEnum",
        "enums": ["userVerification.setUserLevel"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserVerificationSetUserLevelTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.UserVerificationSetUserLevel","required":true},
            "arguments": {"ref":"UserVerificationSetUserLevelArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TxAction": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"AdminsAddAdminTx"},{"ref":"AdminsRemoveAdminTx"},{"ref":"AppAgentsAddAdminTx"},{"ref":"AppAgentsAddAdminToNamedAddressTx"},{"ref":"AppAgentsAllowAdminColdWalletTx"},{"ref":"AppAgentsChangeHotWalletTx"},{"ref":"AppAgentsChangeOwnerCancelTx"},{"ref":"AppAgentsChangeOwnerCompleteTx"},{"ref":"AppAgentsChangeOwnerInitTx"},{"ref":"AppAgentsClearAdminDispatchFilterTx"},{"ref":"AppAgentsClearAppAgentMetadataTx"},{"ref":"AppAgentsCompleteDestroyAppAgentTx"},{"ref":"AppAgentsDisableAdminColdWalletDispatchTx"},{"ref":"AppAgentsDisableHotWalletTx"},{"ref":"AppAgentsEnableHotWalletTx"},{"ref":"AppAgentsForceCreateAppAgentTx"},{"ref":"AppAgentsForceInitiateAppAgentDestroyTx"},{"ref":"AppAgentsForceInitiateAppAgentSuspensionTx"},{"ref":"AppAgentsForceInitiateAppAgentUnsuspensionTx"},{"ref":"AppAgentsInitiateDestroyAppAgentTx"},{"ref":"AppAgentsPauseAppAgentTx"},{"ref":"AppAgentsProcessDestroyTx"},{"ref":"AppAgentsReactivateAppAgentTx"},{"ref":"AppAgentsRemoveAdminTx"},{"ref":"AppAgentsRemoveAdminFromNamedAddressDispatchTx"},{"ref":"AppAgentsSetAdminDispatchFilterTx"},{"ref":"AppAgentsSetAppAgentMetadataTx"},{"ref":"AppAgentsUnpauseAppAgentTx"},{"ref":"AppResourcesSetActionPointsBalanceTx"},{"ref":"AppResourcesSetClearingPointsBalanceTx"},{"ref":"AppSubscriptionsCreateAppSubscriptionTierTx"},{"ref":"AppSubscriptionsObsoleteAppSubscriptionTierTx"},{"ref":"AppSubscriptionsSetAppPayOnDemandModeTx"},{"ref":"AppSubscriptionsSetAppSubscriptionTierTx"},{"ref":"AppTransactionsForceSubmitClearingTransactionTx"},{"ref":"AppTransactionsSubmitClearingTransactionTx"},{"ref":"AppTransferChannelsEstablishTransferChannelTx"},{"ref":"AppTransferChannelsRemoveTransferChannelTx"},{"ref":"AppTransferFiltersBlockAddressDepositsTx"},{"ref":"AppTransferFiltersSetAppDepositPermissionsTx"},{"ref":"AppTransferFiltersUnblockAddressDepositsTx"},{"ref":"AssetsBurnTx"},{"ref":"AssetsCreateTx"},{"ref":"AssetsDestroyAccountsTx"},{"ref":"AssetsDestroyApprovalsTx"},{"ref":"AssetsFinishDestroyTx"},{"ref":"AssetsForceTransferTx"},{"ref":"AssetsFreezeAccountTx"},{"ref":"AssetsFreezeAssetTx"},{"ref":"AssetsMintTx"},{"ref":"AssetsSetMetadataTx"},{"ref":"AssetsSetMinBalanceTx"},{"ref":"AssetsStartDestroyTx"},{"ref":"AssetsThawAccountTx"},{"ref":"AssetsThawAssetTx"},{"ref":"AssetsTransferTx"},{"ref":"AssetsTransferKeepAliveTx"},{"ref":"AssetsTransferOwnershipTx"},{"ref":"BalancesTransferAllTx"},{"ref":"BalancesTransferAllowDeathTx"},{"ref":"BalancesTransferKeepAliveTx"},{"ref":"NftsBurnItemTx"},{"ref":"NftsClearCollectionMetadataTx"},{"ref":"NftsClearItemMetadataTx"},{"ref":"NftsCreateCollectionTx"},{"ref":"NftsDestroyCollectionTx"},{"ref":"NftsLockItemTransferTx"},{"ref":"NftsMintItemTx"},{"ref":"NftsAcceptCollectionOwnershipTx"},{"ref":"NftsSetCollectionMetadataTx"},{"ref":"NftsSetItemMetadataTx"},{"ref":"NftsTransferItemTx"},{"ref":"NftsTransferCollectionOwnershipTx"},{"ref":"NftsUnlockItemTransferTx"},{"ref":"UserFreeTransactionsAppAgentBlacklistAddressTx"},{"ref":"UserFreeTransactionsAppAgentUnblacklistAddressTx"},{"ref":"UserFreeTransactionsBlacklistAddressTx"},{"ref":"UserFreeTransactionsClearAppAgentsFreeTransferInfosTx"},{"ref":"UserFreeTransactionsClearAssetLastTransferBlocksTx"},{"ref":"UserFreeTransactionsClearNftLastTransferBlocksTx"},{"ref":"UserFreeTransactionsClearUserFreeTransferInfosTx"},{"ref":"UserFreeTransactionsSetFreeTransfersEnabledTx"},{"ref":"UserFreeTransactionsUnblacklistAddressTx"},{"ref":"UserTransactionsSubmitTransferAllBalancesTx"},{"ref":"UserTransactionsSubmitTransferAssetsTx"},{"ref":"UserTransactionsSubmitTransferBalancesTx"},{"ref":"UserTransactionsSubmitTransferNftsTx"},{"ref":"UserVerificationSetUserLevelTx"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionPayload": {
        "dataType": "refObject",
        "properties": {
            "signatory": {"dataType":"string","required":true},
            "tx": {"ref":"TxAction","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"TransactionType.AssetsCreate"},{"ref":"TransactionType.AssetsStartDestroy"},{"ref":"TransactionType.AssetsDestroyAccounts"},{"ref":"TransactionType.AssetsDestroyApprovals"},{"ref":"TransactionType.AssetsFinishDestroy"},{"ref":"TransactionType.AssetsMint"},{"ref":"TransactionType.AssetsBurn"},{"ref":"TransactionType.AssetsTransfer"},{"ref":"TransactionType.AssetsTransferKeepAlive"},{"ref":"TransactionType.AssetsForceTransfer"},{"ref":"TransactionType.AssetsFreezeAccount"},{"ref":"TransactionType.AssetsThawAccount"},{"ref":"TransactionType.AssetsFreezeAsset"},{"ref":"TransactionType.AssetsThawAsset"},{"ref":"TransactionType.AssetsTransferOwnership"},{"ref":"TransactionType.AssetsSetMinBalance"},{"ref":"TransactionType.AssetsSetMetadata"},{"ref":"TransactionType.BalancesTransferAllowDeath"},{"ref":"TransactionType.BalancesTransferKeepAlive"},{"ref":"TransactionType.BalancesTransferAll"},{"ref":"TransactionType.NftsCreateCollection"},{"ref":"TransactionType.NftsDestroyCollection"},{"ref":"TransactionType.NftsTransferCollectionOwnership"},{"ref":"TransactionType.NftsAcceptCollectionOwnership"},{"ref":"TransactionType.NftsSetCollectionMetadata"},{"ref":"TransactionType.NftsClearCollectionMetadata"},{"ref":"TransactionType.NftsMintItem"},{"ref":"TransactionType.NftsBurnItem"},{"ref":"TransactionType.NftsTransferItem"},{"ref":"TransactionType.NftsLockItemTransfer"},{"ref":"TransactionType.NftsUnlockItemTransfer"},{"ref":"TransactionType.NftsSetItemMetadata"},{"ref":"TransactionType.NftsClearItemMetadata"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionArgs": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"BalancesTransferAllowDeathArgs"},{"ref":"BalancesTransferKeepAliveArgs"},{"ref":"BalancesTransferAllArgs"},{"ref":"AssetsCreateArgs"},{"ref":"AssetsStartDestroyArgs"},{"ref":"AssetsDestroyAccountsArgs"},{"ref":"AssetsDestroyApprovalsArgs"},{"ref":"AssetsFinishDestroyArgs"},{"ref":"AssetsMintArgs"},{"ref":"AssetsBurnArgs"},{"ref":"AssetsTransferArgs"},{"ref":"AssetsTransferKeepAliveArgs"},{"ref":"AssetsForceTransferArgs"},{"ref":"AssetsFreezeAccountArgs"},{"ref":"AssetsThawAccountArgs"},{"ref":"AssetsFreezeAssetArgs"},{"ref":"AssetsThawAssetArgs"},{"ref":"AssetsTransferOwnershipArgs"},{"ref":"AssetsSetMetadataArgs"},{"ref":"AssetsSetMinBalanceArgs"},{"ref":"NftsCreateCollectionArgs"},{"ref":"NftsDestroyCollectionArgs"},{"ref":"NftsMintItemArgs"},{"ref":"NftsBurnItemArgs"},{"ref":"NftsTransferItemArgs"},{"ref":"NftsLockItemTransferArgs"},{"ref":"NftsUnlockItemTransferArgs"},{"ref":"NftsTransferCollectionOwnershipArgs"},{"ref":"NftsSetItemMetadataArgs"},{"ref":"NftsClearItemMetadataArgs"},{"ref":"NftsSetCollectionMetadataArgs"},{"ref":"NftsClearCollectionMetadataArgs"},{"ref":"NftsAcceptCollectionOwnershipArgs"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BalancesTransferAllowDeathAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.BalancesTransferAllowDeath","required":true},
            "arguments": {"ref":"BalancesTransferAllowDeathArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BalancesTransferKeepAliveAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.BalancesTransferKeepAlive","required":true},
            "arguments": {"ref":"BalancesTransferKeepAliveArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BalancesTransferAllAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.BalancesTransferAll","required":true},
            "arguments": {"ref":"BalancesTransferAllArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsCreateAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsCreate","required":true},
            "arguments": {"ref":"AssetsCreateArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsStartDestroyAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsStartDestroy","required":true},
            "arguments": {"ref":"AssetsStartDestroyArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsDestroyAccountsAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsDestroyAccounts","required":true},
            "arguments": {"ref":"AssetsDestroyAccountsArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsDestroyApprovalsAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsDestroyApprovals","required":true},
            "arguments": {"ref":"AssetsDestroyApprovalsArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsFinishDestroyAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsFinishDestroy","required":true},
            "arguments": {"ref":"AssetsFinishDestroyArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsMintAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsMint","required":true},
            "arguments": {"ref":"AssetsMintArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsBurnAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsBurn","required":true},
            "arguments": {"ref":"AssetsBurnArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsTransferAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsTransfer","required":true},
            "arguments": {"ref":"AssetsTransferArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsTransferKeepAliveAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsTransferKeepAlive","required":true},
            "arguments": {"ref":"AssetsTransferKeepAliveArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsForceTransferAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsForceTransfer","required":true},
            "arguments": {"ref":"AssetsForceTransferArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsFreezeAccountAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsFreezeAccount","required":true},
            "arguments": {"ref":"AssetsFreezeAccountArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsThawAccountAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsThawAccount","required":true},
            "arguments": {"ref":"AssetsThawAccountArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsFreezeAssetAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsFreezeAsset","required":true},
            "arguments": {"ref":"AssetsFreezeAssetArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsThawAssetAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsThawAsset","required":true},
            "arguments": {"ref":"AssetsThawAssetArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsTransferOwnershipAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsTransferOwnership","required":true},
            "arguments": {"ref":"AssetsTransferOwnershipArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsSetMetadataAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsSetMetadata","required":true},
            "arguments": {"ref":"AssetsSetMetadataArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsSetMinBalanceAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.AssetsSetMinBalance","required":true},
            "arguments": {"ref":"AssetsSetMinBalanceArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsCreateCollectionAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.NftsCreateCollection","required":true},
            "arguments": {"ref":"NftsCreateCollectionArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsDestroyCollectionAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.NftsDestroyCollection","required":true},
            "arguments": {"ref":"NftsDestroyCollectionArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsMintItemAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.NftsMintItem","required":true},
            "arguments": {"ref":"NftsMintItemArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsBurnItemAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.NftsBurnItem","required":true},
            "arguments": {"ref":"NftsBurnItemArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsTransferItemAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.NftsTransferItem","required":true},
            "arguments": {"ref":"NftsTransferItemArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsLockItemTransferAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.NftsLockItemTransfer","required":true},
            "arguments": {"ref":"NftsLockItemTransferArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsUnlockItemTransferAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.NftsUnlockItemTransfer","required":true},
            "arguments": {"ref":"NftsUnlockItemTransferArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsTransferCollectionOwnershipAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.NftsTransferCollectionOwnership","required":true},
            "arguments": {"ref":"NftsTransferCollectionOwnershipArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsSetItemMetadataAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.NftsSetItemMetadata","required":true},
            "arguments": {"ref":"NftsSetItemMetadataArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsClearItemMetadataAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.NftsClearItemMetadata","required":true},
            "arguments": {"ref":"NftsClearItemMetadataArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsSetCollectionMetadataAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.NftsSetCollectionMetadata","required":true},
            "arguments": {"ref":"NftsSetCollectionMetadataArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsClearCollectionMetadataAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.NftsClearCollectionMetadata","required":true},
            "arguments": {"ref":"NftsClearCollectionMetadataArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsAcceptCollectionOwnershipAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"TransactionType.NftsAcceptCollectionOwnership","required":true},
            "arguments": {"ref":"NftsAcceptCollectionOwnershipArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicAction": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"BalancesTransferAllowDeathAction"},{"ref":"BalancesTransferKeepAliveAction"},{"ref":"BalancesTransferAllAction"},{"ref":"AssetsCreateAction"},{"ref":"AssetsStartDestroyAction"},{"ref":"AssetsDestroyAccountsAction"},{"ref":"AssetsDestroyApprovalsAction"},{"ref":"AssetsFinishDestroyAction"},{"ref":"AssetsMintAction"},{"ref":"AssetsBurnAction"},{"ref":"AssetsTransferAction"},{"ref":"AssetsTransferKeepAliveAction"},{"ref":"AssetsForceTransferAction"},{"ref":"AssetsFreezeAccountAction"},{"ref":"AssetsThawAccountAction"},{"ref":"AssetsFreezeAssetAction"},{"ref":"AssetsThawAssetAction"},{"ref":"AssetsTransferOwnershipAction"},{"ref":"AssetsSetMetadataAction"},{"ref":"AssetsSetMinBalanceAction"},{"ref":"NftsCreateCollectionAction"},{"ref":"NftsDestroyCollectionAction"},{"ref":"NftsMintItemAction"},{"ref":"NftsBurnItemAction"},{"ref":"NftsTransferItemAction"},{"ref":"NftsLockItemTransferAction"},{"ref":"NftsUnlockItemTransferAction"},{"ref":"NftsTransferCollectionOwnershipAction"},{"ref":"NftsSetItemMetadataAction"},{"ref":"NftsClearItemMetadataAction"},{"ref":"NftsSetCollectionMetadataAction"},{"ref":"NftsClearCollectionMetadataAction"},{"ref":"NftsAcceptCollectionOwnershipAction"}],"validators":{}},
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
