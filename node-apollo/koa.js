const config = require('./config')
const Koa = require('koa')
const { ApolloServer } = require('apollo-server-koa')

const server = new ApolloServer(config)

const app = new Koa()
server.applyMiddleware({ app })

const port = 4001
app.listen(port, 'localhost', () => console.log(`🚀 Server ready at http://localhost:${port}/`))
