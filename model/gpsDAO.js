const {db} = require('../config/dbconn');

const gps = {}
const gpsAPI = {}


gps.test_before = (parameters) =>{
    return new Promise((resolve, reject) =>{
        db.query(`SELECT * FROM gps LIMIT 10;`, [], (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}


gps.insert = (parameters) =>{
    return new Promise((resolve, reject) =>{
        db.query(`INSERT INTO gps(router_id, latitude, longitude, rsrp) VALUES(?, ?, ?, ?);`, [parameters.router_id, parameters.latitude, parameters.longitude, parameters.rsrp], (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}





gpsAPI.search_gps_route = (parameters) => {
    return new Promise((resolve, reject) =>{
        let sql = `SELECT router_id, GROUP_CONCAT(latitude ORDER BY date) AS latitude, GROUP_CONCAT(longitude ORDER BY date) AS longitude, GROUP_CONCAT(rsrp ORDER BY date) AS rsrp, GROUP_CONCAT(date ORDER BY date) AS date
                    FROM gps
                    WHERE DATE_FORMAT(date, '%Y-%m-%d') = CURDATE()
                    AND (latitude IS NOT NULL AND longitude IS NOT NULL AND rsrp IS NOT NULL)
                    GROUP BY router_id
                    ORDER BY router_id ASC, date DESC;`
        db.query(sql, [], (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}

gpsAPI.search_gps_current = (parameters) => {
    return new Promise((resolve, reject) =>{
        let sql = `SELECT router_id, latitude, longitude, rsrp, date
                    FROM gps
                    WHERE (router_id, date) in (select router_id, MAX(date) as date from gps group by router_id)
                    AND DATE_FORMAT(date, '%Y-%m-%d') = CURDATE()
                    AND (latitude IS NOT NULL AND longitude IS NOT NULL AND rsrp IS NOT NULL)
                    ORDER BY router_id ASC;`
        db.query(sql, [], (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}



module.exports = {
    gps,
    gpsAPI
}