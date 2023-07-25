"use strict"

const adminDAO = require('../model/adminDAO');




const adminAPI = {}




adminAPI.login_process = async (req, res) => {

    const parameters = {
        id: req.body.id,
        pw: req.body.pw
    }
    
    const db_data = await adminDAO.login.login_process(parameters)

    if(db_data.length > 0){
        res.send(db_data);
    } else {
        res.send(false);
    }
    
}


adminAPI.show_shipInfo = async (req, res) => {
    const admin_key = req.params.id;
     
    const db_data = await adminDAO.shipInfo.show_shipInfo(admin_key)

    if(db_data.length > 0){
        res.send(db_data);
    } else {
        res.send(false);
    }
    
}




module.exports = {
    adminAPI
}