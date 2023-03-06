const {models} = require('../models/definitions')

module.exports = {
    createSection:  async function(body){
        const result = await models.section.create(body)
        return result
    },

}