import React, { useState } from 'react';
import '../../assets/css/about.css'; // Import your CSS file for styling
import vision from '../../assets/images/vision.png';
import mission from '../../assets/images/mission.png';
import coreValues from '../../assets/images/coreValues.png';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="about-us-container">
      <div className="tabs">
        <button className={`tab-button ${activeTab === 'mission' ? 'active' : ''}`} onClick={() => toggleTab('mission')}>Mission</button>
        <button className={`tab-button ${activeTab === 'vision' ? 'active' : ''}`} onClick={() => toggleTab('vision')}>Vision</button>
        <button className={`tab-button ${activeTab === 'coreValues' ? 'active' : ''}`} onClick={() => toggleTab('coreValues')}>Core Values</button>
      </div>
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
  );
};

export default AboutUs;
