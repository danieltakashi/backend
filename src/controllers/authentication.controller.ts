/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatus from 'http-status-codes';
import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

class AuthenticationController {

  public login = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const { user, password } = req.body;

      if(user === 'user' && password === '123'){
        const token = jwt.sign({ user }, process.env.SECRET, {
          expiresIn: 300  // expires in 5min
        });

        res.status(HttpStatus.OK).json({
          code: HttpStatus.OK,
          data: { token: token },
          message: 'Authenticated successfully'
        });
      }
      
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        data: {},
        message: 'Authentication Error'
      });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthenticationController;
