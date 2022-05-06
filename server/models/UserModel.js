import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  userId: {
    type: 'string',
    required: true
  },
  password: {
    type: 'string',
    required: true
  },
  firstName: { type: 'string', required: true },
  lastName: { type: 'string', required: true },
  birthday: { type: 'date' },
  phoneNumber: { type: 'string' },
  email: { type: 'string', required: true },
  address: {
    type: 'object',
  },
  role: {
    type: 'bool'
  },
  gender: { type: 'string'}
}, { timestamps: true })

export const UserModel = mongoose.model('User', schema)