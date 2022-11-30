import {NextApiRequest, NextApiResponse} from "next";

import {getWallet} from "@/server";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {address} = req.query;
  const wallet = getWallet(address as string);

  res.status(200).json(wallet);
}
