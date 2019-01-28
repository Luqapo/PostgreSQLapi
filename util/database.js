const Sequelize = require('sequelize');

const database = process.env.DATABASE;
const user = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;

const sequelize = new Sequelize(database, user, password, {
    dialect: 'postgres',
    operatorsAliases: false
});

module.exports = sequelize;