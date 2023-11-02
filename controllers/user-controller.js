const User = require('../models/user');
const { v4 : uuidv4 } = require('uuid');
const AuthMap = require('../service/auth');
module.exports.userSignUp = function(req,res){
    let LoggedIn = false;
    if(req.user) LoggedIn = true;
    if(LoggedIn) res.redirect('/');
    return res.render('signup',{
        title: 'SignUp | Short URL',
        LoggedIn: LoggedIn
    });
}
module.exports.userLogin = function(req,res){
    let LoggedIn = false;
    if(req.user) LoggedIn = true;
    if(LoggedIn) res.redirect('/');
    return res.render('login',{
        title: 'Login | Short URL',
        LoggedIn: LoggedIn
    });
}
module.exports.destroy = function(req,res){
    res.clearCookie('uid');
    res.redirect('/');
}
module.exports.create = async function(req,res){
    const user = await User.findOne({ email: req.body.email });
    if(!user){
       await User.create(req.body)
    }
    else{
        res.status(400).json({message: "User Already Exist"});
        return;
    }
    res.redirect('/users/login');
}
module.exports.login = async function(req,res){
    const user = await User.findOne({email: req.body.email});
    if(!user){
        res.redirect('/users/login'); 
        return;
    }
    else{
        if(req.body.password != user.password){
            res.redirect('/users/login');
            return;
        }
        const token = AuthMap.setUser(user);
        res.cookie("uid",token);
    }
    res.redirect('/')
}