import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import TrancHistory from './TrancHistory'
import FAQCard from '../FAQ/FAQS/FAQCard'
import BuyRuneScape from '../Home/Buy Runescape/BuyRuneScape'
import VisaCards from '../Home/VisaCards/VisaCards'
import Footer from '../Footer/Footer'

function TransactionHistory() {
  return (
    <div>
      <Navbar/>
      <TrancHistory/>
      <FAQCard/>
      <BuyRuneScape/>
      <VisaCards/>
      <Footer/>
    </div>
  )
}

export default TransactionHistory
