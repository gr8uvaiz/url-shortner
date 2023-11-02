const jwt = require('jsonwebtoken')

const dotenv = require('dotenv');
dotenv.config({path: `./local.env`});

const secret = process.env.SECRET
module.exports.setUser = function(user){
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
    },secret)
}
module.exports.getUser = function(token){
    if(!token) return null;
    try {
        return jwt.verify(token,secret)
    } catch (error) {
        return null;
    }
}