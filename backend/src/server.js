const app = require("./app");
const connect = require('./configs/db');

const dotenv = require('dotenv');

//dotenv connection
dotenv.config({path:'./config.env'})

//Connect with local server
app.listen(process.env.PORT,async()=>{
    try {
        await connect();
        console.log(`Server connect with ${process.env.PORT}`);
    } catch (error) {
       console.log("Connection not success")
    }
    
})