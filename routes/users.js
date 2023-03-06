var express = require('express');
const { createUser, getAllUsers, getUser } = require('../controllers');
var router = express.Router();

router.post('/createuser', createUser)
router.get('/getallusers', getAllUsers)
router.get('/getuser', getUser)

module.exports = router;
