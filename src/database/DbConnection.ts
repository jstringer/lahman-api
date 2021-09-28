import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export const setupDbConnection = async (): Promise<Connection> => {
  const config = await getConnectionOptions();
  try { 
    let connection = await createConnection(config);
    return connection;
  } catch (error) {
    //ToDo: retry a set number of times, better error logging.
    console.log(error);
  }
}
