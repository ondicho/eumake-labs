// Team.jsx

import React from 'react';
import '../../assets/css/team.css'; // Import your team-related styles if needed
import image1 from '../../assets/images/technician.png';
import image2 from '../../assets/images/technician.png';
import image3 from '../../assets/images/technician.png';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Eunice',
      position: 'Director',
      testimonial: 'Passionate leader, driving our team towards excellence in healthcare services.',
      image: image1,
    },
    {
      id: 2,
      name: 'John',
      position: 'Pathologist',
      testimonial: 'Dedicated to accurate diagnosis, ensuring the best care for our patients.',
      image: image2,
    },
    {
      id: 3,
      name: 'Ann',
      position: 'Receptionist',
      testimonial: 'Friendly and efficient, providing a welcoming experience for everyone who walks in.',
      image: image3,
    },
  ];

  return (
    <div className="main-container team">
      <h2>Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            <div className="member-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
            <div className="testimonial">
              <p>{member.testimonial}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
