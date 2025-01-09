import { construct, UnsignedTransaction, OptionsWithMeta, BaseTxInfo } from '@substrate/txwrapper-polkadot';

import { TransactionService } from '../adapter/datagate';
import { loadConfig } from '../functions/config';
import * as txwrapper from '../txwrapper/calls';
import { ActionType } from '../types/api/actions';

import logger from './logger';
import { signWith } from './signer';
import { generateTxMetadata, buildUnsignedTransaction } from './tx-helper';

import type { CTAtomicAction } from '../txwrapper/calls';
import type { ClearingTransactionPayload } from '../types/api/clearingTransaction';
import type { CTAction } from '../types/api/common';
import type { KeyringPair } from '@polkadot/keyring/types';

const config = loadConfig();
const txService = new TransactionService(config.datagate_api.uri);

/**
 * Creates a clearing transaction and broadcasts it.
 *
 * @param pair - The keyring pair to sign with.
 * @param payload - The payload for the clearing transaction.
 * @returns The transaction hash.
 *
 * @throws Will throw an error if there is an issue during transaction creation or broadcasting.
 */
export async function createClearingTransactionAndBroadcast(
  pair: KeyringPair,
  payload: ClearingTransactionPayload
): Promise<string> {
  try {
    // Generate metadata, base transaction info, and options
    logger.debug('Generating transaction metadata...');
    const { registry, baseTxInfo, options } = await generateTxMetadata(pair);

    const unsignedAtomics: CTAction[][] = [];

    // Build unsigned atomics
    logger.info(`Building unsigned atomics with payload ${payload}`);
    for (const atomic of payload.atomics) {
      const unsignedActions: CTAction[] = [];

      for (const action of atomic.actions) {
        const actionTxType: CTAction = buildCTAction(action, baseTxInfo, options);
        unsignedActions.push(actionTxType);
      }

      unsignedAtomics.push(unsignedActions);
    }

    // Build the unsigned clearing transaction
    logger.debug('Building unsigned clearing transaction...');
    const unsigned = buildUnsignedTransaction(
      'appTransactions',
      'submitClearingTransaction',
      [payload.app_agent_id, unsignedAtomics],
      baseTxInfo,
      options
    );

    // Construct the signing payload from an unsigned transaction
    logger.debug('Constructing signing payload...');
    const signingPayload = construct.signingPayload(unsigned, { registry });

    // Sign the payload
    logger.debug('Signing the payload...');
    const signature = signWith(pair, signingPayload, {
      metadataRpc: baseTxInfo.metadataRpc,
      registry,
    });

    // Serialize the signed transaction
    logger.debug('Serializing signed transaction...');
    const tx = construct.signedTx(unsigned, signature, {
      metadataRpc: baseTxInfo.metadataRpc,
      registry,
    });

    // Derive the transaction hash of the signed transaction offline
    const expectedTxHash = construct.txHash(tx);
    logger.info(`Expected Tx Hash: ${expectedTxHash}`);

    // Broadcast the transaction
    logger.info('Broadcasting the transaction...');
    const broadcast = await txService.submitTransaction(tx);

    logger.info('Transaction broadcasted successfully');
    logger.debug(broadcast);

    return expectedTxHash;
  } catch (error) {
    logger.error('Error creating and broadcasting clearing transaction:', error);
    throw new Error(`Failed to create and broadcast clearing transaction: ${error}`);
  }
}

function buildCTAction(action: CTAtomicAction, baseTxInfo: BaseTxInfo, options: OptionsWithMeta): CTAction {
  let unsigned: UnsignedTransaction;

  // Handle different action types
  switch (action.actionType) {
    // Balances Pallet
    case ActionType.BalancesTransferAllowDeath: {
      unsigned = txwrapper.balancesTransferAllowDeath(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.BalancesTransferKeepAlive: {
      unsigned = txwrapper.balancesTransferKeepAlive(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.BalancesTransferAll: {
      unsigned = txwrapper.balancesTransferAll(action.arguments, baseTxInfo, options);
      break;
    }

    // Nfts Pallet
    case ActionType.NftsCreateCollection: {
      unsigned = txwrapper.nftsCreate(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.NftsDestroyCollection: {
      unsigned = txwrapper.nftsDestroy(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.NftsTransferCollectionOwnership: {
      unsigned = txwrapper.nftsTransferOwnership(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.NftsAcceptCollectionOwnership: {
      unsigned = txwrapper.nftsSetAcceptOwnership(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.NftsSetCollectionMetadata: {
      unsigned = txwrapper.nftsSetCollectionMetadata(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.NftsClearCollectionMetadata: {
      unsigned = txwrapper.nftsClearCollectionMetadata(action.arguments, baseTxInfo, options);
      break;
    }

    case ActionType.NftsMintItem: {
      unsigned = txwrapper.nftsMint(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.NftsBurnItem: {
      unsigned = txwrapper.nftsBurn(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.NftsTransferItem: {
      unsigned = txwrapper.nftsTransfer(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.NftsLockItemTransfer: {
      unsigned = txwrapper.nftsLockItemTransfer(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.NftsUnlockItemTransfer: {
      unsigned = txwrapper.nftsUnlockItemTransfer(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.NftsSetItemMetadata: {
      unsigned = txwrapper.nftsSetMetadata(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.NftsClearItemMetadata: {
      unsigned = txwrapper.nftsClearMetadata(action.arguments, baseTxInfo, options);
      break;
    }

    // Assets Pallet
    case ActionType.AssetsCreate: {
      unsigned = txwrapper.assetsCreate(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsStartDestroy: {
      unsigned = txwrapper.assetsStartDestroy(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsDestroyAccounts: {
      unsigned = txwrapper.assetsDestroyAccounts(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsDestroyApprovals: {
      unsigned = txwrapper.assetsDestroyApprovals(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsFinishDestroy: {
      unsigned = txwrapper.assetsFinishDestroy(action.arguments, baseTxInfo, options);
      break;
    }

    case ActionType.AssetsTransferOwnership: {
      unsigned = txwrapper.assetsTransferOwnership(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsSetMinBalance: {
      unsigned = txwrapper.assetsSetMinBalance(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsSetMetadata: {
      unsigned = txwrapper.assetsSetMetadata(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsFreezeAsset: {
      unsigned = txwrapper.assetsFreezeAsset(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsThawAsset: {
      unsigned = txwrapper.assetsThawAsset(action.arguments, baseTxInfo, options);
      break;
    }

    case ActionType.AssetsMint: {
      unsigned = txwrapper.assetsMint(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsBurn: {
      unsigned = txwrapper.assetsBurn(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsTransfer: {
      unsigned = txwrapper.assetsTransfer(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsTransferKeepAlive: {
      unsigned = txwrapper.assetsTransferKeepAlive(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsForceTransfer: {
      unsigned = txwrapper.assetsForceTransfer(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsFreezeAccount: {
      unsigned = txwrapper.assetsFreeze(action.arguments, baseTxInfo, options);
      break;
    }
    case ActionType.AssetsThawAccount: {
      unsigned = txwrapper.assetsThaw(action.arguments, baseTxInfo, options);
      break;
    }

    default:
      if ('actionType' in action) {
        // @ts-expect-error: happens if not all action types checked, on an object was forcible casted to CTAction
        throw new Error(`Unsupported action type: ${action.actionType}`);
      } else {
        throw new Error('CT action has no "actionType"');
      }
  }

  const actionTxType: CTAction = [action.origin, unsigned.method];

  return actionTxType;
}
