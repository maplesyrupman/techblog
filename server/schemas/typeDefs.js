const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type Auth {
        token: ID!
        user: User
    }

    type User {
        _id: ID
        username: String
        email: String
        posts: [Post]
        followers: [User]
        following: [User]
    }

    type Post {
        title: String
        preamble: String
        text: String
        createdAt: String
        author: String
        comments: [comment]
        likes: [ID]
    }

    type comment {
        commentBody: String
        user: ID
        createdAt: String

    }

    type Query {
        users: [User]
        user(username: String!): User
        me: User
        post(_id: ID!): Post
    }

    type Mutation {
        signup(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addPost(author: ID!, title: String!, preamble: String!, text: String!): Post
        likePost(userId: ID!, postId: ID!): Post
        addComment(userId: ID!, postId: ID!, commentBody: String!): Post
        follow(followedId: ID!, followerId: ID!): User
    }
`

module.exports = typeDefs 