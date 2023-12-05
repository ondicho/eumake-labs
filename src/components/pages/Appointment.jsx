// Appointment.js
import React, { useState } from 'react';

const Appointment = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="appointment-modal">
          {/* Your appointment form */}
          <button onClick={onClose}>Close</button>
        </div>
      )}
    </>
  );
};

export default Appointment;
