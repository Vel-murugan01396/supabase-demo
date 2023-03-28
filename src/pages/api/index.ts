import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // prisma code
    res.status(200).send({ hello: "world" });
}