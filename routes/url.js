const express = require('express')
const router = express.Router();
const UrlController = require('../controllers/url-controller')

router.post('/create',UrlController.handleUrl)

module.exports = router