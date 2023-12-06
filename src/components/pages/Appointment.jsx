// Appointment.js
import React, { useState } from 'react';
import FormInput from '../layouts/FormInput';
import '../../assets/css/modal.css';
import close from '../../assets/images/close.png'


const Appointment = ({ isOpen, onClose, title }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    test:'',
    date: '',
    consent: false,
  });

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
          <h4>Make Ordrer</h4>
          <form className='modal-form' onSubmit={handleSubmit}>
            <FormInput
              label="Name:"
              type="text"
              name="name"
              value={customerInfo.name}
              onChange={(value) => handleChange('name', value)}
              required
            />

            <FormInput
              label="Email:"
              type="email"
              name="email"
              value={customerInfo.email}
              onChange={(value) => handleChange('email', value)}
              required
            />

            <FormInput
              label="Phone:"
              type="tel"
              name="phone"
              pattern="^\+254\d{9}$"
              value={customerInfo.phone}
              onChange={(value) => handleChange('phone', value)}
              required
            />

            <FormInput
              label="Date:"
              type="date"
              name="date"
              value={customerInfo.date}
              onChange={(value) => handleChange('date', value)}
              required
            />
            
            <FormInput
              label='Test:'
              type='select' // Assume 'select' is handled in your FormInput
              name='test'
              value={customerInfo.test}
              onChange={(value) => handleChange('test', value)}
              required
              options={[
                'Select Test',
                'HIV test',
                'Endoscopy',
                'Thyroid test',
                'Hematology',
                'Liver/Pancreas',
              ]}
            />

            <FormInput
              label="Consent:"
              type="checkbox"
              name="consent"
              checked={customerInfo.consent}
              onChange={(value) => handleChange('consent', value)}
              required
            >
              I agree to the terms and conditions
            </FormInput>

            <button className="modal-submit" type="submit">Submit</button>
          </form>
          <div className="modal-close">
            <button onClick={onClose}><img className="modal-icon" src={close} alt="close" /></button>

          </div>
        </div>
      )}
    </>
  );
};

export default Appointment;
