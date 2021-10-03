import { Connection, createConnection, getConnectionOptions, useContainer } from 'typeorm';
import { Container } from 'typeorm-typedi-extensions';

export const setupDbConnection = async (): Promise<Connection> => {
  useContainer(Container);
  const config = await getConnectionOptions();
  try { 
    let connection = await createConnection(config);
    return connection;
  } catch (error) {
    //ToDo: retry a set number of times, better error logging.
    console.log(error);
  }
}