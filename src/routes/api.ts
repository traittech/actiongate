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
    "BlockchainGenericAccount": {
        "dataType": "refAlias",
        "type": {"dataType":"string","validators":{}},
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
    "CTActionOrigin": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"nestedObjectLiteral","nestedProperties":{"AppAgentId":{"dataType":"any","required":true}}},{"dataType":"nestedObjectLiteral","nestedProperties":{"AppAgentAddress":{"dataType":"string","required":true}}},{"dataType":"nestedObjectLiteral","nestedProperties":{"TransactionalAddressId":{"dataType":"any","required":true}}},{"dataType":"nestedObjectLiteral","nestedProperties":{"TransactionalAddress":{"dataType":"any","required":true}}},{"dataType":"nestedObjectLiteral","nestedProperties":{"NamedAddress":{"dataType":"any","required":true}}},{"dataType":"nestedObjectLiteral","nestedProperties":{"NamedAddressName":{"dataType":"any","required":true}}}],"validators":{}},
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
    "TransactionPayload": {
        "dataType": "refObject",
        "properties": {
            "signatory": {"dataType":"string","required":true},
            "module_name": {"dataType":"string","required":true},
            "function_name": {"dataType":"string","required":true},
            "arguments": {"ref":"TransactionArgs","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.BalancesTransferAllowDeath": {
        "dataType": "refEnum",
        "enums": ["balances.transferAllowDeath"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.BalancesTransferAllowDeath.BalancesTransferAllowDeathArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"BalancesTransferAllowDeathArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.BalancesTransferAllowDeath","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BalancesTransferAllowDeathAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.BalancesTransferAllowDeath.BalancesTransferAllowDeathArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.BalancesTransferKeepAlive": {
        "dataType": "refEnum",
        "enums": ["balances.transferKeepAlive"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.BalancesTransferKeepAlive.BalancesTransferKeepAliveArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"BalancesTransferKeepAliveArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.BalancesTransferKeepAlive","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BalancesTransferKeepAliveAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.BalancesTransferKeepAlive.BalancesTransferKeepAliveArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.BalancesTransferAll": {
        "dataType": "refEnum",
        "enums": ["balances.transferAll"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.BalancesTransferAll.BalancesTransferAllArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"BalancesTransferAllArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.BalancesTransferAll","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BalancesTransferAllAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.BalancesTransferAll.BalancesTransferAllArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsCreate": {
        "dataType": "refEnum",
        "enums": ["assets.create"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.AssetsCreate.AssetsCreateArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"AssetsCreateArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.AssetsCreate","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsCreateAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.AssetsCreate.AssetsCreateArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsStartDestroy": {
        "dataType": "refEnum",
        "enums": ["assets.startDestroy"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.AssetsStartDestroy.AssetsStartDestroyArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"AssetsStartDestroyArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.AssetsStartDestroy","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsStartDestroyAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.AssetsStartDestroy.AssetsStartDestroyArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsDestroyAccounts": {
        "dataType": "refEnum",
        "enums": ["assets.destroyAccounts"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.AssetsDestroyAccounts.AssetsDestroyAccountsArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"AssetsDestroyAccountsArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.AssetsDestroyAccounts","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsDestroyAccountsAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.AssetsDestroyAccounts.AssetsDestroyAccountsArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsDestroyApprovals": {
        "dataType": "refEnum",
        "enums": ["assets.destroyApprovals"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.AssetsDestroyApprovals.AssetsDestroyApprovalsArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"AssetsDestroyApprovalsArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.AssetsDestroyApprovals","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsDestroyApprovalsAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.AssetsDestroyApprovals.AssetsDestroyApprovalsArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsFinishDestroy": {
        "dataType": "refEnum",
        "enums": ["assets.finishDestroy"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.AssetsFinishDestroy.AssetsFinishDestroyArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"AssetsFinishDestroyArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.AssetsFinishDestroy","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsFinishDestroyAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.AssetsFinishDestroy.AssetsFinishDestroyArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsMint": {
        "dataType": "refEnum",
        "enums": ["assets.mint"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.AssetsMint.AssetsMintArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"AssetsMintArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.AssetsMint","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsMintAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.AssetsMint.AssetsMintArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsBurn": {
        "dataType": "refEnum",
        "enums": ["assets.burn"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.AssetsBurn.AssetsBurnArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"AssetsBurnArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.AssetsBurn","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsBurnAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.AssetsBurn.AssetsBurnArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsTransfer": {
        "dataType": "refEnum",
        "enums": ["assets.transfer"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.AssetsTransfer.AssetsTransferArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"AssetsTransferArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.AssetsTransfer","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsTransferAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.AssetsTransfer.AssetsTransferArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsTransferKeepAlive": {
        "dataType": "refEnum",
        "enums": ["assets.transferKeepAlive"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.AssetsTransferKeepAlive.AssetsTransferKeepAliveArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"AssetsTransferKeepAliveArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.AssetsTransferKeepAlive","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsTransferKeepAliveAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.AssetsTransferKeepAlive.AssetsTransferKeepAliveArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsForceTransfer": {
        "dataType": "refEnum",
        "enums": ["assets.forceTransfer"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.AssetsForceTransfer.AssetsForceTransferArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"AssetsForceTransferArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.AssetsForceTransfer","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsForceTransferAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.AssetsForceTransfer.AssetsForceTransferArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsFreezeAccount": {
        "dataType": "refEnum",
        "enums": ["assets.freeze"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.AssetsFreezeAccount.AssetsFreezeAccountArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"AssetsFreezeAccountArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.AssetsFreezeAccount","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsFreezeAccountAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.AssetsFreezeAccount.AssetsFreezeAccountArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsThawAccount": {
        "dataType": "refEnum",
        "enums": ["assets.thaw"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.AssetsThawAccount.AssetsThawAccountArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"AssetsThawAccountArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.AssetsThawAccount","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsThawAccountAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.AssetsThawAccount.AssetsThawAccountArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsFreezeAsset": {
        "dataType": "refEnum",
        "enums": ["assets.freezeAsset"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.AssetsFreezeAsset.AssetsFreezeAssetArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"AssetsFreezeAssetArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.AssetsFreezeAsset","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsFreezeAssetAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.AssetsFreezeAsset.AssetsFreezeAssetArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsThawAsset": {
        "dataType": "refEnum",
        "enums": ["assets.thawAsset"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.AssetsThawAsset.AssetsThawAssetArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"AssetsThawAssetArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.AssetsThawAsset","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsThawAssetAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.AssetsThawAsset.AssetsThawAssetArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsTransferOwnership": {
        "dataType": "refEnum",
        "enums": ["assets.transferOwnership"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.AssetsTransferOwnership.AssetsTransferOwnershipArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"AssetsTransferOwnershipArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.AssetsTransferOwnership","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsTransferOwnershipAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.AssetsTransferOwnership.AssetsTransferOwnershipArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsSetMetadata": {
        "dataType": "refEnum",
        "enums": ["assets.setMetadata"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.AssetsSetMetadata.AssetsSetMetadataArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"AssetsSetMetadataArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.AssetsSetMetadata","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsSetMetadataAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.AssetsSetMetadata.AssetsSetMetadataArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AssetsSetMinBalance": {
        "dataType": "refEnum",
        "enums": ["assets.setMinBalance"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.AssetsSetMinBalance.AssetsSetMinBalanceArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"AssetsSetMinBalanceArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.AssetsSetMinBalance","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AssetsSetMinBalanceAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.AssetsSetMinBalance.AssetsSetMinBalanceArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.NftsCreateCollection": {
        "dataType": "refEnum",
        "enums": ["nfts.create"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.NftsCreateCollection.NftsCreateCollectionArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"NftsCreateCollectionArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.NftsCreateCollection","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsCreateCollectionAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.NftsCreateCollection.NftsCreateCollectionArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.NftsDestroyCollection": {
        "dataType": "refEnum",
        "enums": ["nfts.destroy"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.NftsDestroyCollection.NftsDestroyCollectionArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"NftsDestroyCollectionArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.NftsDestroyCollection","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsDestroyCollectionAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.NftsDestroyCollection.NftsDestroyCollectionArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.NftsMintItem": {
        "dataType": "refEnum",
        "enums": ["nfts.mint"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.NftsMintItem.NftsMintItemArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"NftsMintItemArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.NftsMintItem","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsMintItemAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.NftsMintItem.NftsMintItemArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.NftsBurnItem": {
        "dataType": "refEnum",
        "enums": ["nfts.burn"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.NftsBurnItem.NftsBurnItemArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"NftsBurnItemArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.NftsBurnItem","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsBurnItemAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.NftsBurnItem.NftsBurnItemArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.NftsTransferItem": {
        "dataType": "refEnum",
        "enums": ["nfts.transfer"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.NftsTransferItem.NftsTransferItemArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"NftsTransferItemArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.NftsTransferItem","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsTransferItemAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.NftsTransferItem.NftsTransferItemArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.NftsLockItemTransfer": {
        "dataType": "refEnum",
        "enums": ["nfts.lockItemTransfer"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.NftsLockItemTransfer.NftsLockItemTransferArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"NftsLockItemTransferArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.NftsLockItemTransfer","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsLockItemTransferAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.NftsLockItemTransfer.NftsLockItemTransferArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.NftsUnlockItemTransfer": {
        "dataType": "refEnum",
        "enums": ["nfts.unlockItemTransfer"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.NftsUnlockItemTransfer.NftsUnlockItemTransferArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"NftsUnlockItemTransferArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.NftsUnlockItemTransfer","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsUnlockItemTransferAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.NftsUnlockItemTransfer.NftsUnlockItemTransferArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.NftsTransferCollectionOwnership": {
        "dataType": "refEnum",
        "enums": ["nfts.transferOwnership"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.NftsTransferCollectionOwnership.NftsTransferCollectionOwnershipArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"NftsTransferCollectionOwnershipArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.NftsTransferCollectionOwnership","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsTransferCollectionOwnershipAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.NftsTransferCollectionOwnership.NftsTransferCollectionOwnershipArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.NftsSetItemMetadata": {
        "dataType": "refEnum",
        "enums": ["nfts.setMetadata"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.NftsSetItemMetadata.NftsSetItemMetadataArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"NftsSetItemMetadataArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.NftsSetItemMetadata","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsSetItemMetadataAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.NftsSetItemMetadata.NftsSetItemMetadataArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.NftsClearItemMetadata": {
        "dataType": "refEnum",
        "enums": ["nfts.clearMetadata"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.NftsClearItemMetadata.NftsClearItemMetadataArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"NftsClearItemMetadataArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.NftsClearItemMetadata","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsClearItemMetadataAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.NftsClearItemMetadata.NftsClearItemMetadataArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.NftsSetCollectionMetadata": {
        "dataType": "refEnum",
        "enums": ["nfts.setCollectionMetadata"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.NftsSetCollectionMetadata.NftsSetCollectionMetadataArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"NftsSetCollectionMetadataArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.NftsSetCollectionMetadata","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsSetCollectionMetadataAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.NftsSetCollectionMetadata.NftsSetCollectionMetadataArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.NftsClearCollectionMetadata": {
        "dataType": "refEnum",
        "enums": ["nfts.clearCollectionMetadata"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.NftsClearCollectionMetadata.NftsClearCollectionMetadataArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"NftsClearCollectionMetadataArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.NftsClearCollectionMetadata","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsClearCollectionMetadataAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.NftsClearCollectionMetadata.NftsClearCollectionMetadataArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.NftsAcceptCollectionOwnership": {
        "dataType": "refEnum",
        "enums": ["nfts.setAcceptOwnership"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.NftsAcceptCollectionOwnership.NftsAcceptCollectionOwnershipArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"NftsAcceptCollectionOwnershipArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.NftsAcceptCollectionOwnership","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NftsAcceptCollectionOwnershipAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.NftsAcceptCollectionOwnership.NftsAcceptCollectionOwnershipArgs_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType.AppTransactionsSubmitClearingTransaction": {
        "dataType": "refEnum",
        "enums": ["appTransactions.submitClearingTransaction"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CTAtomicActionGeneric_ActionType.AppTransactionsSubmitClearingTransaction.AppTransactionsSubmitClearingTransactionArgs_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"arguments":{"ref":"AppTransactionsSubmitClearingTransactionArgs","required":true},"origin":{"ref":"CTActionOrigin","required":true},"actionType":{"ref":"ActionType.AppTransactionsSubmitClearingTransaction","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AppTransactionsSubmitClearingTransactionAction": {
        "dataType": "refAlias",
        "type": {"ref":"CTAtomicActionGeneric_ActionType.AppTransactionsSubmitClearingTransaction.AppTransactionsSubmitClearingTransactionArgs_","validators":{}},
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
            "app_agent_id": {"dataType":"double","required":true},
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
