import image2 from '../../assets/images/_E5A0892.png'
import chemistry from '../../assets/images/chemistryBanner.png'
import haematology from '../../assets/images/haematologyBanner.png'
import biology from '../../assets/images/biochemistryBanner.png'
import glucose from '../../assets/images/gluecoseBanner.png'

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
      imagePath: haematology,
      description: `This is a five-part analyzer. With this, we are able to do Full Blood Count, Peripheral blood film, Reticulocyte count.
        Other tests done in this department include Malaria profile, Heamoparasites, Coagulation tests.`,
    },
    // Add more services as needed
    {
      header: 'Chemistry',
      imagePath: chemistry,
      description: `We offer various tests packages for wellness Programs and for promotive and preventive health. We are
        available to come to your premises to set-up and do samples collections given an opportunity. The
        clients are also free to come to our Laboratory for their convenience and confidentiality.
        Post-Analytical testing: All test results are delivered via email and as a hard copy as per the client’s preference.`,
    },
    {
      header: 'Microbiology',
      imagePath: biology,
      description: `We offer quality and reliable results in Bacteriology, Mycology and Virology.Post-Analytical testing: All test results are delivered via email and as a hard copy as per the client’s preference.`,
    },
    {
      header: 'Glucose',
      imagePath: glucose,
      description: `We have an in-house Pathologist and cytologists for expedited turn-around time..Post-Analytical testing: All test results are delivered via email and as a hard copy as per the client’s preference.`,
    },
  ];

  export default pathologyServicesData;