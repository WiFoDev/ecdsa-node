import {balances} from "../db";

export const getWallet = (address: string) => {
  return balances.get(address);
};
