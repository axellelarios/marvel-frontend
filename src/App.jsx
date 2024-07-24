

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


// IMPORT DE MES HOOKS
import React, { useState, useEffect } from "react";


function App() {
  // CREATION DE MES STATE POUR LA RECHERCHE
  const [search, setSearch] = useState("");

  return (

    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/characters" element={<Characters search={search} setSearch={setSearch} />} />
          <Route path="/pages/comics" element={<Comics search={search} setSearch={setSearch} />} />
          <Route path="/pages/character/:id" element={<Character />} />
          <Route path="/pages/characters/:id" element={<Comic />} />
        </Routes>
      <Footer /> 
    </Router> 
  )
}

export default App
