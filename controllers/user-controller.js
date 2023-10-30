const User = require('../models/user');
const { v4 : uuidv4 } = require('uuid');
const AuthMap = require('../service/auth');
module.exports.userSignUp = function(req,res){
    let LoggedIn = false;
    if(req.user) LoggedIn = true;
    return res.render('signup',{
        title: 'SignUp | Short Url',
        LoggedIn: LoggedIn
    });
}
module.exports.userLogin = function(req,res){
    let LoggedIn = false;
    if(req.user) LoggedIn = true;
    return res.render('login',{
        title: 'Login | Short Url',
        LoggedIn: LoggedIn
    });
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
        const sessionId = uuidv4();
        AuthMap.setUser(sessionId,user);
        res.cookie("uid",sessionId);
    }
    res.redirect('/')
}