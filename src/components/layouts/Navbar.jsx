// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/navbar.css';
import logo from '../../assets/images/logo.png';
import menu from '../../assets/images/menu.png';
import call from '../../assets/images/call.png';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  const handleClose = () => {
    setIsMobile(false);
  };

  return (
    <nav className={`navbar ${isMobile ? 'mobile-view' : ''}`}>
      <div className="mobile-icon" onClick={handleToggle}>
        <img className="menu-icon" src={menu} alt="call" />
      </div>
      <Link to="/" className="logo">
        <img className="logo" src={logo} alt="logo" />
        <p>Eumake Diagnostic Laboratories</p>
      </Link>
      <div className={`menu ${isMobile ? 'active' : ''}`}>
        <Link to="/" onClick={handleClose}>Home</Link>
        <Link to="/services" onClick={handleClose}>Services</Link>
        <Link to="/about-us" onClick={handleClose}>About</Link>
        <Link to="/faqs" onClick={handleClose}>FAQs</Link>
        <Link to="/contact-us" onClick={handleClose}>Contact</Link>
        <Link to="/contact-us" onClick={handleClose}><img className='call' src={call} alt='call' /></Link>
      </div>
      <div className="burger-menu" onClick={handleToggle}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      {isMobile && (
        <div className="mobile-menu" onClick={handleClose}>
          <div className="mobile-menu-content">
            <Link to="/" className="logo">
              <img className="logo" src={logo} alt="logo" />
              <p>Eumake Diagnostic Laboratories</p>
            </Link>
            <div className="menu">
              <Link to="/" onClick={handleClose}>Home</Link>
              <Link to="/services" onClick={handleClose}>Services</Link>
              <Link to="/about-us" onClick={handleClose}>About</Link>
              <Link to="/faqs" onClick={handleClose}>FAQs</Link>
              <Link to="/contact-us" onClick={handleClose}>Contact</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
