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
        mutation submitPost($title: String!, $preamble: String!, $text: String!){
            submitPost(title: $title, preamble: $preamble, text: $text) {
                title
                preamble
                text
            }
        }
`