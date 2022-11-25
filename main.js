const express=require('express')
const app=express()
require('dotenv').config()
const connectDb = require('./config/databaseConnect')
const cors=require('cors')
const userauth=require('./routes/userRoutes')

app.use(express.json())
app.use(cors())
app.use('/Apihandler/userauth',userauth)

//for now lets nots give it a port in the env (secof hosting purposes)
const port=process.env.PORT || 7000

connectDb()
app.listen(port,()=>{
    console.log(`port is running on ${port}`)
})