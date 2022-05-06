import express from 'express';
import { getComments, createComment, updateComment } from '../controller/comments.js';

const router = express.Router();

router.get('/', getComments);

router.post('/', createComment);

router.put('/', updateComment);

export default router;