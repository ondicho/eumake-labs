// CompanyProfile.js

import React, { useState } from 'react';
import technician from '../../assets/images/_E5A0964.png';
import view from '../../assets/images/view.png';
import '../../assets/css/home.css';
// import '../../assets/css/director.css';

const CompanyProfile = () => {
  const directorData = {
    name: 'Eunice',
    image: technician,
    profile: 'Company Profile',
    spotlight: {
      title: "Director's Spotlight",
      content: [
        {
          date: 'May 2000',
          description: 'M.P. SHAH hospital.',
          tasks: [
            'Lab Technician',
          ],
        },
        {
          date: '2003 April - 2009 April',
          description: 'Aga Khan University Hospital (Histopathology & Cytology)',
          tasks: [
            'Microtomy and staining H/E',
            'Staining Gynae & Non-Gynae cytology specimens',
            'Specialized stains for histopathology',
            'Specialized in Renal staining and immunohistochemistry',
            'Assisted Postgraduate students in the department',
            'Worked in Hematology and Blood Bank during night shifts',
          ],
        },
        {
          date: '2009 May - 2022 May',
          description: 'Pathologists Lancet Kenya (Laboratory Manager and Quality Assurance Manager)',
          tasks: [
            'Set up the main Laboratory at Upper Hill Fifth Avenue from scratch',
            'Set up the New Department of Molecular Laboratory',
            'Ensured SANAS accreditation within one year of operations',
            'Promoted as the Country Manager, overseeing operations in over 32 Branches',
            'Participated in successful tendering and public-private partnerships',
            'Handled Paternity cases and collaborated with courts',
          ],
        },
        {
          date: '2017-2018',
          description: 'Set up WADA accredited laboratory for Anti-doping in the region.',
          tasks: [
            'Accredited within one year of operations under my leadership as Senior Technologist',
          ],
        },
        {
          date: '2019 Feb',
          description: 'Pathologists Lancet Kenya (General Manager - Special projects)',
          tasks: [
            'Headed Laboratory research projects including WADA samples',
            'Collaborated with many researchers and research institutions locally and internationally',
          ],
        },
        {
          date: 'May 2022',
          description: '54 gene (Operations Manager - Kenya)',
          tasks: [
            'Ensured the empty space given is turned into a beautiful Laboratory',
            'Installed machines as per the Director\'s architectural drawing',
          ],
        },
        {
          date: 'May 2023',
          description: 'Eumake Diagnostic Laboratories (EDL Director & Founder)',
          tasks: [
            'Provide a list of day to day Director activities',
            'Review and dispatch lab reports',
          ],
        },
      ],
    },
  };

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleTasks = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="main-container testimonials">
      <img src={directorData.image} alt={directorData.name} />
      <div className="text-area">
        <div className="testimonials-header">
          <h3 className="italic-bold">{directorData.profile}</h3>
        </div>
        <div className="director-spotlight">
          <h2>{directorData.spotlight.title}</h2>
          {directorData.spotlight.content.map((event, index) => (
            <div className="director-exp" key={index}>
              <p>
                <strong>{event.date}: </strong>
                {event.description}
                {event.tasks && (
                  <img
                    src={view}
                    alt="View Tasks"
                    className="view-icon float-right"
                    onClick={() => toggleTasks(index)}
                  />
                )}
              </p>
              {expandedIndex === index && event.tasks && (
                <ul>
                  {event.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              )}
              {event.location && (
                <p>
                  <strong>Location:</strong> {event.location}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
