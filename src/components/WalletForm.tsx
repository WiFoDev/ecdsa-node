import React from "react";

import {Input} from "./Input";

export const WalletForm = () => {
  return (
    <form className="flex flex-col gap-3">
      <Input
        label="Wallet Address"
        placeholder="Type an address, for exampe: 0x1"
        type="text"
      />
      <div className="text-sm p-2 bg-parragraf/50 rounded pointer-events-none">
        BALANCE: 0
      </div>
    </form>
  );
};
