import { UserModel } from "../Models/UserModel.js"

export const getUsers = async (req, res) => {
  // const user = new UserModel({
  //   userId: 'U003',
  //   password: '123456',
  //   firstName: 'Công',
  //   lastName: 'Chúa',
  //   birthday: new Date("1967-12-22"),
  //   phoneNumber: '0987654321',
  //   email: 'congchuabongbong@gmail.com',
  //   address: {
  //     general: 'phường Linh Trung, thành phố Thủ Đức',
  //     detail: 'KTX A - ĐHQG HCM, khu phố 6, phường Linh Trung, thành phố Thủ Đức'
  //   },
  //   role: 0,
  //   gender: 'male'
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
    const updateUser = req.body;

    const user = await UserModel.findOneAndUpdate({ id: updateUser.userId}, updateUser, { new: true });


    res.status(200).json(user)
  } catch (err) {
    console.log('err', err);
  }
}