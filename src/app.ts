import { createExpressServer, useContainer } from 'routing-controllers';
import { Connection, createConnection } from 'typeorm';
import { Container } from 'typedi';
import { PeopleController } from './api/controllers/PeopleController';
import path, { resolve } from 'path';
import * as Reflect from 'reflect-metadata';
import { json } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

createConnection().then(async (result) => {
  const connection = result;
  const app = createExpressServer({
    routePrefix: '/api',
    controllers: [PeopleController],
  });

  app.use(cors());
  app.use(json());
  app.use(morgan('dev'));

  app.listen(process.env.EXPRESSPORT, () => {
    console.log(`App listening on port ${process.env.EXPRESSPORT}`);
  });
  console.log()

  process.on('exit', () => {
    connection.close();
  });
}, 
error => {
  console.log(error);
})
