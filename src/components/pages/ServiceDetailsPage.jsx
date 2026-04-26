import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../assets/css/service-detail.css';
import { ArrowLeft } from 'lucide-react';

const ServiceDetailPage = ({ pathologyServicesData }) => {
  const navigate = useNavigate();
  const { index } = useParams();
  const serviceIndex = parseInt(index, 10);

  if (isNaN(serviceIndex) || serviceIndex < 0 || serviceIndex >= pathologyServicesData.length) {
    return <div className="detail-error">Invalid service index</div>;
  }

  const service = pathologyServicesData[serviceIndex];

  if (!service) {
    return <div className="detail-error">Service not found</div>;
  }

  return (
    <div className="service-detail-wrapper">
      <div className="service-hero-banner" style={{ backgroundImage: `url(${service.imagePath})` }}>
         <div className="service-hero-overlay"></div>
         <div className="service-hero-content">
            <button className="service-back-btn" onClick={() => navigate(-1)}>
               <ArrowLeft size={18} /> Back to Pathology Services
            </button>
            <h1 className="service-hero-title">{service.header}</h1>
            <span className="service-hero-badge">Pathology Department</span>
         </div>
      </div>

      <div className="service-body-container">
         <div className="service-rich-content">
            <h2 className="service-overview-heading">Overview</h2>
            <div className="service-text-block">
               <p>{service.description}</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
