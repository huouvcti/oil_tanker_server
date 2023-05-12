"use strict"

const io = require('socket.io-client');

const gpsDAO = require('../model/gpsDAO');







const period = async (req, res) => {
    const per = 60;

    console.log('period: ', per);

    res.send(`${per}`);
    
}


const gps = async (req, res) => {

    
    const socket = io('http://localhost:8000', {
        path: '/socket.io',
    })

    

    console.log(socket)
    

    const parameters = {
        router_id: req.body.mdn || null,
        latitude: parseFloat(req.body.latitude) || null,
        longitude: parseFloat(req.body.longitude) || null,
        rsrp: parseFloat(req.body.rsrp) || null
    }

    console.log('gps: ', parameters);



    if(parameters.router_id == null){
        res.send(`Fail: mdn is undefined`)
    } else {

        await gpsDAO.gps.insert(parameters);

        await socket.emit('gps_server_update', parameters);

        res.send(`OK`)
    }
    
    // res.send({"response": parameters})
    
}



module.exports = {
    period,
    gps
}