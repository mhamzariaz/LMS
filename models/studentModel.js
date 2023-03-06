const { createUser } = require('../models/userModel');
const {models} = require('../models/definitions');
const bcrypt = require('bcrypt')

module.exports = {

    createStudent:  async function(body){

        const saltRounds = 10;
        const hash = bcrypt.hashSync(body.password, saltRounds);
        body.password = hash;
        
        var userData = {
            firstName: body.firstName, 
            lastName: body.lastName,
            email: body.email,
            phoneNumber: body.phoneNumber,
            password: body.password
        }

        var studentData = {
            rollNumber: body.rollNumber,
            deptName: body.deptName,
            semester: body.semester,
            typeOfUser: body.typeOfUser
        }

        const user = await createUser(userData)

        studentData = {...studentData, userID: user.id}

        const result = await models.student.create(studentData);
        return result
    },

}