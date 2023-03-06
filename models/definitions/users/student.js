const {Model, DataTypes} = require('sequelize');
let sequelize = require('../../../dbConnection');

class student extends Model {}

student.init({

    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },

   rollNumber: {
        allowNull: false,
        unique:true,
        type: DataTypes.STRING
   },

   deptName: {
        allowNull: false,
        type: DataTypes.STRING
   },

   semester: {
        allowNull: false,
        type: DataTypes.INTEGER
   },

   typeOfUser: {
        allowNull: false,
        type: DataTypes.INTEGER
   }, 



   
}, 

    {
        timestamps: true,
        paranoid: true, 
        sequelize,
        modelName: "Students"
    }
);

module.exports = student;