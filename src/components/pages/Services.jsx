import React, { useState } from 'react';
import '../../assets/css/services.css';
import cardiac from '../../assets/images/heart.png'
import liver from '../../assets/images/liver.png'
import kidney from '../../assets/images/kidney.png'
import wellness from '../../assets/images/health.png'
import other from '../../assets/images/blood-sample.png'
import GetTestForm from './GetTestForm';
import servicesData from '../data/ServicesData';

const iconImages = {
  generalWellness: wellness,
  renalElectrolytes: kidney,
  cardiacAssessment: cardiac,
  diabetes: other,
  liverFunctionTest: liver,
  lipidProfile: other,
  thyroidFunctionTest: other,
};



const sectionNames = Object.values(servicesData).map(category => category.section);

const Services = () => {
  const [activeSection, setActiveSection] = useState('generalWellness');
  const [selectedCategory, setSelectedCategory] = useState('');

  const toggleSection = (section) => {
    setActiveSection(section);
    setSelectedCategory('');
  };

  const handleFormSubmit = (formData) => {
    console.log('Form data submitted:', formData);
    // Add logic to handle the form data, e.g., send it to a server
  };

  return (
    <div className="main-container service-container">
      <div className="test-sections">
        {Object.keys(servicesData).map((section) => (
          <button
            key={section}
            className={`section-button ${activeSection === section ? 'active' : ''}`}
            onClick={() => toggleSection(section)}
          >
            <img src={iconImages[section]} alt={section} className="section-icon" />
            {servicesData[section].section}
          </button>
        ))}
      </div>
      {activeSection && (
        <div className="section-table">
          <h4>Test Catalogue {'>'} {servicesData[activeSection].section}</h4>
          <table className="custom-table">
            <thead className='head'>
              <tr>
                <th>Test Name</th>
                <th>Duration</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {servicesData[activeSection].tests.map((test, index) => (
                <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                  <td>{test.name}</td>
                  <td>{test.duration}</td>
                  <td>{test.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="form-area">
      <GetTestForm
          activeSection={activeSection}
          tests={servicesData[activeSection].tests}
          categories={sectionNames}
          onSubmit={handleFormSubmit}
          selectedCategory={selectedCategory}
          onCategoryChange={(category) => setSelectedCategory(category)}
        />
      </div>
    </div>
  );
};

export default Services;
