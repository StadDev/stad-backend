const express=require('express')
const app=express()
const dotenv = require('dotenv').config()


//WELL DONE NUNUU

const port=process.env.PORT  

app.listen(port,()=>{
    console.log(`port is running on ${port}`)
})