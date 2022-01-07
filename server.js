const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

// app.use(apiRoutes)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'))
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server now listening on PORT : ${PORT}`)
})