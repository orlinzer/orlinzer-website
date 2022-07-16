
import type { NextApiRequest, NextApiResponse } from 'next';
import { createUser, getAllUsers } from '../../../modules/users';

export const getAllUsersAPI = (
  req: NextApiRequest,
  res: NextApiResponse<APIData>
) => {
  if (req.method !== 'GET') {
    return res.status(400).json({
      error: {
        code: 1,
        message: 'Can create user only with "GET" request'
      }
    });
  }

  let users = getAllUsers();
  return res.status(200).json({ result: users });
};

export default getAllUsersAPI;
