import React, { useState } from 'react';
import close from '../../assets/images/close.png';
import '../../assets/css/modal.css';

const ConfirmationModal = ({ isOpen, onClose, formattedTitle, name }) => {
    const [isConsentChecked, setIsConsentChecked] = useState(false);

    const handleInputChange = (e) => {
        setIsConsentChecked(e.target.checked);
    };

    return (
        <>
            {isOpen && (
                <div className="appointment-modal acknowledgment-modal">
                    <h4 className="modal-header">{formattedTitle}</h4>
                    <p>
                        Dear {name},
                    </p>

                    <p>
                        Are you sure you want to submit your details?
                    </p>
                    <p>
                        <div className="form-group">
                            <label htmlFor="consent">Allow Eumake to store your data?</label>
                            <input
                                type="checkbox"
                                id="consent"
                                name="consent"
                                checked={isConsentChecked}
                                onChange={handleInputChange}
                            />
                        </div>
                    </p>
                    <div className="modal-close">
                        <img className="modal-icon" src={close} alt="close" onClick={onClose} />
                    </div>
                    <button type="submit" className="test-submit">Submit</button>
                </div>
            )}
        </>
    );
};

export default ConfirmationModal;
