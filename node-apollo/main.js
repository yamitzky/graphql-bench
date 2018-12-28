const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
type Book {
  id: ID!
  author: String!
}
type Query {
  books(id: ID!): [Book!]!
}
`

const resolvers = {
  Query: {
    books: (_, { id }) => [{ id, author: 'yamitzky' }]
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})


server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
