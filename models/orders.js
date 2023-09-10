import Sequelize from "sequelize";
import database from "../utilis/database.js";

const Orders = database.define("orders", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  storeId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  orderCost: {
    type: Sequelize.INTEGER,
    allowNullfalse,
  },
  orderAddress: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  paymentMethod: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

export default Orders;
