import {getClientAndConnect} from "../db";
import Wallet from "../Model/Wallets";

export const registerWallet = async (address: string) => {
  const wallet = new Wallet(address, 100);
  const client = await getClientAndConnect("wallets");
  const result = await client
    .db()
    .collection("wallets")
    .insertOne(wallet.toPrimitives());

  return result.insertedId;
};
