import {wallets} from "../db";

export const getWallet = (address: string) => {
  return wallets.find((wallet) => wallet.address === address);
};
