import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import SupportForm from './SupportForm/SupportForm'
import FAQCard from '../FAQ/FAQS/FAQCard.jsx'
import BuyRuneScape from '../Home/Buy Runescape/BuyRuneScape.jsx'
import VisaCards from '../Home/VisaCards/VisaCards'
import Footer from '../Footer/Footer.jsx'

function Support() {
  return (
    <div>
      <Navbar/>
      <SupportForm/>
      <FAQCard/>
      <BuyRuneScape/>
      <VisaCards/>
      <Footer/>
    </div>
  )
}

export default Support
