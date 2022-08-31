const { gql } = require('apollo-server-koa')

const holidaysDefs = gql`
  type Holiday {
    id: Int!
    type: String
    from: DateTime
    to: DateTime
    state: String
    replacementName: String
    comments: String
  }

  extend type Query {
    holidays: [Holiday]!
  }
`

module.exports = holidaysDefs
