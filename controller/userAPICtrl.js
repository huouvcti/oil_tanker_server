"use strict"

const userDAO = require('../model/userDAO');




const userAPI = {}




userAPI.login_process = async (req, res) => {

    const parameters = {
        id: req.body.id,
        pw: req.body.pw
    }
    
    const db_data = await userDAO.login.login_process(parameters)

    if(db_data.length > 0){
        res.send(db_data);
    } else {
        res.send(false);
    }
    
}




module.exports = {
    userAPI
}