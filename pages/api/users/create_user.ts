
import type { NextApiRequest, NextApiResponse } from 'next';
import { createUser } from '../../../modules/users';

export const CreateUserAPI = (
  req: NextApiRequest,
  res: NextApiResponse<APIData>
) => {
  if (req.method !== 'POST') {
    return res.status(400).json({
      error: {
        code: 1,
        message: 'Can create user only with "POST" request'
      }
    });
  }

  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  // console.log(body);

  if (!body.first || !body.last) {
    // Sends a HTTP bad request error code
    return res.status(400).json({
      error: {
        code: 1,
        message: 'First or last name not found'
      }
    });
  }

  let user = {
    first: body.first,
    last: body.last
  };

  user = createUser(user);

  // Found the name.
  // Sends a HTTP success code
  return res.status(200).json({ result: [user] });
};

export default CreateUserAPI;
