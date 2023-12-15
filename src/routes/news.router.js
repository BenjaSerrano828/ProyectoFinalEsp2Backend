import express from 'express';
import {
  createNew,
  getNews,
  deleteNew,
} from '../controllers/news.controller.js';
import isAdmin from '../middlewares/isAdmin.middleware.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const newRouter = express.Router();

newRouter.post('/',authMiddleware ,isAdmin, createNew);
newRouter.get('/',authMiddleware ,isAdmin, getNews);
newRouter.delete('/', deleteNew)


export default newRouter;