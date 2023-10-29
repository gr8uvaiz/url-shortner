const shortId = require('shortid');
const Url = require('../models/url')
module.exports.handleUrl = async function(req,res){
    const shortid = shortId.generate();
    await Url.create({
        shortId: shortid,
        redirectedURL: req.body.url,
        visits: 0,
    })
    res.redirect(`/result?shortid=${shortid}`);
    
}

module.exports.handleRedirect = async function(req,res){
    const shortId = req.params.id;
    const entry = await Url.findOne({shortId});

    if(!entry) res.status(400).json({error: "Error in Founding Entry"})

    entry.visits += 1;
    await entry.save();

    res.redirect(entry.redirectedURL);
}