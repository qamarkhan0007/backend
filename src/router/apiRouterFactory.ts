import * as express from 'express'
import { Router } from 'express';
import { UsersRoutes } from './user';

export class ApiRouterFactory{
  constructor(){

  }
  static getApiRouter(): Router{
    const router: Router = express.Router();
    const userRoutes = new UsersRoutes().router;
    router.use('user', userRoutes);
    return router;
  }
}
