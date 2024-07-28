import React from 'react'
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
  </StrictMode>
)
