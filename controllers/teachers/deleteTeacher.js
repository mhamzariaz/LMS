const teacherService = require('../../services/teacherServices');

module.exports = async function(req, res){
    const data = await teacherService.deleteTeacher(req.query)
    res.send(data)
};