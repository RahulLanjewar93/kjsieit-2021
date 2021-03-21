const express = require('express')
const app = express();
const bcrypt = require('bcrypt')
const session = require('express-session')
const MONGOURL = 'mongodb+srv://dev:ibPI10Je53tZ5SSQ@kjseit.dafcz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = 8080

//Middleware
const {isLoggedIn} = require('./middlewares/isLoggedIn')

//Models
const Product = require('./models/product')
const Category = require('./models/category')
const User = require('./models/user')
const Order = require('./models/order')

//MongoStore
const MongoDBStore = require('connect-mongo');
const store = MongoDBStore.create({ mongoUrl: MONGOURL });

//Mongoose
const mongoose = require('mongoose');
mongoose.connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected',()=>{console.log("Database Connection Successfull")})
mongoose.connection.on('error',(error)=>{console.log("There was an error while connecting to the database",error)})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.json())
app.use(require('./routes/auth'))

mongoose.connect(MONGOURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log("connected to database")
})
mongoose.connection.on('error',(error)=>{
    console.log("error while connection",error)
})

app.get('/products/:id',async(req,res)=>{
    const {id} = req.params
    const result = await Product.findById({_id:id}).populate('category')
    res.json(result)
})

app.post('/products',async(req,res)=>{
    console.log(req.body.category)
    const { price,category,companyName,specifications,modelName,stock } = req.body
    if (!( price && companyName && category && specifications && modelName && stock)){
        return res.json({error:"Some Fields Are missing"})
    }
    try {
        const nameCheck = await Product.find({modelName})
        if (nameCheck.length === 0) {
            const result =  await Product.insertMany({modelName,price,companyName,category,specifications,modelName,stock})
            return res.json(...result)
        }
        return res.json({error:"Product Name Already Exists"})
    }catch(error){
        res.json({error:error.message})
    }
})

app.get('/products',async(req,res)=>{
    const result = await Product.find().populate('category')
    console.log(result)
    res.json(result)
})

app.get('/orders/:id',async(req,res)=>{
    const {id} = req.params
    const result = await Order.findById({_id:id}).populate('productInfo')
    res.json(result)
})

app.post('/orders',async(req,res)=>{
    const { customerName,customerPhone,customerAddress,productInfo,agentName } = req.body
    if (!( customerName && customerPhone && customerAddress && productInfo && agentName)){
        return res.json({error:"Some Fields Are missing"})
    }
    try {
        const result =  await Order.insertMany({customerName,customerPhone,customerAddress,productInfo,agentName})
        return res.json(...result)
    }catch(error){
        res.json({error:error.message})
    }
})

app.get('/orders',async(req,res)=>{
    const result = await Order.find().populate('Product')
    console.log(result)
    res.json(result)
})

app.post('/category',async(req,res)=>{
    const { name,description} = req.body
    if (!(name && description)){
        return res.json({error:"Please Enter all fields"})
    }
    try {
        const nameCheck = await Category.find({name:name})
        if (nameCheck.length === 0) {
            const result =  await Category.insertMany({name,description})
            return res.json(...result)
        }
        return res.json({error:"Category Name Already Exists"})
    }catch(error){
        res.json({error:error.message})
    }
})

app.get('/category',async(req,res)=>{
    const result = await Category.find()
    console.log(result)
    res.json(result)
})

app.get('/getlowstocks',async(req,res)=>{
    const result = await Product.find({stock:{$lt:50}})
    console.log(result)
    res.json(result)
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})
