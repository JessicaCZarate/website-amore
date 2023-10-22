require('dotenv').config();

module.exports = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

// do an npm i dotenv then add a .env file in server and pass this data
// DB_HOST = localhost;
// DB_USER = root;
// DB_PASSWORD = "";
// DB_NAME = amoredb;
