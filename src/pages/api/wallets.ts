import {NextApiHandler} from "next";

import {getWallets} from "@/server";

const handler: NextApiHandler = async (req, res) => {
  const wallets = await getWallets();
  const wallletsToPrimitives = wallets.map((wallet) =>
    wallet.toPrimitives(),
  );

  res.status(200).json(wallletsToPrimitives);
};

export default handler;
