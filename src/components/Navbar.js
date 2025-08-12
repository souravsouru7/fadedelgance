'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setIsDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src="/Faded Elegance Logo-05.png" alt="Faded Elegance Logo" className="navbar__logo-img" />
        </div>
        
        {/* Mobile Menu Button */}
        <button className="navbar__menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        {/* Desktop Menu */}
        <div className={`navbar__menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={handleLinkClick}>Home</a>
          <a href="#about" onClick={handleLinkClick}>About us</a>
          
          {/* Services Dropdown */}
          <div className="navbar__dropdown">
            <button 
              className="navbar__dropdown-toggle" 
              onClick={toggleDropdown}
              onMouseEnter={() => window.innerWidth > 768 && setIsDropdownOpen(true)}
              onMouseLeave={() => window.innerWidth > 768 && setIsDropdownOpen(false)}
              aria-label="Services menu"
            >
              Services
            </button>
            <div className={`navbar__dropdown-menu ${isDropdownOpen ? 'active' : ''}`}>
              <div className="navbar__dropdown-category">
                <span>Reborn</span>
                <div className="navbar__dropdown-submenu">
                  <a href="#reborn-handbag" onClick={handleLinkClick}>Handbag</a>
                  <a href="#reborn-shoes" onClick={handleLinkClick}>Shoes</a>
                  <a href="#reborn-wallet" onClick={handleLinkClick}>Wallet</a>
                  <a href="#reborn-sandles" onClick={handleLinkClick}>Sandles</a>
                </div>
              </div>
              <div className="navbar__dropdown-category">
                <span>Signature</span>
                <div className="navbar__dropdown-submenu">
                  <a href="#signature-handbag" onClick={handleLinkClick}>Handbag</a>
                  <a href="#signature-shoes" onClick={handleLinkClick}>Shoes</a>
                  <a href="#signature-wallet" onClick={handleLinkClick}>Wallet</a>
                  <a href="#signature-sandles" onClick={handleLinkClick}>Sandles</a>
                </div>
              </div>
              <div className="navbar__dropdown-category">
                <span>Kids</span>
                <div className="navbar__dropdown-submenu">
                  <a href="#kids-shoes" onClick={handleLinkClick}>Shoes</a>
                  <a href="#kids-bags" onClick={handleLinkClick}>Bags</a>
                </div>
              </div>
            </div>
          </div>
          
          <a href="#gallery" onClick={handleLinkClick}>Gallery</a>
          <a href="#contact" onClick={handleLinkClick}>Contact us</a>
        </div>
      </div>
    </nav>
  );
}
