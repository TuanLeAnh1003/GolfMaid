import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  commentId: {
    type: 'string',
    required: true
  },
  author: {
    type: 'string',
    required: true
  },
  postId: { type: 'string', required: true },
  content: { type: 'string', required: true }
}, { timestamps: true })

export const CommentModel = mongoose.model('Comment', schema)