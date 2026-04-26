import React from 'react';
import '../../assets/css/footer.css';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import facebook from '../../assets/images/facebook.jpeg';
import instagram from '../../assets/images/instagram.jpeg';
import twitter from '../../assets/images/twitter.jpeg';


const Footer = () => {
    return (
        <footer className="footer-modern">
            <div className="footer-container">
                <div className="footer-grid">
                    
                    <div className="footer-col">
                        <h4 className="footer-heading">Contact Us</h4>
                        <ul className="footer-contact-list">
                            <li>
                                <Mail className="footer-lucide-icon" size={18} />
                                <span>info@eumake.co.ke</span>
                            </li>
                            <li>
                                <Phone className="footer-lucide-icon" size={18} />
                                <span>0702 205 555</span>
                            </li>
                            <li className="align-start">
                                <MapPin className="footer-lucide-icon" size={18} />
                                <div>
                                    <span>3<sup>rd</sup> Parklands Avenue, Nairobi</span><br/>
                                    <span className="footer-subtext">Park Medical Center, Room 505, 5<sup>th</sup> Floor</span>
                                </div>
                            </li>
                            <li className="align-start">
                                <Clock className="footer-lucide-icon" size={18} />
                                <div>
                                    <span>Mon to Fri - 8:00am to 7:00pm</span><br/>
                                    <span className="footer-subtext">Weekend & Public Holidays - 8:00am to 5:00pm</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="footer-col">
                        <h4 className="footer-heading">Eumake</h4>
                        <ul className="footer-nav-list">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/about-us">About us</Link></li>
                            <li><Link to="/faqs">FAQs</Link></li>
                        </ul>
                    </div>
                    
                    <div className="footer-col">
                        <h4 className="footer-heading">Our Location</h4>
                        <div className="footer-map-wrapper">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8537611544184!2d36.81533874039429!3d-1.2598947356052246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17000e80af3f%3A0x6bbfe04966e085e9!2sEumake%20Diagnostic%20Laboratories!5e0!3m2!1sen!2ske!4v1704450016196!5m2!1sen!2ske"
                                style={{ border: '0' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className='footer-map-iframe'
                                title="Location Map">
                            </iframe>
                        </div>
                    </div>
                    
                    <div className="footer-col">
                        <h4 className="footer-heading">Socials</h4>
                        <div className="footer-socials-row">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon custom-social-icon">
                                <img src={facebook} alt="Facebook" className="custom-social-img" />
                            </a>
                            <a href="https://www.twitter.com/Eumake_" target="_blank" rel="noopener noreferrer" className="social-icon custom-social-icon">
                                <img src={twitter} alt="Twitter" className="custom-social-img" />
                            </a>
                            <a href="https://www.instagram.com/eumake_laboratories/" target="_blank" rel="noopener noreferrer" className="social-icon custom-social-icon">
                                <img src={instagram} alt="Instagram" className="custom-social-img" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    <p className="footer-text">
                        Site built and maintained by{" "}
                        <a href="https://techvoyage.co.ke" target="_blank" rel="noopener noreferrer" className="footer-link">
                            TechVoyage Consultancy Ltd
                        </a>{" "}
                        {new Date().getFullYear()} &copy;
                    </p>
                    <p className="footer-text-secondary">Terms and Conditions apply</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
