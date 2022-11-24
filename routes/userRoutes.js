const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const router=require('express').Router()
const User=require('../models/userModel')


//REGISTER USER
router.post('/registerUser',async (req,res)=>{
    try {
         //generate new password
         const salt=await bcrypt.genSalt(10)
         const hashedPassword=await bcrypt.hash(req.body.password,salt)

         //create user
         const newUser=new User({
             username:req.body.username.toLowerCase(),
             email:req.body.email,
             password:hashedPassword,
         })

         //save user and send response
         const user=await newUser.save()
        //using jwt
         const {username,id,isAdmin}=user
         const token=jwt.sign({username,id,isAdmin},process.env.SECRET,{expiresIn:"2d"}) 
        
         res.status(201).json({...user._doc,token})

        } catch (error) {
           res.status(500).json(error)
        }
})

//add your login below

module.exports=router
