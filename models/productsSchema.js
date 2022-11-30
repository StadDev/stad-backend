const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName:{
        type: String,
        required:true,
    },
    category:[{type:Schema.ObjectId,ref:"Product"}],

    description:{
        type:String,
        required:true
    },
    productSize:{
        type:array,
    },
    productImage:{
        type:String,
        required:true
    },
    terms:{
        type:String,
        required:true
    }


})
module.exports = mongoose.model('Product',productSchema)
