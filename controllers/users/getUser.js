const userService = require('../../services/userServices');

module.exports = async function(req, res){
    const data = await userService.getUserByID(req.query)
    res.send(data)
};