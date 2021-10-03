import { createExpressServer, useContainer } from 'routing-controllers';
import { Connection } from 'typeorm';
import { setupDbConnection } from './database/lib/DbConnection';
import path from 'path';
import { env } from './env';
import morgan from 'morgan';
import dotenv from 'dotenv';
import "reflect-metadata";
import Container from 'typedi';

dotenv.config();

const bootstrapApplication = async () => {
  try {
    useContainer(Container);
    const connection: Connection = await setupDbConnection();
    const app = createExpressServer({
      cors: true,
      routePrefix: '/api',
      controllers: [path.join(__dirname + '/api/controllers/*.js')],
      classTransformer: true
    });

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