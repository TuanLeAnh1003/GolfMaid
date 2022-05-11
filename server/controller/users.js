import { UserModel } from "../models/UserModel.js"

export const getUsers = async (req, res) => {
  // const user = new UserModel({
  //   password: 'admin',
  //   firstName: 'admin',
  //   lastName: 'admin',
  //   birthday: new Date("1967-12-22"),
  //   phoneNumber: '0987654321',
  //   email: 'admin@gmail.com',
  //   address: {
  //     general: 'phường Linh Trung, thành phố Thủ Đức',
  //     detail: 'KTX A - ĐHQG HCM, khu phố 6, phường Linh Trung, thành phố Thủ Đức'
  //   },
  //   role: 1,
  //   gender: 'male',
  //   image: "https://ipfs.infura.io/ipfs/QmZBZyho1Aw1gVGJCxFTgFaDiTb4PPNZsMa9iueZjNyd9C"
  // })

  // user.save();

  try {
    const users = await UserModel.find()
    console.log('users', users);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

export const createUser = async (req, res) => {
  try {
    const newUser = req.body;

    const user = new UserModel(newUser);
    await user.save();

    res.status(200).json(user)
  } catch (err) {
    console.log('err', err);
  }
}

export const updateUser = async (req, res) => {
  try {
    const updatedUser = req.body;

    const user = await UserModel.findOneAndUpdate({ userId: updatedUser.userId}, updatedUser, { new: true });

    res.status(200).json(user)
  } catch (err) {
    console.log('err', err);
  }
}