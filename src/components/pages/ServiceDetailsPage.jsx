// ServiceDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ServiceDetails from './ServiceDetails';
import '../../assets/css/service-detail.css';

const ServiceDetailPage = ({ pathologyServicesData }) => {
  const { index } = useParams();
  const serviceIndex = parseInt(index, 10);

  // Correct
  if (Array.isArray(pathologyServicesData)) {
    console.log(pathologyServicesData.length);
  }


  // Check if serviceIndex is a valid number and within the array bounds
  if (isNaN(serviceIndex) || serviceIndex < 0 || serviceIndex >= pathologyServicesData.length) {
    // Handle invalid index (e.g., redirect to 404 or show an error message)
    return <div>Invalid service index</div>;
  }

  const service = pathologyServicesData[serviceIndex];

  if (!service) {
    // Handle undefined service (e.g., redirect to 404 or show an error message)
    return <div>Service not found</div>;
  }

  return (
    <div className="main-container service-detail-page">
      <img src={service.imagePath} alt={service.header} className="service-detail-banner" />
      <h4 className="service-detail-header">Pathology Services {'>'} {service.header}</h4>
      <div className="service-content">
        <ServiceDetails header={service.header} description={service.description} />
      </div>
    </div>
  );
};

export default ServiceDetailPage;
