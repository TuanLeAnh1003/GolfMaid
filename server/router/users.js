import express from 'express';
import { getUsers, createUser, updateUser } from '../controller/users.js';
import user from '../controller/UserController.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.put('/', updateUser);

router.post('/register', user.register);
router.post('/login', user.login);
router.get('/getMe/:userId', user.getMe);

export default router;