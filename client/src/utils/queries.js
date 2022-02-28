import { gql } from "@apollo/client"

export const QUERY_USER = gql`
    query user($userId: ID!) {
        user(userId: $userId) {
            _id
            username
            bio
            followers {
                username
                _id
            }
            following {
                username
                _id
            }
            posts {
                _id
                title
                preamble
                author
                createdAt
            }
        }
    }
`

export const QUERY_USERS = gql`
    query users($username: String!) {
        users(username: $username) {
            username
            followerCount
            followingCount
            articleCount
        }
    }
`

export const QUERY_SINGLE_POST = gql`
    query post($postId: ID!) {
        post (postId: $postId){
            _id
            title
            preamble
            text
            tags
            createdAt
            author
            authorId
            comments {
                _id
                commentBody
                username
                createdAt
            }
            likeCount
            dislikeCount
        }
    }
`


export const QUERY_POSTS = gql`
    query posts {
        posts {
            _id
            title
            preamble
            text
            createdAt
            author
            authorId
            comments {
                commentBody
            }
            likeCount
            dislikeCount
        }
    }
`