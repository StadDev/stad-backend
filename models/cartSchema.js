const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    owner : {
      type: ObjectID,
       required: true,
       ref: 'User'
     },
    items: [{
      itemId: {
       type: ObjectID,
       ref: 'Product',
       required: true
    },
    name: String,
    quantity: {
       type: Number,
       required: true,
       min: 1,
       default: 1},
       price: Number
     }],
    bill: {
        type: Number,
        required: true,
       default: 0
      }
    }, {
    timestamps: true
    })

module.exports = mongoose.model('Cart',cartSchema)