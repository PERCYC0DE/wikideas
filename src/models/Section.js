import { DataTypes } from "sequelize";
import database from "../config/database";

const Section = database.define("sections", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  imageDetails: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Section;
