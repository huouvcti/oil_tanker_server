const {db} = require('../config/dbconn');

const gps = {}

gps.insert = (parameters) =>{
    return new Promise((resolve, reject) =>{
        db.query(`INSERT INTO gps('router_id', 'latitude', 'longitude', 'rsrp') VALUES(?, ?, ?, ?);`, [parameters.router_id, parameters.latitude, parameters.longitude, parameters.rsrp], (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}



module.exports = {
    gps
}