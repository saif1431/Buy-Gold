import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import BuyRS3Gold from './Components/Buy RS3 Gold/BuyRS3Gold';
import SellGold from './Components/Sell Gold/SellGold';
import FAQ from './Components/FAQ/FAQ';
import Support from './Components/Support/Support';
import TrancHistory from './Components/Account/TransactionHistory.jsx';
import StripeForm from './Components/Forms/StripeForm/StripeForm.jsx';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import TermsServices from './Components/Terms&Services/TermsServices.jsx';
import RefundPolicy from './Components/Refund Policy/RefundPolicy.jsx';



const stripePromise = loadStripe("pk_test_51NSNJfK5jFmIR9ElOjj4STpJI0aVKMH0i03dG5KM4cuLUvpV31hc8UMpE1DlJiYPxip50pLsl3hbezYSMipsdXJU007BaEo7ni");
function App() {
  return (
    <Elements stripe={stripePromise}>
      <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/BuyRS3Gold" element={<BuyRS3Gold />}/>
      <Route path="/SellGold" element={<SellGold />}/>
      <Route path="/FAQ" element={<FAQ />}/>
      <Route path="/Support" element={<Support />}/>
      <Route path="/TrancHistory" element={<TrancHistory />}/>
      <Route path="/StripeForm" element={<StripeForm />}/>
      <Route path="/TermsServices" element={<TermsServices />}/>
      <Route path="/RefundPolicy" element={<RefundPolicy />}/>
     
    </Routes>
  </Router>
    </Elements>

  )
}

export default App
