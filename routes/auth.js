const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_KEY} = require('../keys')

router.post('/signup',(req,res)=>{
    const { name, email, password} = req.body
    if(!email||!name||!password){
        return res.json({error:"please add all fields"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.json({error:"User already exists"})
        }
        bcrypt.hash(password,12)
        .then(hashedPassword=>{
            const user = new User({
                email,
                password:hashedPassword,
                name
            })
            user.save()
            .then(user=>{
                res.json({message:"Agent Added"})
            })
            .catch(error=>{
                console.log(error)
            })
        })
    })
})

router.post('/signin',(req,res)=>{
    const { name, password} = req.body
    if(!name || !password){
        return res.json({error:"please add all fields"})
    }
    User.findOne({name:name})
    .then(savedUser=>{
        if(!savedUser){
            return res.json({error:"Invalid Credentials"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                res.json({message:"signed in"})
                const token = jwt.sign({_id:savedUser._id},JWT_KEY)
                res.json({token})
            }
            else{
                return res.json({error:"Invalid Credentials"})
            }
        })
        .catch(error=>{
            console.log(error)
        })
    })
})

module.exports = router