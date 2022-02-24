const express = require('express')
const path = require('path')
require('dotenv').config()
const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require('./schemas')
const db = require('./config/connection')
const {authMiddleware} = require('./utils/auth')
const PORT = process.env.PORT

const app = express()

const startServer = async () => {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: authMiddleware
    })
  
    await server.start()
  
    server.applyMiddleware({ app })
  
    console.log(`User GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
  }
  
  startServer()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, '/../client/build')))
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname+'/../client/build/index.html'))
// })

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}`)
    })
})