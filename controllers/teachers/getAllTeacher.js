const teacherService = require('../../services/teacherServices');

module.exports = async function(req, res){
    const data = await teacherService.getAllTeachers(req.body)
    res.send(data)
};