const mongoose = require("mongoose");

const connect = ()=>{
    return mongoose.connect(process.env.DATABASE)
}

module.exports = connect;


/*
.then(()=>{
        console.log("Connection Successful with DB");
    }).catch((err)=>{
        console.log(err);
    });

*/