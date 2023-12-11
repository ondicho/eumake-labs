import { Link } from 'react-router-dom';
import '../../assets/css/home.css';
import test1 from '../../assets/images/test1.png';
import test2 from '../../assets/images/test2.png';
import test3 from '../../assets/images/test3.png';
import test4 from '../../assets/images/test4.png';
import test5 from '../../assets/images/test5.png';

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
    { image: test1, title: "HIV Test", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: test2, title: "Immunology", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: test3, title: "Hematology", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: test4, title: "Thyroid Tests", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: test5, title: "Liver/Pancreas", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
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
