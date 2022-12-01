import {getClientAndConnect} from "../db";
import Wallet from "../Model/Wallets";

export const getWallets = async () => {
  const dbClient = await getClientAndConnect("wallets");
  const collection = dbClient.db().collection("wallets");

  const documents = await collection.find({}, {}).toArray();

  return documents.map((document) => {
    return Wallet.create(document.address, document.balance);
  });
};
