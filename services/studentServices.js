const studentModel = require('../models/studentModel')

module.exports = {
    createStudent : async function(body){   
        const data = await studentModel.createStudent(body);
        return data;
    },

    getAllStudents: async function(){
        
        const data = await studentModel.getAllStudents();

        return data;
    },

    getStudent: async function(query){
        const data = await studentModel.getStudent(query);
        return data;
    },

    deleteStudent: async function(query){
        const data = await studentModel.deleteStudent(query);
        return data;
    },
    
    updateStudent: async function(body){
        const data = await studentModel.updateStudent(body);
        return data;
    }
}