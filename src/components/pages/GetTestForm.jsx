import React, { useState } from 'react';
import '../../assets/css/services.css';
import AcknowledgmentModal from './AcknowledgmentModal';
import SendToMail from '../data/SendToMail';
import ConfirmationModal from './ConfirmationModal';
import servicesData from '../data/ServicesData';
import rider from '../../assets/images/rider.png';

const GetTestForm = ({ isOpen, onClose, activeSection, categories, selectedCategory }) => {
  const [isAcknowledgmentModalOpen, setIsAcknowledgmentModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specimenCollection: false,
    location: '',
    date: '',
    selectedCategory: '',
    selectedTest: '',
  });

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      specimenCollection: false,
      location: '',
      date: '',
      selectedCategory: '',
      selectedTest: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setFormData({
      ...formData,
      selectedCategory,
      selectedTest: '', // Reset the test selection when category changes
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic goes here
  };

  const getTestsForCategory = (selectedCategory) => {
    // Find the category object where the section matches the selectedCategory
    const category = Object.values(servicesData).find(cat => cat.section === selectedCategory);
  
    // If the category was found, return its tests, otherwise return an empty array
    return category ? category.tests : [];
  };
  
  
  // Usage example:
  // const selectedCategory = "General Wellness";
  const tests = getTestsForCategory(selectedCategory);



  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const formTitle =
    typeof activeSection === 'string'
      ? `Book ${capitalizeFirstLetter(activeSection.replace(/([A-Z])/g, ' $1').trim())} Test`
      : '';

  const filteredTests = servicesData[selectedCategory]?.tests || [];
  const [missingFields, setMissingFields] = useState([]);

  return (
    <div className="get-test-form">
      <form onSubmit={handleSubmit}>
        <h4>Book A Test</h4>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={missingFields.includes('name') ? 'missing-field' : ''}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={missingFields.includes('email') ? 'missing-field' : ''}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={missingFields.includes('phone') ? 'missing-field' : ''}
          />
        </div>
        <div className="form-group">
          <label htmlFor="specimenCollection">Specimen Collection:   
          {/* <img
            src={rider}
            alt="Order Now"
            className="widget order-now"
          /> */}
          </label>
          <input
            type="checkbox"
            id="specimenCollection"
            name="specimenCollection"
            checked={formData.specimenCollection}
            onChange={handleInputChange}
          />
        </div>
        {formData.specimenCollection && (
          <div className="form-group">
            <label htmlFor="location" className={missingFields.includes('location') ? 'missing-field' : ''}>
              Location:
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="date" className={missingFields.includes('date') ? 'missing-field' : ''}>
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className={missingFields.includes('date') ? 'missing-field' : ''}
          />
        </div>
        <div className="form-group">
          <label htmlFor="selectedCategory">Select Category:</label>
          <select
            id="selectedCategory"
            name="selectedCategory"
            value={formData.selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {formData.selectedCategory && (
          <div className="form-group">
            <label htmlFor="selectedTest">Select Test:</label>
            <select
              id="selectedTest"
              name="selectedTest"
              value={formData.selectedTest}
              onChange={(event) =>
                setFormData({ ...formData, selectedTest: event.target.value })
              }
            >
              <option value="">Select a test</option>
              {/* Use formData.selectedCategory to fetch tests */}
              {getTestsForCategory(formData.selectedCategory).map((test, index) => (
                <option key={index} value={test.name}>
                  {test.name}
                </option>
              ))}
            </select>
          </div>
        )}

      </form>
      <SendToMail formData={formData} handleResetForm={handleResetForm} handleSubmit={handleSubmit} isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default GetTestForm;
