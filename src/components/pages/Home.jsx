import React, { useRef } from 'react';
import PharmacyCarousel from "./PharmacyCarousel";
import Panel from "./Panel";
import '../../assets/css/home.css';
import CompanyProfile from "./CompanyProfile";
import Widgets from "../layouts/Widgets";
import InsurancePartners from './InsurancePartners';
import CustomerReview from './CustomerReview';
import ContactUsModal from '../layouts/ContactUsModal';


const Home = ({ openContactModal }) => {
  const servicesRef = useRef(null);

  return (
    <>
      <PharmacyCarousel />
      <Panel ref={servicesRef} />
      <CompanyProfile />
      <CustomerReview />
      <InsurancePartners />
      <Widgets />

      {/* Add a button or element to trigger the contact modal */}
      {/* <button onClick={openContactModal}>Contact Us</button> */}
    </>
  );
};

export default Home;
