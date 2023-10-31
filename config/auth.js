const AuthMap = require('../service/auth');

module.exports.checkAuthentication = async function(req,res,next){
    const userUid = req.cookies?.uid;
    if(!userUid) return res.redirect('/users/login');
    const user = AuthMap.getUser(userUid);
    if(!user) return res.redirect('/users/login');
    req.user = user;
    next();
}
module.exports.checkAuthenticationTemp = async function(req,res,next){
    const userUid = req.cookies?.uid;
    //if(!userUid) return res.redirect('/users/login');
    const user = AuthMap.getUser(userUid);
    //if(!user) return res.redirect('/users/login');
    req.user = user;
    next();
}