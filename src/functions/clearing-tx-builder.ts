import { construct, methods, UnsignedTransaction, OptionsWithMeta, BaseTxInfo } from '@substrate/txwrapper-polkadot';

import { TransactionService } from '../adapter/datagate';
import { loadConfig } from '../functions/config';
import * as txwrapper from '../txwrapper';
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
      unsigned = methods.balances.transferAllowDeath(
        {
          dest: { id: action.arguments.dest },
          value: action.arguments.value,
        },
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.BalancesTransferKeepAlive: {
      unsigned = methods.balances.transferAllowDeath(
        {
          dest: { id: action.arguments.dest },
          value: action.arguments.value,
        },
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.BalancesTransferAll: {
      unsigned = methods.balances.transferAll(
        {
          dest: { id: action.arguments.dest },
          keepAlive: action.arguments.keepAlive,
        },
        baseTxInfo,
        options
      );
      break;
    }

    // Nfts Pallet
    case ActionType.NftsCreateCollection: {
      unsigned = txwrapper.nftsCreate({}, baseTxInfo, options);
      break;
    }
    case ActionType.NftsDestroyCollection: {
      unsigned = txwrapper.nftsDestroy(
        {
          collection: action.arguments.collection,
          witness: action.arguments.witness,
        },
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.NftsTransferCollectionOwnership: {
      unsigned = txwrapper.nftsTransferOwnership(
        {
          collection: action.arguments.collection,
          newOwner: action.arguments.newOwner,
        },
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.NftsAcceptCollectionOwnership: {
      unsigned = txwrapper.nftsSetAcceptOwnership(
        {
          maybeCollection: action.arguments.collection,
        },
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.NftsSetCollectionMetadata: {
      unsigned = txwrapper.nftsSetCollectionMetadata(
        {
          collection: action.arguments.collection,
          data: action.arguments.data,
        },
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.NftsClearCollectionMetadata: {
      unsigned = txwrapper.nftsClearCollectionMetadata(
        {
          collection: action.arguments.collection,
        },
        baseTxInfo,
        options
      );
      break;
    }

    case ActionType.NftsMintItem: {
      unsigned = txwrapper.nftsMint(
        {
          collection: action.arguments.collection,
          item: action.arguments.item,
          mintTo: action.arguments.mintTo,
        },
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.NftsBurnItem: {
      unsigned = txwrapper.nftsBurn(
        {
          collection: action.arguments.collection,
          item: action.arguments.item,
        },
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.NftsTransferItem: {
      unsigned = txwrapper.nftsTransfer(
        {
          collection: action.arguments.collection,
          item: action.arguments.item,
          dest: action.arguments.dest,
        },
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.NftsLockItemTransfer: {
      unsigned = txwrapper.nftsLockItemTransfer(
        {
          collection: action.arguments.collection,
          item: action.arguments.item,
        },
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.NftsUnlockItemTransfer: {
      unsigned = txwrapper.nftsUnlockItemTransfer(
        {
          collection: action.arguments.collection,
          item: action.arguments.item,
        },
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.NftsSetItemMetadata: {
      unsigned = txwrapper.nftsSetMetadata(
        {
          collection: action.arguments.collection,
          item: action.arguments.item,
          data: action.arguments.data,
        },
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.NftsClearItemMetadata: {
      unsigned = txwrapper.nftsClearMetadata(
        {
          collection: action.arguments.collection,
          item: action.arguments.item,
        },
        baseTxInfo,
        options
      );
      break;
    }

    // Assets Pallet
    case ActionType.AssetsCreate: {
      unsigned = txwrapper.assetsCreate(
        {
          minBalance: action.arguments.minBalance,
        },
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.AssetsStartDestroy: {
      unsigned = txwrapper.assetsStartDestroy(
        {
          id: action.arguments.id,
        },
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.AssetsDestroyAccounts: {
      unsigned = txwrapper.assetsDestroyAccounts(
        {
          id: action.arguments.id,
        },
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.AssetsDestroyApprovals: {
      unsigned = txwrapper.assetsDestroyApprovals(
        {
          id: action.arguments.id,
        },
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.AssetsFinishDestroy: {
      unsigned = txwrapper.assetsFinishDestroy(
        {
          id: action.arguments.id,
        },
        baseTxInfo,
        options
      );
      break;
    }

    case ActionType.AssetsTransferOwnership: {
      unsigned = txwrapper.assetsTransferOwnership(
        {
          id: action.arguments.id,
        },
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.AssetsSetMinBalance: {
      unsigned = txwrapper.assetsSetMinBalance(
        {
          id: action.arguments.id,
          minBalance: action.arguments.minBalance,
        },
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.AssetsSetMetadata: {
      unsigned = txwrapper.assetsSetMetadata(
        {
          id: action.arguments.id,
          data: action.arguments.data,
        },
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.AssetsFreezeAsset: {
      unsigned = txwrapper.assetsFreezeAsset(
        {
          id: action.arguments.id,
        },
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.AssetsThawAsset: {
      unsigned = txwrapper.assetsThawAsset(
        {
          id: action.arguments.id,
        },
        baseTxInfo,
        options
      );
      break;
    }

    case ActionType.AssetsMint: {
      unsigned = txwrapper.assetsMint(
        {
          id: action.arguments.id,
          beneficiary: action.arguments.beneficiary,
          amount: action.arguments.amount,
        },
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.AssetsBurn: {
      unsigned = txwrapper.assetsBurn(
        {
          id: action.arguments.id,
          who: action.arguments.who,
          amount: action.arguments.amount,
        },
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.AssetsTransfer: {
      unsigned = methods.assets.transfer(
        {
          id: action.arguments.id,
          target: action.arguments.target,
          amount: action.arguments.amount,
        },
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.AssetsTransferKeepAlive: {
      unsigned = methods.assets.transferKeepAlive(
        {
          id: action.arguments.id,
          target: action.arguments.target,
          amount: action.arguments.amount,
        },
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.AssetsForceTransfer: {
      unsigned = txwrapper.assetsForceTransfer(
        {
          id: action.arguments.id,
          source: action.arguments.source,
          dest: action.arguments.dest,
          amount: action.arguments.amount,
        },
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.AssetsFreezeAccount: {
      unsigned = txwrapper.assetsFreeze(
        {
          id: action.arguments.id,
          who: action.arguments.who,
        },
        baseTxInfo,
        options
      );
      break;
    }
    case ActionType.AssetsThawAccount: {
      unsigned = txwrapper.assetsThaw(
        {
          id: action.arguments.id,
          who: action.arguments.who,
        },
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
