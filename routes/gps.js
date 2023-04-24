var express = require('express');
var router = express.Router();

const gpsCtrl = require('../controller/gpsCtrl');


router.get('/period', gpsCtrl.period);

router.post('/gps', gpsCtrl.gps);





module.exports = router;
