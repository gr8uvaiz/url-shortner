module.exports.result = async function(req,res){
    const shortId = req.query.shortid;
    res.render('result', {
        id: shortId
    });
}