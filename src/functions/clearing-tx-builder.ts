import { construct, UnsignedTransaction, OptionsWithMeta, BaseTxInfo } from '@substrate/txwrapper-polkadot';

import { TransactionService } from '../adapter/datagate';
import { loadConfig } from '../functions/config';
import * as txwrapper from '../txwrapper';
import * as txwrapperCalls from '../txwrapper/calls';
import { ActionType } from '../types/api/actions';
import type { ClearingTransactionPayload, CTAction } from '../types/api/clearingTransaction';

import logger from './logger';
import { signWith } from './signer';
import { generateTxMetadata, buildUnsignedTransaction } from './tx-helper';

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

    const unsignedAtomics: txwrapper.CTAction[][] = [];

    // Build unsigned atomics
    logger.info(`Building unsigned atomics with payload ${payload}`);
    for (const atomic of payload.atomics) {
      const unsignedActions: txwrapper.CTAction[] = [];

      for (const action of atomic.actions) {
        const actionTxType: txwrapper.CTAction = buildCTAction(action, baseTxInfo, options);
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

function buildCTAction(action: CTAction, baseTxInfo: BaseTxInfo, options: OptionsWithMeta): txwrapper.CTAction {
  let unsigned: UnsignedTransaction;

  // Handle different action types
  switch (action.actionType) {
    // Balances Pallet
    case ActionType.BalancesTransferAllowDeath: {
      unsigned = txwrapperCalls.balancesTransferAllowDeath(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.BalancesTransferKeepAlive: {
      unsigned = txwrapperCalls.balancesTransferKeepAlive(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.BalancesTransferAll: {
      unsigned = txwrapperCalls.balancesTransferAll(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }

    // Nfts Pallet
    case ActionType.NftsCreateCollection: {
      unsigned = txwrapperCalls.nftsCreate(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.NftsDestroyCollection: {
      unsigned = txwrapperCalls.nftsDestroy(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.NftsTransferCollectionOwnership: {
      unsigned = txwrapperCalls.nftsTransferOwnership(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.NftsAcceptCollectionOwnership: {
      unsigned = txwrapperCalls.nftsSetAcceptOwnership(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.NftsSetCollectionMetadata: {
      unsigned = txwrapperCalls.nftsSetCollectionMetadata(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.NftsClearCollectionMetadata: {
      unsigned = txwrapperCalls.nftsClearCollectionMetadata(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }

    case ActionType.NftsMintItem: {
      unsigned = txwrapperCalls.nftsMint(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.NftsBurnItem: {
      unsigned = txwrapperCalls.nftsBurn(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.NftsTransferItem: {
      unsigned = txwrapperCalls.nftsTransfer(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.NftsLockItemTransfer: {
      unsigned = txwrapperCalls.nftsLockItemTransfer(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.NftsUnlockItemTransfer: {
      unsigned = txwrapperCalls.nftsUnlockItemTransfer(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.NftsSetItemMetadata: {
      unsigned = txwrapperCalls.nftsSetMetadata(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.NftsClearItemMetadata: {
      unsigned = txwrapperCalls.nftsClearMetadata(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }

    // Assets Pallet
    case ActionType.AssetsCreate: {
      unsigned = txwrapperCalls.assetsCreate(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.AssetsStartDestroy: {
      unsigned = txwrapperCalls.assetsStartDestroy(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.AssetsDestroyAccounts: {
      unsigned = txwrapperCalls.assetsDestroyAccounts(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.AssetsDestroyApprovals: {
      unsigned = txwrapperCalls.assetsDestroyApprovals(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.AssetsFinishDestroy: {
      unsigned = txwrapperCalls.assetsFinishDestroy(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }

    case ActionType.AssetsTransferOwnership: {
      unsigned = txwrapper.assetsTransferOwnership(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.AssetsSetMinBalance: {
      unsigned = txwrapperCalls.assetsSetMinBalance(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.AssetsSetMetadata: {
      unsigned = txwrapperCalls.assetsSetMetadata(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.AssetsFreezeAsset: {
      unsigned = txwrapperCalls.assetsFreezeAsset(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.AssetsThawAsset: {
      unsigned = txwrapperCalls.assetsThawAsset(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }

    case ActionType.AssetsMint: {
      unsigned = txwrapperCalls.assetsMint(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.AssetsBurn: {
      unsigned = txwrapperCalls.assetsBurn(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.AssetsTransfer: {
      unsigned = txwrapperCalls.assetsTransfer(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.AssetsTransferKeepAlive: {
      unsigned = txwrapperCalls.assetsTransferKeepAlive(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.AssetsForceTransfer: {
      unsigned = txwrapperCalls.assetsForceTransfer(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.AssetsFreezeAccount: {
      unsigned = txwrapperCalls.assetsFreeze(
        action.arguments,
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.AssetsThawAccount: {
      unsigned = txwrapperCalls.assetsThaw(
        action.arguments,
        baseTxInfo,
        options
      );
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

  const actionTxType: txwrapper.CTAction = [action.origin, unsigned.method];

  return actionTxType;
}
