import * as express from 'express';
import { IRouter } from 'express';
import userRoute from './user.route';
import authenticationRoute from './authentication.route';

const router = express.Router();

const routes = (): IRouter => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });

  router.use('/users', new userRoute().getRoutes());
  router.use('/auth', new authenticationRoute().getRoutes());

  return router;
};

export default routes;
