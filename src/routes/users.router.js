import express from 'express';
import {
  createUser,
  deleteUser,
  editUser,
  getOneUser,
  getUsers,
} from '../controllers/users.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import isadmin from '../middlewares/isAdmin.middleware.js';

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/:userId', getOneUser);
userRouter.post('/', createUser);
userRouter.delete('/:userId', deleteUser);
userRouter.put('/:userId', editUser);

export default userRouter;
