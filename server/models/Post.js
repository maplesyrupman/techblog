const { Schema, model, Types } = require('mongoose');
const commentSchema = require('./Comment');
const {format} = require('date-fns')

const postSchema = new Schema(
  {
    title: {
        type: String,
        required: 'Post must include a title',
        minlength: 1,
        maxlength: 280
    },
    preamble: {
        type: String,
        maxlength: 1028
    },
    text: {
      type: String,
      required: 'Post body cannot be blank',
      minlength: 1,
      maxlength: 1000000
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: date => format(new Date(date), "MMMM do, yyyy")
    },
    author: {
      type: String,
      required: true
    },
    authorId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    comments: [commentSchema],
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

postSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

postSchema.virtual('likeCount').get(function() {
    return this.likes.length
})

const Post = model('Post', postSchema);

module.exports = Post;