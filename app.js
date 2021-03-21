//Enviornment Variables
const PORT = process.env.PORT || 8080
const MONGOURL = process.env.MONGOURL || 'mongodb+srv://dev:ibPI10Je53tZ5SSQ@kjseit.dafcz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
require('dotenv').config()

const express = require('express')
const app = express();
const bcrypt = require('bcrypt')
const session = require('express-session')

//Middlewaresc
const {isLoggedIn} = require('./middlewares/isLoggedIn')

//Models
const Product = require('./models/product')
const Category = require('./models/category')
const User = require('./models/users')

//MongoStore
const MongoDBStore = require('connect-mongo');
const store = MongoDBStore.create({ mongoUrl: MONGOURL });

//Session
const sessionConfig = {
    store,
    secret:'thisisasecret',
    resave:false,
    saveUninitialized:true,
    cookie: {
        httpOnly : true,
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000
    }
}
app.use(session(sessionConfig))

//Passport
const passport = require('passport')
const intializePassport = require('./passport-config')
intializePassport(passport,
    async(username) => await User.findOne({username:username}),
    async(id) => await User.findById({_id:id})
)
app.use(passport.initialize())
app.use(passport.session())



//Mongoose
const mongoose = require('mongoose');
const { options } = require('joi');
mongoose.connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected',()=>{console.log("Database Connection Successfull")})
mongoose.connection.on('error',(error)=>{console.log("There was an error while connecting to the database",error)})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/signup', async(req, res) => {
    const { email,username, password } = req.body
    if(!email || !username || !password) return res.status(422).json({error:"Please add all the fields"})
    try{
        const foundUserName = await User.findOne({username:username})
        const foundUserEmail = await User.findOne({email:email})
        if (foundUserName !== null) return res.json({error:'Already have a user with same Username'})
        if (foundUserEmail !== null) return res.json({error:'Already have a user with same Email'})
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = await User.insertMany({email:email,username:username,password:hashedPassword})
        if(newUser.length === 0){
            return res.json({error:"Error while creating user"})
        }
        return res.json(newUser)
    }catch(error){
        return res.json({error:error.message})
    }
})

app.post('/signin', passport.authenticate('local',{successRedirect:'/successfullLogin',failureRedirect:'/unsucessfullLogin'}));

app.get('/successfullLogin',(req,res)=>{
    res.json({isLoggedIn:true})
})

app.get('/unsucessfullLogin',(req,res)=>{
    res.json({isLoggedIn:false})
})
app.post('/logout',async(req,res)=>{
    req.logOut();
    res.status(200).json({isLoggedIn:false,message:"Logged Out Successfully"})
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

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})