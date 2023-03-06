var express = require('express');
const { createUser } = require('../controllers');
var router = express.Router();

router.post('/createuser', createUser)

module.exports = router;
