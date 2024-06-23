import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import BuyRS3Gold from './Components/Buy RS3 Gold/BuyRS3Gold';
import SellGold from './Components/Sell Gold/SellGold';
import FAQ from './Components/FAQ/FAQ';
import Support from './Components/Support/Support';
import TrancHistory from './Components/Account/TransactionHistory.jsx';
import StripeForm from './Components/Forms/StripeForm/StripeForm.jsx';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/BuyRS3Gold" element={<BuyRS3Gold />}/>
      <Route path="/SellGold" element={<SellGold />}/>
      <Route path="/FAQ" element={<FAQ />}/>
      <Route path="/Support" element={<Support />}/>
      <Route path="/TrancHistory" element={<TrancHistory />}/>
      <Route path="/StripeForm" element={<StripeForm />}/>
     
    </Routes>
  </Router>
  )
}

export default App
