import React, { useState, useEffect } from 'react';
import '../../assets/css/styles.css';
import appointment from '../../assets/images/appointment.png';
import track from '../../assets/images/track.png';
import top from '../../assets/images/top.png';
import rider from '../../assets/images/rider.png';
import Appointment from '../pages/Appointment';
import { useBackgroundColor } from '../layouts/BackgroundColorContext';

const Widgets = () => {
  const { backgroundColor } = useBackgroundColor();
  const [isAppointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [isSampleModalOpen, setSampleModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Log the background color as you scroll
      console.log('Background Color While Scrolling:', backgroundColor);
    };

    // Add event listener for 'scroll' event
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [backgroundColor]); // Re-run effect when backgroundColor changes

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Use smooth scroll behavior
    });
  };

  const getIconSource = (icon) => {
    // Check if the background color is #00063f
    if (backgroundColor === '#00063f') {
      // Use the white version of the icon if background is #00063f
      const whiteIcon = icon.replace('.png', 'White.png');

      // Check if the white version of the icon exists, otherwise use the original icon
      return whiteIcon !== icon ? whiteIcon : icon;
    }

    // Use the original icon if the background color is not #00063f
    return icon;
  };

  return (
    <>
      <div className="widgets">
        <div className="widget-container">
          <img
            src={getIconSource(appointment)}
            alt="Appointment"
            className="widget appointment"
            onClick={openAppointmentModal}
          />
          <div className="modal">
            <p>Book Appointment</p>
          </div>
        </div>
        <div className="widget-container">
          <img
            src={getIconSource(rider)}
            alt="Order Now"
            className="widget order-now"
            onClick={openSampleModal}
          />
          <div className="modal">
            <p> Sample Collection</p>
          </div>
        </div>

        <div className="widget-container">
          <img
            src={getIconSource(track)}
            alt="Back to Top"
            className="widget back-to-top"
            onClick={scrollToTop}
          />
          <div className="modal">
            <p>Track My Test</p>
          </div>
        </div>
        <div className="widget-container">
          <img
            src={getIconSource(top)}
            alt="Back to Top"
            className="widget back-to-top"
            onClick={scrollToTop}
          />
          <div className="modal">
            <p>Back To Top</p>
          </div>
        </div>
      </div>

      <Appointment
        isOpen={isAppointmentModalOpen || isSampleModalOpen}
        onClose={closeModals}
      />
    </>
  );
};

export default Widgets;
