var express = require('express');
const { createCourse } = require('../controllers');
var router = express.Router();

router.post('/createcourse', createCourse)

module.exports = router;