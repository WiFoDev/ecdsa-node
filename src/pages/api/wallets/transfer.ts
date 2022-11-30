import {NextApiRequest, NextApiResponse} from "next";

import {transferBalance} from "@/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {from, to, amount} = req.body;

  transferBalance(from, to, +amount);

  res.status(200).json({success: true});
}
