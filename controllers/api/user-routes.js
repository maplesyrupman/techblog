const router = require('express').Router()
const { User } = require('../../models')
require('dotenv').config()
const jwt = require('jsonwebtoken')

function generateAccessToken(username) {
    return jwt.sign({ username }, process.env.TOKEN_SECRET, { expiresIn: '30m' })
}

router.post('/', (req, res) => {
    User.create(req.body)
        .then(newUser => {
            console.log(newUser)
            const token = generateAccessToken(newUser.username)
            res.status(200).json({
                username: newUser.username,
                token
            })
        })
        .catch(err => {
            res.status(500).json(err)
            console.log(err)
        })
})

router.post('/login', (rew, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(userData => {
            if (!userData.checkPassword(req.body.password)) {
                res.status(400).json({ message: 'incorrect password' })
                return
            }

            const token = generateAccessToken(userData.username)
            res.status(200).json({
                username: userData.username,
                token
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

module.exports = router