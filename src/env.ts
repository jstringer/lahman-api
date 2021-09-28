import dotenv from 'dotenv';

dotenv.config();

export const env = {
  app: {
    port: parseInt(process.env.APP_PORT, 10),
    name: process.env.APP_NAME
  },
  db : {
    type: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    schema: process.env.DB_SCHEMA,
    applicationName: process.env.APP_NAME
  }
}