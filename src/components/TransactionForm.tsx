import {useAtom} from "jotai";
import React, {FormEventHandler, useState} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";

import {addressAtom} from "@/pages/_app";

import {Input} from "./Input";

type Data = {
  from: string;
  to: string;
  amount: string;
};

const sendTransaction = async (data: Data) => {
  await fetch("http://localhost:3000/api/wallets/transfer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const TransactionForm = () => {
  const [address] = useAtom(addressAtom);
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("0");
  const queryClient = useQueryClient();
  const {mutate} = useMutation({
    mutationFn: sendTransaction,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["balance"],
      });
      setTo("");
      setAmount("0");
    },
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (
    e,
  ) => {
    e.preventDefault();
    const data = {
      from: address,
      to,
      amount,
    };

    mutate(data);
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <Input
        label="Send amount"
        min={0}
        placeholder="0"
        step={0.01}
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Input
        label="Recipient"
        placeholder="Type an address, for exampe: 0x2"
        type="text"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <button className="text-white bg-primary text-sm place-self-center p-2 rounded">
        TRANSFER
      </button>
    </form>
  );
};
