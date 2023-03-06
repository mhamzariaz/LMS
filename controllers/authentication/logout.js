const commonService = require('../../services/commonService')

module.exports = async function(req, res){
    const data = await commonService.logout(req.body)
    res.send(data)
};