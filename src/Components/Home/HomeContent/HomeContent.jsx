import React, { useState } from 'react';
import style from './HomeContent.module.css';
import svg1 from '../../../images/svg1.svg';
import svg2 from '../../../images/svg2.svg';
import { CiShoppingCart } from "react-icons/ci";
import { SiTicktick } from "react-icons/si";
import bankCard from '../../../images/bankcard.svg';
import gci from '../../../images/gci.svg';
import psc from '../../../images/psc.svg';
import wlt from '../../../images/wlt.svg';
import klarna from '../../../images/klarna.svg';
import ubt from '../../../images/ubt.svg';
import ugp from '../../../images/ngp.svg';
import discover from '../../../images/discoverjcb.svg';
import ntl from '../../../images/ntl.svg';
import pwy from '../../../images/pwy.svg';
import buy from '../../../images/buy.svg';
import BuyNowForm from '../../Forms/Buy Now Form/BuyNowForm.jsx';
import Logo from '../../../images/twitters.png';
import { AiFillSafetyCertificate } from "react-icons/ai";





function HomeContent() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [showForm, setShowForm] = useState(false); // State for the pop-up form
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');

  const handleCardClick = (card) => {
    if (card === 'ubt') {
      setShowMore(!showMore);
    } else {
      setSelectedCard(card);
    }
  };

  const isSelected = (card) => selectedCard === card ? style.selectedCard : '';

  const handleBuyNowClick = () => {
    const paymentDetails = {
      amount,
      price,
      selectedCard,
    };
    localStorage.setItem('paymentDetails', JSON.stringify(paymentDetails));
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  const handleAmountChange = (e) => {
    const amountValue = e.target.value;
    setAmount(amountValue);
    setPrice((amountValue * 0.19).toFixed(2));
  };

  const handlePriceChange = (e) => {
    const priceValue = e.target.value;
    setPrice(priceValue);
    setAmount((priceValue / 0.19).toFixed(2));
  };

  const handleBuyNow = () => {
    const paymentDetails = {
      amount,
      price,
      selectedCard,
    };
    localStorage.setItem('paymentDetails', JSON.stringify(paymentDetails));
    alert('Payment details stored in localStorage');
  };

  return (
    <>
      <div className={showForm ? style.blurredBackground : ''}>
        <div className={style.container}>
        <div className={style.mainContent}>
          <div className={style.content1}>
            <h1 className={style.heading1}>Buy & Sell</h1>
            <h1 className={style.heading2}>Runescape Gold</h1>
            <div className={style.mainContentBtn}>
              <div>
                <p>OSRS Gold</p>
                <div className={style.mainContentBtn1}>
                  $0.19
                  <span>M</span>
                </div>
              </div>
              <div>
                <p>OSRS Gold</p>
                <div className={style.mainContentBtn1}>
                  $0.018
                  <span>M</span>
                </div>
              </div>
            </div>
          </div>
          <div className={style.content2}>
            <div className={style.content2Btns}>
              <div className={style.content2Btns1}>
                <img src={svg1} alt="" />
              </div>
              <div className={style.content2Btns2}>
                <img src={svg2} alt="" />
              </div>
            </div>

            <div className={style.payments}>
              <div className={style.totalPrice}>
                <div className={style.cards}>
                  <CiShoppingCart className={style.ShoppingCart} />
                  <h6>Buy OSRS Gold</h6>
                </div>
                <div className={style.TotalPrice}>
                  <h6>Total:</h6>
                  <p>${price}</p>
                </div>
              </div>

              {/* Amount Input Filed--------- */}
              <div className={style.amountInputs}>
                <div className={style.amount}>
                  <p>Amount</p>
                  <div className={style.amountSpan}>
                    <input
                      type="text"
                      value={amount}
                      onChange={handleAmountChange}
                      placeholder='0'
                    />
                    <span>M</span>
                  </div>
                </div>
                <div className={style.price}>
                  <p>Price</p>
                  <div className={style.amountSpan}>
                    <input
                      type="text"
                      value={price}
                      onChange={handlePriceChange}
                      placeholder='$ 0'
                    />
                    <span>M</span>
                  </div>
                </div>
              </div>

              {/* Runeescape Field--- */}
              <div className={style.runescape}>
                <input type="text" placeholder='Runescape Name' />
                <input type="text" placeholder='Coupon (optional)' />
              </div>

              {/* Visa Card--------------- */}
              <div className={style.visaCards}>
                <h6>Payment Selection</h6>
                <div className={style.Card}>
                  <div className={style.Cards}>
                    <div className={`${style.visa1} ${isSelected('bankCard')}`} onClick={() => handleCardClick('bankCard')}>
                      {selectedCard === 'bankCard' && <SiTicktick className={style.tickMark} />}
                      <img src={bankCard} alt="Bank Card" />
                    </div>
                    <div className={`${style.visa1} ${isSelected('gci')}`} onClick={() => handleCardClick('gci')}>
                      {selectedCard === 'gci' && <SiTicktick className={style.tickMark} />}
                      <img src={gci} alt="GCI" />
                    </div>
                    <div className={`${style.visa1} ${isSelected('psc')}`} onClick={() => handleCardClick('psc')}>
                      {selectedCard === 'psc' && <SiTicktick className={style.tickMark} />}
                      <img src={psc} alt="PSC" />
                    </div>
                  </div>
                  <div className={style.Cards}>
                    <div className={`${style.visa1} ${isSelected('wlt')}`} onClick={() => handleCardClick('wlt')}>
                      {selectedCard === 'wlt' && <SiTicktick className={style.tickMark} />}
                      <img src={wlt} alt="WLT" />
                    </div>
                    <div className={`${style.visa1} ${isSelected('klarna')}`} onClick={() => handleCardClick('klarna')}>
                      {selectedCard === 'klarna' && <SiTicktick className={style.tickMark} />}
                      <img src={klarna} alt="Klarna" />
                    </div>
                    <div className={`${style.visa1} ${isSelected('ubt')}`} onClick={() => handleCardClick('ubt')}>
                      {showMore && <SiTicktick className={style.tickMark} />}
                      <h4>More</h4>
                    </div>
                  </div>
                  {showMore && (
                    <>
                      <div className={style.CardsSkip + (showMore ? ' ' + style.show : '')}>
                        <div className={`${style.visa1} ${isSelected('ugp')}`} onClick={() => handleCardClick('ugp')}>
                          {selectedCard === 'ugp' && <SiTicktick className={style.tickMark} />}
                          <img src={ugp} alt="UGP" />
                        </div>
                        <div className={`${style.visa1} ${isSelected('discover')}`} onClick={() => handleCardClick('discover')}>
                          {selectedCard === 'discover' && <SiTicktick className={style.tickMark} />}
                          <img src={discover} alt="Discover" />
                        </div>
                        <div className={`${style.visa1} ${isSelected('ntl')}`} onClick={() => handleCardClick('ntl')}>
                          {selectedCard === 'ntl' && <SiTicktick className={style.tickMark} />}
                          <img src={ntl} alt="NTL" />
                        </div>
                      </div>
                      <div className={style.CardsSkips + (showMore ? ' ' + style.show : '')}>
                        <div className={`${style.visa1} ${isSelected('pwy')}`} onClick={() => handleCardClick('pwy')}>
                          {selectedCard === 'pwy' && <SiTicktick className={style.tickMark} />}
                          <img src={ubt} alt="PWY" />
                        </div>
                        <div className={`${style.visa1} ${isSelected('pwy')}`} onClick={() => handleCardClick('pwy')}>
                          {selectedCard === 'pwy' && <SiTicktick className={style.tickMark} />}
                          <img src={pwy} alt="PWY" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* BUTTON---------- */}
              <div className={style.buyButton}>
                <button onClick={handleBuyNowClick}>
                <AiFillSafetyCertificate className={style.safe} />

                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={style.whyPie}>
          <h5>Why RunescapeGP?</h5>
          <h2>100% Secure</h2>
          <h2>No Verification</h2>
          <h2>No Registration Needed</h2>
        </div>
      </div>
      {showForm && <BuyNowForm onClose={handleCloseForm} />}
      </div>
    </>
  );
}

export default HomeContent;
