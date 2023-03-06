const studentService = require('../../services/studentServices');

module.exports = async function(req, res){
    const data = await studentService.getStudent(req.query)
    res.send(data)
};