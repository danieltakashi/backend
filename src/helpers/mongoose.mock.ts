import { Mongoose } from 'mongoose';
import { Mockgoose } from 'mockgoose';

const InMemory = () => {
  const mongoose = new Mongoose();
  mongoose.Promise = global.Promise;
  (new Mockgoose(mongoose))
    .prepareStorage().then(() => {
      const DATABASE = process.env.NODE_ENV === 'test'
        ? process.env.DATABASE_TEST
        : process.env.DATABASE_DEVELOPMENT
      mongoose.connect(DATABASE)
    });
  return mongoose
}

export const mongoose = InMemory();
export default InMemory;
