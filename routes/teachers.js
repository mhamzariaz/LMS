var express = require('express');
const { createTeacher } = require('../controllers');
var router = express.Router();

router.post('/createteacher', createTeacher)

module.exports = router;