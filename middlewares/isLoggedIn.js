module.exports.isLoggedIn = (req,res,next)=>{
    if(req.user) return next()
    return res.json({isLoggedIn:false})
}

