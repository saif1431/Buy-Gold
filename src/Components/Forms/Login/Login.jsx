import React, { useState, forwardRef } from 'react';
import axios from 'axios';
import style from './Login.module.css';
import Logo from '../../../images/twitters.png';
import mainImg from '../../../images/mainImg.png';
import { Link } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";

const Login = forwardRef(({ onClose, openSignUp }, ref) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        alert('Login successful');
        onClose(); // Close the login modal on success
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
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
            <p>Forgot Password?</p>
          </form>
          <div className={style.JumpReg}>
            <p>New on PieGP?</p>
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
