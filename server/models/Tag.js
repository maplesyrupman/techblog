const { Schema, model } = require('mongoose')

const tagSchema = new Schema(
    {
        tagName: {
            type: String,
            required: 'Must provide a name for the tag',
            minlength: 1,
            maxlength: 75
        },

        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Post'
            }
        ]
    }
)

const Tag = model('Tag', tagSchema)

module.exports = Tag