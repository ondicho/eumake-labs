import React, { useState } from 'react';
import '../../assets/css/about.css'; // Import your CSS file for styling
import image1 from '../../assets/images/vision.png';
import image2 from '../../assets/images/mission.png';
import image3 from '../../assets/images/core-values.jpg';

const missionData = {
  title: 'Our Mission',
  content: 'We are trusted and committed to establish a safe environment to all our clients by exerting a strong emphasis on safety measures, patients welfare and assurance. To do this, we strive to reduce medical errors, deliver timely results and teach our patients how to live a healthier lifestyle.',
  image: image1,
};

const visionData = {
  title: 'Our Vision',
  content:  "We aim to be the top health diagnostic prartner in Kenya and in the EAC region through strong emphasis on safety measures, patients' welfare, professionalism and quality assurance. To do this, we strive to reduce medical errors, deliver timely results, and teach our patients how to live a healthier lifestyle. In line with our core values of Integrity, Competence, Compassion, and being Patient-oriented."
  ,
  image: image2,
};

const coreValuesData = [
  {
    title: 'Values',
    content: [
      'Integrity', 
      'Competence',
      'Compassion',
      'Patient oriented',
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
          <img src={missionData.image} alt="Mission" className="tab-image mission-vision" />
          <p className='tab-content-paragraph'>{missionData.content}</p>
        </div>
      )}
      {activeTab === 'vision' && (
        <div className="tab-content">
          <img src={visionData.image} alt="Vision" className="tab-image mission-vision" />
          <p className='tab-content-paragraph'>{visionData.content}</p>
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
