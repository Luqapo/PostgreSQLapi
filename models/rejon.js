const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Rejon = sequelize.define('rejon', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = Rejon;