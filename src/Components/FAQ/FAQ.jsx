import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import FAQS from './FAQS/FAQS'
import FAQCard from './FAQS/FAQCard.jsx'
import BuyRuneScape from '../Home/Buy Runescape/BuyRuneScape.jsx'
import VisaCards from '../Home/VisaCards/VisaCards.jsx'
import Footer from '../Footer/Footer.jsx'

function FAQ() {
  return (
    <div>
      <Navbar/>
      <FAQS/>
      <FAQCard/>
      <BuyRuneScape/>
      <VisaCards/>
      <Footer/>
    </div>
  )
}

export default FAQ
