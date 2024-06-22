import React from 'react'
import FtrStyle from '../Footer/Footer.module.css'
import Logo from '../../images/twitters.png'
import { Link } from 'react-router-dom'
import FAQ from '../FAQ/FAQ.jsx'

function Footer() {
  return (
      <div>
    <div className={FtrStyle.footer}>
      <div className={FtrStyle.footer1}>
        <img src={Logo} alt="" />
      </div>
      <div className={FtrStyle.feature}>
      <div className={FtrStyle.footer2}>
            <h4>PieGP</h4>
            <div className={FtrStyle.ftrLinks}>
            <Link className={FtrStyle.ftrLink1}>About US</Link>
            <Link className={FtrStyle.ftrLink1}>Blog</Link>
            <Link to={"/FAQ"} className={FtrStyle.ftrLink1}>FAQ</Link>
            </div>
      </div>
 
      <div className={FtrStyle.footer3}>
      <h4>Featured</h4>
            <div className={FtrStyle.ftrLinks}>
            <Link to={"/"} className={FtrStyle.ftrLink2}>Buy OSRS Gold</Link>
            <Link to={"/BuyRS3Gold"} className={FtrStyle.ftrLink2}>Buy RS3 Gold</Link>
            <Link className={FtrStyle.ftrLink2}>Buy Runescape Gold</Link>
            <Link to={"/SellGold"} className={FtrStyle.ftrLink2}>Sell Runescape Gold</Link>
            </div>
      </div>
      </div>
      <div className={FtrStyle.footer4}>
            
      <h4>Service</h4>
            <div className={FtrStyle.ftrLinks}>
            <Link className={FtrStyle.ftrLink2}>Privacy Policy</Link>
            <Link className={FtrStyle.ftrLink2}>GDPR Privacy Notice</Link>
            <Link className={FtrStyle.ftrLink2}>Terms of Service</Link>
            <Link className={FtrStyle.ftrLink2}>Refund Policy</Link>
            </div>
      </div>
      
    </div>

    <div className={FtrStyle.bottomFtr}>
      <p>Copyright © 2024 PieGP. All Rights Reserved.</p>
      <p>Statpoint Support Services Limited HE 410270 Avlonos, 1 Maria House, 1075, Nicosia, Cyprus.</p>
    </div>
    </div>
  )
}

export default Footer
