import { expect } from 'chai';
import { mongoose } from '../helpers/mongoose.mock';
import UserService from './user.service';
import dotenv from 'dotenv';
dotenv.config();

describe('User Service', () => {
  before((done) => {
    const clearCollections = () => {
      for (const collection in mongoose.connection.collections) {
        mongoose.connection.collections[collection].deleteOne(() => {});
      }
    };

    const mongooseConnect = async () => {
      await mongoose.connect(process.env.DATABASE_TEST);
      clearCollections();
    };

    if (mongoose.connection.readyState === 0) {
      mongooseConnect();
    } else {
      clearCollections();
    }

    done();
  });

  describe('Get Users', () => {
    it('should return empty array', async () => {
      const result = await new UserService().getAll();
      expect(result).to.be.an('array');
    });
  });
});
