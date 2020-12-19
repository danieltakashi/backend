import { Mongoose } from 'mongoose';
import { Mockgoose } from 'mockgoose';

const InMemory = () => {
  const mongoose = new Mongoose();
  mongoose.Promise = global.Promise;
  new Mockgoose(mongoose).prepareStorage().then(() => {
    mongoose.connect(process.env.DATABASE_TEST);
  });
  return mongoose;
};

export const mongoose = InMemory();
export default InMemory;
