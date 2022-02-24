import { gql } from "@apollo/client"

export const ME = gql`
    query me {
        me {
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
            }
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