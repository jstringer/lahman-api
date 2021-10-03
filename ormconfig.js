const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  type: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  schema: process.env.DB_SCHEMA,
  applicationName: process.env.APP_NAME,
  entities: [
    "dist/database/models/*.js"  
  ]
}