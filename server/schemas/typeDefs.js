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
        bio: String
        posts: [Post]
        followers: [User]
        following: [User]
        articleCount: Int
        followerCount: Int
        followingCount: Int
    }

    type Post {
        _id: ID
        title: String
        preamble: String
        text: [String]
        tags: [String]
        createdAt: String
        author: String
        authorId: ID
        comments: [comment]
        likeCount: Int
        dislikeCount: Int
    }

    type comment {
        _id: ID
        commentBody: String
        username: String
        createdAt: String
    }

    type Query {
        users: [User]
        user(userId: ID!): User
        post(postId: ID!): Post
        posts: [Post]
    }

    type Mutation {
        signup(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth

        updateBio(bio: String!): User

        submitPost(title: String!, preamble: String!, text: [String]!, tags: [String]): Post 
        likePost(postId: ID!): Post
        addComment(postId: ID!, commentBody: String!): Post
        likeDislike(postId: ID!, isLike: Boolean!): Post
        follow(followedId: ID!, followerId: ID!): User
    }
`


module.exports = typeDefs 