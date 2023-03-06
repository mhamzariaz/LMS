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
    getAllTeachers: async function(){
        let result = await models.teacher.findAll({
            include: {
                model: models.user
            }
        });
        return result;
    },

    getTeacher: async function(query){
        const result = await models.teacher.findAll({
            where: {
                id: query.id
            },
            include: {
                model: models.user
            }
        })
        return result;
    },

    deleteTeacher: async function(query){

        const teacher = await models.teacher.findOne({
            where: {
                id: query.id
            },
        })

        if(teacher){
            await teacher.destroy()
            return "teacher deleted"
        }
        
    }

}