import express from 'express';
import { getUsers, createUser, updateUser } from '../Controller/users.js';
import user from '../Controller/UserController.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.put('/', updateUser);

router.post('/register', user.register);
router.post('/login', user.login);
router.get('/getMe/:userId', user.getMe);

export default router;