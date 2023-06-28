var express = require('express');
var router = express.Router();

const userAPICtrl = require('../controller/userAPICtrl');


router.post('/login', userAPICtrl.userAPI.login_process);



module.exports = router;