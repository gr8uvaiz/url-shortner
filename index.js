const express = require('express')
const app = express()
const db = require('./config/mognoose')
const port = 3000
const cookieParser = require('cookie-parser')
const {checkAuthentication} = require('./config/auth')
const expressLayouts = require('express-ejs-layouts')
const favicon = require('serve-favicon');
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser());

app.use(express.static('assets'));
app.set('view engine','ejs');
app.set('views','./views');
app.use(expressLayouts);
app.use(favicon(__dirname + '/assets/img/logo.png'));
// extract styles and scripts from other pages and put into the layout page
app.set('layout extractStyles',true)
app.set('layout extractScripts',true)

app.use(checkAuthentication);

app.use('/',require('./routes/index'))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})