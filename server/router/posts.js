import express from 'express';
import { getPosts, createPost, updatePost, getPostsAndAuthor, getListHouseHelper, getListFindHouseHelper } from '../controller/posts.js';

const router = express.Router();

router.get('/', getPosts);

router.get('/getPostsAndAuthor', getPostsAndAuthor)

router.get('/getListHouseHelper', getListHouseHelper)

router.get('/getListFindHouseHelper', getListFindHouseHelper)

router.post('/', createPost);

router.put('/', updatePost);

export default router;