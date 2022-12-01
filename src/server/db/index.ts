import {MongoClient} from "mongodb";

const clients = new Map<string, MongoClient>();

const createClient = () => {
  const client = new MongoClient(process.env.MONGO_URI as string);

  return client;
};

export const getClientAndConnect = async (context: string) => {
  if (!clients.has(context)) {
    clients.set(context, createClient());
  }
  const client = clients.get(context) as MongoClient;

  await client.connect();

  console.log(`Connected to Mongo DB!!`);

  return client;
};
