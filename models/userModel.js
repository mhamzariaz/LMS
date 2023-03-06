const {models} = require('../models/definitions')

module.exports = {
    createUser:  async function(body){
        const result = await models.user.create(body);
        return result
    },

    getAllUsers: async function(){
        let result = await models.user.findAll();
        return result;
    },

    getUserByID: async function(query){
        const result = await models.user.findAll({
            where: {
                id: query.id
            }
        })
        return result;
    },

}