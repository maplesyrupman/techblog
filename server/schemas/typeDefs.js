const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type Auth {
        token: ID!
        user: User
    }

    type User {
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
        addUser(username: String!, email: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        addPost(author: ID!, title: String!, preamble: String!, text: String!)
        likePost(userId: ID!, postId: ID!)
        addComment(userId: ID!, postId: ID!, commentBody: String!)
        follow(followedId: ID!, followerId: ID!)
    }
`

module.exports = typeDefs 