import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ConfirmationModal from '../pages/ConfirmationModal';
import AcknowledgmentModal from '../pages/AcknowledgmentModal';

const SendToMail = ({ isOpen, onClose, formData, handleSubmit }) => {
  const formRef = useRef();

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isAcknowledgmentModalOpen, setIsAcknowledgmentModalOpen] = useState(false);

  const sendEmail = (e) => {
    e?.preventDefault();

    console.log('Form data:', formData);

    emailjs.sendForm('service_zoxnhmg', 'template_iq1xwdp', formRef.current, 'aaRIiNMq7_m7XJEMt')
      .then((result) => {
        console.log('SUCCESS!', result.status, result.text);
      }, (error) => {
        console.error('FAILED...', error);
        if (error.status === 500) {
          console.error('Server error occurred. Please try again later.');
        } else {
          console.error('An unknown error occurred. Please try again.');
        }
      });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    console.log('Form data:', formData);

    // Check if the form is valid
    const isValidForm = validateForm();

    // Set the confirmation modal to open if the form is valid
    if (isValidForm) {
      setIsConfirmationModalOpen(true);
      console.log('Confirmation modal opened'); // Log confirmation modal opening
    }
  };



  const handleConfirm = () => {
    console.log('Confirmation modal confirmed');
    sendEmail(); // Remove the (e) argumentnpm  here
    setIsConfirmationModalOpen(false);
    console.log('Confirmation modal closed');

    setIsAcknowledgmentModalOpen(true); // A
    onClose();
    console.log('Confirmation modal closed');
  };


  const [missingFields, setMissingFields] = useState([]);

  const validateForm = () => {
    const requiredFields = ['name', 'email', 'phone', 'date', 'selectedCategory', 'selectedTest'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    setMissingFields(missingFields);
    return missingFields.length === 0;
  };






  return (
    <>
      {missingFields.length > 0 && (
        <div className="error-message">
          <p>Please fill in all required fields: {missingFields.join(', ')}</p>
        </div>
      )}
      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onConfirm={handleConfirm}
        onCancel={() => setIsConfirmationModalOpen(false)}
        name={formData.name}
        formattedTitle='Confirm Details'
      />

      {isAcknowledgmentModalOpen && (
        <AcknowledgmentModal
          isOpen={isAcknowledgmentModalOpen} // Check this prop
          onClose={() => setIsAcknowledgmentModalOpen(false)}
          formattedTitle="Acknowledgment"
          name={formData.name}
        />

      )}



      <form ref={formRef} onSubmit={handleFormSubmit}>
        {/* Hidden form fields */}
        <input type="hidden" name="name" value={formData.name} />
        <input type="hidden" name="email" value={formData.email} />
        <input type="hidden" name="phone" value={formData.phone} />
        <input type="hidden" name="specimenCollection" value={formData.specimenCollection} />
        <input type="hidden" name="location" value={formData.location} />
        <input type="hidden" name="date" value={formData.date} />
        <input type="hidden" name="selectedCategory" value={formData.selectedCategory} />
        <input type="hidden" name="selectedTest" value={formData.selectedTest} />
        {/* Submit button */}
        {!isConfirmationModalOpen && (
          <button type="submit" className="test-submit">Submit</button>
        )}
      </form>
    </>


  );
};

export default SendToMail;
