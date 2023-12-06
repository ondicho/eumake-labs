// ServiceCard.js
import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/services.css';
import cart from '../../assets/images/cart.png';

const ServiceCard = ({ test }) => {
  const { name, duration, requirements, selfTest } = test;

  return (
    <div className="test-card">
      <div className="card-row">
        <label htmlFor="test-label" className="test-label">
          Test
        </label>
        {name}
      </div>
      <div className="card-row">
        <label htmlFor="test-label" className="test-label">
          Duration:
        </label>
        {duration}
      </div>
      <div className="card-row">
        <label htmlFor="requirements" className="test-label">
          Requirements:
        </label>
        {requirements}
      </div>
      <div className="card-row">
        <label htmlFor="test-label" className="test-label">
          Can I Self Test:
        </label>
        {selfTest ? 'Yes' : 'No'}
      </div>
      <div className="order-test">
        <img className="test-cart" src={cart} alt="cart" />
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  test: PropTypes.shape({
    name: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    requirements: PropTypes.string.isRequired,
    selfTest: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ServiceCard;
