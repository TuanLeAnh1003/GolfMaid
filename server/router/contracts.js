import express from 'express';
import { getContracts, createContract, updateContract } from '../controller/contracts.js';

const router = express.Router();

router.get('/', getContracts);

router.post('/', createContract);

router.put('/', updateContract);

export default router;