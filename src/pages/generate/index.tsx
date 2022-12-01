import React, {useState} from "react";
import {NextPage} from "next";
import {utils, getPublicKey} from "ethereum-cryptography/secp256k1";
import {toHex} from "ethereum-cryptography/utils";
import {keccak256} from "ethereum-cryptography/keccak";

import {Card} from "@/components";

const Generate: NextPage = () => {
  const [publicKey, setPublicKey] = useState<string>();
  const [privateKey, setPrivateKey] = useState<string>();
  const [address, setAddress] = useState<string>();

  const handlerGenerate = () => {
    const privKey = utils.randomPrivateKey();
    const pubKey = getPublicKey(privKey);
    const addressDraft = `0x${toHex(keccak256(pubKey).slice(-20))}`;

    setPrivateKey(toHex(privKey));
    setPublicKey(toHex(pubKey));
    setAddress(addressDraft);
  };

  return (
    <section>
      <Card title="Key Pair Generator">
        <p className="max-w-sm text-background">
          This tool helps you to generate{" "}
          <strong> private and public key pair </strong>
          and register your address into our{" "}
          <strong>ECDSA Node</strong>. Push the generate button to
          generate a key pair.
        </p>
        <p className="max-w-sm text-sm text-background">
          <span className="font-bold">*Important Note: </span> The key
          pair is generated on your device and never reach our server.
          So take note of your keys to be able to make transactions in
          the future.
        </p>
        <button
          className="bg-primary px-4 py-2 rounded text-white"
          onClick={handlerGenerate}
        >
          Generate
        </button>
        {publicKey && privateKey && address && (
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex flex-col gap-2">
              <span className="font-bold">Private Key</span>
              <span className="text-background">{privateKey}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-bold">Public Key</span>
              <span className="text-background">{publicKey}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-bold">Address</span>
              <span className="text-background">{address}</span>
            </div>
          </div>
        )}
      </Card>
    </section>
  );
};

export default Generate;
