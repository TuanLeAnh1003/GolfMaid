import { UserModel } from "../models/UserModel.js"

export const getUsers = async (req, res) => {
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