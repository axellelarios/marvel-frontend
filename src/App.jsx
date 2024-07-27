
// Link to my live project https://marvel-axelle.netlify.app/pages/comics

// PAGE TRANSITION
import { motion } from "framer-motion";

// IMPORT DE MON ROUTER
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// IMPORT CSS
import './App.css'

// IMPORT DE MES COMPOSANTS
import Header from './assets/components/Header' 
import Footer from './assets/components/Footer' 

// IMPORT DE MES PAGES
import Home from './assets/pages/Home' 
import Character from './assets/pages/Character' 
import Characters from './assets/pages/Characters' 
import Comic from './assets/pages/Comic' 
import Comics from './assets/pages/Comics' 
import Favoris from './assets/pages/Favoris.jsx' 

// IMPORT DE MES HOOKS
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

function App() {

  return (

    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/characters" element={<Characters />} />
          <Route path="/pages/comics" element={<Comics />} />
          <Route path="/pages/character/:id" element={<Character />} />
          <Route path="/pages/characters/:id" element={<Comic />} />
          <Route path="/pages/favorites/" element={<Favoris />} />
        </Routes>
      <Footer /> 
    </Router> 
  )
}

export default App
