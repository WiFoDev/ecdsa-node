import {NextApiRequest, NextApiResponse} from "next";

import {transferBalance} from "@/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {signature, message} = req.body;
  const signatureArray = new Uint8Array(Object.values(signature[0]));
  const recoveryBit = signature[1] as number;

  await transferBalance(signatureArray, recoveryBit, message);

  res.status(200).json({signature, message});
}
