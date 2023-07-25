"use strict"

const gpsDAO = require('../model/gpsDAO');




const gpsAPI = {}


gpsAPI.gps_route = async (req, res) => {

    const db_data = await gpsDAO.gpsAPI.search_gps_route();


    let change_data =  JSON.parse(JSON.stringify(db_data));


    for(let i=0; i<change_data.length; i++){
        change_data[i].latitude = change_data[i].latitude.split(',');
        change_data[i].longitude = change_data[i].longitude.split(',');
        change_data[i].rsrp = change_data[i].rsrp.split(',');
        change_data[i].date = change_data[i].date.split(',');
    }

    res.send(change_data);
}


gpsAPI.gps_current = async (req, res) => {
    
    const db_data = await gpsDAO.gpsAPI.search_gps_current();
    res.send(db_data);
}


gpsAPI.show_ship_info = async (req, res) => {
    
    const id = req.params.id;

    const db_data = await gpsDAO.gpsAPI.show_ship_info(id);
    res.send(db_data);
}




module.exports = {
    gpsAPI
}