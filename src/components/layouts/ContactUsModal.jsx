import React from 'react';
import '../../assets/css/navbar.css';

const ContactUsModal = ({ isOpen, closeContactModal, modalContent }) => {
 if (!isOpen) {
   return null;
 }

 return (
   <div className="contact-us-modal-container">
     {modalContent}
     <button id="closeModalBtn" onClick={closeContactModal}>Close Modal</button>
   </div>
 );
};

export default ContactUsModal;
