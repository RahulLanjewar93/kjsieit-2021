const Agent = require('../models/agent')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports.addAgent = (req,res)=>{
    const { name, email, password } = req.body
    if(!name || !email || !password){
        return res.status(422).json({error:"please add all the fields"})
    }
    Agent.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"user already exists"})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const agent = new Agent({
                name,
                email,
                password:hashedpassword
            })
            agent.save()
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
}

module.exports.signin = (req,res)=>{
    const { name,password } = req.body
    if( !name || !password ){
        return res.status(422).json({error:"Please enter Name and Password"})
    }
    User.findOne({name:name})
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
}