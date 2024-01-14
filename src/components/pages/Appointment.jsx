// Appointment.js
import React, { useState } from 'react';
import FormInput from '../layouts/FormInput';
import '../../assets/css/modal.css';
import close from '../../assets/images/close.png'
import GetTestForm from './GetTestForm';
import servicesData from '../data/ServicesData';


const Appointment = ({ isOpen, onClose, title }) => {


  const handleChange = (name, value) => {
    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const [selectedCategory, setSelectedCategory] = useState('');


  const sectionNames = Object.values(servicesData).map(category => category.section);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission
    // You can access customerInfo state to get the form data
    console.log('Form submitted:', customerInfo);
    onClose(); // Close the modal after submission
  };

  return (
    <>
      {isOpen && (
        <div className="appointment-modal">

          <GetTestForm
            activeSection={'generalWellness'}
            tests={servicesData['generalWellness'].tests}
            categories={sectionNames}
            onSubmit={handleSubmit}  // Change to handleSubmit
            selectedCategory={selectedCategory}
            onCategoryChange={(category) => setSelectedCategory(category)}
          />




          <div className="modal-close"><img className="modal-icon" src={close} alt="close" onClick={onClose} />

          </div>
        </div>
      )}
    </>
  );
};

export default Appointment;
