import {MongoClientFactory} from "../db";
import Wallet from "../Model/Wallets";

export const getWallet = async (address: string) => {
  const dbClient = await MongoClientFactory.createClient("wallets", {
    uri: process.env.MONGODB_URI as string,
  });
  const document = await dbClient
    .db()
    .collection("wallets")
    .findOne({address});

  if (!document) throw new Error("Wallet not found");

  const wallet = Wallet.create(document.address, document.balance);

  return wallet;
};
