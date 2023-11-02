const AuthMap = require('../service/auth');

module.exports.checkAuthentication = async function(req,res,next){
    const tokenCookie = req.cookies?.uid;
    req.user = null;
    if(!tokenCookie) return next();

    const user = AuthMap.getUser(tokenCookie);
    if(!user) return next();
    req.user = user;
    return next();
}
module.exports.restrictTo = function(role){
    return function(req,res,next){
        if(req.user.role == role) return next();
        else return res.end("UnAuthorized")
    }
}