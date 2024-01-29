import React, { useState } from 'react';
import '../../assets/css/services.css';
import AcknowledgmentModal from './AcknowledgmentModal';
import SendToMail from '../data/SendToMail';
import ConfirmationModal from './ConfirmationModal';

const GetTestForm = ({ activeSection, tests, categories }) => {
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [missingFields, setMissingFields] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = ['name', 'email', 'phone', 'date', 'selectedCategory', 'selectedTest'];
    const missing = requiredFields.filter((field) => !formData[field]);

    if (missing.length > 0) {
      setMissingFields(missing);
      return;
    }

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

    setIsModalOpen(false);

    setIsConfirmationModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
    setIsAcknowledgmentModalOpen(false);
    setMissingFields([]);
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
  const handleConfirm = async () => {
    try {
      // Close the confirmation modal
      setIsConfirmationModalOpen(true);

      // Wait for the email to be sent
      await sendEmail(formData);

      // If the email is sent successfully, open the acknowledgement modal
      setIsAcknowledgmentModalOpen(true);
    } catch (error) {
      console.error("Failed to send email", error);
      // Handle the error appropriately
    }
  };




  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const formTitle =
    typeof activeSection === 'string'
      ? `Book ${capitalizeFirstLetter(activeSection.replace(/([A-Z])/g, ' $1').trim())} Test`
      : '';

  return (
    <div className="get-test-form">
      <form onSubmit={handleSubmit}>
        <h4>{formTitle}</h4>
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
            className={missingFields.includes('date') ? 'missing-field' : ''}
          />
        </div>
        <div className="form-group">
          <label htmlFor="selectedCategory" className={missingFields.includes('selectedCategory') ? 'missing-field' : ''}>
            Select Category:
          </label>
          {/* Dropdown for selected category */}
          <select
            id="selectedCategory"
            name="selectedCategory"
            value={formData.selectedCategory}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Select a Category
            </option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
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
        {/* Display error messages for missing fields */}
        {missingFields.length > 0 && (
          <div className="form-error">
            Please fill in the required fields: {missingFields.join(', ')}
          </div>
        )}
      </form>
      <SendToMail formData={formData} />
      <AcknowledgmentModal
        isOpen={isAcknowledgmentModalOpen}
        onClose={closeModal}
        formattedTitle={`Booked ${capitalizeFirstLetter(activeSection.replace(/([A-Z])/g, ' $1').trim())} Test`}
        name={formData.name}
      />
      <ConfirmationModal
        onConfirm={handleConfirm}
        onCancel={() => setIsConfirmationModalOpen(false)}
      />

    </div>
  );
};

export default GetTestForm;
