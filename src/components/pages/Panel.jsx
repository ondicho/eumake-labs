import { Link } from 'react-router-dom';
import '../../assets/css/home.css';
import walk from '../../assets/images/walk.png';
import doctor from '../../assets/images/doctor.png';
import service from '../../assets/images/service.png';
import contact from '../../assets/images/technician.png';
import cart from '../../assets/images/cart.png';
import React, { useState } from 'react';
import ServiceModal from "./ServiceModal";

const Panel = React.forwardRef((props, ref) => {
  const [isServiceModalOpen, setServiceModalOpen] = useState(false);
  const openServiceModal = () => {
    setServiceModalOpen(true);
  };

  const closeModals = () => {
    setServiceModalOpen(false);
  };

  const servicesData = [
    { image: service, title: "HIV Test", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: doctor, title: "Immunology", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: contact, title: "Hematology", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: service, title: "Thyroid Tests", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: service, title: "Liver/Pancreas", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];

  return (
    <div ref={ref} className="main-container service-panel">
      <div className="panel-header">
        <h3 className="italic-bold">Our Services</h3>
      </div>
      <div className="services">
        {servicesData.map((service, index) => (
          <div className="service" key={index}>
            <div className="service-icon">
              <img className="service-image" src={service.image} alt="service-image" />
            </div>
            <div className="service-description">
              <h5>{service.title}</h5>
              <p>{service.description}</p>
            </div>
            <div className="service-read-more">
              <button onClick={openServiceModal}>Read more</button>
            </div>
          </div>
        ))}
      </div>
      <Link to='services' className="all-services">View All Tests</Link>
      <ServiceModal isOpen={isServiceModalOpen} onClose={closeModals}/>
    </div>
  );
});

export default Panel;
