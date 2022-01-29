const { User, Post } = require('../models')
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        users: async (parent, args) => {
            return await User.find({})
        },

        post: async (parent, args) => {
            return await Post.findById(args.postId)
        },

        posts: async (parent, args) => {
            return await Post.find({}).populate('comments').populate('likes')
        }
    },

    Mutation: {
        signup: async (parent, args) => {
            const user = await User.create(args)
            const token = signToken(user)
            console.log('made it this far')

            return { token, user }
        },

        login: async (parent, { email, password }) => {
            const user =
                await User.findOne({ email })
                    .populate('followers')
                    .populate('following')
                    .populate('posts')

            if (!user) {
                throw new AuthenticationError('Incorrect email or password')
            }

            const correctPw = await user.correctPassword(password)

            if (!correctPw) {
                throw new AuthenticationError('Incorrect email or password')
            }

            const token = signToken(user)
            return { token, user }
        },

        addPost: async (parent, args, context) => {
            if (!context.user) {
                throw new AuthenticationError('Must be logged in to submit a post.')
            }
            console.log(context.user)

            const post = await Post.create({ ...args, author: context.user.username, authorId: context.user._id})

            await User.findByIdAndUpdate(
                context.user._id,
                { $push: {posts: post._id }},
                { new: true }
            )
            return post
        },

        addComment: async (parent, { postId, commentBody }, context) => {
            if (!context.user) {
                throw new AuthenticationError('Must be logged in to comment.')
            }

            const updatedPost = await Post.findOneAndUpdate(
                { _id: postId },
                { $push: { comments: { commentBody, username: context.user.username } } },
                { new: true }
            )

            return updatedPost
        },

        likePost: async (parent, {postId}, context) => {
            if (!context.user) {
                throw new AuthenticationError('Must be logged in to like a post.')
            }

            const likedPost = await Post.findByIdAndUpdate(
                postId,
                { $addToSet: { likes: context.user._id }},
                { new: true }
            )

            return likedPost
        
        },

        follow: async (parent, {followedId}, context) => {
            if (!context.user) {
                throw new AuthenticationError('Must be logged in to follow somebody.')
            }

            const followedUser = await User.findByIdAndUpdate(
                followedId,
                { $addToSet: { followers: context.user._id }},
                { new: true }
            )

            const followingUser = await User.findByIdAndUpdate(
                context.user._id,
                { $addToSet: { following: followedId }},
                { new: true }
            )

            return { followedUser, followingUser }
        },


    }
}

module.exports = resolvers