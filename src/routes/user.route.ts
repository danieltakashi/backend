import express, { IRouter } from 'express';
import userController from '../controllers/user.controller';
import userValidator from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

class UserRoutes {
  private UserController = new userController();
  private router = express.Router();
  private UserValidator = new userValidator();

  constructor() {
    this.routes();
  }

  private routes = () => {
    this.router.get('', this.UserController.getAll);

    this.router.post(
      '',
      this.UserValidator.new,
      userAuth,
      this.UserController.new
    );

    this.router.get('/:_id', userAuth, this.UserController.get);

    this.router.put('/:_id', userAuth, this.UserController.update);

    this.router.delete('/:_id', userAuth, this.UserController.delete);
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default UserRoutes;
