import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import users from './router/users.js'

const app = express();
const PORT = process.env.PORT || 5000;
const URI = 'mongodb+srv://leanhtuan:leanhtuan@cluster0.8svsf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());

app.use('/users', users)

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    });
  }).catch((err) => {
    console.log('err', err);
  });

