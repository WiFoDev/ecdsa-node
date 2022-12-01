import {NextApiRequest, NextApiResponse} from "next";

import {getWallet} from "@/server";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {address} = req.query;

  try {
    const wallet = await getWallet(address as string);

    res.status(200).json(wallet.toPrimitives());
  } catch (error: any) {
    res.status(404).json({success: false, message: error.message});
  }
}
