const connection = require('../config/database/connection')
const { DataTypes } = require('sequelize')

const UserModel = require('./UserModel');

const EnderecoModel = connection.define("Endereco", {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: UserModel,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    rua: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    numero:{
        type: DataTypes.STRING(10),
        allowNull: false
    },
    bairro:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    cidade:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    estado:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    cep:{
        type: DataTypes.STRING(10),
        allowNull: false
    }
    
});

module.exports = EnderecoModel;