const bcrypt = require('bcrypt');
const userModel = require('../models/userModel')

module.exports = {
    createUser : async function(body){
        const saltRounds = 10;
        const hash = bcrypt.hashSync(body.password, saltRounds);
        body.password = hash;
        
        const data = await userModel.createUser(body);

        return `Created user: ${data.firstName}`;
    },

    getAllUsers: async function(){
        
        const data = await userModel.getAllUsers();

        return data;
    },

    getUserByID: async function(query){
        const data = await userModel.getUserByID(query);
        return data;
    },
}