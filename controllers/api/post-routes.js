const router = require('express').Router()
const { Post } = require('../../models')
require('dotenv').config()
const jwt = require('jsonwebtoken')

function authenticateToken(res, req, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(token == null) return res.status(401).json({error: 'invalid token'})

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if(err) {
            console.log(err)
            return res.status(403).json({error: 'invalid token'})
        }
        req.user = user
        next()
    })
}

router.get('/:userId', authenticateToken, (req, res) => {
    if(req.user) {
        res.status(json)
    }
})