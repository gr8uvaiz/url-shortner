const express = require('express')
const router = express.Router();
const homeController = require('../controllers/home-controller')
const Auth = require('../config/auth')
router.get('/',Auth.checkAuthenticationTemp,homeController.home)
router.get('/activity',Auth.checkAuthentication,homeController.activity)
router.get('/activity/destroy/:id',homeController.destroy)

module.exports = router;