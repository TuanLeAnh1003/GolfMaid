import bcrypt from 'bcrypt';
import {UserModel} from '../Models/UserModel.js';
import jwt from 'jsonwebtoken';


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
  var phone = req.body.phone;
  var password = req.body.password;
  console.log(req, phone, password);
  
  UserModel.find({
    username: phone,
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
          phone: phone,
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