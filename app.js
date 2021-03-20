require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 8080
const MONGOURL = process.env.MONGOURL

//Models
const Product = require('./models/product')
const Category = require('./models/category')

const mongoose = require('mongoose');
mongoose.connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect(process.env.MONGOURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log("Database Connection Successfull")
})
mongoose.connection.on('error',(error)=>{
    console.log("There was an error while connecting to the database",error)
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/signin', (req, res) => {
    console.log(req.body)
    res.json("Signin From Server")
})

app.post('/signup', (req, res) => {
    console.log(req.body)
    res.json("Signup From Server")
})

app.post('/product',async(req,res)=>{
    const { name,price,category,companyName, } = req.body
    if (!(name && price && companyName && category)){
        return res.json({error:"Please Enter all fields"})
    }
    try {
        const nameCheck = await Product.find({name:name})
        if (nameCheck.length === 0) {
            const result =  await Product.insertMany({name,price,companyName})
            return res.json(result)
        }
        return res.json({error:"Product Name Already Exists"})
    }catch(error){
        res.json({error:error})
    }
})

app.get('/product',async(req,res)=>{
    const result = await Product.find().populate('category')
    console.log(result)
    res.json(result)
})

app.post('/category',async(req,res)=>{
    const { name,description,imageUrl,imageName} = req.body
    if (!(name && description)){
        return res.json({error:"Please Enter all fields"})
    }
    try {
        const nameCheck = await Category.find({name:name})
        if (nameCheck.length === 0) {
            const result =  await Category.insertMany({name,description,imageName,imageUrl})
            return res.json(result)
        }
        return res.json({error:"Category Name Already Exists"})
    }catch(error){
        res.json({error:error})
    }
})

app.get('/category',async(req,res)=>{
    const result = await Category.find()
    console.log(result)
    res.json(result)
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})