import React, { useEffect, useState } from 'react';
import './SignIn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import Logo from '../../Assets/Images/logo.png';
import Facebook from '../../Assets/Images/SignIn_fb.png';
import Google from '../../Assets/Images/SignIn_gg+.png';
import UserApi from '../../Apis/UserApi';
import { useStore, action } from '../../Store/StoreContext';


function SignIn({handleShowSignIn1, handleShowSignUp1}) {

  const [state, dispatch] = useStore();

  const [show, setShow] = useState(false);

  const handleExitSignIn = () => {   
    handleShowSignIn1(false);
  }

  const handleShowSignUpBySignIn = () => {
    handleShowSignUp1(true);
  }

  const handleEye = () => {
    setShow(!show);
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = () => {
    if(email === "" || password === "") {
      alert("Trường bắt buộc còn rỗng!");
    } else {
      UserApi.login({
        email: email,
        password: password,
      })
      .then(res => {
        if(res.message) {
          dispatch(action.login(res.token));
        }
      })
      .catch(err => console.log(err))
    }
  }

  return (
    <div className="signInWrap" onClick={handleExitSignIn}>
      <div className="signIn" onClick={e => e.stopPropagation()}>
      <div className="signInWrapper">


        <div></div>

        <div className="signIn_form">
          <FontAwesomeIcon icon={solid('circle-xmark')} onClick={handleExitSignIn}/><br />
          <img src={Logo} alt="Logo" />
          <h1>KHÁCH HÀNG ĐĂNG NHẬP</h1>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
          <div className="signIn_password">
            <input type={show ? "text" : "password"} placeholder="Mật khẩu" value={password} onChange={e => setPassword(e.target.value)}/>
            {!show &&  <div onClick={handleEye}><FontAwesomeIcon icon={solid('eye')} /></div>}
            {show && <div onClick={handleEye}><FontAwesomeIcon icon={solid('eye-slash')} /></div>}
          </div>
          <div className="signIn_check">
            <input type="checkbox" name="remember" />
            <label htmlFor="remember">Ghi nhớ</label>
          </div>
          <button onClick={handleLogIn}>Đăng nhập</button>
          <a href="#">Quên mật khẩu?</a>
          <div className="signIn_method">
            <span className="line"></span>
            <span>Bạn có thể đăng nhập bằng</span>
            <span className="line"></span>
          </div>
          <div className="signIn_media">
            <img src={Facebook} alt="facebook" />
            <img src={Google} alt="google" />
          </div>
          <div className="signIn_toSignUp">
            <span>Chưa có tài khoản?</span>
            <button onClick={handleShowSignUpBySignIn}>Đăng ký</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
