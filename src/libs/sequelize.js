const { Sequelize } = require("sequelize");
const { config } = require("../config/config.js");
const setupModels = require("../database/models/index.js");
// Import models config

const options = {
  dialect: "postgres",
};

const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);

module.exports = sequelize;
