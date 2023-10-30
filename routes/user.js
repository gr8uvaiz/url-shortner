const express = require('express')
const router = express.Router();
const userController = require('../controllers/user-controller')

router.get('/signup',userController.userSignUp)
router.get('/login',userController.userLogin)

router.post('/create',userController.create);
router.post('/authenticate',userController.login)
module.exports = router;