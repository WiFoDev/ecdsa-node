import {keccak256} from "ethereum-cryptography/keccak";
import {recoverPublicKey} from "ethereum-cryptography/secp256k1";
import {toHex, utf8ToBytes} from "ethereum-cryptography/utils";

import {Message} from "../services";

export const recoverPublicKeyFromSignature = (
  signatureArray: Uint8Array,
  recoveryBit: number,
  message: Message,
) => {
  const messageHash = keccak256(utf8ToBytes(JSON.stringify(message)));
  const publicKey = recoverPublicKey(
    messageHash,
    signatureArray,
    recoveryBit,
  );

  return publicKey;
};

export const getAddressFromPublicKey = (publicKey: Uint8Array) => {
  const address = `0x${toHex(keccak256(publicKey).slice(-20))}`;

  return address;
};
