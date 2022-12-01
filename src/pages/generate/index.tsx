import React, {useState} from "react";
import {NextPage} from "next";
import {utils, getPublicKey} from "ethereum-cryptography/secp256k1";
import {toHex} from "ethereum-cryptography/utils";
import {keccak256} from "ethereum-cryptography/keccak";
import {useMutation} from "@tanstack/react-query";
import {DotWave} from "@uiball/loaders";
import Link from "next/link";

import {Card, CopyToClipboard} from "@/components";

const postGenerate = async ({address}: {address: string}) => {
  const response = await fetch("/api/wallets/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({address}),
  });

  return response.json();
};

const Generate: NextPage = () => {
  const [publicKey, setPublicKey] = useState<string>();
  const [privateKey, setPrivateKey] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [showKeys, setShowKeys] = useState<boolean>(false);

  const {mutate, isLoading} = useMutation({
    mutationFn: postGenerate,
    onSuccess: () => {
      setShowKeys(true);
    },
  });

  const handlerGenerate = () => {
    const privKey = utils.randomPrivateKey();
    const pubKey = getPublicKey(privKey);
    const addressDraft = `0x${toHex(keccak256(pubKey).slice(-20))}`;

    setPrivateKey(toHex(privKey));
    setPublicKey(toHex(pubKey));
    setAddress(addressDraft);
    mutate({address: addressDraft});
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
          className="bg-primary px-4 py-2 rounded text-white grid place-items-center"
          onClick={handlerGenerate}
        >
          {isLoading ? (
            <DotWave color="white" size={47} speed={1} />
          ) : (
            "Generate"
          )}
        </button>
        {showKeys && (
          <div className="flex flex-col gap-4 mt-4">
            <CopyToClipboard
              text={privateKey as string}
              title="Private Key"
            />
            <CopyToClipboard
              text={publicKey as string}
              title="Public Key"
            />
            <CopyToClipboard
              text={address as string}
              title="Address"
            />
            <div className="place-self-center">
              <Link href="/">Go to Home</Link>
            </div>
          </div>
        )}
      </Card>
    </section>
  );
};

export default Generate;
