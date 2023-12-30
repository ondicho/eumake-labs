// Services.js
import React, { useState } from 'react';
import '../../assets/css/services.css';

import cardiac from '../../assets/images/heart.png'
import liver from '../../assets/images/liver.png'
import kidney from '../../assets/images/kidney.png'
import wellness from '../../assets/images/health.png'
import other from '../../assets/images/blood-sample.png'

import GetTestForm from './GetTestForm';


const iconImages = {
  generalWellness: wellness,
  renalElectrolytes: kidney,
  cardiacAssessment: cardiac,
  diabetes: other,
  liverFunctionTest: liver,
  lipidProfile: other,
  thyroidFunctionTest: other,
};

const servicesData = {
  generalWellness: {
    section: 'General Wellness',
    tests: [
      { name: 'COMPLETE BLOOD COUNT(CBC)', duration: '2-3HRS', price: 900 },
      { name: 'ESR, blood', duration: '2-3HRS', price: 850 },
      { name: 'FERRITIN, serum', duration: '2-3HRS', price: 1700 },
      { name: 'URIC ACID, serum', duration: '2-3HRS', price: 850 },
      { name: 'VITAMIN B12', duration: '2-3HRS', price: 850 },
      { name: 'VITAMIN D 25 HYDROXY', duration: '2-3HRS', price: 1300 },
    ],
  },
  renalElectrolytes: {
    section: 'Renal/Electrolytes',
    tests: [
      { name: 'CHLORIDE, serum', duration: '2-3HRS', price: 3100 },
      { name: 'CREATINE CLEARANCE', duration: '2-3HRS', price: 6250 },
      { name: 'CREATININE,serum', duration: '2-3HRS', price: 700 },
      { name: 'POTASSIUM, serum', duration: '2-3HRS', price: 700 },
      { name: 'RENAL PROFILE EXTENDED', duration: '2-3DAYS', price: 5200 },
      { name: 'SODIUM, serum', duration: '2-3HRS', price: 700 },
      { name: 'UEC', duration: '2-3HRS', price: 2500 },
      { name: 'UREA', duration: '2-3HRS', price: 700 },
      { name: 'UREA&CREATINE (BUN), serum', duration: '2-3HRS', price: 1350 },
      { name: 'URINE ALB/CREAT RATIO(UACR)', duration: '2-3HRS', price: 3350 },
    ],
  },
  cardiacAssessment: {
    section: 'Cardiac Assessment',
    tests: [
      { name: 'CARDIAC PROFILE(TROPONIN T CKMB CPK TOTAL)', duration: '2-3HRS', price: 1850 },
      { name: 'CARDIAC TROPONIN T', duration: '2-3HRS', price: 900 },
      { name: 'CARDIAC ULTRASENSITIVE (CRP)', duration: '2-3HRS', price: 900 },
      { name: 'CHOLESTEROL, serum', duration: '2-3HRS', price: 700 },
      { name: 'CKMB QUANTITATIVE', duration: '2-3HRS', price: 4250 },
      { name: 'CPK, serum', duration: '2-3HRS', price: 2400 },
      { name: 'CRP ULTRASENSITIVE', duration: '2-3HRS', price: 850 },
      { name: 'HOMOCYSTEINE(FASTING), serum/blood', duration: '2-3HRS', price: 2850 },
      { name: 'LIPOPROTEIN', duration: '2-3HRS', price: 900 },
      { name: 'MYOGLOBIN', duration: '2-3HRS', price: 2400 },
      { name: 'proBNP', duration: '2-3HRS', price: 3250 },
      { name: 'TROPONIN T (High sensitivity)', duration: '3-4DAYS', price: 3150 },
    ],
  },
  diabetes: {
    section: 'Diabetes',
    tests: [
      { name: 'GLUCOSE BASAL', duration: '2-3HRS', price: 700 },
      { name: 'GLUCOSE FASTING', duration: '2-3HRS', price: 700 },
      { name: 'GLUCOSE RANDOM', duration: '2-3HRS', price: 700 },
      { name: 'HBA1C, blood', duration: '2-3HRS', price: 5200 },
      { name: 'GESTATIONAL DIABETES(GDM)', duration: '2-3HRS', price: 1850 },
      { name: 'GLUCOSE TOLERANCE 2 SPECIMEN', duration: '2-3HRS', price: 900 },
      { name: 'GLUCOSE TOLERANCE 2HR 3SP 75G', duration: '2-3HRS', price: 900 },
      { name: 'GLUCOSE TOLERANCE 2HR 5SP AUC', duration: '2-3HRS', price: 2300 },
      { name: 'GLUCOSE TOLERANCE 2HR 75G 5SP', duration: '2-3HRS', price: 850 },
      { name: 'GLUCOSE TOLERANCE 3H PREG 100G', duration: '2-3HRS', price: 2850 },
      { name: 'GLUCOSE TOLERANCE 3HR 7SP', duration: '2-3HRS', price: 900 },
      { name: 'GLUCOSE TOLERANCE 5 SPECIMEN', duration: '2-3HRS', price: 2400 },
      { name: 'GLUCOSE TOLERANCE GEST 2HR', duration: '2-3HRS', price: 3250 },
      { name: 'GLUCOSE TORLANCE 6 SPECIMENS', duration: '3-4DAYS', price: 3150 },
      { name: 'GLUCOSE TOLERANCE GEST 2HR', duration: '48HRS', price: 3350 },
      { name: 'GLUCOSE TORLANCE 6 SPECIMENS', duration: '2-3HRS', price: 7500 },
    ],
  },
  liverFunctionTest: {
    section: 'Liver Function Test',
    tests: [
      { name: 'ALBUMIN', duration: '2-3HRS', price: 4350 },
      { name: 'ALT/SGPT, serum', duration: '2-3HRS', price: 850 },
      { name: 'AST/SGOT, serum', duration: '2-3HRS', price: 850 },
      { name: 'BILIRUBIN (TOTAL)- SERUM', duration: '2-3HRS', price: 850 },
      { name: 'BILIRUBIN CONJUGATED SERUM', duration: '2-3HRS', price: 850 },
      { name: 'BILIRUBIN PROFILE, TOTAL & DIRECT', duration: '2-3HRS', price: 800 },
      { name: 'LFT BASIC (NO PROTEINS)', duration: '2-3HRS', price: 1850 },
      { name: 'LFT EXTRA (WITH PROTEINS & LDH)', duration: '2-3HRS', price: 3350 },
      { name: 'LFT FULL (WITH PROTEINS)', duration: '2-3HRS', price: 4850 },
      { name: 'TOTAL PROTEIN', duration: '3-4DAYS', price: 4000 },
    ],
  },
  lipidProfile: {
    section: 'Lipid Profile',
    tests: [
      { name: 'HDL, serum', duration: '2-3HRS', price: 1300 },
      { name: 'LDL, serum', duration: '2-3HRS', price: 1300 },
      { name: 'LDL/HDL RATIO, serum', duration: '2-3HRS', price: 2300 },
      { name: 'LIPID PROFILE', duration: '2-3HRS', price: 3600 },
      { name: 'TOTAL CHOLESTEROL, serum', duration: '2-3HRS', price: 700 },
      { name: 'TRIGLYCERIDES, serum', duration: '2-3HRS', price: 850 },
    ],
  },
  thyroidFunctionTest: {
    section: 'Thyroid Function Test',
    tests: [
      { name: 'FREE T3', duration: '2-3HRS', price: 2500 },
      { name: 'FREE T4', duration: '2-3HRS', price: 2500 },
      { name: 'T3, serum', duration: '2-3HRS', price: 850 },
      { name: 'T4, serum', duration: '2-3HRS', price: 850 },
      { name: 'TSH, serum', duration: '2-3HRS', price: 700 },
    ],
  },
};

