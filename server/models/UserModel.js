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
  birthday: { type: 'date', required: true },
  phoneNumber: { type: 'string', required: true },
  email: { type: 'string', required: true },
  address: {
    type: 'object',
    required: true
  },
  role: {
    type: 'bool', required: true 
  },
  gender: { type: 'string', required: true}
}, { timestamps: true })

export const UserModel = mongoose.model('User', schema)