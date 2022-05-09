import { ContractModel } from "../Models/ContractModel.js";
import crypto from 'crypto';

export const getContracts = async (req, res) => {
  // const contract = new ContractModel({
  //   contractId: 'CT001',
  //   employee: 'U001',
  //   employer: 'U021',
  //   startDate: new Date("2022-05-06"),
  //   endDate: new Date("2022-06-06"),
  //   price: 5000000,
  //   workingTime: 'parttime'
  // })

  // contract.save();

  try {
    const contracts = await ContractModel.find()
    console.log('contracts', contracts);
    res.status(200).json(contracts);
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

export const createContract = async (req, res) => {
  try {
    const newContract = req.body;
    const idContract = crypto.randomBytes(3*4).toString("base64");
    const contract = new ContractModel({...newContract, contractId: idContract});
    await contract.save();
    console.log(contract);

    res.status(200).json(contract)
  } catch (err) {
    console.log('err', err);
  }
}

export const updateContract = async (req, res) => {
  try {
    const updateContract = req.body;

    const contract = await ContractModel.findOneAndUpdate({ id: updateContract.contractId}, updateContract, { new: true });


    res.status(200).json(contract)
  } catch (err) {
    console.log('err', err);
  }
}