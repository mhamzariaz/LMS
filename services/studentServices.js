const studentModel = require('../models/studentModel')

module.exports = {
    createStudent : async function(body){
       
        const data = await studentModel.createStudent(body);

        return data;
    },
}