const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Region = sequelize.define('region', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Region;