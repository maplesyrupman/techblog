const express = require('express')
const path = require('path')
const apiRoutes = require('./controllers')
const sequelize = require('./config/connection')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'build')))

app.use(apiRoutes)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/build/index.html'))
})

const PORT = process.env.PORT

sequelize.sync({force: true }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`))
})