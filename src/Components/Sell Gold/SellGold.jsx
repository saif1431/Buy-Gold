import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import SellGolds from './SellGolds/SellGolds.jsx'
import BuyRuneScape from '../Home/Buy Runescape/BuyRuneScape.jsx'
import VisaCards from '../Home/VisaCards/VisaCards.jsx'
import Footer from '../Footer/Footer.jsx'

function SellGold() {
  return (
    <div>
      <Navbar/>
     <SellGolds/>
     <BuyRuneScape/>
     <VisaCards/>
     <Footer/>
    </div>
  )
}

export default SellGold
