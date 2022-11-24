const express=require('express')
const app=express()
const dotenv = require('dotenv').config()
const connectDb = require('./config/databaseConnect')



const port=process.env.PORT  





connectDb()
app.listen(port,()=>{
    console.log(`port is running on ${port}`)
})