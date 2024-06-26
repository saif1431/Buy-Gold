import React from 'react'
import styles from './SellGolds.module.css'
import { RiShoppingCart2Fill } from "react-icons/ri";
import PicGameImg1 from '../../../images/svg1.svg'
import PicGameImg2 from '../../../images/svg2.svg'


function SellGolds() {
  return (
    <div>
      <div className={styles.SellGolds}>
            <div className={styles.SellGoldsBox}>
                  <div className={styles.SellGoldsBox1}>
                  <RiShoppingCart2Fill className={styles.shpCard} />
                  <h5>Sell OSRS Gold</h5>
                  </div>
                  <div className={styles.picgame}>
<h5>Pick Game</h5>
<div className={styles.picGames}>
      <div className={styles.picGames1}>
            <img src={PicGameImg1} alt="" />
      </div>
      <div className={styles.picGames2}>
            <img src={PicGameImg2} alt="" />
      </div>
</div>

                  </div>
                  <div className={styles.picGameInput}>
                  <div className={styles.inputbox}>
                        <input type="text" placeholder='Amount to Sell' />
    {/* <input required="required" type="text"> */}
    <i></i>
</div>
<div className={styles.m}>M</div>
                  </div>
<p >We only buy 100M OSRS Gold or more.</p>
            <button>Start Chat</button>
                  </div> 
      </div>
      <div>
      </div>
    </div>
  )
}

export default SellGolds
