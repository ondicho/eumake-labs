import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/navbar.css';
import logo from '../../assets/images/logo.png'

import call from '../../assets/images/call.png';
import callWhite from '../../assets/images/call-white.png';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      
      <Link to="/" className="logo"><img  className="logo" src={logo} alt="logo" /></Link>Eumake Diagnostic Laboratories
      <div className={`menu ${isMobile ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about-us">About</Link>
        <Link to="/faqs">FAQs</Link>
        <Link to="/contact-us">Contact</Link>
        <Link to="/contact-us"><img className='call' src={callWhite} alt='call' /></Link>
      </div>
      <div className="burger-menu" onClick={handleToggle}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
