import React, { forwardRef } from 'react';
import style from './SignUp.module.css';
import Logo from '../../../images/twitters.png';
import mainImg from '../../../images/mainImg.png';
import { Link } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';

const SignUp = forwardRef(({ onClose, openLogin }, ref) => {
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
          <h1>Registration</h1>
          <div className={style.inputBox}>
            <input type="text" placeholder='Email Address*' />
            <input type="password" placeholder='Password*' />
            <input type="password" placeholder='Confirm Password*' />
            <div className={style.terms}>
              <input className={style.check} type="checkbox" />
              <h5>
                I have read and accept the <Link className={style.termLink}>Terms of Service</Link> and <Link className={style.termLink}>Refund Policy</Link>
              </h5>
            </div>
            <button>Register</button>
          </div>
          <div className={style.JumpReg}>
            <p>Already have an account?</p>
            <Link 
              to={"#"} 
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
