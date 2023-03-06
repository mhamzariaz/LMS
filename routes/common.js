var express = require('express');
var router = express.Router();

const {login, createToken , logout} = require('../controllers/index');
router.post('/login', login)
router.post('/createtoken', createToken)
router.delete('/logout', logout)



module.exports = router;
