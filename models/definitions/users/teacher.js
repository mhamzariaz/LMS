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
   },

   deptName: {
        allowNull: false,
        type: DataTypes.STRING
   },

   teacherID: {
        allowNull: false,
        type: DataTypes.STRING
   },

   officeLocation: {
        type: DataTypes.STRING
   },

   officeHours: {
        type: DataTypes.STRING
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