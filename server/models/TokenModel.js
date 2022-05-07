import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const URI = process.env.DATABASE_URL;

mongoose.connect(`${URI}`);


const schema = new mongoose.Schema({
  token: {
    type: "string",
    required: true,
  }
}, {collection: "tokens"})

export const TokenModel = mongoose.model('Token', schema)