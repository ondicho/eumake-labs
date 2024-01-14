import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/panel.css';

const ServiceCard = ({ section, testName, duration, price, image, onClick, title }) => {
    // Capitalize the title
    const capitalizedTitle = title.toUpperCase();

    return (
        <div className="panel-service" onClick={() => onClick(section)}>
            <div className="panel-service-image">
                <img className="service-image" src={image} alt="service-image" />
            </div>
            <div className="panel-service-body">
                <div className="panel-service-description">
                    <table className="service-table">
                        <tbody>
                            <tr>
                                <td className="label bold-title">Category:</td>
                                <td><h5 className="bold-title">{capitalizedTitle}</h5></td>
                            </tr>
                            <tr>
                                <td className="label">Test:</td>
                                <td>{testName}</td>
                            </tr>
                            <tr>
                                <td className="label">Duration:</td>
                                <td>{duration}</td>
                            </tr>
                            <tr>
                                <td className="label">Price:</td>
                                <td>Kes. {price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="panel-service-read-more">
                    <button className='panel-service-btn'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
