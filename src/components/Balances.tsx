import {useQuery} from "@tanstack/react-query";
import {Ring} from "@uiball/loaders";
import React from "react";

import {BalanceItem} from "./BalanceItem";

interface Wallet {
  address: string;
  balance: string;
}

const getWallets = async (): Promise<Wallet[]> => {
  const response = await fetch("/api/wallets");

  return response.json();
};

export const Balances = () => {
  const {data, isLoading} = useQuery(["wallets"], getWallets);

  return (
    <div className="min-h-[22rem] relative px-2">
      <div className="border-b-parragraf border-b-2 flex justify-between font-bold">
        <span>Address</span>
        <span>Balance</span>
      </div>
      <ul className="list-disc">
        {isLoading ? (
          <div className="absolute w-full h-full grid place-items-center">
            <Ring color="black" lineWeight={5} size={40} speed={2} />
          </div>
        ) : (
          data?.map((wallet: Wallet) => (
            <BalanceItem
              key={wallet.address}
              address={wallet.address}
              balance={wallet.balance}
            />
          ))
        )}
      </ul>
    </div>
  );
};
