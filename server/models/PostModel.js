import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  postId: {
    type: 'string',
    required: true
  },
  author: {
    type: 'string',
    required: true
  },
  detail: { type: 'object' },
  price: { type: 'number', required: true },
  content: { type: 'string' },
  type: { type: 'string', required: true },
  image: { type: 'string', required: true }
}, { timestamps: true })

export const PostModel = mongoose.model('Post', schema)