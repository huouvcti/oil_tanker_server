var express = require('express');
var router = express.Router();

const gpsAPICtrl = require('../controller/gpsAPICtrl');


router.get('/gps_route', gpsAPICtrl.gpsAPI.gps_route);

router.get('/gps_current', gpsAPICtrl.gpsAPI.gps_current);


module.exports = router;