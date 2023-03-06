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

    courseCode: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
    },

    creditHours: {
        allowNull: false,
        type: DataTypes.INTEGER
    },

    lab: {
        allowNull: false,
        type: DataTypes.BOOLEAN
    }
   
}, 

    {
        timestamps: true,
        paranoid: true, 
        sequelize,
        modelName: "Courses"

    }
);

module.exports = course;