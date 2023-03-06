const commonModel = require('../models/commonModel');

module.exports = {

    login: async function(body){
        const data = await commonModel.login(body);
        return data;
    }, 
    
    createToken: async function(body){
        const data = await commonModel.createtoken(body);
        return data;
    },
    logout: async function(body){
        console.log( "here")
        const data = await commonModel.logout(body);
        console.log("data in service", data)
        return data;
    }

}