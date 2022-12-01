const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName:{
        type: String,
        required:true,
    },
    category:{
        type:Array,
        required:true
    },

    description:{
        type:String,
        required:true
    },
    productSize:{
        type:Array,
        required:true
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
