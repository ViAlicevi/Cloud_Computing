const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
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