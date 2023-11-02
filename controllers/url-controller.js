const Url = require('../models/url')
function generateCustomShortID() {
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let customShortID = '';
  
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      customShortID += characters.charAt(randomIndex);
    }
  
    return customShortID;
  }
  
  module.exports.handleUrl = async function (req, res) {
    const customShortId = generateCustomShortID();
  
    if (req.user == null) return res.redirect('/users/login');
  
    await Url.create({
      shortId: customShortId,
      redirectedURL: req.body.url,
      visits: 0,
      createdBy: req.user._id,
    });
  
    res.redirect(`/result?shortid=${customShortId}`);
  };

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