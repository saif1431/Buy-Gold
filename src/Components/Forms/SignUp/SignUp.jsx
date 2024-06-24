import React, { useState, forwardRef } from 'react';
import axios from 'axios';
import style from './SignUp.module.css';
import Logo from '../../../images/twitters.png';
import mainImg from '../../../images/mainImg1.png';
import { Link } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import TermsServices from '../../Terms&Services/TermsServices';
import RefundPolicy from '../../Refund Policy/RefundPolicy.jsx';



const SignUp = forwardRef(({ onClose, openLogin }, ref) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!acceptTerms) {
      setError('You must accept the terms and conditions');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/signup', { email, password });
      if (response.status === 201) {
        alert('Registration successful');
        openLogin();
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed');
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
          {/* <h1>Registration</h1> */}
          <form onSubmit={handleRegister} className={style.inputBox}>
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
            <input
              type="password"
              placeholder="Confirm Password*"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <div className={style.terms}>
              <input
                className={style.check}
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
              />
              <h5>
                I have read and accept the{' '}
                <Link className={style.termLink} to="/TermsServices">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link className={style.termLink} to="/RefundPolicy">
                  Refund Policy
                </Link>
              </h5>
            </div>
            <button type="submit">Register</button>
          </form>
          <div className={style.JumpReg}>
            <p>Already have an account?</p>
            <Link
              to="#"
              className={style.Jump}
              onClick={(e) => {
                e.preventDefault();
                openLogin();
              }}
            >
              Jump to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SignUp;
