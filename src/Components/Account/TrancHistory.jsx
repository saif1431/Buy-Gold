import React from 'react'
import styles from './TrancHistory.module.css'
import Logo from '../../images/twitters.png'
import { HiShoppingCart } from "react-icons/hi";
function TrancHistory() {
  return (
    <div>
      <div className={styles.TrancHistory}>

            <div className={styles.TrancHistoryBox}>
<div className={styles.Buttons}> 
      <p>hsa23@gmail.com</p>
      <button className={styles.Logout}>Logout</button>
      <button className={styles.orderHistory}>Order History</button>
</div>
            </div>
            <div className={styles.TrancHistoryBox2}>
                  <p>Order History</p>
                  <div className={styles.TrancHistorydiv}>
<img src={Logo} alt="" />
<p>No TranSaction Found</p>
<button>Order Now

<HiShoppingCart className={styles.shooping} />
</button>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default TrancHistory
