// const dotenv = require("dotenv");

const express = require("express");



const app = express();




//Use Middle ware
const middleware = (req,res,next)=>{
    next();
}

//Router for Landing Page
app.get("/",(req,res)=>{
    res.send("Welcome to Home Page");
})


//Router for contact page
app.get("/contact",(req,res)=>{
    res.send("Welcome to Contact Page");
})

//Router for about page
app.get("/about",middleware,(req,res)=>{
    res.send("Welcome to About Page");
})

//Router for SignIn page
app.get("/signin",(req,res)=>{
    res.send("Welcome to Sign In Page");
})


//Router for Signup Page
app.get("/signup",(req,res)=>{
    res.send("Welcome to Registration Page");
})



//export app
module.exports = app;