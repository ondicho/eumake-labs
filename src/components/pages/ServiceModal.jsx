import React, { useState } from 'react';
import FormInput from '../layouts/FormInput';
import '../../assets/css/modal.css';
import close from '../../assets/images/close.png'


const ServiceModal = ({ isOpen, onClose, title }) => {
    const [customerInfo, setCustomerInfo] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        test: '',
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
                    <h4>Service Modal</h4>
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

                        <button className="modal-submit" type="submit">Submit</button>
                    </form >
                    <div className="modal-close">
                        <img className="modal-icon" src={close} alt="close" onClick={onClose} />

                    </div>
                </div>
            )}
        </>
    );
}

export default ServiceModal;