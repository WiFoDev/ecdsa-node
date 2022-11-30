import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {address} = req.query;
  // const wallet = await getWallet(address);

  res.status(200).json({address});
}
