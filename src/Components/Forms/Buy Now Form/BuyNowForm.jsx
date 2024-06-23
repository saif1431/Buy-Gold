import React from 'react';
import style from './BuyNowForm.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import svg2 from '../../../images/svg2.svg';
import VisaCard from '../../../images/bankcard.svg';
import Logo from '../../../images/twitters.png';
import { Link } from 'react-router-dom';
import StripeForm from '../StripeForm/StripeForm.jsx';

function BuyNowForm({ onClose }) {
  return (
    <div className={style.popupOverlay} onClick={onClose}>
      <div className={style.popupContent} onClick={(e) => e.stopPropagation()}>
            <div className={style.popupHeader}>
                  <h5>Cart Summary</h5>
        <AiOutlineClose className={style.closeIcon} onClick={onClose} />
            </div>
            <hr />
            <div className={style.Box}>
                  <div className={style.Box1}>
<img src={svg2} alt="" />
<p>323M OSRS Gold</p>
<p>$000</p>
                  </div>
                  <div className={style.Box1}>
<img className={style.Visa} src={VisaCard} alt="" />
<p>Fee</p>
<p>$000</p>
                  </div>
                  <div className={style.Box1}>
<img className={style.Logo} src={Logo} alt="" />
<p>Total</p>
<p>$000</p>
                  </div>
            </div>

<div className={style.inputFields}>
      <input type="text" placeholder='RS Name'/>
      <input type="email" placeholder='Email'/>
</div>

<div className={style.check}>
      <input type="checkbox" />
      <p>I have read and accept the Terms of Service and Refund Policy.</p>
</div>
<div className={style.check}>
      <input type="checkbox" />
      <p>All information provided is valid.</p>
</div>
<div className={style.paymentbtn}>
<Link to="/StripeForm">
<button className={style.proceed}>Proceed to Payment Page</button>
</Link>
      <button onClick={(e) => e.stopPropagation()} className={style.cancel}>Cancel order</button>
</div>
      </div>
    </div>
  );
}

export default BuyNowForm;
