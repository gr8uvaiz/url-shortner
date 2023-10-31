const express = require('express')
const app = express()
const db = require('./config/mognoose')
const port = 3001
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser());

app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes/index'))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})