const { db } = require('../utils/database');
const { DataTypes } = require('sequelize');

const Transfer = db.define('transfer', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    amount: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    senderUserId: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    receiverUserId: {
        allowNull: false,
        type: DataTypes.INTEGER
    }
});

module.exports = { Transfer };