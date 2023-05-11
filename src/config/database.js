import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

// const database = new Sequelize(process.env.DATABASE_URL, {
// host: "balarama.db.elephantsql.com",
// dialect: "postgresql",
// define: {
//   timestamp: true,
// },
// pool: {
//   max: 5,
//   min: 0,
//   acquire: 30000, // Maximum time of a connection where an error will be displayed
//   idle: 10000, // Maximum time of inactivity of a connection to start disconnecting it
// },
// operatorAliases: false,
// });

const database = new Sequelize(
  process.env.DB_USER,
  process.env.DB_NAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgresql",
  }
);

export default database;
