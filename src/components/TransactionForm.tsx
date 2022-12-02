import {useAtom} from "jotai";
import React, {FormEventHandler, useState} from "react";

import {messageAtom} from "@/pages/_app";

import {Input} from "./Input";
import {Modal} from "./Modal";

export const TransactionForm = () => {
  const [_, setMessage] = useAtom(messageAtom);
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("0");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (
    e,
  ) => {
    e.preventDefault();
    setMessage({to, amount});
    setShowModal(true);
  };

  return (
    <>
      {showModal && <Modal setShowModal={setShowModal} />}
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
    </>
  );
};
