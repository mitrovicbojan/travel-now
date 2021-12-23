import { Fragment } from 'react'
import Header from './components/Header/Header'
import React from 'react'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Learnmore from './pages/Learnmore'
import Prices from './pages/Prices'
import Cities from './components/Cities/Cities'
import useScrollToTop from './hooks/useScrollToTop'




function App() {
  
  return (
    <Router>
      <useScrollToTop />
      <Header /> 
      <Routes>        
        <Route exact path="/" element={<Home />}></Route> 
        <Route exact path="/learnmore" element={<Learnmore />}></Route>
        <Route exact path="/prices" element={<Prices />}></Route>
        <Route exact path="/cities" element={<Cities />}></Route>
        
      </Routes>   
      <Footer />
    </Router>
  )
}

export default App;
