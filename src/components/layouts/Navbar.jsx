import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import '../../assets/css/navbar.css';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll for glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className={`navbar-modern ${scrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
      <div className="navbar-container">
        
        {/* Logo Section */}
        <Link to="/" className="navbar-logo-wrap">
          <img className="navbar-logo-img" src={logo} alt="Eumake Logo" />
          <span className="navbar-logo-text">Eumake Diagnostic<br/>Laboratories</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="navbar-desktop-menu">
          <Link to="/" className="nav-link">Home</Link>
          
          <div className="nav-dropdown-wrap">
            <button className="nav-link dropdown-trigger">
              Services <ChevronDown size={16} />
            </button>
            <div className="nav-dropdown-content">
              <Link to="/services" className="dropdown-item">Test Catalogue</Link>
              <Link to="/pathology-services" className="dropdown-item">Pathology Services</Link>
            </div>
          </div>
          
          <div className="nav-dropdown-wrap">
            <button className="nav-link dropdown-trigger">
              About Us <ChevronDown size={16} />
            </button>
            <div className="nav-dropdown-content">
              <Link to="/our-team" className="dropdown-item">Our Team</Link>
              <Link to="/about-us" className="dropdown-item">Core Values</Link>
              <Link to="/gallery" className="dropdown-item">Gallery</Link>
            </div>
          </div>
          
          <Link to="/faqs" className="nav-link">FAQs</Link>
          <Link to="/contact-us" className="nav-link">Contact Us</Link>
          
          <div className="nav-actions">
            <Link to="/services" className="nav-cta-btn">Book a Test</Link>
            <a href="tel:+254712345678" className="nav-call-btn" aria-label="Call Us"><Phone size={20} /></a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Slide-Over Menu */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <Link to="/" className="mobile-link">Home</Link>
          
          <div className="mobile-dropdown-group">
            <span className="mobile-group-title">Services</span>
            <Link to="/services" className="mobile-sublink">Test Catalogue</Link>
            <Link to="/pathology-services" className="mobile-sublink">Pathology Services</Link>
          </div>
          
          <div className="mobile-dropdown-group">
            <span className="mobile-group-title">About Us</span>
            <Link to="/our-team" className="mobile-sublink">Our Team</Link>
            <Link to="/about-us" className="mobile-sublink">Core Values</Link>
            <Link to="/gallery" className="mobile-sublink">Gallery</Link>
          </div>

          <Link to="/faqs" className="mobile-link">FAQs</Link>
          <Link to="/contact-us" className="mobile-link">Contact Us</Link>

          <Link to="/services" className="mobile-cta-btn">Book a Test</Link>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
