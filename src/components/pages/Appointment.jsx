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

  const [selectedCategory, setSelectedCategory] = useState('generalWellness');


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
            isOpen={isOpen}
            onClose={onClose}
            activeSection={'generalWellness'}
            tests={servicesData[selectedCategory].tests}
            categories={sectionNames}
            onSubmit={handleSubmit}
            selectedCategory={selectedCategory}
            onCategoryChange={(selectedCategory) => setSelectedCategory(selectedCategory)}
          />




          <div className="modal-close"><img className="modal-icon" src={close} alt="close" onClick={onClose} />

          </div>
        </div>
      )}
    </>
  );
};

export default Appointment;
