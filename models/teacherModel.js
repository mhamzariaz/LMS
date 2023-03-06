const { createUser } = require('../models/userModel');
const {models} = require('../models/definitions');

module.exports = {
    createTeacher:  async function(body){
        
        var userData = {
            firstName: body.firstName, 
            lastName: body.lastName,
            email: body.email,
            phoneNumber: body.phoneNumber,
            password: body.password
        }

        var teacherData = {
            deptName: body.deptName,
            teacherID: body.teacherID,
            typeOfUser: body.typeOfUser,
            officeLocation: body.officeLocation,
            officeHours: body.officeHours
        }

        const user = await createUser(userData)

        teacherData = {...teacherData, userID: user.id}

        const result = await models.teacher.create(teacherData);
        return result
    },

}