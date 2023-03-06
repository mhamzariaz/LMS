var express = require('express');
const { createStudent, getAllStudents, getStudent, deleteStudent, updateStudent } = require('../controllers');
var router = express.Router();

router.post('/createstudent', createStudent)
router.get('/getallstudents', getAllStudents)
router.get('/getstudent', getStudent)
router.delete('/deletestudent', deleteStudent)
router.put('/updatestudent', updateStudent)

module.exports = router;