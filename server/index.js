import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import users from './router/users.js';
import contracts from './router/contracts.js';
import posts from './router/posts.js';
import comments from './router/comments.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const URI = process.env.DATABASE_URL

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());

app.use('/users', users);
app.use('/contracts', contracts);
app.use('/posts', posts);
app.use('/comments', comments);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});


