import React, { useState } from 'react';
import { X, CheckCircle, Shield } from 'lucide-react';
import '../../assets/css/modal.css';

const ConfirmationModal = ({ isOpen, onClose, formattedTitle, name, onConfirm }) => {
    const [isConsentChecked, setIsConsentChecked] = useState(false);

    if (!isOpen) return null;

    const handleInputChange = (e) => {
        setIsConsentChecked(e.target.checked);
    };

    return (
        <div className="modal-overlay">
            <div className="premium-modal confirmation-modal">
                <div className="modal-close-btn" onClick={onClose}>
                    <X size={24} />
                </div>
                
                <div className="modal-icon-wrap">
                    <Shield size={32} color="#2bb9ff" />
                </div>
                
                <h3 className="modal-header-premium">{formattedTitle}</h3>
                
                <div className="modal-body">
                    <p className="modal-text">
                        Dear <strong>{name}</strong>,<br/>
                        Please confirm that all provided details are correct to secure your appointment.
                    </p>
                    
                    {!isConsentChecked && (
                        <div className="modal-error-text">
                            * You must accept the terms before proceeding.
                        </div>
                    )}
                    
                    <div className="form-group-premium modal-consent-group">
                        <label className="checkbox-container">
                            <input
                                type="checkbox"
                                id="consent"
                                name="consent"
                                className="premium-checkbox"
                                checked={isConsentChecked}
                                onChange={handleInputChange}
                            />
                            <span className="checkbox-custom"></span>
                            <span className="consent-text">I consent to Eumake safely storing my data according to the privacy policy.</span>
                        </label>
                    </div>
                </div>

                <div className="modal-actions">
                    <button type="button" className="nav-cta-btn modal-cancel" onClick={onClose}>Cancel</button>
                    <button type="button" className="premium-submit-btn modal-confirm" onClick={onConfirm} disabled={!isConsentChecked}>
                        Confirm Booking <CheckCircle size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