// You can continue to use servicesDataPart1 and add servicesDataPart2 as needed.



const Services = () => {
  const [activeSection, setActiveSection] = useState('generalWellness');

  const toggleSection = (section) => {
    setActiveSection(section);
  };

  const handleFormSubmit = (formData) => {
    // Handle the form submission logic here, e.g., send data to a server
    console.log('Form data submitted:', formData);
  };



  return (
    <div className="main-container service-container">
      <div className="test-sections">
        {Object.keys(servicesData).map((section) => (
          <button
            key={section}
            className={`section-button ${activeSection === section ? 'active' : ''}`}
            onClick={() => toggleSection(section)}
          >
            <img src={iconImages[section]} alt={section} className="section-icon" />
            {servicesData[section].section}
          </button>
        ))}
      </div>
      {activeSection && (
        <div className="section-table">
          <h4>Test Catalogue {'>'} {servicesData[activeSection].section}</h4>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Test Name</th>
                <th>Duration</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {servicesData[activeSection].tests.map((test, index) => (
                <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                  <td>{test.name}</td>
                  <td>{test.duration}</td>
                  <td>{test.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="form-area">
        <GetTestForm activeSection={activeSection} tests={servicesData[activeSection].tests} onSubmit={handleFormSubmit} />
      </div>

    </div>
  );
};

export default Services;
