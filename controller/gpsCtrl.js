"use strict"

const period = async (req, res) => {
    const per = 60;

    res.send({"response": per})
    
}


const gps = async (req, res) => {
    const parameters = {
        lat: req.body.latitude || null,
        long: req.body.longitude || null,
        rsrp: req.body.rsrp || null
    }
    
    // res.send({"response": parameters})
    res.send({"response": "OK"})
}



module.exports = {
    period,
    gps
}