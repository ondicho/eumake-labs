// ServiceDetails.js
import React from 'react';

const ServiceDetails = ({ header, description }) => {
  const shortenedDescription = description.split(' ').slice(0, 30).join(' ');

  return (
    <div className="service-details">
      <h3>{header}</h3>
      <p>{shortenedDescription}...</p>
      {/* Add your contact form here */}
    </div>
  );
};

export default ServiceDetails;
