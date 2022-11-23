const express=require('express')
const app=express()
require('dotenv').config()
const connectDb = require('./config/databaseConnect')


//for now lets nots give it a port in the env (secof hosting purposes)
const port=process.env.PORT || 7000

connectDb()
app.listen(port,()=>{
    console.log(`port is running on ${port}`)
})