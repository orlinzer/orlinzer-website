
import type { NextApiRequest, NextApiResponse } from 'next';
import { createUser, findUsers, getAllUsers } from '../../../modules/users';

export const FindUsersAPI = (
  req: NextApiRequest,
  res: NextApiResponse<APIData>
) => {
  console.log('search');
  if (req.method !== 'GET') {
    return res.status(400).json({
      error: {
        code: 1,
        message: 'Can create user only with "GET" request'
      }
    });
  }

  const search = req?.body?.search;
  if (!search) {
    return res.status(400).json({
      error: {
        code: 2,
        message: 'Input "search" is missing'
      }
    });
  }


  let users = findUsers(search);
  return res.status(200).json({ result: users });
};

export default FindUsersAPI;
