const connection = require('../config/database/connection')
const { DataTypes } = require('sequelize')

let UserModel = connection.define ( 'user', {
    firstname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(300),
        allowNull: false
    }
});

module.exports = UserModel