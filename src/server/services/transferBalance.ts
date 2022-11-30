import {balances} from "../db";

import {getWallet} from "./getWallet";

export const transferBalance = (
  from: string,
  to: string,
  amount: number,
) => {
  let fromWalletBalance = getWallet(from);
  let toWalletBalance = getWallet(to);

  if (fromWalletBalance < amount) {
    throw new Error("Insufficient funds");
  }

  fromWalletBalance -= amount;
  toWalletBalance += amount;
  balances.set(from, fromWalletBalance);
  balances.set(to, toWalletBalance);
};
