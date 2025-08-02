const express = require('express')
const {registerController, loginController} = require('../controllers/auth.controller')

const router = express.Router()

/* 
POST /login 
POST /register 
Get /user [protected] 
*/

router.post('/register', registerController)

router.post('/login', loginController)


module.exports = router