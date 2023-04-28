"use strict"

const period = async (req, res) => {
    const per = 60;

    console.log('period: ', per);

    res.send(`${per}`);
    
}


const gps = async (req, res) => {
    const parameters = {
        id: req.body.mdn || null,
        lat: req.body.latitude || null,
        long: req.body.longitude || null,
        rsrp: req.body.rsrp || null
    }

    console.log('gps: ', parameters);

    if(parameters.id == null){
        res.send(`Fail: mdn is undefined`)
    } else {
        res.send(`OK`)
    }
    
    // res.send({"response": parameters})
    
}



module.exports = {
    period,
    gps
}