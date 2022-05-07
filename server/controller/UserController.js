import bcrypt from 'bcrypt';
import {UserModel} from '../Models/UserModel.js';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

// const login = (req, res) => {
//   var username = req.body.phone;
//   var password = req.body.password;
  
//   AccountModel.findOne({
//     username: username,
//   })
//   .then(data => {
//     console.log(data);
//     if(data) {
//       bcrypt.compare(password, data.password).then((result) => {
//         if(result) {
//           var token = jwt.sign({id: data._id}, "SECRET", {expiresIn: "2 minutes"});
//           var refreshToken = jwt.sign({id: data._id}, "REFRESH_SECRET");
//           // console.log("data", token);
//           TokenModel.create({
//             token: token,
//             refreshToken: refreshToken
//           })
//           res.send({
//             message: "Gửi token",
//             token: token,
//             refreshToken: refreshToken,
//           });
//         } else {
//           res.send("Sai mật khẩu!");
//         }
//       });
//     } else {
//       res.send("Chưa có người dùng");
//     }

//   })
//   .catch(err => {
//     // console.log("err", err);
//     res.send(err);
//   })
// }

const register = (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  const id = crypto.randomBytes(3*4).toString("base64");

  console.log(req, email, password);
  
  UserModel.find({
    email: email,
    password: password
  })
  .then(data => {
    if(data.length !== 0) {
      console.log(data);
      res.send(data)
    } else {
      console.log(data)
      var salt = 10;
      bcrypt.hash(password, salt, (err, hash) => {
        UserModel.create({
          userId: id,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: email,
          phone: req.body.phone,
          gender: req.body.gender,
          password: hash
        })
        .then(data => console.log(data))
        .catch(err => console.log(err))
      })
      .then(data => console.log("hash", hash))
    }

  })
  .catch(err => {
    console.log("err", err);
    res.send(err);
  })
}

// const getMe = (req, res) => {
//   console.log("get me");
//   res.send("get me");
// }

export default {
  // login,
  register,
  // getMe,
} 