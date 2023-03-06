module.exports = {
    createUser: require('./users/createUser'),
    getUser: require('./users/getUser'),
    getAllUsers: require('./users/getAllUsers'),
    createStudent: require('./students/createStudent'),
    getStudent: require('./students/getStudent'),
    getAllStudents: require('./students/getAllStudents'),
    deleteStudent: require('./students/deleteStudent'),
    updateStudent: require('./students/updateStudent'),
    createTeacher: require('./teachers/createTeacher'),
    getTeacher: require('./teachers/getTeacher'),
    getAllTeachers: require('./teachers/getAllTeacher'),
    deleteTeacher: require('./teachers/deleteTeacher'),
    createCourse: require('./course/createCourse'),
    createSection: require('./section/createSection'),
    login: require('./authentication/login'), 
    createToken: require('./authentication/createToken'),
    logout: require('./authentication/logout')
}