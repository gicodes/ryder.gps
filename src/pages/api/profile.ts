import { ridersRepo } from './repo';
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession();
  console.log({session});     
  try {
    const rider = await ridersRepo.getById(session?.user.id);
    return res.status(200).json(rider);
  } 
  catch {
    return res.status(500).json({ error: 'Request failed!' });
  }
}