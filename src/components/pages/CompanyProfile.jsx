// CompanyProfile.js

import React from 'react';
import technician from '../../assets/images/technician.png';
import map from '../../assets/images/map.png';
import '../../assets/css/home.css';

const CompanyProfile = () => {
  return (
    <div className="main-container testimonials">

      <img src={technician} alt='technician' />
      <div className="text-area">
        <div className="testimonials-header">
          <h3 className="italic-bold">Company Profile</h3>
        </div>
        <div className="director-spotlight">
          <h2>Director's Spotlight</h2>
          <p>
            Eunice is a professional medical technician with over 20 years' experience
            in the medical lab field with various established laboratories such as PharmaPlus, Lancet, and presently Eumake.
          </p>
          <p>She holds a BSc Microbiology Degree from Kenyatta University</p>
          <p>We aim to provide accurate and top-notch medical diagnostic service at an affordable rate.</p>
          <p className='director-sign'>Eunice</p>


        </div>
        <div className="other-testimonial">
          <p>As Chief pathologist, John Doe is in charge of lab operations and customer delivery</p>
          <p className='director-sign'>John Doe</p>
        </div>
        <div className="other-testimonial central">
          <p>Jack Tom heads our finance department. He gives unto all their dues</p>
          <p className='director-sign'>Jack Tom</p>
        </div>

        <div className="other-testimonial">
          <p>As Chief pathologist, John Doe is in charge of lab operations and customer delivery</p>
          <p className='director-sign'>John Doe</p>
        </div>
      </div>
    </div>
  );
}

export default CompanyProfile;
