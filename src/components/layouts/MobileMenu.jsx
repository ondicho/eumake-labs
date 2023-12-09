// MobileMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import menu from '../../assets/images/menu.png';


const MobileMenu = ({ isOpen, onClose }) => {
    return (
        <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
            <Link to="/" onClick={onClose}>
                Home
            </Link>
            <Link to="/services" onClick={onClose}>
                Services
            </Link>
            <Link to="/about-us" onClick={onClose}>
                About
            </Link>
            <Link to="/faqs" onClick={onClose}>
                FAQs
            </Link>
            <Link to="/contact-us" onClick={onClose}>
                Contact
            </Link>
            <Link to="/contact-us" onClick={onClose}>
                <img className="menu-icon" src={menu} alt="menu" />
            </Link>
        </div>
    );
};

export default MobileMenu;
