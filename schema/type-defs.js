const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
    phone: Int!
    website: String
  }
  type Query {
    users: [user!]!
  }
`;

module.exports = { typeDefs };
