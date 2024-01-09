const { Sequelize } = require('sequelize');
const { error } = require('console');
module.exports = new Sequelize('codegig', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres'
  });