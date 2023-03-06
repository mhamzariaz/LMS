const commonService = require('../../services/commonService')

module.exports = async function(req, res){
    const body = req.body
    const data = await commonService.createToken(body)
    res.send(data)
};