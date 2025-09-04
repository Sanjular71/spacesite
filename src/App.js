import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Contact from './components/Contact';  // 👈 add this

function App() {
  return (
    <Router>
      <Navbar /> {/* Always visible on all pages */}
      
      <Routes>
        {/* Home Page */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <Features />
              <Footer />
            </>
          } 
        />

        {/* Features Page */}
        <Route path="/features" element={<Features />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;