const mongoose = require('mongoose');

const URLSchema = mongoose.Schema({
    shortId:{
        type: String,
        required: true,
        unique: true,
    },
    redirectedURL:{
        type: String,
        required: true,
    },
    visits:{
        type: Number
    }
},{timestamps: true});

const URL = mongoose.model('URL',URLSchema);
module.exports = URL;