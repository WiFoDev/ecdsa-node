import {MongoClientFactory} from "../db";
import {
  getAddressFromPublicKey,
  recoverPublicKeyFromSignature,
} from "../utils";

import {getWallet} from "./getWallet";

export type Message = {
  to: string;
  amount: number;
};

export const transferBalance = async (
  signatureArray: Uint8Array,
  recoveryBit: number,
  message: Message,
) => {
  const publickKeySender = recoverPublicKeyFromSignature(
    signatureArray,
    recoveryBit,
    message,
  );
  const senderWallet = getAddressFromPublicKey(publickKeySender);
  const sender = await getWallet(senderWallet);
  const amount = Number(message.amount);

  if (!sender) {
    throw new Error("Sender not found");
  }
  if (sender.balance < amount) {
    throw new Error("Insufficient funds");
  }

  const receiver = await getWallet(message.to);

  if (!receiver) {
    throw new Error("Receiver not found");
  }

  sender.balance -= amount;
  receiver.balance += amount;

  const dbClient = await MongoClientFactory.createClient("wallets", {
    uri: process.env.MONGO_URI as string,
  });
  const collection = dbClient.db().collection("wallets");

  await collection.updateOne(
    {
      address: sender.address,
    },
    {
      $set: {
        balance: sender.balance,
      },
    },
  );
  await collection.updateOne(
    {
      address: receiver.address,
    },
    {
      $set: {
        balance: receiver.balance,
      },
    },
  );
};
