module.exports = {
    createUser: require('./users/createUser'),
    createStudent: require('./students/createStudent'),
    createTeacher: require('./teachers/createTeacher'),
    createCourse: require('./course/createCourse'),
    createSection: require('./section/createSection'),
    login: require('./authentication/login'), 
    createToken: require('./authentication/createToken'),
    logout: require('./authentication/logout')
}