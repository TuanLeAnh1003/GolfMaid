import axiosInstance from "./axiosInstance";

const getContractByIdAndPhone = async (data) => {
  return await axiosInstance.get(`/contracts/getContractByIdAndPhone/contractId=${data.contractId}&phoneNumber=${data.phoneNumber}`);
}

export default {
  getContractByIdAndPhone,
}