import React, { useRef } from 'react';
import PharmacyCarousel from "./PharmacyCarousel";
import Panel from "./Panel";
import '../../assets/css/home.css';
import CompanyProfile from "./CompanyProfile";
import Widgets from "../layouts/Wigdets";
import InsurancePartners from './InsurancePartners';
import CustomerReview from './CustomerReview';

const Home = () => {
  const servicesRef = useRef(null);

  return (
    <>
      <PharmacyCarousel />
      <Panel ref={servicesRef} />
      <CompanyProfile />
      <CustomerReview />
      <InsurancePartners />
      <Widgets />
    </>
  );
};

export default Home;
