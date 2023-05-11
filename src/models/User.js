import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import database from "../config/database";

const User = database.define(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: DataTypes.STRING,
  },
  {
    hooks: {
      beforeCreate: async function (user) {},
    },
  }
);

export default User;
