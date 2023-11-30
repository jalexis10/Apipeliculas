require('dotenv').config();
const { Sequelize } = require('sequelize');
const defineModels = require('../db/models/index')


// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: true,
  });
defineModels( sequelize )

sequelize.sync()

module.exports = sequelize