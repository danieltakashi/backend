import User from '../models/user.model';
import { IUser } from '../interfaces/user.interface';

export class UserService {
  public getAll = async (): Promise<IUser[]> => {
    const data = await User.find();
    return data;
  };

  public new = async (body: IUser): Promise<IUser> => {
    const data = await User.create(body);
    return data;
  };

  public update = async (_id: string, body: IUser): Promise<IUser> => {
    const data = await User.findByIdAndUpdate(
      {
        _id
      },
      body,
      {
        new: true
      }
    );
    return data;
  };

  public delete = async (_id: string): Promise<string> => {
    await User.findByIdAndDelete(_id);
    return '';
  };

  public get = async (_id: string): Promise<IUser> => {
    const data = await User.findById(_id);
    return data;
  };
}

export default UserService;
