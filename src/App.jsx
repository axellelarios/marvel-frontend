
// Link to my live project https://marvel-axelle.netlify.app/pages/comics

// IMPORT DE MON ROUTER
import { Routes, Route, useLocation } from 'react-router-dom';

// PAGE TRANSITION
import { AnimatePresence } from 'framer-motion';

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
import Favoris from './assets/pages/Favoris' 

const App = () => {

  const Location = useLocation();

  return (
    <>      
        <AnimatePresence mode="wait">
          <Header />
          <Routes location={Location} key={Location.pathname}> 
            <Route index element={Home} />
            <Route path="/pages/characters" element={Characters} />
            <Route path="/pages/comics" element={Comics} />
            <Route path="/pages/character/:id" element={Character} />
            <Route path="/pages/comic/:id" element={Comic} />
            <Route path="/pages/favorites/" element={Favoris} />
          </Routes>
          <Footer /> 
        </AnimatePresence> 
    </>
  )
}

export default App
