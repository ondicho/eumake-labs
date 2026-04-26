import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/panel.css';

const ServiceCard = ({ section, testName, duration, price, image, onClick, title }) => {
  const capitalizedTitle = title.toUpperCase();

  return (
    <div className="premium-card" onClick={() => onClick(section)}>
      <div className="premium-card-glow" />
      <div className="premium-card-inner">
        <div className="premium-card-graphic">
          <div className="premium-card-icon-wrap">
            <img className="premium-card-img" src={image} alt="service-icon" />
          </div>
          <div className="premium-card-label">{capitalizedTitle}</div>
        </div>
        
        <div className="premium-card-content">
          <h3 className="premium-card-title">{testName}</h3>
          
          <div className="premium-card-meta">
            <span className="premium-meta-label">Duration:</span>
            <span className="premium-meta-value">{duration}</span>
          </div>

          <button className="premium-card-btn">Book Test</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
