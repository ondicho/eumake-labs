import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/panel.css';

const ServiceCard = ({ section, testName, duration, price, image, onClick,title }) => {
    return (
        <div className="panel-service" onClick={() => onClick(section)}>
            <div className="panel-service-image">
              <img className="service-image" src={image} alt="service-image" />
            </div>
            <div className="panel-service-body">
                <div className="panel-service-description">
                    <h5>{title}</h5>
                    <h6>{testName}</h6>
                    <p>{duration}</p>
                    <p>Kes. {price}</p>
                </div>

                <div className="panel-service-read-more">
                    <button className='panel-service-btn'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
