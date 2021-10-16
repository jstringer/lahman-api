import { Connection, createConnection, getConnectionOptions, useContainer } from 'typeorm';
import { Container } from 'typeorm-typedi-extensions';

export const setupDbConnection = async (name?: string): Promise<Connection> => {
  useContainer(Container);
  const config = await getConnectionOptions(name);
  try { 
    let connection = await createConnection(config);
    console.log(`Connection ${connection.name} established. Driver: ${connection.driver}`);
    return connection;
  } catch (error) {
    //ToDo: retry a set number of times, better error logging.
    console.log(error);
  }
}