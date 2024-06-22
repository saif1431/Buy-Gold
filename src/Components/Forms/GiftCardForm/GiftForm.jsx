import React, { forwardRef } from 'react';
import styles from './GiftForm.module.css';
import { RxCross1 } from 'react-icons/rx';
import Logo from '../../../images/twitters.png';

const GiftForm = forwardRef(({ onClose }, ref) => {
  return (
    <div className={styles.redeemGiftCard} ref={ref}>
      <div className={styles.redeemGiftCardContent}>
        <RxCross1 onClick={onClose} className={styles.cross} />
       <div className={styles.logo}>
            <img src={Logo} alt="" />
       </div>
       <div className={styles.fields}>
<p>Redeem a gift card code to create a new order for your gold.</p>
      <input type="text" placeholder='Gift card code*' />
      <input type="text" placeholder='Runescape Name*' />
      <button>Reedem</button>
      <img src={Logo} alt="" />
       </div>
      </div>
    </div>
  );
});

export default GiftForm;
