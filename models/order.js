const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = Schema({
    customerName:{
        type:String,
        required:true
    },
    customerPhone:{
        type:String,
        required:true,
    },
    customerAddress:{
        type:String,
        required:true,
    },
    productInfo:{
        type:Schema.Types.ObjectId,
        ref:'Product',
        required:true,
    },
    agentName:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now(),
    }
})

module.exports = mongoose.model('Order',orderSchema)

