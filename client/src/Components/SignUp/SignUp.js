import React, { useState } from 'react';
import './SignUp.css';
import Logo from '../../Assets/Images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import UserApi from '../../Apis/UserApi';
import SweetAlert from 'sweetalert2-react';
import Swal from "sweetalert2";

function SignUp({handleShowSignUp2, handleShowSignIn2}) {
  const handleExitSignUp = () => {   
    handleShowSignUp2(false);
  }

  const handleShowSignInBySignUp = () => {
    handleShowSignIn2(true);
  }

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleConfirmPassword = (confirmPass) => {
    if(confirmPass !== password) {
      setConfirmPassword("");
      // alert("Mật khẩu xác nhận không đúng!");
      Swal.fire(
        'Mật khẩu xác nhận sai!',
        '',
        'warning'
      )
    }
  }

  const handleRegister = () => {
    if(lastName === "" || firstName === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
      alert("Trường bắt buộc còn rỗng!");
    } else {
      console.log(lastName, firstName, email, phone, password)
      UserApi.register({
        lastName: lastName,
        firstName: firstName,
        email: email,
        phone: phone,
        password: password,
      })
    }
  }

  return (
    <div className="signUpWrap" onClick={handleExitSignUp}>
      <div className="signUp" onClick={e => e.stopPropagation()}>

        <div className="signUpWrapper">

          <div></div>

          <div className="signUp_form">
            <FontAwesomeIcon icon={solid('circle-xmark')} onClick={handleExitSignUp}/><br />
            <img src={Logo} alt="Logo" />
            <h1>ĐĂNG KÍ THÀNH VIÊN</h1>
            <div className="signUp_form-name">
              <input type="text" placeholder="Họ (*)" name="lastName" onChange={e => setLastName(e.target.value)}/>
              <input type="text" placeholder="Tên (*)" name="firstName" onChange={e => setFirstName(e.target.value)}/>
            </div>
            
            {/*<input type="date" name="dob" />*/}
            <input type="email" placeholder="Email (*)" name="email" onChange={e => setEmail(e.target.value)}/>
            <input type="text" placeholder="Số điện thoại (*)" name="phone" onChange={e => setPhone(e.target.value)}/>
            <select name="Gender" onChange={e => e.target.value}>
              <option value="Nam" selected>Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
            <input type="password" placeholder="Mật khẩu (*)" name="userPassword" onChange={e => setPassword(e.target.value)}/>
            <input type="password" placeholder="Nhập lại mật khẩu (*)" name="confirmPassword" 
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              onBlur={e => handleConfirmPassword(e.target.value)}
            />
            
            <div className="signUp_check">
              <input type="checkbox" name="remember" />
              <label htmlFor="remember">Khách hành đồng ý với các <a href="#">điều khoản</a> thành viên của GoftMaid</label>
            </div>
            <button onClick={handleRegister}>Đăng ký</button>
            <div className="signUp_toSignUp">
              <span>Đã có tài khoản?</span>
              <button onClick={handleShowSignInBySignUp}>Đăng nhập</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default SignUp
