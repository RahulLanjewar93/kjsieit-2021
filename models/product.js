const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = Schema({
    images:[{
        type:String,
        required:true,
    }],
    companyName:{
        type:String,
        required:true
    },
    modelName:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:'Category',
        required:true,
    },
    specifications:{
        type:String,
        required:true,
    },
    stock:{
        type:Number,
        required:true,
    },
})

module.exports = mongoose.model('Product',productSchema)

