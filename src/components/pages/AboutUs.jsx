import React, { useState } from 'react';
import '../../assets/css/about.css'; // Import your CSS file for styling
import vision from '../../assets/images/vision.png';
import mission from '../../assets/images/mission.png';
import coreValues from '../../assets/images/coreValues.png';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Helmet>
        <title>About Us</title>
        <meta name="description" content="About Eumake" />
        <meta name="keywords" content="react, meta tags, seo" />
        <meta name="author" content="ondicho" />
        <meta property="og:title" content="Home" />
        <meta property="og:description" content="Eumake Diagnoatic Laboratory website about-us page" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="https://eumake.co.ke/about-us" />
      </Helmet>
    <div className="about-us-container">
      <div className="tabs">
        <button className={`tab-button ${activeTab === 'mission' ? 'active' : ''}`} onClick={() => toggleTab('mission')}>Mission</button>
        <button className={`tab-button ${activeTab === 'vision' ? 'active' : ''}`} onClick={() => toggleTab('vision')}>Vision</button>
        <button className={`tab-button ${activeTab === 'coreValues' ? 'active' : ''}`} onClick={() => toggleTab('coreValues')}>Core Values</button>
      </div>

      <div className="body">
        {activeTab === 'mission' && (
          <img src={mission} alt="Mission" className="tab-content" />
        )}
        {activeTab === 'vision' && (
          <img src={vision} alt="vision" className="tab-content" />
        )}
        {activeTab === 'coreValues' && (
          <img src={coreValues} alt="core-values" className="tab-content" />
        )}
      </div>
    </div>
    </>
  );
};

export default AboutUs;
