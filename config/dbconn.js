"use strict";

const mysql = require('mysql');
require('dotenv').config({ path: '.env'});



const dbOption = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    
    multipleStatements: true    // 다중쿼리문 허용
}

const db = mysql.createConnection(dbOption);




db.connect()

let db_keep = function(){
    db.query('SELECT 1', function(err){
        if(err) {
            console.log(err)
        }
    })
}
setInterval(db_keep, 10*10000)

module.exports = {
    db,
}