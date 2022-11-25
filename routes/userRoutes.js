const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const router=require('express').Router()
const User=require('../models/userModel')
const asynchandler = require('express-async-handler')


//REGISTER USER
router.post('/registerUser',  async (req,res)=>{
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
// this
router.post('/loginUser',asynchandler(async (req,res)=>{
    const {email,password} = req.body
    const user = await User.findOne({email})
    if (user && (await bcrypt.compare(password,user.password))){
    res.json({
        _id : user.id,
        username :user.username,
        email : user.email,
       token: generateToken(_id)
        
       
    })
    }else{
        res.status(400)
        throw new Error('invalid user credentials')
    }

    res.json({message:"login user"})
}))
const generateToken = (id) => {
    return jwt.sign({id},{email,password},process.env.JWT_SECRET,{
        
        expiresIn:'2d'
    })
}

module.exports=router
