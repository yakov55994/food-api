import Sequelize from "sequelize";
import database from "../utilis/database.js";

const Orderitem = database.define("orderitem", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  orderid: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  productid: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNullfalse,
  },
});

export default Orderitem;
