const { User, Post, Tag } = require('../models')
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        users: async (parent, args) => {
            return await User.find({})
        },

        user: async (parent, args, context) => {
            return await User.findById(args.userId).populate('posts').populate('followers').populate('following')
        },

        post: async (parent, args) => {
            return await Post.findById(args.postId)
        },

        posts: async (parent, args) => {
            return await Post.find({}).sort({createdAt : -1}).populate('comments').populate('likes')
        },

        feedPosts: async (parent, {followingIds}) => {
            return Post.find({authorId: {$in: followingIds}}).sort({createdAt: -1})
        },

        searchUser: async (parent, {username}) => {
            return await User.find({username: { $regex: `${username}`}}) 
        },

        searchArticleTitle: async (parent, {title}) => {
            return await Post.find({title: { $regex: `${title}`, $options: 'i'}})
        },

        //complete later
        searchArticleTag: async (parent, {tag}) => {
            const articles = await Tag.find({tagName: { $regex: `^${tag}$`}}).populate('posts')
            return articles[0].posts
        }
    },

    Mutation: {
        signup: async (parent, args) => {
            const user = await User.create(args)
            const token = signToken(user)

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

        updateBio: async (parent, { bio }, context) => {
            if (!context.user) {
                throw new AuthenticationError('Must be logged in to complete this action.')
            }


            return await User.findByIdAndUpdate(context.user._id, { $set: { bio } })
        },

        submitPost: async (parent, args, context) => {
            if (!context.user) {
                throw new AuthenticationError('Must be logged in to submit a post.')
            }

            const post = await Post.create({ ...args, author: context.user.username, authorId: context.user._id })

            await User.findByIdAndUpdate(
                context.user._id,
                { $push: { posts: post._id } },
                { new: true }
            )

            args.tags.forEach(async tag => {
                const currentTag = await Tag.findOneAndUpdate({ tagName: tag }, { $addToSet: { posts: post._id } })
                console.log(currentTag)

                if (!currentTag) {
                    console.log(`Creating tag for ${tag}`)
                    Tag.create({ tagName: tag, posts: [post._id] })
                }
            })

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

        likeDislike: async (parent, { postId, isLike }, context) => {
            if (!context.user) {
                throw new AuthenticationError('Must be logged in to like a post.')
            }
            let post

            if (isLike) {
                post = await Post.findByIdAndUpdate(
                    postId,
                    {
                        $addToSet: { likes: context.user._id },
                        $pull: { dislikes: context.user._id }
                    },
                    { new: true }
                )
            } else {
                post = await Post.findByIdAndUpdate(
                    postId,
                    {
                        $addToSet: { dislikes: context.user._id },
                        $pull: { likes: context.user._id }
                    },
                    { new: true }
                )
            }

            return post
        },

        follow: async (parent, { followedId, action }, context) => {
            if (!context.user) {
                throw new AuthenticationError('Must be logged in to preform this action.')
            }

            if (action === 'follow') {
                const followedUser = await User.findByIdAndUpdate(
                    followedId,
                    { $addToSet: { followers: context.user._id } },
                    { new: true }
                )
    
                const followingUser = await User.findByIdAndUpdate(
                    context.user._id,
                    { $addToSet: { following: followedId } },
                    { new: true }
                )
    
                return followedUser
            } else {
                const followedUser = await User.findByIdAndUpdate(
                    followedId,
                    { $pull: { followers: context.user._id } },
                    { new: true }
                )
    
                const followingUser = await User.findByIdAndUpdate(
                    context.user._id,
                    { $pull: { following: followedId } },
                    { new: true }
                )
    
                return followedUser
            }
        },
    }
}

module.exports = resolvers