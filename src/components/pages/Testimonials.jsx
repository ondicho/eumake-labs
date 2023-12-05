// Testimonials.js

import React from 'react';
import technician from '../../assets/images/technician.png';

import '../../assets/css/home.css';

const Testimonials = () => {
  return (
    <div className="main-container testimonials">
      <img src={technician} alt='technician' />
      <div className="text-area">
        <h2>Director's Journey</h2>
        <p>
          Eunice is a professional medical technician with over 20 years' experience
          in the medical lab field with various established laboratories such as PharmaPlus, Lancet, and presently Eumake.
        </p>
        <p>She holds a BSc Microbiology Degree from Kenyatta University</p>
        <p>We aim to provide accurate and top-notch medical diagnostic service at an affordable rate.</p>
        <p className='director-sign'>Eunice</p>
      </div>
      <div className="testimonials-header">
        <h3 className="italic-bold">Testimonials</h3>
        <p className="read-all">Read all testimonials</p>
      </div>
     
    </div>
  );
}

export default Testimonials;
