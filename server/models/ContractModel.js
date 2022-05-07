import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  contractId: {
    type: 'string',
    required: true
  },
  employee: {
    type: 'string',
    required: true
  },
  employer: { type: 'string', required: true },
  startDate: { type: 'date', required: true },
  endDate: { type: 'date', required: true },
  price: { type: 'number', required: true },
  workingTime: { type: 'string', required: true },
}, { timestamps: true })

export const ContractModel = mongoose.model('Contract', schema)