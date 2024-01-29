import React, { useState } from 'react';
import close from '../../assets/images/close.png';

const ConfirmationModal = ({ isOpen, onClose, formattedTitle, name, handleConfirm }) => {
    const [isConsentChecked, setIsConsentChecked] = useState(false);

    const handleInputChange = (e) => {
        setIsConsentChecked(e.target.checked);
    };

    const handleClose = () => {
        onClose();
    };
    
    const handleSubmit = () => {
        handleConfirm();
    };
    

    return (
        <>
            {isOpen && (
                <div className="appointment-modal acknowledgment-modal">
                    <h4 className="modal-header">{formattedTitle}</h4>
                    <p>
                        Dear {name},
                        Are you sure you want to submit your details?
                    </p>
                    {!isConsentChecked && (
                        <div className="error-message">
                            <p>Please check the checkbox to proceed</p>
                        </div>
                    )}
                    <div className="form-group consent">
                        <label className='consent-label' htmlFor="consent">Allow Eumake to store your data?</label>
                        <input
                            type="checkbox"
                            id="consent"
                            name="consent"
                            checked={isConsentChecked}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="modal-close">
                        <img className="modal-icon" src={close} alt="close" onClick={handleClose} />
                    </div>
                    <button type="button" className="confirm-submit" onClick={handleSubmit}>Submit</button>
                </div>
            )}
        </>
    );
};

export default ConfirmationModal;
