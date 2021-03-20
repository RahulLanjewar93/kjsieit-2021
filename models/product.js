const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageSchema = Schema({
    imageUrl:{
        type:String,
    },
    fileName:{
        type:String,
    }
})

const productSchema = Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    price:{
        type:Number,
        required:true,
    },
    companyName:{
        type:String,
        required:true
    },
    images:{
        type:String,
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:'Category'
    }
})

module.exports = mongoose.model('Product',productSchema)

