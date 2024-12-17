import { OptionsWithMeta, BaseTxInfo, TypeRegistry } from '@substrate/txwrapper-polkadot';

// Metadata type to share signing info
export interface TxMetadata {
  registry: TypeRegistry;
  baseTxInfo: BaseTxInfo;
  options: OptionsWithMeta;
}
