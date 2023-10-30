const Url = require('../models/url')
module.exports.home = async function(req,res){
    let LoggedIn = false;
    if(req.user) LoggedIn = true;
    res.render('home',{
        title: 'Home | Short Url',
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
        LoggedIn: LoggedIn
    })
}
module.exports.destroy = async function(req,res){
    const id = req.params.id;
    const doc = await Url.findByIdAndDelete(id);
    if(!doc) res.json(400,{msg: 'Document not found'})
    res.redirect('/activity');
}
module.exports.result = async function(req,res){
    let LoggedIn = false;
    if(req.user) LoggedIn = true;
    const shortId = req.query.shortid;
    res.render('result', {
        id: shortId,
        LoggedIn: LoggedIn
    });
}