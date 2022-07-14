// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  first: string,
  last: string
}

type Error = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log(body);

  if (!body.first || !body.last) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ message: 'First or last name not found' });
  }

  // Found the name.
  // Sends a HTTP success code
  return res.status(200).json({ first: body.first, last: body.last });
}
