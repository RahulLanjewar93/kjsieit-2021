const express = require('express')
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 8080
require('dotenv').config()

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

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})