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
                articleCount
                followerCount
                followingCount
            }
            following {
                username
                _id
                articleCount
                followerCount
                followingCount
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
            createdAt
            author
            authorId
        }
    }
`

export const FEED_POSTS = gql`
    query feedPosts($followingIds: [ID]!){
        feedPosts(followingIds: $followingIds) {
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

export const SEARCH_USER = gql`
    query searchUser($username: String!) {
        searchUser(username: $username) {
            _id
            username
            followerCount
            followingCount
            articleCount
        }
    }
`

export const SEARCH_ARTICLE_TITLE = gql`
    query searchArticleTitle($title: String!) {
        searchArticleTitle(title: $title) {
            _id
            title
            preamble
            createdAt
            author
            authorId
        }
    }
`

export const SEARCH_ARTICLE_TAG = gql`
    query searchArticleTag($tag: String!) {
        searchArticleTag(tag: $tag) {
            _id
            title
            preamble
            createdAt
            author
            authorId
        }
    }
`