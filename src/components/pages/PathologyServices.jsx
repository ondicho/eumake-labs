import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../../assets/css/pathology.css';
import pathologyServicesData from '../data/PathologyServicesData';
import ServiceDetails from './ServiceDetails';

const PathologyServices = () => {
  return (
    <div className="main-container patholgy-container">
      <div className="pathology-header">
        <h4>Pathology Services</h4>
      </div>

      <div className="pathology">
        {pathologyServicesData.map((service, index) => (
          <Link to={`/services/${index}`} key={index} className="pathology-service">
            <div className="pathology-service-image">
              <img src={service.imagePath} alt={`Service ${index + 1}`} className="patholgy-service-image" />
            </div>
            <div className="pathology-service-body">
              <ServiceDetails header={service.header} description={service.description} />
              <button className="pathology-btn">Read More</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};


export default PathologyServices;
