const Product=require('../models/productsSchema')
const router=require('express').Router()
const {
  verifyToken,
}=require('../Middlewares/Verify')



 router.post("/addproducts",verifyToken,async(req, res) => {
    try {
      const {id:userId}=req.user
      const {
        productName,
        category,
        description,
        productSize,
        productImage,
         }=req.body


      const storeproduct=await Product.create({
        productName,
        category,
        description,
        productSize,
        productImage,
        uid:userId
    })
 
    res.status(201).json(storeproduct)

    } catch (err) {
      res.status(500).json(err);
    }
  })


  

  
  module.exports=router