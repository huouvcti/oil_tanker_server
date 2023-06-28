const {db} = require('../config/dbconn');

const login = {}


login.login_process = (parameters) =>{
    return new Promise((resolve, reject) =>{
        db.query(`SELECT * FROM user where id=? AND pw=?;`, [parameters.id, parameters.pw], (err, db_data) => {
            if(err) {
                reject(err);
            } else {
                resolve(db_data);
            }
        })
    })
}



module.exports = {
    login
}