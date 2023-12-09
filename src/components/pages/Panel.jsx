import { Link } from 'react-router-dom';
import '../../assets/css/home.css';
import walk from '../../assets/images/walk.png'
import doctor from '../../assets/images/doctor.png'
import service from '../../assets/images/service.png'
import contact from '../../assets/images/contact.png'
import cart from '../../assets/images/cart.png'
import React, { useState } from 'react';
import ServiceModal from "./ServiceModal";

const Panel = React.forwardRef((props, ref) => {
    const [isServiceModalOpen, setServiceModalOpen] = useState(false);
    const openServiceModal = () => {
        setServiceModalOpen(true);
      };

      const closeModals = () => {
        setServiceModalOpen(false);
      };

      

    return (
      <div ref={ref} className="main-container service-panel">
                <div className="panel-header">
                    <h3 className="italic-bold">Our Services</h3>
                </div>
                <div className="services">
                    <div className="service">
                        <div className="service-icon">
                            <img className="service-image" src={service} alt="service-image" />
                        </div>
                        <div className="service-description">
                            <p>HIV Test</p>
                        </div>
                        <div className="service-read-more">
                            <button onClick={openServiceModal}><img className="cart" src={cart} alt="cart" /></button>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-icon">
                            <img className="service-image" src={doctor} alt="service-image" />
                        </div>
                        <div className="service-description">
                            <p>Immunology</p>
                        </div>
                        <div className="service-read-more">
                            <button onClick={openServiceModal}><img className="cart" src={cart} alt="cart" /></button>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-icon">
                            <img className="service-image" src={contact} alt="service-image" />
                        </div>
                        <div className="service-description">
                            <p>Hematology</p>
                        </div>
                        <div className="service-read-more">
                            <button onClick={openServiceModal}><img className="cart" src={cart} alt="cart" /></button>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-icon">
                            <img className="service-image" src={service} alt="service-image" />
                        </div>
                        <div className="service-description">
                            <p>Thyroid Tests</p>
                        </div>
                        <div className="service-read-more">
                            <button onClick={openServiceModal}><img className="cart" src={cart} alt="cart" /></button>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-icon">
                            <img className="service-image" src={service} alt="service-image" />
                        </div>
                        <div className="service-description">
                            <p>Liver/Pancreas</p>
                        </div>
                        <div className="service-read-more">
                            <button onClick={openServiceModal}><img className="cart" src={cart} alt="cart" /></button>
                        </div>
                    </div>

                </div>
                <Link to='services' className="all-services">View All Tests</Link>

                <ServiceModal isOpen={isServiceModalOpen} onClose={closeModals}/>
            </div>
  );
});

export default Panel;