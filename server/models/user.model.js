const { db } = require('../utils/database');
const { DataTypes } = require('sequelize');

const User = db.define('user', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    accountNumber: {
        allowNull: false,
        type: DataTypes.BIGINT,
        unique: true
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    amount: {
        allowNull: false,
        defaultValue: 1000,
        type: DataTypes.INTEGER
    },
    status: {
        allowNull: false,
        defaultValue: 'active',
        type: DataTypes.STRING
    }
});

module.exports = { User };