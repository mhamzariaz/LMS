const { createUser, getUserByID } = require('../models/userModel');
const {models} = require('../models/definitions');
const bcrypt = require('bcrypt');
const getUser = require('../controllers/users/getUser');

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

    getAllStudents: async function(){
        let result = await models.student.findAll({
            include: {
                model: models.user
            }
        });
        return result;
    },

    getStudent: async function(query){
        const result = await models.student.findAll({
            where: {
                id: query.id
            },
            include: {
                model: models.user
            }
        })
        return result;
    },

    deleteStudent: async function(query){

        const student = await models.student.findOne({
            where: {
                id: query.id
            },
        })

        if(student){
            await student.destroy()
            return "Student Deleted"
        }
        
    },

    updateStudent: async function(body){

        const {id, ...params} = body

        const student = await models.student.findOne({
            where: {
                id: id
            },
        }) 
       
        const user = await student.getUser();
        await user.update({...params});
        await student.update({...params});

        return "Student Updated"
    }

}