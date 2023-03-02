const {Model, DataTypes} = require('sequelize');
let sequelize = require('../../../dbConnection');

class user extends Model {}

user.init({

    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },

    firstName: {
        allowNull: false,
        type: DataTypes.STRING,
    },

    lastName: {
        allowNull: true,
        type: DataTypes.STRING
    },

    email: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING,
        validate: {isEmail: true},         
    },

    phoneNumber: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING,         
    },

    password: {
        allowNull: false,
        type: DataTypes.STRING
    }
   
}, 

    {
        timestamps: true,
        paranoid: true, 
        sequelize,
        modelName: "Users"
    }
);

module.exports = user;