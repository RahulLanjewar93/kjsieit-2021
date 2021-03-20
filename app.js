require('dotenv').config()
const express = require('express')
const app = express();
const bcrypt = require('bcrypt')

//Models
const Product = require('./models/product')
const Category = require('./models/category')
const User = require('./models/users')

//Session
const session = require('express-session')
const sessionConfig = {
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
const LocalStrategy = require('passport-local').Strategy
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

//Enviornment Variables
const PORT = process.env.PORT || 8080
const MONGOURL = process.env.MONGOURL


//Mongoose
const mongoose = require('mongoose');
mongoose.connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected',()=>{console.log("Database Connection Successfull")})
mongoose.connection.on('error',(error)=>{console.log("There was an error while connecting to the database",error)})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/signup', async(req, res) => {
    const { username, password } = req.body
    if(!username || !password){
        return res.status(422).json({error:"please add all the fields"})
    }
    User.findOne({name:username})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"user already exists"})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const user = new User({
                username,
                password:hashedpassword
            })
            user.save()
            .then(user=>{
                res.json({message:"saved successfully"})
            })
            .catch(error=>{
                console.log(error)
            })
        })
    })
    .catch(error=>{
        console.log(error)
    })
})

app.post('/signin', (req, res) => {
    const { username,password } = req.body
    if( !username || !password ){
        return res.status(422).json({error:"Please enter Name and Password"})
    }
    User.findOne({name:username})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid Name or Password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(Matched=>{
            if(Matched){
                // res.json({message:"successfully signed in"})
                const token =jwt.sign({_id:savedUser._id},process.env.JWT_KEY)
                res.json({token})
            }
            else{
                return res.status(422).json({error:"Invalid Name or Password"})
            }
        })
        .catch(error=>{
            console.log(error)
        })
    })
});

app.post('/products',async(req,res)=>{
    console.log(req.body)
    const { price,category,companyName,specification,modelName,stock } = req.body
    if (!( price && companyName && category && specification && modelName && stock)){
        return res.json({error:"Some Fields Are missing"})
    }
    try {
        const nameCheck = await Product.find({name:name})
        if (nameCheck.length === 0) {
            const result =  await Product.insertMany({name,price,companyName,category,specification,modelName,stock})
            return res.json(result)
        }
        return res.json({error:"Product Name Already Exists"})
    }catch(error){
        res.json({error:error})
    }
})

app.get('/products',async(req,res)=>{
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