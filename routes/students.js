var express = require('express');
const { createStudent } = require('../controllers');
var router = express.Router();

router.post('/createstudent', createStudent)

module.exports = router;