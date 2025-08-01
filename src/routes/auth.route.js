const express = require('express')
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const { mongo, default: mongoose } = require('mongoose')

const router = express.Router()

/* 
POST /login 
POST /register 
Get /user [protected] 
*/

router.post('/register',async (req, res)=>{
    const {username, password} = req.body

    const existingUser = new userModel.findOne({ username})

    if(existingUser){
        return res.status(409).json({
            message:"Username are already exist"
        })
    }

    const user = await userModel.create({
        username, password
    })

    const token = jwt.sign({
        id: user._id
    },process.env.JWT_SECRET)

    res.cookie('token', token)

    res.status(201).json({
        message: 'user created successfully'
    })
})


module.exports = router