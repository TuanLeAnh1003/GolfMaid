import express from 'express';
import { getContracts, createContract, updateContract, getContractByIdAndPhone } from '../controller/contracts.js';

const router = express.Router();

router.get('/', getContracts);

router.get('/getContractByIdAndPhone/:data', getContractByIdAndPhone);

router.post('/', createContract);

router.put('/', updateContract);

export default router;