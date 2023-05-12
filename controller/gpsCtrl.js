"use strict"

const gpsDAO = require('../model/gpsDAO');

const period = async (req, res) => {
    const per = 60;

    console.log('period: ', per);

    res.send(`${per}`);
    
}


const gps = async (req, res) => {
    const parameters = {
        router_id: req.body.mdn || null,
        lat: req.body.latitude || null,
        long: req.body.longitude || null,
        rsrp: req.body.rsrp || null
    }

    console.log('gps: ', parameters);



    if(parameters.router_id == null){
        res.send(`Fail: mdn is undefined`)
    } else {

        await gpsDAO.gps.insert(parameters);

        res.send(`OK`)
    }
    
    // res.send({"response": parameters})
    
}



module.exports = {
    period,
    gps
}