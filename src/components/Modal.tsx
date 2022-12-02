import React, {FC, useEffect, useState} from "react";
import {useAtom} from "jotai";
import {getPublicKey, sign} from "ethereum-cryptography/secp256k1";
import {
  toHex,
  hexToBytes,
  utf8ToBytes,
} from "ethereum-cryptography/utils";
import {keccak256} from "ethereum-cryptography/keccak";
import {useMutation, useQueryClient} from "@tanstack/react-query";

import {Portal} from "@/HOC/Portal";
import {addressAtom, messageAtom} from "@/pages/_app";

import {Input} from "./Input";

type Data = {
  signature: [Uint8Array, number];
  message: {
    to: string;
    amount: string;
  };
};

const sendTransaction = async (data: Data) => {
  await fetch("/api/wallets/transfer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

type ModalProps = {
  setShowModal: (showModal: boolean) => void;
};

export const Modal: FC<ModalProps> = ({setShowModal}) => {
  const [message] = useAtom(messageAtom);
  const [address] = useAtom(addressAtom);
  const [privateKey, setPrivateKey] = useState("");
  const [isPrivateKeyValid, setIsPrivateKeyValid] = useState(false);

  const queryClient = useQueryClient();
  const {mutate} = useMutation({
    mutationFn: sendTransaction,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["balance"],
      });
      queryClient.invalidateQueries({
        queryKey: ["wallets"],
      });
    },
  });

  useEffect(() => {
    if (privateKey.length === 64) {
      try {
        const publicKey = getPublicKey(hexToBytes(privateKey));
        const addressFromPK = `0x${toHex(
          keccak256(publicKey).slice(-20),
        )}`;

        const isValid = addressFromPK === address;

        setIsPrivateKeyValid(isValid);
      } catch {
        setIsPrivateKeyValid(false);
      }
    } else {
      setIsPrivateKeyValid(false);
    }
  }, [privateKey, address]);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    const messageHash = keccak256(
      utf8ToBytes(JSON.stringify(message)),
    );

    const signature = await sign(
      messageHash,
      hexToBytes(privateKey),
      {
        recovered: true,
      },
    );

    mutate({signature, message});
  };

  return (
    <Portal>
      <div className="fixed w-full h-full bg-background/10 backdrop-blur-sm z-40 grid place-items-center">
        <div className="relative w-1/3 h-1/2 bg-white rounded-lg shadow-md p-8 flex flex-col items-center gap-8">
          <button className="absolute text-background top-3 right-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setShowModal(false)}
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </button>
          <h1 className="text-background text-2xl font-bold">
            Confirm Transaction
          </h1>
          <p className="text-background">
            Sending <strong>{message.amount}</strong> Alchemy Coin to
            the address <strong>{message.to}</strong>
          </p>
          <form
            className="w-full text-background flex flex-col gap-16"
            onSubmit={handleSubmit}
          >
            <div className="relative">
              <Input
                label="Private Key"
                placeholder="Insert your private key"
                type="text"
                value={privateKey}
                onChange={(e) => setPrivateKey(e.target.value)}
              />
              {!isPrivateKeyValid && (
                <p className="text-secondary text-xs absolute">
                  Your private key is not valid!!
                </p>
              )}
            </div>

            <button
              className={`text-white bg-primary text-sm place-self-center px-4 py-1.5 rounded ${
                !isPrivateKeyValid
                  ? "bg-primary/60 cursor-not-allowed"
                  : null
              }`}
              disabled={!isPrivateKeyValid}
            >
              SIGN
            </button>
          </form>
        </div>
      </div>
    </Portal>
  );
};
