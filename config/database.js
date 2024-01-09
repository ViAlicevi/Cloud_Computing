const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
});

module.exports = sequelize;

// const { Sequelize } = require('sequelize');
// const { error } = require('console');
// module.exports = new Sequelize('codegig', 'postgres', '123456', {
//     host: 'localhost',
//     dialect: 'postgres'
//   });