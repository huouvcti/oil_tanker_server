"use strict";

require('dotenv').config({ path: '.env'});

const express = require('express');
const app = express();

const cors = require('cors');

const logger = require('morgan');
const path = require('path');



let corsOptions = {
    origin: '*',      // 출처 허용 옵션
    credential: true, // 사용자 인증이 필요한 리소스(쿠키 등) 접근
}



/*
 * router import
 */
const gpsRouter = require("./routes/gps");
const gpsAPIRouter = require("./routes/gpsAPI");
const userAPIRouter = require("./routes/userAPI");
const adminAPIRouter = require("./routes/adminAPI");
const webRouter = require("./routes/web");



app.use(cors(corsOptions))



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express)

// app.use('/views/script', express.static(__dirname +'/views/script'))
// app.use('/views/css', express.static(__dirname +'/views/css'))
// app.use('/views/section', express.static(__dirname +'/views/section'))

app.use('/public', express.static(__dirname +'/public'));



app.use(logger('dev'));

app.use('/', gpsRouter);
app.use('/gpsAPI', gpsAPIRouter);
app.use('/userAPI', userAPIRouter);
app.use('/adminAPI', adminAPIRouter);

app.use('/test', webRouter);







// ERROR 잘못된 경로
app.use(function(req, res, next) {
    res.status(404).send('404: Not Found!');
});
  
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('500: Something broke!')
});


module.exports = app;