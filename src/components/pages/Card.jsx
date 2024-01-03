import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ image, name, position, testimonial }) => (
  <div className="team-member">
    <div className="member-image">
      <img src={image} alt={name} />
    </div>
    <div className="testimonial">
      <p>{testimonial}</p>
    </div>
    <div className="member-info">
      <h3>{name}</h3>
      <p>{position}</p>
    </div>
  </div>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  testimonial: PropTypes.string.isRequired,
};

export default Card;
