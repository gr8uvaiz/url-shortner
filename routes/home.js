const express = require('express')
const router = express.Router();
const homeController = require('../controllers/home-controller')
const Auth = require('../config/auth')
router.get('/',homeController.home)
router.get('/activity',Auth.checkAuthenticationTemp,homeController.activity)
router.get('/activity/destroy/:id',homeController.destroy)

module.exports = router;