const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type Auth {
        token: ID!
        user: User
    }

    type User {
        username: String
        email: String
        password: String
        posts: [Post]
        followers: [User]
        following: [User]
    }

    type Post {
        postTitle: String
        postPreamble: String
        postText: String
        createdAt: String
        username: String
        comments: [comment]
        likes: [ID]
    }

    type comment {
        commentBody: String
        user: ID
        createdAt: String

    }

    type Mutation {
        users: [User]
    }

    type Query {
        addUser(username: String!, email: String!, password: String!): Auth
    }

`

module.exports = typeDefs 