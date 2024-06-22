import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import BuyRS3Gold from './Components/Buy RS3 Gold/BuyRS3Gold';
import SellGold from './Components/Sell Gold/SellGold';
import FAQ from './Components/FAQ/FAQ';
import Support from './Components/Support/Support';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/BuyRS3Gold" element={<BuyRS3Gold />}/>
      <Route path="/SellGold" element={<SellGold />}/>
      <Route path="/FAQ" element={<FAQ />}/>
      <Route path="/Support" element={<Support />}/>
     
    </Routes>
  </Router>
  )
}

export default App
