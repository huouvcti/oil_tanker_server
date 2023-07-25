var express = require('express');
var router = express.Router();

const adminAPICtrl = require('../controller/adminAPICtrl');


router.post('/login', adminAPICtrl.adminAPI.login_process);



module.exports = router;