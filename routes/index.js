const express = require('express')
const router = express.Router();
const homeController = require('../controllers/home-controller');
const UrlController = require('../controllers/url-controller')
const Auth = require('../config/auth')

router.use('/',require('./home'))
router.use('/url',require('./url'))
router.use('/users',require('./user'))

router.get('/result',homeController.result)
router.get('/admin/urls',Auth.restrictTo('ADMIN'),homeController.activityAdmin);
router.get('/:id',UrlController.handleRedirect)

module.exports = router