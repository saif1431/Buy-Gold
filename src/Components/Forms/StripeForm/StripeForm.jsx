import React from 'react'
import styles from './StripeForm.module.css'
import Logo from '../../../images/twitters.png'
import visa from '../../../images/visa.svg'
import gci from '../../../images/gci.svg'
import ubt from '../../../images/ubt.svg'
import wlt from '../../../images/wlt.svg'
import skrill from '../../../images/skrill.svg'

function StripeForm() {
  return (
    <div>
      <div className={styles.StripeForm}>
            <div className={styles.StripeFormBox}>
<div className={styles.StripeFormBox1}>
<img src={Logo} alt="" />
<div className={styles.text}>
      <h3>piegp.com</h3>
      <p><span>Order Number:</span>00HU676</p>
      <p><span>Total:</span>3743USD</p>
</div>
</div>
<hr />

<form action="">
      <div className={styles.input1}>
            <label htmlFor="">Card Number*</label>
            <input type="text" />
      </div>
      <div className={styles.input2}>
            <label htmlFor="">Cardholder name*</label>
            <input type="text" />
      </div>
      <div className={styles.input3}>
            <label htmlFor="">Expires*</label>
            <select name="" id="">
                  <option value="">Month</option>
                  <option value="">01</option>
                  <option value="">02</option>
                  <option value="">03</option>
                  <option value="">04</option>
                  <option value="">05</option>
                  <option value="">06</option>
                  <option value="">07</option>
                  <option value="">08</option>
                  <option value="">09</option>
                  <option value="">10</option>
                  <option value="">11</option>
                  <option value="">12</option>
            </select>
            <select name="" id="">
                  <option value="">Year</option>
                  <option value="">2024</option>
                  <option value="">2025</option>
                  <option value="">2026</option>
                  <option value="">2027</option>
                  <option value="">2028</option>
                  <option value="">2029</option>
                  <option value="">2030</option>
                  <option value="">2031</option>
                  <option value="">2032</option>
                  <option value="">2033</option>
                  <option value="">2034</option>
                  <option value="">2035</option>
                  <option value="">2036</option>
                  <option value="">2037</option>
                  <option value="">2038</option>
                  <option value="">2039</option>
                  <option value="">2040</option>
                  <option value="">2041</option>
                  <option value="">2042</option>
            </select>
      </div>
      <div className={styles.captcha}>
            <label htmlFor="">CVV2/CVC2/CAV2*</label>
            <input  type="text" />
      </div>
      <div className={styles.buttons}>
            <button>Pay</button>
            <button>Cancel</button>
      </div>
</form>
<hr />
<div className={styles.cards}>
      <h1>Unlimit</h1>
<div className={styles.card}>
      <img src={visa} alt="" />
      <img src={gci} alt="" />
      <img src={visa} alt="" />
      <img src={visa} alt="" />
       <img src={skrill} alt="" />
</div>
</div>
<div className={styles.footer}>
      <h4>Contact US</h4>
      <p> © 2009-2024 Unlimit</p>
</div>
            </div>
      </div>
    </div>
  )
}

export default StripeForm
