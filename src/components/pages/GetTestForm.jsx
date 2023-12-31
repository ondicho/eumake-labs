// GetTestForm.js
import React, { useState } from 'react';
import '../../assets/css/services.css';
import AcknowledgmentModal from './AcknowledgmentModal';

const GetTestForm = ({ activeSection, tests, onSubmit }) => {

  console.log('activeSection:', activeSection);
  console.log('tests:', tests);

  const [isAcknowledgmentModalOpen, setIsAcknowledgmentModalOpen] = useState(false);

  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specimenCollection: false,
    location: '',
    date: '',
    selectedTest: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [missingFields, setMissingFields] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const requiredFields = ['name', 'email', 'phone', 'date', 'selectedTest'];
    const missing = requiredFields.filter((field) => !formData[field]);
  
    if (missing.length > 0) {
      setMissingFields(missing);
      return;
    }
  
    // Form is valid, proceed with submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      specimenCollection: false,
      location: '',
      date: '',
      selectedTest: '',
    });
  
    setIsModalOpen(false); // Close the form modal
  
    setIsAcknowledgmentModalOpen(true); // Open the acknowledgment modal
  };

  
  const closeModal = () => {
    setIsModalOpen(false);
    setIsAcknowledgmentModalOpen(false); // Close acknowledgment modal when GetTestForm modal is closed
    setMissingFields([]);
    setFormData({
      name: '',
      email: '',
      phone: '',
      specimenCollection: false,
      location: '',
      date: '',
      selectedTest: '',
    });
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Check if activeSection is a string before using replace method
  const formTitle = typeof activeSection === 'string'
    ? `Book ${capitalizeFirstLetter(activeSection.replace(/([A-Z])/g, ' $1').trim())} Test`
    : '';
  return (
    <div className="get-test-form">
      <form onSubmit={handleSubmit}>
        <h4>{formTitle}</h4>
        {/* Uniform label and input sizes */}
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
          <label htmlFor="specimenCollection">Specimen Collection:</label>
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
          />
        </div>
        <div className="form-group">
          <label htmlFor="selectedTest" className={missingFields.includes('selectedTest') ? 'missing-field' : ''}>
            Select Test:
          </label>
          {/* Dropdown for selected test */}
          <select
            id="selectedTest"
            name="selectedTest"
            value={formData.selectedTest}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Select a test
            </option>
            {tests.map((test, index) => (
              <option key={index} value={test.name}>
                {test.name}
              </option>
            ))}
          </select>
        </div>
        {/* Book Test button */}
        <button type="submit" className="test-submit">
          Book Test
        </button>
      </form>
      <AcknowledgmentModal
        isOpen={isAcknowledgmentModalOpen}
        onClose={closeModal} // Close GetTestForm modal when acknowledgment modal is closed
        formattedTitle={`Booked ${capitalizeFirstLetter(activeSection.replace(/([A-Z])/g, ' $1').trim())} Test`}
        name={formData.name}
      />
    </div>
  );
};

export default GetTestForm;
