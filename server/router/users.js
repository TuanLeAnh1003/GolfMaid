import express from 'express'
import { getUsers, createUser, updateUser } from '../controller/users.js'
const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser)

router.post('/', updateUser)

export default router;