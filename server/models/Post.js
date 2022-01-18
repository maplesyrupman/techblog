const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');

const postSchema = new Schema(
  {
    postTitle: {
        type: String,
        required: 'Post must include a title',
        minlength: 1,
        maxlength: 280
    },
    postPreamble: {
        type: String,
        maxlength: 512
    },
    postText: {
      type: String,
      required: 'Post body cannot be blank',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
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