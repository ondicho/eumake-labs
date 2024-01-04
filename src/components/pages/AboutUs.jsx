import React, { useState } from 'react';
import '../../assets/css/about.css'; // Import your CSS file for styling
import image1 from '../../assets/images/_E5A0993.jpg';
import image2 from '../../assets/images/_E5A0794.jpg';
import image3 from '../../assets/images/_E5A0792.jpg';

const missionData = {
  title: 'Our Mission',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  image: image1,
};

const visionData = {
  title: 'Our Vision',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  image: image2,
};

const coreValuesData = [
  {
    title: 'Values',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      // Add more content as needed
    ],
    image: image3,
  },
  // Add more core values as needed
];

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
      <h2>{activeTab === 'mission' ? missionData.title : (activeTab === 'vision' ? visionData.title : 'Core Values')}</h2>
      {activeTab === 'mission' && (
        <div className="tab-content">
          <img src={missionData.image} alt="Mission" className="tab-image" />
          <p>{missionData.content}</p>
        </div>
      )}
      {activeTab === 'vision' && (
        <div className="tab-content">
          <img src={visionData.image} alt="Vision" className="tab-image" />
          <p>{visionData.content}</p>
        </div>
      )}
      {activeTab === 'coreValues' && (
        <div className="tab-content values">
      
            <img src={coreValuesData[0].image} alt={`Value`} className="tab-image" />
            <ul>
              {coreValuesData[0].content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
