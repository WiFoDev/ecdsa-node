import {useQuery} from "@tanstack/react-query";
import {useAtom} from "jotai";

import {addressAtom} from "@/pages/_app";

import {Input} from "./Input";

type Wallet = {
  address: string;
  balance: number;
  sucess?: boolean;
  message?: string;
};

const getBalance = async (address: string): Promise<Wallet> => {
  const response = await fetch(`/api/wallets/${address}`);
  const wallet = await response.json();

  return wallet;
};

export const WalletForm = () => {
  const [address, setAddress] = useAtom(addressAtom);
  const {data} = useQuery(
    ["balance", address],
    () => getBalance(address),
    {
      enabled: address.length === 42,
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
        BALANCE: {data ? data.balance : 0} ALC
      </div>
    </form>
  );
};
