const teacherModel = require('../models/teacherModel')

module.exports = {
    createTeacher : async function(body){
       
        const data = await teacherModel.createTeacher(body);

        return data;
    },
}