const { gql } = require('apollo-server-koa')

const userDefs = gql`
  extend type Mutation {
    authenticateUser(userName: String!, password: String!): Boolean!
  }
  # Not working! Only for demonstration
  extend type Subscription {
    userChanged: String
  }
`

module.exports = userDefs
