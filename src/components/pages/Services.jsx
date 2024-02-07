import React, { useState } from 'react';
import '../../assets/css/services.css';
import cardiac from '../../assets/images/heart.png'
import liver from '../../assets/images/liver.png'
import kidney from '../../assets/images/kidney.png'
import wellness from '../../assets/images/health.png'
import other from '../../assets/images/blood-sample.png'
import diabetes from '../../assets/images/diabetes.png'
import thyroid from '../../assets/images/thyroid.png'
import lipid from '../../assets/images/lipid.png'
import search from '../../assets/images/search.png'

import GetTestForm from './GetTestForm';
import servicesData from '../data/ServicesData';

const iconImages = {

  generalWellness: wellness,
  renalElectrolytes: kidney,
  boneMetabolism: other,
  cardiacAssessment: cardiac,
  diabetes: diabetes,
  liverFunctionTest: liver,
  lipidProfile: lipid,
  thyroidFunctionTest: thyroid,
  inflamationInfection: other,
  pancreas: other,
  otherBioChemistry: other,
  urineBioChemistry: other,
  endocrinology: other,
  tumorMakers: other,
  serology: other,
  haematology: other,
  coagulation: other,
  boneMarrowStudies: other,
  hematoOncology: other,
  microbiology: other,
  immunology: other,
  electrophoresis: other,
  molecular: other,
  hispatology: other,
  cytology: other
};


const sectionNames = Object.values(servicesData).map(category => category.section);


const Services = () => {
  const [activeSection, setActiveSection] = useState('generalWellness');
  const [selectedCategory, setSelectedCategory] = useState('');

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // State to control the visibility of the modal
  const [showModal, setShowModal] = useState(false);

  // Function to toggle the modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter function to filter services based on search query
  const filteredServices = Object.keys(servicesData).filter((serviceKey) =>
    servicesData[serviceKey].section.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const toggleSection = (section) => {
    // Find the element you want to scroll to by its ID
    const elementId = `section-table`;
    const element = document.getElementById(elementId);
  
    if (element) {
      // Use element.scrollIntoView with the block option set to 'start'
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  
    setActiveSection(section);
    setSelectedCategory('');
  };
  
  const handleFormSubmit = (formData) => {
    console.log('Form data submitted:', formData);
    // Add logic to handle the form data, e.g., send it to a server
  };

  const handleSearch = (event) => {
    event.preventDefault();
    let filteredResults = []; // Initialize an empty array to hold the results

    // Loop through the entries of servicesData
    for (const [category, details] of Object.entries(servicesData)) {
      // Check if the category section matches the search query
      if (details.section.toLowerCase().includes(searchQuery.toLowerCase())) {
        filteredResults.push({ category, details });
      } else {
        // Filter tests within the category
        const filteredTests = details.tests.filter(test =>
          test.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // If there are matching tests, add the category to the results
        if (filteredTests.length > 0) {
          filteredResults.push({ category, details: { ...details, tests: filteredTests } });
        }
      }

      // Stop searching if we have found enough results
      if (filteredResults.length >= 3) {
        break;
      }
    }

    // Update the state with the filtered results
    setSearchResults(filteredResults);
    // Toggle the modal to show the search results
    toggleModal();

    // If no results were found, log a message or set a flag to show an error message
    if (filteredResults.length === 0) {
      console.log('No search results found.');
      // Alternatively, you could set an error state and display the message in the UI
      // setError('No search results found.');
    }
  };


  return (
    <div className="main-container service-container">
      <div className="pathology-header">
        <h4>Test Catalogue</h4>
        <input
          type="text"
          placeholder="Search for services..."
          value={searchQuery}
          onChange={handleSearchChange}
          className='search'
        />
        <button className='search-button' onClick={handleSearch}>
          <img src={search} alt="Search" className="search-icon" />
        </button>

      </div>


      <div className="test-sections">


        {filteredServices.map((section) => (
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
        <div className="section-table" id="section-table">
          <h4>{servicesData[activeSection].section}</h4>
          <table className="custom-table">
            <thead className='head'>
              <tr>
                <th>Test Name</th>
                <th>Duration</th>
                {/* <th>Price</th> */}
              </tr>
            </thead>
            <tbody>
              {servicesData[activeSection].tests.map((test, index) => (
                <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                  <td>{test.name}</td>
                  <td>{test.duration}</td>
                  {/* <td>{test.price}</td> */}
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
