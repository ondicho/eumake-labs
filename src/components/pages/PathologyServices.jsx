// Import images
import image1 from '../../assets/images/haematology.jpg'
import image2 from '../../assets/images/haematology1.jpg'
import '../../assets/css/pathology.css';

// JSON data for pathology services
const pathologyServicesData = [
  {
    header: 'Haematology',
    imagePath: image1,
    description: 'Description for Service 1.',
  },
  {
    header: 'Service 2',
    imagePath: image2,
    description: 'Description for Service 2.',
  },
];

const PathologyServices = () => {
  return (
    <>
      <div className="main-container patholgy">
        {pathologyServicesData.map((service, index) => (
          <div className="pathology-service" key={index}>
            <div className="pathology-service-image">
              <img src={service.imagePath} alt={`Service ${index + 1}`} className="patholgy-service-image" />
            </div>
            <div className="pathology-service-description">
              <h3>{service.header}</h3>
              <p className="pathology-desc">{service.description}</p>
              <button className="pathology-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PathologyServices;
