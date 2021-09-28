import { createExpressServer } from 'routing-controllers';
import { Connection } from 'typeorm';
import { setupDbConnection } from './database/DbConnection';
import { PeopleController } from './api/controllers/PeopleController';
import * as Reflect from 'reflect-metadata';
import { env } from './env';
import { json } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const bootstrapApplication = async () => {
  try {
    const connection: Connection = await setupDbConnection();
    const app = createExpressServer({
      routePrefix: '/api',
      controllers: [PeopleController]
    });

    app.use(cors());
    app.use(json());
    app.use(morgan('dev'));

    app.listen(env.app.port, () =>{
      console.log(`App listening on port ${env.app.port}`);
    });

    process.on('SIGINT', async () => {
      if (app.listening || connection.isConnected) {
        console.log("Application killed, closing database connection...");
        await connection.close();
        process.exit(0);
      }
    });

  } catch (error) {
    console.log(error);
  }
}

bootstrapApplication();