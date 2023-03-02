const Sequelize = require('sequelize');
var config = require('../../config.json');
const user = require('./users/user')
const student = require('./users/student')
const teacher = require('./users/teacher')
const admin = require('./users/admin')
const course = require('./course/course')


const db = {};
config = config.db;
let sequelize = require('../../dbConnection');

let models = {
    user,
    student,
    teacher,
    admin,
    course
}

//user to student one-to-many
user.hasMany(student, {onDelete: "CASCADE", foreignKey: 'userID'})
student.belongsTo(user, {onDelete: "CASCADE", foreignKey: 'userID'})

//user to teacher one-to-many
user.hasMany(teacher, {onDelete: "CASCADE", foreignKey: 'userID'})
teacher.belongsTo(user, {onDelete: "CASCADE", foreignKey: 'userID'})

//user to admin one-to-many
user.hasMany(admin, {onDelete: "CASCADE", foreignKey: 'userID'})
admin.belongsTo(user, {onDelete: "CASCADE", foreignKey: 'userID'})



sequelize.models = models;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = {db, models};