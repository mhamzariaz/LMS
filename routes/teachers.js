var express = require('express');
const { createTeacher, getAllTeachers, getTeacher, deleteTeacher } = require('../controllers');
var router = express.Router();

router.post('/createteacher', createTeacher)
router.get('/getallteachers', getAllTeachers)
router.get('/getteacher', getTeacher)
router.delete('/deleteteacher', deleteTeacher)

module.exports = router;