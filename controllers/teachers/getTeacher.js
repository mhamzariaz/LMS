const teacherService = require('../../services/teacherServices');

module.exports = async function(req, res){
    const data = await teacherService.getTeacher(req.query)
    res.send(data)
};