import React from 'react'
import style from './HomeContent.module.css'
import svg1 from '../../../images/svg1.svg'
import svg2 from '../../../images/svg2.svg'
import { CiShoppingCart } from "react-icons/ci";
import bankCard from '../../../images/bankcard.svg'
import gci from '../../../images/gci.svg'
import psc from '../../../images/psc.svg'
import wlt from '../../../images/wlt.svg'
import klarna from '../../../images/klarna.svg'
import ubt from '../../../images/ubt.svg'
import ugp from '../../../images/ngp.svg'
import discover from '../../../images/discoverjcb.svg'
import ntl from '../../../images/ntl.svg'
import pwy from '../../../images/pwy.svg'
import buy from '../../../images/buy.svg'

function HomeContent() {
  return (
   <>
   <div>
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
      <h6>Total</h6>
      <p>$0.00</p>
</div>
            </div>

{/* Amount Input Filed--------- */}
            <div className={style.amountInputs}>
<div className={style.amount}>
      <p>Amount</p>
      <div className={style.amountSpan}>
      <input type="text" placeholder='0'
      />
      <span>M</span>
      </div>
</div>
<div className={style.price}>
      <p>Price</p>
      <div className={style.amountSpan}>
      <input type="text" placeholder='$ 0'
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
            <div className={style.visa1}><img src={bankCard} alt="" /></div>
            <div className={style.visa1}><img src={gci} alt="" /></div>
            <div className={style.visa1}><img src={psc} alt="" /></div>
      </div>
      <div className={style.Cards}>
            <div className={style.visa1}><img src={wlt} alt="" /></div>
            <div className={style.visa1}><img src={klarna} alt="" /></div>
            <div className={style.visa1}><img src={ubt} alt="" /></div>
      </div>
      <div className={style.Cards}>
            <div className={style.visa1}><img src={ugp} alt="" /></div>
            <div className={style.visa1}><img src={discover} alt="" /></div>
            <div className={style.visa1}><img src={ntl} alt="" /></div>
      </div>
      <div className={style.Cards}>
            <div className={style.visa1}><img src={pwy} alt="" /></div>
      </div>
      </div>

</div>

{/* BUTTON---------- */}
<div className={style.buyButton}>
      <button>
            <img src={buy} alt="" />
            Buy Now</button>
</div>
      </div>
</div>
   </div>

   <div className={style.whyPie}>
      <h5>Why PieGP?</h5>
      <h2>100% Secure</h2>
      <h2>No Verification</h2>
      <h2>No Registration Needed</h2>
   </div>
   </div>
   </>
  )
}

export default HomeContent
