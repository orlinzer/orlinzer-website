
import type { NextApiRequest, NextApiResponse } from 'next';
import { createUser, deleteUser, getAllUsers } from '../../../modules/users';

export const DeleteUserAPI = (
  req: NextApiRequest,
  res: NextApiResponse<APIData>
) => {
  if (req.method !== 'DELETE') {
    return res.status(400).json({
      error: {
        code: 1,
        message: 'Can create user only with "DELETE" request'
      }
    });
  }

  const id = req.body?.userId;
  if (!id) {
    return res.status(400).json({
      error: {
        code: 2,
        message: 'Input "userId" is missing'
      }
    });
  }

  deleteUser(id);
  return res.status(200).json({ result: [] });
};

export default DeleteUserAPI;
