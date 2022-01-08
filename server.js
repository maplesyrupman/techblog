const express = require('express')
const path = require('path')
const apiRoutes = require('./controllers')
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
app.listen(PORT, () => {
    console.log(`Server now listening on PORT : ${PORT}`)
})