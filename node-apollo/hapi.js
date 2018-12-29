const config = require('./config')
const Hapi = require('hapi')
const { ApolloServer } = require('apollo-server-hapi')

async function StartServer() {
  const server = new ApolloServer(config)

  const port = 4002
  const app = new Hapi.server({ port })

  await server.applyMiddleware({ app })

  await server.installSubscriptionHandlers(app.listener)

  await app.start()
  console.log(`🚀 Server ready at http://localhost:${port}/`)
}

StartServer().catch(error => console.log(error));
