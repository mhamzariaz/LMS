const sectionService = require('../../services/sectionService');

module.exports = async function(req, res){
    const data = await sectionService.createSection(req.body)
    res.send(data) 
};