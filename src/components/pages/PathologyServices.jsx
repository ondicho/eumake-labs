import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/pathology.css';
import pathologyServicesData from '../data/PathologyServicesData';
import { Helmet } from 'react-helmet';
import { ChevronRight } from 'lucide-react';

const PathologyServices = () => {
  return (
    <>
      <Helmet>
        <title>Pathology Services | Eumake Diagnostic Laboratories</title>
        <meta name="description" content="Pathology Services Overview" />
        <meta name="keywords" content="react, meta tags, seo, pathology" />
        <meta name="author" content="ondicho" />
        <meta property="og:title" content="Pathology Services" />
        <meta property="og:description" content="Eumake Pathology Services" />
        <meta property="og:url" content="https://eumake.co.ke/pathology-services" />
      </Helmet>

      <div className="pathology-page-container">
        <div className="services-header-hero">
          <h1 className="services-hero-title">Pathology Services</h1>
          <p className="services-hero-desc">Discover our range of rigorous pathology services designed to give you precise and timely diagnostics.</p>
        </div>

        <div className="pathology-grid">
          {pathologyServicesData.map((service, index) => (
            <Link to={`/services/${index}`} key={index} className="premium-card theme-light pathology-premium-card">
              <div className="premium-card-inner">
                <div className="pathology-card-img-wrap">
                  <img src={service.imagePath} alt={service.header} className="pathology-card-img" />
                </div>
                <div className="premium-card-content pathology-content-wrap">
                  <h3 className="pathology-card-title">{service.header}</h3>
                  <p className="pathology-card-desc">
                    {service.description.length > 120 ? service.description.substring(0, 120) + '...' : service.description}
                  </p>

                  <div className="pathology-card-action">
                    <span className="pathology-read-more">Read More</span>
                    <ChevronRight size={18} className="pathology-chevron" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default PathologyServices;
