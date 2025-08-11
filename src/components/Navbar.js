'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src="/Faded Elegance Logo-05.png" alt="Faded Elegance Logo" className="navbar__logo-img" />
        </div>
        
        {/* Mobile Menu Button */}
        <button className="navbar__menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        {/* Desktop Menu */}
        <div className={`navbar__menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About us</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact us</a>
        </div>
      </div>
    </nav>
  );
}
