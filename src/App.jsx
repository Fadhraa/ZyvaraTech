import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Consultation from './pages/Consultation';
import Portfolio from './pages/Portfolio';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,    // animation duration
      once: false,      // repeat animations on scroll
      offset: 100,      // trigger point
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/consultation" element={<Consultation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
