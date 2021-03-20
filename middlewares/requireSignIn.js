const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = mongoose.model("User")

module.exports.requireSignin = (req,res,next)=>{
     const {authorization} = req.headers
     if(!authorization){
         return res.status(401).json({error:"You must be signed in"})
     }
     const token = authorization.replace("Bearer ","")
     jwt.verify(token,process.env.JWT_KEY,(error,payload)=>{
         if(error){
             return res.status(401).json({error: "You must be signed in"})
         }
         const{ _id } = payload
         User.findById(_id).then(userdata=>{
             req.user = userdata
             next()
         })
     })
}