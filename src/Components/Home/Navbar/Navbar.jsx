import React, { useRef, useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import image from '../../../images/twitters.png';
import { Link } from 'react-router-dom';
import { FcRating } from 'react-icons/fc';
import { IoMenu } from 'react-icons/io5';
import { RiContactsFill } from 'react-icons/ri';
import { RxCross1 } from 'react-icons/rx';
import Login from '../../Forms/Login/Login.jsx';
import SignUp from '../../Forms/SignUp/SignUp.jsx';
import GiftForm from '../../Forms/GiftCardForm/GiftForm.jsx';

function Navbar() {
  const leftMenuRef = useRef(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isRedeemOpen, setIsRedeemOpen] = useState(false);
  const loginRef = useRef(null);
  const signUpRef = useRef(null);
  const redeemRef = useRef(null);

  function handleMenu() {
    if (leftMenuRef.current) {
      leftMenuRef.current.style.transform = 'translateX(0%)';
    }
  }

  function handleClose() {
    if (leftMenuRef.current) {
      leftMenuRef.current.style.transform = 'translateX(-100%)';
    }
  }

  function openLogin() {
    setIsLoginOpen(true);
    setIsSignUpOpen(false);
    setIsRedeemOpen(false);
    handleClose(); // Close the left nav bar
  }

  function closeLogin() {
    setIsLoginOpen(false);
  }

  function openSignUp() {
    setIsSignUpOpen(true);
    setIsLoginOpen(false);
    setIsRedeemOpen(false);
    handleClose(); // Close the left nav bar
  }

  function closeSignUp() {
    setIsSignUpOpen(false);
  }

  function openRedeem() {
    setIsRedeemOpen(true);
    setIsLoginOpen(false);
    setIsSignUpOpen(false);
    handleClose(); // Close the left nav bar
  }

  function closeRedeem() {
    setIsRedeemOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        closeLogin();
      }
      if (signUpRef.current && !signUpRef.current.contains(event.target)) {
        closeSignUp();
      }
      if (redeemRef.current && !redeemRef.current.contains(event.target)) {
        closeRedeem();
      }
    }

    if (isLoginOpen || isSignUpOpen || isRedeemOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLoginOpen, isSignUpOpen, isRedeemOpen]);

  return (
    <div className={styles.navbar}>
      {isLoginOpen && <Login onClose={closeLogin} openSignUp={openSignUp} ref={loginRef} />}
      {isSignUpOpen && <SignUp onClose={closeSignUp} openLogin={openLogin} ref={signUpRef} />}
      {isRedeemOpen && <GiftForm onClose={closeRedeem} ref={redeemRef} />}

      {/* Left Menu */}
      <div className={styles.leftMenu} ref={leftMenuRef}>
        <RxCross1 onClick={handleClose} className={styles.cros} />

        <div className={styles.leftnavItems2}>
          <button onClick={openLogin} className={styles.btn1}>LOG IN</button>
          <button onClick={openSignUp} className={styles.btn2}>SIGN UP</button>
        </div>
        <hr />
        <div className={styles.leftNavLinks}>
          <Link to={"/"} className={styles.leftLinks}>Buy OSRS Gold</Link>
          <Link to={"/BuyRS3Gold"} className={styles.leftLinks}>Buy RS3 Gold</Link>
          <Link to={"/SellGold"} className={styles.leftLinks}>Sell Gold</Link>
        </div>
        <div className={styles.leftNavLinks2}>
          <Link to={"/FAQ"} className={styles.leftLinks}>FAQ</Link>
          <Link to={"/Support"} className={styles.leftLinks}>Support</Link>
          <Link  className={styles.leftLinks}>Blog</Link>
          <Link className={styles.leftLinks} onClick={openRedeem}>Redeem Gift Card</Link>
        </div>
        <div className={styles.leftnavrating}>
          <p>4.7 out of 5 based on 806 user rating</p>
          <div>
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
          </div>
        </div>
      </div>
      <div className={styles.topnav}>
        <div className={styles.topnav1}>
          <Link to={"/FAQ"} className={styles.links}>FAQ</Link>
          <Link to={"/Support"} className={styles.links}>Support</Link>
          <Link className={styles.links}>Blog</Link>
          <Link className={styles.links} onClick={openRedeem}>Redeem Gift Card</Link>
        </div>
        <div className={styles.topnav2}>
          <p>4.7 out of 5 based on 806 user ratings</p>
          <FcRating />
          <FcRating />
          <FcRating />
          <FcRating />
          <FcRating />
        </div>
      </div>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <IoMenu onClick={handleMenu} className={styles.menubar} />
          <img src={image} alt="" />
          <RiContactsFill className={styles.contact} />
        </div>
        <div className={styles.navItems}>
          <div className={styles.navItems1}>
            <Link to={"/"} className={styles.navLinks}>Buy OSRS Gold</Link>
            <Link to={"/BuyRS3Gold"} className={styles.navLinks}>Buy RS3 Gold</Link>
            <Link to={"/SellGold"} className={styles.navLinks}>Sell Gold</Link>
          </div>
          <div className={styles.navItems2}>
            <button onClick={openLogin} className={styles.btn1}>LOG IN</button>
            <button onClick={openSignUp} className={styles.btn2}>SIGN UP</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
