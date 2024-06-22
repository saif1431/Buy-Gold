import React from 'react'
import Navbar from './Navbar/Navbar.jsx'
import HomeContent from './HomeContent/HomeContent.jsx'
import BuyRuneScape from './Buy Runescape/BuyRuneScape.jsx'
import VisaCards from './VisaCards/VisaCards.jsx'
import Footer from '../Footer/Footer.jsx'
import Faqs from './Faqs/Faqss.jsx'
import Login from '../Forms/Login/Login.jsx'

function Home() {
  return (
    <div>
      <Navbar/>
      <HomeContent/>
      <Faqs/>
      <BuyRuneScape/>
      <VisaCards/>
      <Footer/>
    </div>
  )
}

export default Home
