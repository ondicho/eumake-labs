// AcknowledgmentModal.js
import React from 'react';
import close from '../../assets/images/close.png';
import '../../assets/css/modal.css';

const AcknowledgmentModal = ({ isOpen, onClose, formattedTitle, name }) => {
  return (
    <>
      {isOpen && (
        <div className="appointment-modal acknowledgment-modal">
          <h4 className="modal-header">{formattedTitle}</h4>
          <p>
            Dear {name}, we have received your service request, and our team will reach out within the hour on the number you have provided.
          </p>
          <div className="modal-close">
            <img className="modal-icon" src={close} alt="close" onClick={onClose} />
          </div>
        </div>
      )}
    </>
  );
};

export default AcknowledgmentModal;
