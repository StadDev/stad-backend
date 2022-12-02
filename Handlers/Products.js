const Product=require('../models/productsSchema')
const router=require('express').Router()
const {verifyToken,}=require('../Middlewares/Verify')


router.get('/', async (req,res)=>{
  const products = await Product.find({product:Product})
  res.status(200).json(products)
})
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

  router.put('/updateProducts/:id',verifyToken,async(req,res)=>{
     try {
      
      const updatedProduct =  new Product({
        _id:req.params.id,
        productName:req.body.productName,
        category: req.body.category,
        description:req.body.description,
        productSize:req.body.productSize,
        productImage:req.body.productImage,
      })
      
      updated = await Product.findByIdAndUpdate(updatedProduct)
      res.status(200).json(updated)

     } catch (error) {
      res.status(400).json({
        error:error
      })
     }
  })
router.delete('/:id',verifyToken,async(req,res)=>{
  try {
    Product.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    )
  } catch (error) {
    res.status(400).json({
      error:error
    })
  }
})

  

  
  module.exports=router
