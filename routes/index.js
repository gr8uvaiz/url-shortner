const express = require('express')
const router = express.Router();

router.use('/',require('./home'))
router.use('/url',require('./url'))
router.use('/result',require('./result'))

module.exports = router