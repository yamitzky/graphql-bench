const { gql } = require('apollo-server')

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

module.exports = {
  typeDefs,
  resolvers,
}
