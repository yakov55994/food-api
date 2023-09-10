import Sequelize from "sequelize";
import database from "../utilis/database.js";

const Productsimages = database.define("productsimages", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default Productsimages;
