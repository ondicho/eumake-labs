// Widgets.js

import React from 'react';
import '../../assets/css/styles.css'; // Import the CSS file for widget styles
import appointment from '../../assets/images/appointment.png';
import orderNowImage from '../../assets/images/contact.png';
import top from '../../assets/images/top.png';

const Widgets = () => {
  return (
    <>
      <div className="widgets">
        <div className="widget-container">
          <img src={appointment} alt="Appointment" className="widget appointment" />
          <div className="modal">
            <p>Schedule physical appointment</p>
          </div>
        </div>
        <div className="widget-container">
          <img src={orderNowImage} alt="Order Now" className="widget order-now" />
          <div className="modal">
            <p>Schedule sample collection</p>
          </div>
        </div>
        <div className="widget-container">
          <img src={top} alt="Back to Top" className="widget back-to-top" />
          <div className="modal">
            <p>Back to Top</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Widgets;
