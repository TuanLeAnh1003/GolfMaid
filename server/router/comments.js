import express from 'express';
import { getComments, createComment, updateComment, getCommentsByPostId } from '../controller/comments.js';

const router = express.Router();

router.get('/', getComments);

router.get('/getCommentsByPostId/:postId', getCommentsByPostId);

router.post('/', createComment);

router.put('/', updateComment);

export default router;