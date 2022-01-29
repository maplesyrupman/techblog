import { gql } from "@apollo/client"

export const ME = gql`
    query me {
        me {
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
            createdAt
            author
            authorId
            comments {
                commentBody
                username
                createdAt
            }
            likes {
                username
            }
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
            likes {
                username
            }
        }
    }
`