const {Model, DataTypes} = require('sequelize');
let sequelize = require('../../../dbConnection');

class course extends Model {}

course.init({

    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },

    title: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
        
    }, 

    courseID: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
    }
   
}, 

    {
        timestamps: true,
        paranoid: true, 
        sequelize,
        modelName: "Admin"

    }
);

module.exports = course;