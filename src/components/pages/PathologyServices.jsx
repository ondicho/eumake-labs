// Import images
import image1 from '../../assets/images/haematology.jpg'
// import image2 from '../../assets/images/haematology1.jpg'
import image2 from '../../assets/images/_E5A0892.png'
// import image2 from '../../assets/images/_E5A0835.png'
import '../../assets/css/pathology.css';
import ServiceDetails from './ServiceDetails';

// JSON data for pathology services
const pathologyServicesData = [
  {
    header: 'Specimen Collection',
    imagePath: image2, // Use the appropriate image for Specimen Collection
    description: `All blood samples are collected in our phlebotomy room, the others are collected at designated rooms.
      We also offer office and home collections as may be requested by our clients. We have trained and
      qualified phlebotomist for sample collections. A pathologist is available for bone marrow and FNA
      procedures. Our various departments include:`,
  },
  {
    header: 'Hematology Department',
    imagePath: image1,
    description: `This is a five-part analyzer. With this, we are able to do Full Blood Count, Peripheral blood film, Reticulocyte count.
      Other tests done in this department include Malaria profile, Heamoparasites, Coagulation tests.`,
  },
  // Add more services as needed
  {
    header: 'Wellness Check',
    imagePath: image2,
    description: `We offer various tests packages for wellness Programs and for promotive and preventive health. We are
      available to come to your premises to set-up and do samples collections given an opportunity. The
      clients are also free to come to our Laboratory for their convenience and confidentiality.
      Post-Analytical testing: All test results are delivered via email and as a hard copy as per the client’s preference.`,
  },
  {
    header: 'Microbiology',
    imagePath: image2,
    description: `We offer quality and reliable results in Bacteriology, Mycology and Virology.Post-Analytical testing: All test results are delivered via email and as a hard copy as per the client’s preference.`,
  },
  {
    header: 'Histology & Cytology',
    imagePath: image2,
    description: `We have an in-house Pathologist and cytologists for expedited turn-around time..Post-Analytical testing: All test results are delivered via email and as a hard copy as per the client’s preference.`,
  },
];


const PathologyServices = () => {
  return (
    <div className="main-container patholgy">
      {pathologyServicesData.map((service, index) => (
        <div className="pathology-service" key={index}>
          <div className="pathology-service-image">
            <img src={service.imagePath} alt={`Service ${index + 1}`} className="patholgy-service-image" />
          </div>
          <div className="pathology-service-body">
            <ServiceDetails header={service.header} description={service.description} />
            <button className="pathology-btn">Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PathologyServices;
