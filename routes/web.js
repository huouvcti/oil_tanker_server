var express = require('express');
var router = express.Router();



router.get('/gps_log', (req, res) => {
    res.render("gps_log");
});





module.exports = router;
