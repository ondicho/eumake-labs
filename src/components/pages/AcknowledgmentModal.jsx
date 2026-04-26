import React from 'react';
import { X, CalendarCheck } from 'lucide-react';
import '../../assets/css/modal.css';

const AcknowledgmentModal = ({ isOpen, onClose, formattedTitle, name }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
        <div className="premium-modal acknowledgment-modal">
          <div className="modal-close-btn" onClick={onClose}>
              <X size={24} />
          </div>
          
          <div className="modal-icon-wrap ack-icon">
              <CalendarCheck size={40} color="#2bb9ff" />
          </div>

          <h3 className="modal-header-premium">{formattedTitle}</h3>
          
          <div className="modal-body">
            <p className="modal-text">
              Dear <strong>{name}</strong>,<br /><br />
              We have successfully received your service request! Our medical team will reach out to you within the hour on the phone number provided to finalize your appointment.
            </p>
          </div>
          
          <div className="modal-actions">
              <button type="button" className="premium-submit-btn" onClick={onClose}>
                  Done
              </button>
          </div>
        </div>
    </div>
  );
};

export default AcknowledgmentModal;
