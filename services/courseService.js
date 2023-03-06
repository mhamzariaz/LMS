const courseModel = require('../models/courseModel')

module.exports = {
    createCourse : async function(body){
       
        const data = await courseModel.createCourse(body);

        return data;
    },
}