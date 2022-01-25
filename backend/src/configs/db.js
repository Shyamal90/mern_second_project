const mongoose = require("mongoose");

const DB = `mongodb+srv://shyamal:mongoshyamal@cluster0.yr814.mongodb.net/mern_second?retryWrites=true&w=majority`;

const connect = ()=>{
    return mongoose.connect(DB).then(()=>{
        console.log("Connection Successful with DB");
    }).catch((err)=>{
        console.log(err);
    });
}

module.exports = connect;