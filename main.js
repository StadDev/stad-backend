const express=require('express')
const app=express()





const port=process.env.PORT || 7000

app.listen(port,()=>{
    console.log(`port is running on ${port}`)
})