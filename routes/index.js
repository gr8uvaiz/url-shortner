const express = require('express')
const router = express.Router();
const homeController = require('../controllers/home-controller')

router.use('/',require('./home'))
router.use('/url',require('./url'))
router.get('/result',homeController.result)

module.exports = router