/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatus from 'http-status-codes';
import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const userAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.header('Authorization');
    if ( !token ) {
      throw {
        code: HttpStatus.BAD_REQUEST,
        data: "",
        message: 'Authorization token is required'
      };
    }

    const { user }: any = await jwt.verify(token, process.env.SECRET);

    res.locals.user = user;
    res.locals.token = token;

    next();
  } catch (error) {
    next(error);
  }
};
