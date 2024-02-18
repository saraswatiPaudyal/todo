var express = require('express')
var http = require('http')
require('dotenv').config()
var port = process.env.PORT
const app=express()
app.use("/",(req,res)=>{
    res.json({message:"Home Page"})
})

var server=http.createServer(app);


server.listen(port,()=>{
   console.log("server is running in http://localhost:"+port);
})