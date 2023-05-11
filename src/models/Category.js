import { DataTypes } from "sequelize";
import database from "../config/database";

const Category = database.define("categories", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Category;
