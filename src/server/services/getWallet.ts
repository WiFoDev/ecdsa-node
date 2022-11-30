import {balances} from "../db";

export const getWallet = (address: string) => {
  const balance = balances.get(address);
  if (!balance) return 0;
  return balance;
};
