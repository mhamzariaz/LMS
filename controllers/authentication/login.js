const commonService = require('../../services/commonService')

module.exports = async function(req, res){
    const data = await commonService.login(req.body)
    res.send(data)
};
