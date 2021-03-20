const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true
    },
    image:[{
        type:String
    }]
})

module.exports = mongoose.model('Category',categorySchema)

