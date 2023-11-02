const Url = require('../models/url')
module.exports.home = async function(req,res){
    let LoggedIn = false;
    if(req.user) LoggedIn = true;
    res.render('home',{
        title: 'Home | Short URL',
        LoggedIn: LoggedIn
    })
}

module.exports.activity = async function(req,res){
    let LoggedIn = false;
    if(req.user) LoggedIn = true;
    if(!req.user) return res.redirect('/users/login')
    const url = await Url.find({createdBy: req.user._id});
    res.render('activity',{
        allUrl: url,
        title: 'Activities | Short URL',
        LoggedIn: LoggedIn
    })
}
module.exports.activityAdmin = async function(req,res){
    let LoggedIn = false;
    if(req.user) LoggedIn = true;
    if(!req.user) return res.redirect('/users/login')
    const url = await Url.find({});
    res.render('activity',{
        allUrl: url,
        title: 'Admin Activities | Short URL',
        LoggedIn: LoggedIn
    })
}
module.exports.destroy = async function(req,res){
    const id = req.params.id;
    const doc = await Url.findByIdAndDelete(id);
    if(!doc) return res.redirect('/');
    res.redirect('/activity');
}
module.exports.result = async function(req,res){
    let LoggedIn = false;
    if(req.user) LoggedIn = true;
    const shortId = req.query.shortid;
    res.render('result', {
        id: shortId,
        title: 'Result | Short URL',
        LoggedIn: LoggedIn
    });
}