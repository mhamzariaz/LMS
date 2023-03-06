const {models} = require('../models/definitions')

module.exports = {
    createCourse:  async function(body){
        const result = await models.course.create(body);
        return result
    },

}