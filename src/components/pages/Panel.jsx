import { Link } from 'react-router-dom';
import '../../assets/css/home.css';
import React, { useState } from 'react';
import ServiceModal from "./ServiceModal";
import ServiceCard from './ServiceCard';
import wellness from '../../assets/images/spleen.png';
import kidney from '../../assets/images/kidney.png';
import cardiac from '../../assets/images/heart.png';
import liver from '../../assets/images/liver.png';

const Panel = React.forwardRef((props, ref) => {
  const [activeSection, setActiveSection] = useState(null);
  const [isServiceModalOpen, setServiceModalOpen] = useState(false);

  const openServiceModal = (section) => {
    const selectedSection = section?.target?.dataset?.section || section;
    setActiveSection(selectedSection);
    setServiceModalOpen(true);
  };

  const closeModals = () => {
    setActiveSection(null);
    setServiceModalOpen(false);
  };

  const servicesData = {
    generalWellness: {
      section: 'General Wellness',
      activeSection: 'generalWellness',
      tests: [
        { name: 'COMPLETE BLOOD COUNT(CBC)', duration: '2-3HRS', price: 900 },
        { name: 'ESR, blood', duration: '2-3HRS', price: 850 },
        // Add more tests as needed
      ],
      image: wellness,
    },
    renalElectrolytes: {
      section: 'Renal/Electrolytes',
      activeSection: 'renalElectrolytes',
      tests: [
        { name: 'RENAL PROFILE EXTENDED', duration: '2-3DAYS', price: 5200 },
        { name: 'CREATINE CLEARANCE', duration: '2-3HRS', price: 6250 },
        // Add more tests as needed
      ],
      image: kidney,
    },
    thyroidFunction: {
      section: 'Thyroid Function',
      activeSection: 'thyroidFunction',
      tests: [
        { name: 'THYROID FUNCTIONS', duration: '2-3HRS', price: 3950 },
        { name: 'CARDIAC TROPONIN T', duration: '2-3HRS', price: 900 },
        // Add more tests as needed
      ],
      image: cardiac,
    },
    liverFunctionTest: {
      section: 'Liver Function Test',
      activeSection: 'liverFunctionTest',
      tests: [
        { name: 'ALBUMIN', duration: '2-3HRS', price: 4350 },
        { name: 'ALT/SGPT, serum', duration: '2-3HRS', price: 850 },
        // Add more tests as needed
      ],
      image: liver,
    },
    lipidProfile: {
      section: 'Lipid Profile',
      activeSection: 'lipidProfile',
      tests: [
        { name: 'LIPID PROFILE', duration: '2-3HRS', price: 3600 },
        // Add more tests as needed
      ],
      image: liver,
    },
  };


  const selectedTests = servicesData[activeSection]?.tests || [];

  return (
    <div ref={ref} className="main-container service-panel">
      <div className="panel-header">
        <h3 className="italic-bold">POPULAR TESTS</h3>
      </div>
      <div className="services">
        {Object.keys(servicesData).map((sectionKey, index) => {
          const section = servicesData[sectionKey];
          const firstTest = section.tests[0];
          const imageSrc = section.image;
          return (
            <ServiceCard
              key={index}
              title={section.section}
              section={section.activeSection}
              testName={firstTest.name}
              duration={firstTest.duration}
              price={firstTest.price}
              image={imageSrc}
              onClick={openServiceModal}
            />
          );
        })}
      </div>
      <Link to='/services' className="all-services">
        View All Tests
      </Link>
      <ServiceModal
        activeSection={activeSection}
        tests={selectedTests}
        isOpen={isServiceModalOpen}
        onClose={closeModals}
      />
    </div>
  );
});

export default Panel;
