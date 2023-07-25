var express = require('express');
var router = express.Router();

const adminAPICtrl = require('../controller/adminAPICtrl');


router.post('/login', adminAPICtrl.adminAPI.login_process);


router.get('/show_shipInfo/:id', adminAPICtrl.adminAPI.show_shipInfo);




module.exports = router;