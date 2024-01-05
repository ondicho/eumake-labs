import React, { useState } from 'react'
import './App.css'
import Container from './components/layouts/Container';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Staff from './components/pages/Staff';
import Services from './components/pages/Services';
import ContactUs from './components/pages/ContactUs';
import FAQs from './components/pages/FAQs';
import PathologyServices from './components/pages/PathologyServices';
import Team from './components/pages/Team';
import Gallery from './components/pages/Gallery';


function App() {
  const [count, setCount] = useState(0)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);


  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };


  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Container Page={Home} />}/>
          <Route exact path="/about-us" element={<Container Page={AboutUs} />}/>
          <Route exact path="/our-team" element={<Container Page={Team} />}/>
          <Route exact path="/staff" element={<Container Page={Staff} />}/>
          <Route exact path="/services" element={<Container Page={Services} />}/>
          <Route exact path="/faqs" element={<Container Page={FAQs} />}/>
          <Route exact path="/contact-us" element={<Container Page={ContactUs} />}/>
          <Route exact path="/pathology-services" element={<Container Page={PathologyServices} />}/>
          <Route exact path="/gallery" element={<Container Page={Gallery} />}/>
        </Routes>
        {isContactModalOpen && <ContactUsModal closeContactModal={closeContactModal} />}
      </BrowserRouter>
  )
}

export default App
