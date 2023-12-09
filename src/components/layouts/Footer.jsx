import React, { useState } from 'react';
import '../../assets/css/footer.css';
import facebook from '../../assets/images/facebook.jpeg'
import instagram from '../../assets/images/instagram.jpeg'
import twitter from '../../assets/images/twitter.jpeg'
import mail from '../../assets/images/mail.jpeg'
import map from '../../assets/images/map.jpeg'
import telephone from '../../assets/images/telephone.png'
import whatsapp from '../../assets/images/whatsapp.png'

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
                        <li><img  className="footer-icon" src={mail} alt="mail" /><p>info@eumake.co.ke</p></li>
                        <li><img  className="footer-icon" src={whatsapp} alt="telephone" /><p>0702205555</p></li>
                        <li><img  className="footer-icon" src={map} alt="map" /><p>3<sup>rd</sup> Parklands Avenue, Nairobi</p></li>
                        <li><img  className="footer-icon weekend" src="" alt="" /><p>Room 505, 5<sup>th</sup> Floor</p></li>
                        <li><img  className="footer-icon" src={map} alt="map" /><p>Mon to Fri - 8:00am to 7:00pm  </p></li>
                        <li><img  className="footer-icon  weekend" src="" alt="" /><p>Weekend & Public Holidays - 8:00am to 5:00pm  </p></li>
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
                        <li><img  className="footer-icon" src={whatsapp} alt="whatsapp" /></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="bottom-footer">
                    <p className="footer-text">Created by Ondicho 2023 (c) Designed by Reine</p>
                    <p className="footer-text">Terms and Conditions apply</p>
                    <p className="footer-text">Copyright</p>
                </div>
            </div>
        </>
    );
};

export default Footer;
