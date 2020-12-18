import * as express from 'express';
import { IRouter } from 'express';
import authenticationController from '../controllers/authentication.controller';

class AuthenticationRoutes {
  private AuthenticationController = new authenticationController();
  private router = express.Router();

  constructor() {
    this.routes();
  }

  private routes = () => {
    this.router.post('/login', this.AuthenticationController.login);
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default AuthenticationRoutes;
