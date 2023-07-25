const {db} = require('../config/dbconn');

const login = {}

const shipInfo = {}


login.login_process = (parameters) =>{
    return new Promise((resolve, reject) =>{
        db.query(`SELECT * FROM admin where id=? AND pw=?;`, [parameters.id, parameters.pw], (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}





shipInfo.show_shipInfo = (id) => {
    return new Promise((resolve, reject) =>{
        db.query(`SELECT * FROM admin_shipInfo where admin_key=?;`, [id], (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}



module.exports = {
    login,
    shipInfo
}