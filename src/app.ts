import { createExpressServer } from 'routing-controllers';
import { Connection } from 'typeorm';
import { setupDbConnection } from './database/DbConnection';
import path from 'path';
import { env } from './env';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const bootstrapApplication = async () => {
  try {
    const connection: Connection = await setupDbConnection();
    const app = createExpressServer({
      cors: true,
      routePrefix: '/api',
      controllers: [path.join(__dirname + '/api/controllers/*.js')],
      classTransformer: true
    });

    //app.use(json());
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