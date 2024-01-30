import React, { useState } from 'react';
import FormInput from '../layouts/FormInput';
import GetTestForm from './GetTestForm';
import '../../assets/css/modal.css';
import close from '../../assets/images/close.png';
import servicesData from '../data/ServicesData';

const ServiceModal = ({ isOpen, onClose, title, activeSection, tests }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    test: '',
    consent: false,
  });

  const sectionNames = Object.values(servicesData).map(category => category.section);
  const [selectedCategory, setSelectedCategory] = useState('generalWellness');

  const handleChange = (name, value) => {
    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

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
          <h4>{title}</h4>
          {/* Utilize GetTestForm */}
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


          <div className="modal-close">
            <img className="modal-icon" src={close} alt="close" onClick={onClose} />
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceModal;
