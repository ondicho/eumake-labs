// Widgets.js
import React, { useState } from 'react';
import '../../assets/css/styles.css';
import appointment from '../../assets/images/appointment.png';
import sample from '../../assets/images/sample.png';
import top from '../../assets/images/top.png';
import Appointment from '../pages/Appointment';

const Widgets = () => {
  const [isAppointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [isSampleModalOpen, setSampleModalOpen] = useState(false);

  const openAppointmentModal = () => {
    setAppointmentModalOpen(true);
    setSampleModalOpen(false); // Close other modals if open
  };

  const openSampleModal = () => {
    setSampleModalOpen(true);
    setAppointmentModalOpen(false); // Close other modals if open
  };

  const closeModals = () => {
    setAppointmentModalOpen(false);
    setSampleModalOpen(false);
  };

  return (
    <>
      <div className="widgets">
        <div className="widget-container">
          <img
            src={appointment}
            alt="Appointment"
            className="widget appointment"
            onClick={openAppointmentModal}
          />
          <div className="modal">
            <p>Schedule physical appointment</p>
          </div>
        </div>
        <div className="widget-container">
          <img
            src={sample}
            alt="Order Now"
            className="widget order-now"
            onClick={openSampleModal}
          />
          <div className="modal">
            <p>Schedule sample collection</p>
          </div>
        </div>
        <div className="widget-container">
          <img src={top} alt="Back to Top" className="widget back-to-top" />
          <div className="modal">
            <p>Back to Top</p>
          </div>
        </div>
      </div>

      <Appointment isOpen={isAppointmentModalOpen} onClose={closeModals} />
    </>
  );
};

export default Widgets;
