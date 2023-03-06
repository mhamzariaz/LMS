const userService = require('../../services/userServices');

module.exports = async function(req, res){
    const data = await userService.getAllUsers(req.body)
    res.send(data)
};