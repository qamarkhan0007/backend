import * as express from 'express';
import { UsersController } from '../controller/user';
import { Router } from 'express';

class Users {
  router: Router;
  private userController: UsersController;
  constructor(){
    this.router = express.Router();
    this.userController = new UsersController()
    this.initRoutes();
  }

  initRoutes(){
    console.log('invoked ', this.router);
    this.router.get('/', function(req, res, next){
      console.log('hello i m here !!>>>>>>>>>>', req);
    });
  }
}
export { Users as UsersRoutes }
