import React, { useState } from 'react';
import '../../assets/css/footer.css';
import facebook from '../../assets/images/facebook.jpeg'
import instagram from '../../assets/images/instagram.jpeg'
import twitter from '../../assets/images/twitter.jpeg'
import mail from '../../assets/images/mail.jpeg'
import map from '../../assets/images/map.jpeg'
import telephone from '../../assets/images/telephone.png'

const Footer = () => {

    return (
        <>
            <div className="footer">
                <div className="top-footer">
                    <div className="footer-widget-area">

                    </div>
                    <div className="footer-menus">
                    <div className="footer-column">
                        <h4>CONTACT US</h4>
                        <ul>
                        <li><img  className="footer-icon" src={mail} alt="mail" /><p>eumake@gmail.com</p></li>
                        <li><img  className="footer-icon" src={telephone} alt="telephone" /><p>254722000000 / 254711222333</p></li>
                        <li><img  className="footer-icon" src={map} alt="map" /><p>parklands Rd. Nairobi</p></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>EUMAKE</h4>
                        <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About us</li>
                        <li>FAQs</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>SERVICES</h4>
                        <ul>
                        <li>HIV Test</li>
                        <li>Endoscopy</li>
                        <li>Thyroid Test</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>ACCREDITATIONS</h4>
                        <ul>
                        <li>KMPDU</li>
                        <li>Services</li>
                        <li>About us</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                    <h4>SOCIALS</h4>
                    <ul>
                        <li><img  className="footer-icon" src={facebook} alt="facebook" /></li>
                        <li><img  className="footer-icon" src={twitter} alt="twitter" /></li>
                        <li><img  className="footer-icon" src={instagram} alt="instagram" /></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="bottom-footer">
                    <p className="footer-text">Created by Ondicho 2023 (c)</p>
                </div>
            </div>
        </>
    );
};

export default Footer;
