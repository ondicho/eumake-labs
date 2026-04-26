import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/panel.css'; 
import '../../assets/css/team.css'; 

const Card = ({ image, name, position, testimonial, theme = 'light' }) => (
  <div className={`premium-card team-card theme-${theme}`}>
    <div className="premium-card-glow" />
    <div className="premium-card-inner">
      <div className="member-image-legacy">
        <img src={image} alt={name} className="legacy-avatar" />
      </div>
      <div className="premium-card-content team-content-padding">
         <p className="team-testimonial">"{testimonial}"</p>
         <div className="team-meta">
            <h3 className="team-name">{name}</h3>
            <p className="team-position">{position}</p>
         </div>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  testimonial: PropTypes.string.isRequired,
  theme: PropTypes.string
};

export default Card;
