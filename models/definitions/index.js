const Sequelize = require('sequelize');
var config = require('../../config.json');
const user = require('./users/user')
const student = require('./users/student')
const teacher = require('./users/teacher')
const course = require('./course/course')

const db = {};
config = config.db;
let sequelize = require('../../dbConnection');
let section = sequelize.define('Section', {})

let models = {
    user,
    student,
    teacher,
    course,
    section
}

//user to student one-to-many
user.hasOne(student, {onDelete: "CASCADE", hooks: true, foreignKey:{ name: 'userID', allowNull: false, unique: true}})
student.belongsTo(user, {onDelete: "CASCADE", hooks: true, foreignKey: { name: 'userID', allowNull: false, unique: true}})

//user to teacher one-to-many
user.hasOne(teacher, {onDelete: "CASCADE", hooks: true, foreignKey:{ name: 'userID', allowNull: false, unique: true}})
teacher.belongsTo(user, {onDelete: "CASCADE", hooks: true, foreignKey:{ name: 'userID', allowNull: false, unique: true}})

//student and course many-to-many
//teacher and course many-to-many
teacher.belongsToMany(course, {through: section})
course.belongsToMany(teacher, {through: section})

// let section = sequelize.models.section;
student.hasMany(section, {foreignKey: 'StudentID'})
section.belongsTo(student, {foreignKey: 'StudentID'})

sequelize.models = models;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = {db, models};