// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/navbar.css';
import logo from '../../assets/images/logo.png';
import menu from '../../assets/images/menu.png';
import call from '../../assets/images/call.png';
import down from '../../assets/images/down-arrow.png';
import ContactUsModal from './ContactUsModal';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(false);
    setContactDropdownOpen(false);
  };

  const handleServicesToggle = () => {
    if (isMobile) {
      setServicesDropdownOpen(!servicesDropdownOpen);
      setAboutDropdownOpen(false);
      setContactDropdownOpen(false);
    }
  };

  const handleAboutToggle = () => {
    if (isMobile) {
      setAboutDropdownOpen(!aboutDropdownOpen);
      setServicesDropdownOpen(false);
      setContactDropdownOpen(false);
    }
  };

  const handleContactToggle = () => {
    if (isMobile) {
      setContactDropdownOpen(!contactDropdownOpen);
      setAboutDropdownOpen(false);
      setServicesDropdownOpen(false);
    }
  };

  const handleServicesHover = () => {
    if (!isMobile) {
      setServicesDropdownOpen(true);
      setAboutDropdownOpen(false);
      setContactDropdownOpen(false);
    }
  };

  const handleAboutHover = () => {
    if (!isMobile) {
      setAboutDropdownOpen(true);
      setServicesDropdownOpen(false);
      setContactDropdownOpen(false);
    }
  };

  const handleContactHover = () => {
    if (!isMobile) {
      setContactDropdownOpen(true);
      setAboutDropdownOpen(false);
      setServicesDropdownOpen(false);
    }
  };


  const handleClose = () => {
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(false);
    setContactDropdownOpen(false);
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
        <Link to="/" onClick={handleClose}>
          Home
        </Link>
        <li
          className={`dropdown ${servicesDropdownOpen ? 'open' : ''}`}
          onClick={handleServicesToggle}
          onMouseEnter={handleServicesHover}
        >
          <div className="dropdown-header">
            Services
            <img className="dropdown-icon" src={down} alt="" />
          </div>
          {servicesDropdownOpen && (
            <div className="dropdown-content" onMouseLeave={handleClose}>
              <Link to="/services">Screening Tests</Link>
              <Link to="/pathology-services">Pathology Services</Link>
            </div>
          )}
        </li>
        <li
          className={`dropdown ${aboutDropdownOpen ? 'open' : ''}`}
          onClick={handleAboutToggle}
          onMouseEnter={handleAboutHover}
        >
          <div className="dropdown-header">
            About Us
            <img className="dropdown-icon" src={down} alt="" />
          </div>
          {aboutDropdownOpen && (
            <div className="dropdown-content" onMouseLeave={handleClose}>
              <Link to="/about-us">Our Team</Link>
              <Link to="/about-us">Our Mission</Link>
            </div>
          )}
        </li>
        <Link to="/faqs" onClick={handleClose}>
          FAQs
        </Link>
        <li
          className={`dropdown ${aboutDropdownOpen ? 'open' : ''}`}
          onClick={handleContactToggle}
          onMouseEnter={handleContactHover}
        >
          <div className="dropdown-header">
            Contact Us
            <img className="dropdown-icon" src={down} alt="" />
          </div>
          {contactDropdownOpen && (
            <div className="dropdown-content" onMouseLeave={handleClose}>
              <Link to="/contact-us"> Call</Link>
              <Link to="/contact-us">WhatsApp</Link>
              <Link to="/contact-us">Contact Center</Link>
            </div>
          )}
        </li>
        <Link to="/contact-us" onClick={handleClose}>
          <img className="call" src={call} alt="call" />
        </Link>
      </div>
      <div className="burger-menu" onClick={handleToggle}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      {isMobile && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <Link to="/" className="logo">
              <img className="logo" src={logo} alt="logo" />
              <p>Eumake Diagnostic Laboratories</p>
            </Link>
            <div className="menu">
              <Link to="/" onClick={handleClose}>
                Home
              </Link>
              <li
                className={`dropdown ${servicesDropdownOpen ? 'open' : ''}`}
                onClick={handleServicesToggle}
                onMouseEnter={handleServicesHover}
              >
                <div className="dropdown-header">
                  Services
                  {isMobile && <img className="dropdown-icon" src={down} alt="call" />}
                </div>
                {servicesDropdownOpen && (
                  <div className="dropdown-content" onMouseLeave={handleClose}>
                    {/* Add links for each service */}
                    <Link to="/services">Service 1</Link>
                    <Link to="/services">Service 2</Link>
                    {/* Add more links as needed */}
                  </div>
                )}
              </li>
              <li
                className={`dropdown ${aboutDropdownOpen ? 'open' : ''}`}
                onClick={handleAboutToggle}
                onMouseEnter={handleAboutHover}
              >
                <div className="dropdown-header">
                  About Us
                  {isMobile && <img className="dropdown-icon" src={down} alt="call" />}
                </div>
                {aboutDropdownOpen && (
                  <div className="dropdown-content" onMouseLeave={handleClose}>
                    <Link to="/about-us">Our Team</Link>
                    <Link to="/about-us">Our Mission</Link>
                  </div>
                )}
              </li>
              <Link to="/faqs" onClick={handleClose}>
                FAQs
              </Link>
              <li
                className={`dropdown ${contactDropdownOpen ? 'open' : ''}`}
                onClick={handleContactToggle}
                onMouseEnter={handleContactHover}
              >
                <div className="dropdown-header">
                  Contact Us
                  {isMobile && <img className="dropdown-icon" src={down} alt="call" />}
                </div>
                {aboutDropdownOpen && (
                  <div className="dropdown-content" onMouseLeave={handleClose}>
                    <Link to="/about-us">Our Team</Link>
                    <Link to="/about-us">Our Mission</Link>
                  </div>
                )}
              </li>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
