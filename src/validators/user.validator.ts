import Joi from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';

export class UserValidator {
  public new = (req: Request, res: Response, next: NextFunction): void => {
    const schema = Joi.object({
      name: Joi.string().min(4).required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    }
    next();
  };
}

export default UserValidator;
