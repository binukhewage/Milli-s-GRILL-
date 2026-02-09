import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './sections/Navigations';
import Home from './pages/Home';
import GrillMenu from './sections/GrillMenu';
import PizzaMenu from './sections/PizzaMenu';
import SaladMenu from './sections/SaladMenu';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

// Helper to ensure pages open at the top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0a0f1a] flex flex-col">
        {/* Pass scrolled state to Navigation to handle transparency effects */}
        <Navigation scrolled={scrolled} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/grill" element={<GrillMenu />} />
            <Route path="/pizza" element={<PizzaMenu />} />
            <Route path="/sallader" element={<SaladMenu />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;