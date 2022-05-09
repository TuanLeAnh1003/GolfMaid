import bcrypt from 'bcrypt';
import {UserModel} from '../Models/UserModel.js';
import {TokenModel} from '../Models/TokenModel.js';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const login = (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  
  UserModel.findOne({
    email: email,
  })
  .then(data => {
    console.log(data);
    if(data) {
      bcrypt.compare(password, data.password).then((result) => {
        if(result) {
          var token = jwt.sign({id: data}, "SECRET");
          // console.log("data", token);
          TokenModel.create({
            token: token,
          })
          res.send({
            message: true,
            token: token,
          });
        } else {
          return res.send("Sai mật khẩu!");
        }
      });
    } else {
      return res.send("Chưa có người dùng");
    }

  })
  .catch(err => {
    // console.log("err", err);
    res.send(err);
  })
}

const register = (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  const id = crypto.randomBytes(3*4).toString("base64");

  // console.log(req, email, password);
  
  UserModel.find({
    email: email,
  })
  .then(data => {
    if(data.length !== 0) {
      console.log(data);
      return res.send("Đã có tài khoản!");
    } else {
      console.log(data)
      var salt = 10;
      bcrypt.hash(password, salt, (err, hash) => {
        UserModel.create({
          userId: id,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: email,
          phoneNumber: req.body.phone,
          gender: req.body.gender,
          password: hash
        })
      })
    }
  })
  .catch(err => {
    console.log("err", err);
    return res.send(err);
  })
}

const getMe = async (req, res) => {
  console.log(req.params.userId);
  let abc = await UserModel.find({
    userId: req.params.userId
  })
  .then((data) => res.send(data[0]))
  .catch(err => res.send(err))
}

export default {
  login,
  register,
  getMe,
} 