const {Model, DataTypes} = require('sequelize');
let sequelize = require('../../../dbConnection');

class teacher extends Model {}

teacher.init({

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
        modelName: "Teachers"

    }
);

module.exports = teacher;