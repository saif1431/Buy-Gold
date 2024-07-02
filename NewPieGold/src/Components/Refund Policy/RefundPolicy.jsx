import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import Refund from './Refund/Refund.jsx'
import FAQCard from '../FAQ/FAQS/FAQCard.jsx'
import BuyRuneScape from '../Home/Buy Runescape/BuyRuneScape.jsx'
import VisaCards from '../Home/VisaCards/VisaCards.jsx'
import Footer from '../Footer/Footer.jsx'

function RefundPolicy() {
  return (
    <div>
      <Navbar/>
      <Refund/>
      <FAQCard/>
      <BuyRuneScape/>
      <VisaCards/>
      <Footer/>
    </div>
  )
}

export default RefundPolicy
