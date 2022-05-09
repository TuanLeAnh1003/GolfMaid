import axiosInstance from "./axiosInstance";

// const login = async (data) => {
//   return await axiosInstance.post("/login", data);
// };
const createContract = async (data) => {
  return await axiosInstance.post("/contract", data);
}

export default {
  createContract,
}