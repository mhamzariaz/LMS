var express = require('express');
const { createSection } = require('../controllers');
var router = express.Router();

router.post('/createsection', createSection)

module.exports = router;