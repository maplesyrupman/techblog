const { Schema } = require('mongoose')

const commentSchema = new Schema(
    {
        commentBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    },
    {
        toJSON: {

        }
    }
);

module.exports = commentSchema;