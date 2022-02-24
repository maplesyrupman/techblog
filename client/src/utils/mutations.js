import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`

export const SIGNUP_USER = gql`
    mutation signup($email: String!, $username: String!, $password: String!) {
        signup(email: $email, password: $password, username: $username) {
            token 
            user {
                _id
                username
            }
        }
    }
`

export const SUBMIT_POST = gql`
    mutation submitPost($title: String!, $preamble: String!, $text: [String]!, $tags: [String]){
        submitPost(title: $title, preamble: $preamble, text: $text, tags: $tags) {
            title
            preamble
            text
        }
    }
`

export const ADD_COMMENT = gql`
    mutation addComment($postId: ID!, $commentBody: String!) {
        addComment(postId: $postId, commentBody: $commentBody) {
        _id
        title
        preamble
        text
        author
        authorId
        
        comments {
            commentBody
            username
        }
        } 
    }
`

export const LIKE_DISLIKE = gql`
    mutation addLike($postId: ID!, $isLike: Boolean!) {
        likeDislike(postId: $postId, isLike: $isLike) {
        _id
        likeCount
        dislikeCount
        }
    }
`