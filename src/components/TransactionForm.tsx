import React from "react";

import {Input} from "./Input";

export const TransactionForm = () => {
  return (
    <form className="flex flex-col gap-3">
      <Input
        label="Send amount"
        min={0}
        placeholder="0"
        step={0.01}
        type="number"
      />
      <Input
        label="Recipient"
        placeholder="Type an address, for exampe: 0x2"
        type="text"
      />
      <button className="text-white bg-primary text-sm place-self-center p-2 rounded">
        TRANSFER
      </button>
    </form>
  );
};
