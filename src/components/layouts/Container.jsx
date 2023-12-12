import React, { useState } from 'react'
import Navbar from './Navbar';
import Footer from './Footer'


const Container = ({ Page }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
 
  const openContactModal = () => {
    setIsContactModalOpen(true);
  };
 
  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };
 
  return (
    <div className="page-container">
     <Navbar />
      <div className="page-content-holder">
        <Page openContactModal={openContactModal} closeContactModal={closeContactModal} />
      </div>
      <Footer />
    </div>
  );
 };

 export default Container;
