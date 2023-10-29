const Url = require('../models/url')
module.exports.home = async function(req,res){
    res.render('home')
}
module.exports.activity = async function(req,res){
    const url = await Url.find({});
    res.render('activity',{
        allUrl: url,
    })
}
module.exports.destroy = async function(req,res){
    const id = req.params.id;
    const doc = await Url.findByIdAndDelete(id);
    if(!doc) res.json(400,{msg: 'Document not found'})
    res.redirect('/activity');
}