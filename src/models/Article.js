import { DataTypes } from "sequelize";
import database from "../config/database.js";

const Article = database.define("articles", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  contentMain: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageMain: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descriptionImageMain: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publicationDate: {
    type: DataTypes.DATE,
    default: Date.now(),
  },
  references: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  bibliography: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
});

export default Article;
