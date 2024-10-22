import { networkData, PsbtV2 } from "@caravan/bitcoin";
// import { PsbtInputExtended } from "bip174/src/lib/interfaces";
import { Psbt, PsbtTxInput } from "bitcoinjs-lib-v6";

/**
 * Returns a PsbtV0 from a PsbtV2.
 *
 * This function will attempt a conversion of a PsbtV2 into a PsbtV0 by checking
 * for the existence of incompatible fields. It will log a warning if data
 * destruction occurs, but it should always return a PsbtV0.
 */
export const psbtV0fromV2 = (serializedPsbtV2: string | Buffer) => {
  const psbtv2 = new PsbtV2(serializedPsbtV2);
  const psbt = new Psbt({ network: networkData(network) });

  psbt.setLocktime(
    psbtv2.nLockTime || psbtv2.PSBT_GLOBAL_FALLBACK_LOCKTIME || 0,
  );

  // let inputs: PsbtTxInput[] = []
  // for (let i; i = 0, i++) {
  //   inputs.push({

  //   })
  // }
  // psbt.addInputs(inputs);
};
