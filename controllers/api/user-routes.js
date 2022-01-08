const router = require('express').Router()
const { User } = require('../../models')
require('dotenv').config()
const jwt = require('jsonwebtoken')

router.post('/', (req, res) => {
    console.log(req.body)
    res.status(200).json({...req.body, message: 'its alive!'})
})

module.exports = router