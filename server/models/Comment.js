const { Schema } = require('mongoose')
const { format } = require('date-fns')

const commentSchema = new Schema(
    {
        commentBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: date => format(new Date(date), "d/LLL/y")
        }
    },
    {
        toJSON: {

        }
    }
);

module.exports = commentSchema;