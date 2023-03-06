const teacherModel = require('../models/teacherModel')

module.exports = {
    createTeacher : async function(body){
       
        const data = await teacherModel.createTeacher(body);

        return data;
    },
    getAllTeachers: async function(){
        
        const data = await teacherModel.getAllTeachers();

        return data;
    },

    getTeacher: async function(query){
        const data = await teacherModel.getTeacher(query);
        return data;
    },

    deleteTeacher: async function(query){
        const data = await teacherModel.deleteTeacher(query);
        return data;
    }
}