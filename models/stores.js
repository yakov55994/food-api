import Sequelize from "sequelize";
import database from "../utilis/database.js";

const Stores = database.define("stores", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  storeName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  storeAddress: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  storePhone: {
    type: Sequelize.STRING,
    allowNullfalse,
  },

  storeHours: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  storeLogo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  storeCity: {
    type: Sequelize.STRING,
    autoIncrement: true,
  },
  storeEmail: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  categoryId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

export default Stores;
