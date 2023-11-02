const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: `./local.env`});
const db = process.env.DATABASE;

mongoose.connect(db).then(()=>{console.log("Database Succesfully Connected")})
.catch(err=>{console.log("Error in Connecting Database",err)})

module.exports = db;