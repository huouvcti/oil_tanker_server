const {db} = require('../config/dbconn');

const gps = {}

gps.insert = (parameters) =>{
    return new Promise((resolve, reject) =>{
        db.query(`INSERT INTO gps(router_id, lat, long)`, [parameters.router_id, parameters.lat, parameters.long], (err, db_data) => {
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