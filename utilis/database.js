import Sequelize from "sequelize";

const connection = new Sequelize(
  "food_db", //Name of database
  "root", //Username
  "Raziel5994", //password
  {
    dialect: "mysql",
    host: "localhost",
  }
);

export default connection;
