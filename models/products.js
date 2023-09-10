import Sequelize from "sequelize";
import database from "../utilis/database.js";

const Products = database.define("products", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  prodName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  prodDesc: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  prodPrice: {
    type: Sequelize.FLOAT,
    allowNullfalse,
  },

  categoryid: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  storeid: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

export default Products;
