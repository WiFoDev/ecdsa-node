import {NextApiRequest, NextApiResponse} from "next";

import {getWallet} from "@/server";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {address} = req.query;
  const balance = getWallet(address as string);

  if (balance) {
    return res.status(200).json({balance});
  }
  res.status(200).json({balance: 0});
}
