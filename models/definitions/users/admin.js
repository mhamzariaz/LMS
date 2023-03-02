const {Model, DataTypes} = require('sequelize');
let sequelize = require('../../../dbConnection');

class admin extends Model {}

admin.init({

    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },

   typeOfUser: {
        allowNull: false,
        type: DataTypes.INTEGER
   }
   
}, 

    {
        timestamps: true,
        paranoid: true, 
        sequelize,
        modelName: "Admin"

    }
);

module.exports = admin;