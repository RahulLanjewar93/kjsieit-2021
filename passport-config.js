const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
initialize = (passport,getUserbyUsername,getUserbyId)=>{
    const authenticateUser = async(username,password,done)=>{
        const user = await getUserbyUsername(username)
        if(user === null) {
            return done(null,false, {message : 'No user with that email'})
        }
        try{
            if(await bcrypt.compare(password,user.password)) {
                return done(null,user)
            }else{
                return done(null,false,{message:'Password incorrect'})
            }
        }catch(e){
            done(e)
        }
    }
    passport.use(new LocalStrategy({usernameField:'username'},authenticateUser))
    passport.serializeUser((user,done)=> {done(null,user.id)})
    passport.deserializeUser((id,done)=> {
       return done(null,getUserbyId(id))
    })
}

module.exports = initialize