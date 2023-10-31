const express = require('express')
const router = express.Router();
const homeController = require('../controllers/home-controller');

const Auth = require('../config/auth')

router.use('/',require('./home'))
router.use('/url',Auth.checkAuthentication,require('./url'))
router.get('/result',homeController.result)
router.use('/users',Auth.checkAuthenticationTemp,require('./user'))

module.exports = router