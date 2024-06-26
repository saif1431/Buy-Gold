import React, { useState, forwardRef } from 'react';
import axios from 'axios';
import style from './Login.module.css';
import Logo from '../../../images/twitters.png';
import mainImg from '../../../images/mainImg1.png';
import { Link } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";

const Login = forwardRef(({ onClose, openSignUp, setIsAuth }, ref) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotError, setForgotError] = useState('');
  const [forgotMessage, setForgotMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      if (response.status === 200) {
        // Storing token and user data in local storage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('isAuthorized', true);
        // Setting isAuth to true
       
        onClose();
      }
    } catch (error) {
      alert(error.response?.data?.error || 'Login failed');
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/forget-password', { email: forgotEmail });
      if (response.status === 200) {
        setForgotMessage('New password sent to your email');
        setForgotError('');
      }
    } catch (error) {
      setForgotError(error.response?.data?.error || 'Request failed');
      setForgotMessage('');
    }
  };

  return (
    <div>
      <div className={style.Login} ref={ref}>
        <div className={style.LoginSide1}>
          <div className={style.logo}>
            <img src={Logo} alt="" />
          </div>
          <div className={style.mainImg}>
            <img src={mainImg} alt="" />
          </div>
          <div className={style.pTag}>
            <p>100% Secure</p>
            <p>No Verification</p>
            <p>No Registration Needed</p>
          </div>
        </div>
        <div className={style.LoginSide2}>
          <RxCross1 onClick={onClose} className={style.cross} />
          <h1>Login</h1>
          {forgotPassword ? (
            <form onSubmit={handleForgotPassword} className={style.inputBox}>
              {forgotError && <p className={style.error}>{forgotError}</p>}
              {forgotMessage && <p className={style.success}>{forgotMessage}</p>}
              <input
                type="text"
                placeholder="Email Address*"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                required
              />
              <button type="submit">Submit</button>
              <button type="button" onClick={() => setForgotPassword(false)}>Back to Login</button>
            </form>
          ) : (
            <form onSubmit={handleLogin} className={style.inputBox}>
              {error && <p className={style.error}>{error}</p>}
              <input
                type="text"
                placeholder="Email Address*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password*"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Login</button>
              <p onClick={() => setForgotPassword(true)}>Forgot Password?</p>
            </form>
          )}
          <div className={style.JumpReg}>
            <p>New on RunescapeGP?</p>
            <Link 
              to={"#"} 
              className={style.Jump} 
              onClick={(e) => {
                e.preventDefault();
                openSignUp();
              }}
            >
              Jump to Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Login;
