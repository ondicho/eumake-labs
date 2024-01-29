import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const SendToMail = ({ formData }) => {
 const formRef = useRef();

 const sendEmail = (e) => {
    e.preventDefault();

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

 return (
    <form ref={formRef} onSubmit={sendEmail}>
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
      <button type="submit" className="test-submit">Submit</button>
    </form>
 );
};

export default SendToMail;
