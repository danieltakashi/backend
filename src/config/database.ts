import mongoose from 'mongoose';
import Logger from './logger';
import { MongoMemoryServer } from 'mongodb-memory-server';

export class Database {
  private DATABASE: string;
  private logger;
  private server;
  private inMemory = false;

  constructor() {
    // Replace database value in the .env file with your database config url
    this.DATABASE =
      process.env.NODE_ENV === 'test'
        ? process.env.DATABASE_TEST
        : process.env.NODE_ENV === 'dev' ||
          process.env.NODE_ENV === 'development'
        ? process.env.DATABASE_DEVELOPMENT
        : process.env.DATABASE;

    this.inMemory = process.env.IN_MEMORY_MONGO === 'true';

    this.logger = Logger.logger;
  }

  public initializeDatabase = async (): Promise<void> => {
    try {
      if (this.inMemory) {
        this.server = new MongoMemoryServer();
        this.DATABASE = await this.server.getUri();
      }

      await mongoose.connect(this.DATABASE, {
        useFindAndModify: false,
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

      if (['dev', 'development'].some((env) => env === process.env.NODE_ENV)) {
        this.logger.info('Connected to the database.');
      }
    } catch (error) {
      this.logger.error('Could not connect to the database.', error);
    }
  };
}
export default Database;
