import React from 'react';
import { useBackgroundColor } from '../layouts/BackgroundColorContext';
import { Link } from 'react-router-dom';
import '../../assets/css/home.css';
import sanlam from '../../assets/images/sanlam.png';
import britam from '../../assets/images/britam.png';
import cic from '../../assets/images/cic.png';
import kenindia from '../../assets/images/kenindia.png';
import oldmutual from '../../assets/images/oldmutual.png';
import madison from '../../assets/images/madison.png';
import Widgets from '../layouts/Widgets';

const InsurancePartners = () => {
  const { backgroundColor } = useBackgroundColor();

  return (
    <div className="main-container insurance-panel">
      <div className="panel-header">
        <h3 className="italic-bold">Insurance Partners</h3>
      </div>
      <div className="partners">
        <img src={sanlam} alt="insurance" className="insurance" />
        <img src={britam} alt="insurance" className="insurance" />
        <img src={cic} alt="insurance" className="insurance" />
        <img src={kenindia} alt="insurance" className="insurance" />
        <img src={oldmutual} alt="insurance" className="insurance-small" />
        <img src={madison} alt="insurance" className="insurance" />
      </div>
      {/* Render Widgets component */}
      <Widgets />
    </div>
  );
};

export default InsurancePartners;
