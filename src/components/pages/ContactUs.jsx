import center from '../../assets/images/contact-center.png'
import '../../assets/css/contact.css';
import FormInput from '../layouts/FormInput';
import React, { useState } from 'react';

const ContactUs = () => {
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        consent: false,
        requestCallBack: false,
    });

    const handleChange = (name, value) => {
        setContactInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle the form submission
        // You can access customerInfo state to get the form data
        console.log('Form submitted:', contactInfo);
        onClose(); // Close the modal after submission
    };
    return (
        <>
            <div className="main-container contact-point">


                <img src={center} alt="contact-center" />

                <div className="contact-text-area">
                    <h4>Contact Center</h4>
                    <form className='contact-center-form' onSubmit={handleSubmit}>
                        <FormInput
                            label="Name:"
                            type="text"
                            name="name"
                            value={contactInfo.name}
                            onChange={(value) => handleChange('name', value)}
                            required
                        />
                        <FormInput
                            label="Email:"
                            type="email"
                            name="email"
                            value={contactInfo.email}
                            onChange={(value) => handleChange('email', value)}
                            required
                        />

                        <FormInput
                            label="Phone:"
                            type="tel"
                            name="phone"
                            pattern="^\+254\d{9}$"
                            value={contactInfo.phone}
                            onChange={(value) => handleChange('phone', value)}
                            required
                        />

                        <FormInput
                            label="Message:"
                            type="textarea"
                            name="message"
                            value={contactInfo.message}
                            onChange={(value) => handleChange('message', value)}
                            required
                        />
                        <FormInput
                            label="Request callback:"
                            type="checkbox"
                            name="requestCallBack"
                            checked={contactInfo.requestCallBack}
                            onChange={(value) => handleChange('requestCallBack', value)}
                            required

                        />
                        <button className="modal-submit" type="submit">Submit</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default ContactUs;