const express = require('express')
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const {registerController} = require('../controllers/auth.controller')
const {loginController} = require('../controllers/auth.controller')
const { mongo, default: mongoose } = require('mongoose')

const router = express.Router()

/* 
POST /login 
POST /register 
Get /user [protected] 
*/

router.post('/register', registerController)

router.post('/login', loginController)


module.exports = router