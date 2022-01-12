const User = require('./User')
const Post = require('./Post')
const Tag = require('./Tag')
const PostTag = require('./PostTag')

Post.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Post)

Post.belongsToMany(Tag, {
    through: PostTag,
    as: 'posts',
    foreignKey: 'post_id'
})

Tag.belongsToMany(Post, {
    through: PostTag,
    as: 'tags',
    foreignKey: 'tag_id'
})

PostTag.belongsTo(Post, {
    foreignKey: 'post_id'
})

PostTag.belongsTo(Tag, {
    foreignKey: 'tag_id'
})

Post.hasMany(PostTag, {
    foreignKey: 'post_id'
})

Tag.hasMany(PostTag, {
    foreignKey: 'tag_id'
})

module.exports = { User, Post, Tag, PostTag }