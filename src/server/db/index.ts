import {MongoClient} from "mongodb";

type MongoConfig = {
  uri: string;
};

export class MongoClientFactory {
  private static client: {[key: string]: MongoClient} = {};

  static async createClient(context: string, config: MongoConfig) {
    let client = MongoClientFactory.getClient(context);

    if (!client) {
      client = await MongoClientFactory.createAndConnectClient(
        config,
      );
      MongoClientFactory.registerClient(context, client);
    }

    return client;
  }

  private static getClient(context: string) {
    return MongoClientFactory.client[context];
  }

  private static async createAndConnectClient(
    config: MongoConfig,
  ): Promise<MongoClient> {
    try {
      const client = new MongoClient(config.uri, {
        ignoreUndefined: true,
      });

      await client.connect();
      console.log(`Connected to Mongo DB!!`);

      return client;
    } catch {
      throw new Error("Error connecting to Mongo DB");
    }
  }

  private static registerClient(
    context: string,
    client: MongoClient,
  ) {
    MongoClientFactory.client[context] = client;
  }
}
