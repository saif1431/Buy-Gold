import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import Terms from './Terms/Terms.jsx'
import FAQCard from '../FAQ/FAQS/FAQCard.jsx'
import BuyRuneScape from '../Home/Buy Runescape/BuyRuneScape.jsx'
import VisaCards from '../Home/VisaCards/VisaCards.jsx'
import Footer from '../Footer/Footer.jsx'

function TermsServices() {
  return (
    <div>
     <Navbar/>
     <Terms />
     <FAQCard/>
     <BuyRuneScape/>
     <VisaCards/>
     <Footer/>
    </div>
  )
}

export default TermsServices
