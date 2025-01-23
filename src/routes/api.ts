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
    "ActionType.BalancesTransferAllowDeath": {
        "dataType": "refEnum",
        "enums": ["balances.transferAllowDeath"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BlockchainGenericAccount": {
        "dataType": "refAlias",
        "type": {"dataType":"string","validators":{"minLength":{"value":49},"maxLength":{"value":49}}},
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
    "BalancesTransferAllowDeathArgs": {
        "dataType": "refObject",
        "properties": {
            "dest": {"ref":"BlockchainGenericAccount","required":true},
            "value": {"ref":"BlockchainGenericBalance","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType": {
        "dataType": "refEnum",
        "enums": ["appTransactions.submitClearingTransaction","balances.transferAllowDeath","balances.transferKeepAlive","balances.transferAll","nfts.create","nfts.destroy","nfts.transferOwnership","nfts.setAcceptOwnership","nfts.setCollectionMetadata","nfts.clearCollectionMetadata","nfts.mint","nfts.burn","nfts.transfer","nfts.lockItemTransfer","nfts.unlockItemTransfer","nfts.setMetadata","nfts.clearMetadata","assets.create","assets.startDestroy","assets.destroyAccounts","assets.destroyApprovals","assets.finishDestroy","assets.mint","assets.burn","assets.transfer","assets.transferKeepAlive","assets.forceTransfer","assets.freeze","assets.thaw","assets.freezeAsset","assets.thawAsset","assets.transferOwnership","assets.setMinBalance","assets.setMetadata"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BalancesTransferKeepAliveArgs": {
        "dataType": "refObject",
        "properties": {
            "dest": {"ref":"BlockchainGenericAccount","required":true},
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
            "dest": {"ref":"BlockchainGenericAccount","required":true},
            "keepAlive": {"ref":"BlockchainGenericBoolean","required":true},
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
            "beneficiary": {"ref":"BlockchainGenericAccount","required":true},
            "amount": {"ref":"BlockchainGenericBalance","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsBurnArgs": {
        "dataType": "refObject",
        "properties": {
            "id": {"ref":"BlockchainGenericId","required":true},
            "who": {"ref":"BlockchainGenericAccount","required":true},
            "amount": {"ref":"BlockchainGenericBalance","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsTransferArgs": {
        "dataType": "refObject",
        "properties": {
            "id": {"ref":"BlockchainGenericId","required":true},
            "target": {"ref":"BlockchainGenericAccount","required":true},
            "amount": {"ref":"BlockchainGenericBalance","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsTransferKeepAliveArgs": {
        "dataType": "refObject",
        "properties": {
            "id": {"ref":"BlockchainGenericId","required":true},
            "target": {"ref":"BlockchainGenericAccount","required":true},
            "amount": {"ref":"BlockchainGenericBalance","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsForceTransferArgs": {
        "dataType": "refObject",
        "properties": {
            "id": {"ref":"BlockchainGenericId","required":true},
            "source": {"ref":"BlockchainGenericAccount","required":true},
            "dest": {"ref":"BlockchainGenericAccount","required":true},
            "amount": {"ref":"BlockchainGenericBalance","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsFreezeAccountArgs": {
        "dataType": "refObject",
        "properties": {
            "id": {"ref":"BlockchainGenericId","required":true},
            "who": {"ref":"BlockchainGenericAccount","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsThawAccountArgs": {
        "dataType": "refObject",
        "properties": {
            "id": {"ref":"BlockchainGenericId","required":true},
            "who": {"ref":"BlockchainGenericAccount","required":true},
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
            "owner": {"ref":"BlockchainGenericAccount","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BlockchainGenericText": {
        "dataType": "refAlias",
        "type": {"dataType":"string","validators":{"maxLength":{"value":256}}},
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
            "mintTo": {"ref":"BlockchainGenericAccount","required":true},
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
    "NftsTransferItemArgs": {
        "dataType": "refObject",
        "properties": {
            "collection": {"ref":"BlockchainGenericId","required":true},
            "item": {"ref":"BlockchainGenericId","required":true},
            "dest": {"ref":"BlockchainGenericAccount","required":true},
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
            "newOwner": {"ref":"BlockchainGenericAccount","required":true},
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
    "BlockchainGenericAddressId": {
        "dataType": "refAlias",
        "type": {"ref":"UINT128","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BlockchainAddressName": {
        "dataType": "refAlias",
        "type": {"dataType":"string","validators":{"minLength":{"value":10},"maxLength":{"value":10},"pattern":{"value":"^[0-9a-zA-Z\\-#]+$"}}},
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
    "AppTransactionsSubmitClearingTransactionArgs": {
        "dataType": "refObject",
        "properties": {
            "appAgentId": {"ref":"BlockchainGenericId","required":true},
            "atomics": {"ref":"CTAtomicActions","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionArgs": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"BalancesTransferAllowDeathArgs"},{"ref":"BalancesTransferKeepAliveArgs"},{"ref":"BalancesTransferAllArgs"},{"ref":"AssetsCreateArgs"},{"ref":"AssetsStartDestroyArgs"},{"ref":"AssetsDestroyAccountsArgs"},{"ref":"AssetsDestroyApprovalsArgs"},{"ref":"AssetsFinishDestroyArgs"},{"ref":"AssetsMintArgs"},{"ref":"AssetsBurnArgs"},{"ref":"AssetsTransferArgs"},{"ref":"AssetsTransferKeepAliveArgs"},{"ref":"AssetsForceTransferArgs"},{"ref":"AssetsFreezeAccountArgs"},{"ref":"AssetsThawAccountArgs"},{"ref":"AssetsFreezeAssetArgs"},{"ref":"AssetsThawAssetArgs"},{"ref":"AssetsTransferOwnershipArgs"},{"ref":"AssetsSetMetadataArgs"},{"ref":"AssetsSetMinBalanceArgs"},{"ref":"NftsCreateCollectionArgs"},{"ref":"NftsDestroyCollectionArgs"},{"ref":"NftsMintItemArgs"},{"ref":"NftsBurnItemArgs"},{"ref":"NftsTransferItemArgs"},{"ref":"NftsLockItemTransferArgs"},{"ref":"NftsUnlockItemTransferArgs"},{"ref":"NftsTransferCollectionOwnershipArgs"},{"ref":"NftsSetItemMetadataArgs"},{"ref":"NftsClearItemMetadataArgs"},{"ref":"NftsSetCollectionMetadataArgs"},{"ref":"NftsClearCollectionMetadataArgs"},{"ref":"NftsAcceptCollectionOwnershipArgs"},{"ref":"AppTransactionsSubmitClearingTransactionArgs"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BalancesTransferAllowDeathTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.BalancesTransferAllowDeath","required":true},
            "arguments": {"ref":"BalancesTransferAllowDeathArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.BalancesTransferKeepAlive": {
        "dataType": "refEnum",
        "enums": ["balances.transferKeepAlive"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BalancesTransferKeepAliveTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.BalancesTransferKeepAlive","required":true},
            "arguments": {"ref":"BalancesTransferKeepAliveArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.BalancesTransferAll": {
        "dataType": "refEnum",
        "enums": ["balances.transferAll"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BalancesTransferAllTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.BalancesTransferAll","required":true},
            "arguments": {"ref":"BalancesTransferAllArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsCreate": {
        "dataType": "refEnum",
        "enums": ["assets.create"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsCreateTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsCreate","required":true},
            "arguments": {"ref":"AssetsCreateArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsStartDestroy": {
        "dataType": "refEnum",
        "enums": ["assets.startDestroy"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsStartDestroyTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsStartDestroy","required":true},
            "arguments": {"ref":"AssetsStartDestroyArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsDestroyAccounts": {
        "dataType": "refEnum",
        "enums": ["assets.destroyAccounts"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsDestroyAccountsTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsDestroyAccounts","required":true},
            "arguments": {"ref":"AssetsDestroyAccountsArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsDestroyApprovals": {
        "dataType": "refEnum",
        "enums": ["assets.destroyApprovals"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsDestroyApprovalsTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsDestroyApprovals","required":true},
            "arguments": {"ref":"AssetsDestroyApprovalsArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsFinishDestroy": {
        "dataType": "refEnum",
        "enums": ["assets.finishDestroy"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsFinishDestroyTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsFinishDestroy","required":true},
            "arguments": {"ref":"AssetsFinishDestroyArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsMint": {
        "dataType": "refEnum",
        "enums": ["assets.mint"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsMintTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsMint","required":true},
            "arguments": {"ref":"AssetsMintArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsBurn": {
        "dataType": "refEnum",
        "enums": ["assets.burn"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsBurnTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsBurn","required":true},
            "arguments": {"ref":"AssetsBurnArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsTransfer": {
        "dataType": "refEnum",
        "enums": ["assets.transfer"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsTransferTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsTransfer","required":true},
            "arguments": {"ref":"AssetsTransferArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsTransferKeepAlive": {
        "dataType": "refEnum",
        "enums": ["assets.transferKeepAlive"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsTransferKeepAliveTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsTransferKeepAlive","required":true},
            "arguments": {"ref":"AssetsTransferKeepAliveArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsForceTransfer": {
        "dataType": "refEnum",
        "enums": ["assets.forceTransfer"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsForceTransferTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsForceTransfer","required":true},
            "arguments": {"ref":"AssetsForceTransferArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsFreezeAccount": {
        "dataType": "refEnum",
        "enums": ["assets.freeze"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsFreezeAccountTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsFreezeAccount","required":true},
            "arguments": {"ref":"AssetsFreezeAccountArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsThawAccount": {
        "dataType": "refEnum",
        "enums": ["assets.thaw"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsThawAccountTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsThawAccount","required":true},
            "arguments": {"ref":"AssetsThawAccountArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsFreezeAsset": {
        "dataType": "refEnum",
        "enums": ["assets.freezeAsset"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsFreezeAssetTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsFreezeAsset","required":true},
            "arguments": {"ref":"AssetsFreezeAssetArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsThawAsset": {
        "dataType": "refEnum",
        "enums": ["assets.thawAsset"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsThawAssetTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsThawAsset","required":true},
            "arguments": {"ref":"AssetsThawAssetArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsTransferOwnership": {
        "dataType": "refEnum",
        "enums": ["assets.transferOwnership"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsTransferOwnershipTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsTransferOwnership","required":true},
            "arguments": {"ref":"AssetsTransferOwnershipArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsSetMetadata": {
        "dataType": "refEnum",
        "enums": ["assets.setMetadata"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsSetMetadataTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsSetMetadata","required":true},
            "arguments": {"ref":"AssetsSetMetadataArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsSetMinBalance": {
        "dataType": "refEnum",
        "enums": ["assets.setMinBalance"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsSetMinBalanceTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsSetMinBalance","required":true},
            "arguments": {"ref":"AssetsSetMinBalanceArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.NftsCreateCollection": {
        "dataType": "refEnum",
        "enums": ["nfts.create"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsCreateCollectionTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.NftsCreateCollection","required":true},
            "arguments": {"ref":"NftsCreateCollectionArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.NftsDestroyCollection": {
        "dataType": "refEnum",
        "enums": ["nfts.destroy"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsDestroyCollectionTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.NftsDestroyCollection","required":true},
            "arguments": {"ref":"NftsDestroyCollectionArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.NftsMintItem": {
        "dataType": "refEnum",
        "enums": ["nfts.mint"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsMintItemTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.NftsMintItem","required":true},
            "arguments": {"ref":"NftsMintItemArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.NftsBurnItem": {
        "dataType": "refEnum",
        "enums": ["nfts.burn"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsBurnItemTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.NftsBurnItem","required":true},
            "arguments": {"ref":"NftsBurnItemArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.NftsTransferItem": {
        "dataType": "refEnum",
        "enums": ["nfts.transfer"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsTransferItemTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.NftsTransferItem","required":true},
            "arguments": {"ref":"NftsTransferItemArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.NftsLockItemTransfer": {
        "dataType": "refEnum",
        "enums": ["nfts.lockItemTransfer"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsLockItemTransferTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.NftsLockItemTransfer","required":true},
            "arguments": {"ref":"NftsLockItemTransferArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.NftsUnlockItemTransfer": {
        "dataType": "refEnum",
        "enums": ["nfts.unlockItemTransfer"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsUnlockItemTransferTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.NftsUnlockItemTransfer","required":true},
            "arguments": {"ref":"NftsUnlockItemTransferArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.NftsTransferCollectionOwnership": {
        "dataType": "refEnum",
        "enums": ["nfts.transferOwnership"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsTransferCollectionOwnershipTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.NftsTransferCollectionOwnership","required":true},
            "arguments": {"ref":"NftsTransferCollectionOwnershipArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.NftsSetItemMetadata": {
        "dataType": "refEnum",
        "enums": ["nfts.setMetadata"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsSetItemMetadataTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.NftsSetItemMetadata","required":true},
            "arguments": {"ref":"NftsSetItemMetadataArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.NftsClearItemMetadata": {
        "dataType": "refEnum",
        "enums": ["nfts.clearMetadata"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsClearItemMetadataTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.NftsClearItemMetadata","required":true},
            "arguments": {"ref":"NftsClearItemMetadataArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.NftsSetCollectionMetadata": {
        "dataType": "refEnum",
        "enums": ["nfts.setCollectionMetadata"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsSetCollectionMetadataTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.NftsSetCollectionMetadata","required":true},
            "arguments": {"ref":"NftsSetCollectionMetadataArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.NftsClearCollectionMetadata": {
        "dataType": "refEnum",
        "enums": ["nfts.clearCollectionMetadata"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsClearCollectionMetadataTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.NftsClearCollectionMetadata","required":true},
            "arguments": {"ref":"NftsClearCollectionMetadataArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.NftsAcceptCollectionOwnership": {
        "dataType": "refEnum",
        "enums": ["nfts.setAcceptOwnership"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsAcceptCollectionOwnershipTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.NftsAcceptCollectionOwnership","required":true},
            "arguments": {"ref":"NftsAcceptCollectionOwnershipArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AppTransactionsSubmitClearingTransaction": {
        "dataType": "refEnum",
        "enums": ["appTransactions.submitClearingTransaction"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppTransactionsSubmitClearingTransactionTx": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AppTransactionsSubmitClearingTransaction","required":true},
            "arguments": {"ref":"AppTransactionsSubmitClearingTransactionArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TxAction": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"BalancesTransferAllowDeathTx"},{"ref":"BalancesTransferKeepAliveTx"},{"ref":"BalancesTransferAllTx"},{"ref":"AssetsCreateTx"},{"ref":"AssetsStartDestroyTx"},{"ref":"AssetsDestroyAccountsTx"},{"ref":"AssetsDestroyApprovalsTx"},{"ref":"AssetsFinishDestroyTx"},{"ref":"AssetsMintTx"},{"ref":"AssetsBurnTx"},{"ref":"AssetsTransferTx"},{"ref":"AssetsTransferKeepAliveTx"},{"ref":"AssetsForceTransferTx"},{"ref":"AssetsFreezeAccountTx"},{"ref":"AssetsThawAccountTx"},{"ref":"AssetsFreezeAssetTx"},{"ref":"AssetsThawAssetTx"},{"ref":"AssetsTransferOwnershipTx"},{"ref":"AssetsSetMetadataTx"},{"ref":"AssetsSetMinBalanceTx"},{"ref":"NftsCreateCollectionTx"},{"ref":"NftsDestroyCollectionTx"},{"ref":"NftsMintItemTx"},{"ref":"NftsBurnItemTx"},{"ref":"NftsTransferItemTx"},{"ref":"NftsLockItemTransferTx"},{"ref":"NftsUnlockItemTransferTx"},{"ref":"NftsTransferCollectionOwnershipTx"},{"ref":"NftsSetItemMetadataTx"},{"ref":"NftsClearItemMetadataTx"},{"ref":"NftsSetCollectionMetadataTx"},{"ref":"NftsClearCollectionMetadataTx"},{"ref":"NftsAcceptCollectionOwnershipTx"},{"ref":"AppTransactionsSubmitClearingTransactionTx"}],"validators":{}},
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
    "BalancesTransferAllowDeathAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.BalancesTransferAllowDeath","required":true},
            "arguments": {"ref":"BalancesTransferAllowDeathArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BalancesTransferKeepAliveAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.BalancesTransferKeepAlive","required":true},
            "arguments": {"ref":"BalancesTransferKeepAliveArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BalancesTransferAllAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.BalancesTransferAll","required":true},
            "arguments": {"ref":"BalancesTransferAllArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsCreateAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsCreate","required":true},
            "arguments": {"ref":"AssetsCreateArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsStartDestroyAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsStartDestroy","required":true},
            "arguments": {"ref":"AssetsStartDestroyArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsDestroyAccountsAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsDestroyAccounts","required":true},
            "arguments": {"ref":"AssetsDestroyAccountsArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsDestroyApprovalsAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsDestroyApprovals","required":true},
            "arguments": {"ref":"AssetsDestroyApprovalsArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsFinishDestroyAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsFinishDestroy","required":true},
            "arguments": {"ref":"AssetsFinishDestroyArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsMintAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsMint","required":true},
            "arguments": {"ref":"AssetsMintArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsBurnAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsBurn","required":true},
            "arguments": {"ref":"AssetsBurnArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsTransferAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsTransfer","required":true},
            "arguments": {"ref":"AssetsTransferArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsTransferKeepAliveAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsTransferKeepAlive","required":true},
            "arguments": {"ref":"AssetsTransferKeepAliveArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsForceTransferAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsForceTransfer","required":true},
            "arguments": {"ref":"AssetsForceTransferArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsFreezeAccountAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsFreezeAccount","required":true},
            "arguments": {"ref":"AssetsFreezeAccountArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsThawAccountAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsThawAccount","required":true},
            "arguments": {"ref":"AssetsThawAccountArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsFreezeAssetAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsFreezeAsset","required":true},
            "arguments": {"ref":"AssetsFreezeAssetArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsThawAssetAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsThawAsset","required":true},
            "arguments": {"ref":"AssetsThawAssetArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsTransferOwnershipAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsTransferOwnership","required":true},
            "arguments": {"ref":"AssetsTransferOwnershipArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsSetMetadataAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsSetMetadata","required":true},
            "arguments": {"ref":"AssetsSetMetadataArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsSetMinBalanceAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AssetsSetMinBalance","required":true},
            "arguments": {"ref":"AssetsSetMinBalanceArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsCreateCollectionAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.NftsCreateCollection","required":true},
            "arguments": {"ref":"NftsCreateCollectionArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsDestroyCollectionAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.NftsDestroyCollection","required":true},
            "arguments": {"ref":"NftsDestroyCollectionArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsMintItemAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.NftsMintItem","required":true},
            "arguments": {"ref":"NftsMintItemArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsBurnItemAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.NftsBurnItem","required":true},
            "arguments": {"ref":"NftsBurnItemArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsTransferItemAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.NftsTransferItem","required":true},
            "arguments": {"ref":"NftsTransferItemArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsLockItemTransferAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.NftsLockItemTransfer","required":true},
            "arguments": {"ref":"NftsLockItemTransferArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsUnlockItemTransferAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.NftsUnlockItemTransfer","required":true},
            "arguments": {"ref":"NftsUnlockItemTransferArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsTransferCollectionOwnershipAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.NftsTransferCollectionOwnership","required":true},
            "arguments": {"ref":"NftsTransferCollectionOwnershipArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsSetItemMetadataAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.NftsSetItemMetadata","required":true},
            "arguments": {"ref":"NftsSetItemMetadataArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsClearItemMetadataAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.NftsClearItemMetadata","required":true},
            "arguments": {"ref":"NftsClearItemMetadataArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsSetCollectionMetadataAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.NftsSetCollectionMetadata","required":true},
            "arguments": {"ref":"NftsSetCollectionMetadataArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsClearCollectionMetadataAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.NftsClearCollectionMetadata","required":true},
            "arguments": {"ref":"NftsClearCollectionMetadataArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsAcceptCollectionOwnershipAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.NftsAcceptCollectionOwnership","required":true},
            "arguments": {"ref":"NftsAcceptCollectionOwnershipArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppTransactionsSubmitClearingTransactionAction": {
        "dataType": "refObject",
        "properties": {
            "actionType": {"ref":"ActionType.AppTransactionsSubmitClearingTransaction","required":true},
            "arguments": {"ref":"AppTransactionsSubmitClearingTransactionArgs","required":true},
            "origin": {"ref":"CTActionOrigin","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicAction": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"BalancesTransferAllowDeathAction"},{"ref":"BalancesTransferKeepAliveAction"},{"ref":"BalancesTransferAllAction"},{"ref":"AssetsCreateAction"},{"ref":"AssetsStartDestroyAction"},{"ref":"AssetsDestroyAccountsAction"},{"ref":"AssetsDestroyApprovalsAction"},{"ref":"AssetsFinishDestroyAction"},{"ref":"AssetsMintAction"},{"ref":"AssetsBurnAction"},{"ref":"AssetsTransferAction"},{"ref":"AssetsTransferKeepAliveAction"},{"ref":"AssetsForceTransferAction"},{"ref":"AssetsFreezeAccountAction"},{"ref":"AssetsThawAccountAction"},{"ref":"AssetsFreezeAssetAction"},{"ref":"AssetsThawAssetAction"},{"ref":"AssetsTransferOwnershipAction"},{"ref":"AssetsSetMetadataAction"},{"ref":"AssetsSetMinBalanceAction"},{"ref":"NftsCreateCollectionAction"},{"ref":"NftsDestroyCollectionAction"},{"ref":"NftsMintItemAction"},{"ref":"NftsBurnItemAction"},{"ref":"NftsTransferItemAction"},{"ref":"NftsLockItemTransferAction"},{"ref":"NftsUnlockItemTransferAction"},{"ref":"NftsTransferCollectionOwnershipAction"},{"ref":"NftsSetItemMetadataAction"},{"ref":"NftsClearItemMetadataAction"},{"ref":"NftsSetCollectionMetadataAction"},{"ref":"NftsClearCollectionMetadataAction"},{"ref":"NftsAcceptCollectionOwnershipAction"},{"ref":"AppTransactionsSubmitClearingTransactionAction"}],"validators":{}},
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
