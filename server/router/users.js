import express from 'express';
import { getUsers, createUser, updateUser } from '../Controller/users.js';
import a from '../Controller/AccountController.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.put('/', updateUser);

router.post('/register', a.register);

export default router;