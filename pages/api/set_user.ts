// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  first: string,
  last: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = req.body;

  console.log(body);


  res.status(200).json({ first: body.first, last: body.last });
  // res.status(200).json({ name: 'John Doe' })
}
