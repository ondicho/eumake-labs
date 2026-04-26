import React, { useState, useEffect } from 'react';
import './App.css';
import Container from './components/layouts/Container';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Staff from './components/pages/Staff';
import Services from './components/pages/Services';
import ContactUs from './components/pages/ContactUs';
import FAQs from './components/pages/FAQs';
import PathologyServices from './components/pages/PathologyServices';
import Team from './components/pages/Team';
import Gallery from './components/pages/Gallery';
import ServiceDetailPage from './components/pages/ServiceDetailsPage'; // Import ServiceDetailPage
import pathologyServicesData from './components/data/PathologyServicesData';
import TrackTest from './components/pages/TrackTest';
import Favicon from 'react-favicon';
import ReactGA from 'react-ga4';
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    const ga4 = ReactGA.default || ReactGA;
    ga4.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: document.title,
    });
    ga4.event(document.title, { method: pathname });
  }, [pathname]);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <>
      <Favicon url="/favicon.ico" />
      <Routes>
        {/* Existing routes */}
        <Route exact path="/" element={<Container Page={Home} />} />
        <Route exact path="/about-us" element={<Container Page={AboutUs} />} />
        <Route exact path="/our-team" element={<Container Page={Team} />} />
        <Route exact path="/staff" element={<Container Page={Staff} />} />
        <Route exact path="/services" element={<Container Page={Services} />} />
        <Route exact path="/faqs" element={<Container Page={FAQs} />} />
        <Route exact path="/contact-us" element={<Container Page={ContactUs} />} />
        <Route exact path="/gallery" element={<Container Page={Gallery} />} />
        <Route exact path="/track-test" element={<Container Page={TrackTest} />} />
        <Route path="/services/:index" element={<Container Page={() =><ServiceDetailPage pathologyServicesData={pathologyServicesData} />} />}/>



        {/* Route for PathologyServices */}
        <Route
          exact
          path="/pathology-services"
          element={<Container Page={() => <PathologyServices pathologyServicesData={pathologyServicesData} />} />}
        />

      </Routes>
      {isContactModalOpen && <ContactUsModal closeContactModal={closeContactModal} />}
    </>
  );
}

export default App;
