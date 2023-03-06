const sectionModel = require('../models/sectionModel')

module.exports = {
    createSection : async function(body){
       
        const data = await sectionModel.createSection(body);
        return data;
    },
}