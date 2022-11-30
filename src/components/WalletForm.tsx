import React, {useState} from "react";
import {useQuery} from "@tanstack/react-query";

import {Input} from "./Input";

const getBalance = async (address: string): Promise<string> => {
  const response = await fetch(
    `http://localhost:3000/api/wallets/${address}`,
  );
  const data = await response.json();

  return data.balance;
};

export const WalletForm = () => {
  const [address, setAddress] = useState("");
  const {data} = useQuery(
    ["balance", address],
    () => getBalance(address),
    {
      enabled: address.length > 2,
    },
  );

  return (
    <form className="flex flex-col gap-3">
      <Input
        label="Wallet Address"
        placeholder="Type an address, for exampe: 0x1"
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <div className="text-sm p-2 bg-parragraf/50 rounded pointer-events-none">
        BALANCE: {data ?? "0"}
      </div>
    </form>
  );
};
