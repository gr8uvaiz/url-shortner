const shortId = require('shortid');
const Url = require('../models/url')
module.exports.handleUrl = async function(req,res){
    const shortid = shortId.generate();
    if(req.user == null) return res.redirect('/users/login');
    await Url.create({
        shortId: shortid,
        redirectedURL: req.body.url,
        visits: 0,
        createdBy: req.user._id,
    })
    res.redirect(`/result?shortid=${shortid}`);
    
}

module.exports.handleRedirect = async function(req,res){
    const shortId = req.params.id;
    const entry = await Url.findOne({shortId});
    if(!entry){
     res.status(400).json({error: "Error in Founding Entry"})
      return;
    }
    entry.visits += 1;
    await entry.save();

    res.redirect(entry.redirectedURL);
}