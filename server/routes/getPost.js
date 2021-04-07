const app = require("../server");

//const fs  = require('fs')

exports.post = (app) => {
    return (req, res) => {
        console.log("SEND ON SERVER")
        console.log(req.body) 
    }
}