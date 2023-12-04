import PharmacyCarousel from "./PharmacyCarousel";
import '../../assets/css/home.css';
import walk from '../../assets/images/walk.png'
import doctor from '../../assets/images/doctor.png'
import service from '../../assets/images/service.png'
import contact from '../../assets/images/contact.png'
import appointment from '../../assets/images/appointment.png'

const Panel = () => {
    return (
        <>
            <div className="main-container">
                <h3>Our Services</h3>
                <div className="services">
                    <div className="service">
                        <div className="service-icon">
                        <img  className="service-image" src={service} alt="service-image" />
                        </div>
                        <div className="service-description">
                            <p>About Eumake</p>
                        </div>
                        <div className="service-read-more">
                        <button>Read more</button>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-icon">
                        <img  className="service-image" src={service} alt="service-image" />
                        </div>
                        <div className="service-description">
                            <p>Our  Services</p>
                        </div>
                        <div className="service-read-more">
                            <button>Read more</button>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-icon">
                        <img  className="service-image" src={doctor} alt="service-image" />
                        </div>
                        <div className="service-description">
                            <p>Meet Our Staff</p>
                        </div>
                        <div className="service-read-more">
                        <button>Read more</button>
                        </div>
                    </div>
                </div>
                <div className="services">
                    <div className="service">
                        <div className="service-icon">
                        <img  className="service-image" src={appointment} alt="service-image" />
                        </div>
                        <div className="service-description">
                            <p>Order Sample Collection</p>
                        </div>
                        <div className="service-read-more">
                        <button>Read more</button>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-icon">
                        <img  className="service-image" src={walk} alt="service-image" />
                        </div>
                        <div className="service-description">
                            <p>Schedule a walk in </p>
                        </div>
                        <div className="service-read-more">
                        <button>Read more</button>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-icon">
                        <img  className="service-image" src={contact} alt="service-image" />
                        </div>
                        <div className="service-description">
                            <p>Contact Us</p>
                        </div>
                        <div className="service-read-more">
                        <button>Read more</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Panel;