import React, {forwardRef} from 'react'
import  style from './Login.module.css'
import Logo from '../../../images/twitters.png'
import mainImg from '../../../images/mainImg.png'
import { Link } from 'react-router-dom'
import { RxCross1 } from "react-icons/rx";



const Login = forwardRef(({ onClose, openSignUp  }, ref) => {
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
            <RxCross1 onClick={onClose}  className={style.cross} />
                  <h1>Login</h1>
                  <div className={style.inputBox}>
                        <input type="text" placeholder='Email Address*' />
                        <input type="text" placeholder='Password*' />
                        <button>Login</button>
                  <p>Forgot Password?</p>
                  </div>
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
  )
})

export default Login
