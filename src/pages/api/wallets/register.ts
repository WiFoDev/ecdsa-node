import {NextApiHandler} from "next";

import {registerWallet} from "@/server";

const handler: NextApiHandler = async (req, res) => {
  const {address} = req.body;
  const walletId = await registerWallet(address);

  res.status(201).json({success: true, walletId});
};

export default handler;
