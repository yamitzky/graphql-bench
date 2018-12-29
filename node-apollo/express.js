const config = require('./config')
const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const server = new ApolloServer(config)

const app = express()
app.get('/health', (req, res) => res.send('ok'))
server.applyMiddleware({ app })

const port = 4000
app.listen({ port }, () => console.log(`🚀 Server ready at http://localhost:${port}/`))
