// Team.jsx
import React from 'react';
import '../../assets/css/team.css'; // Import your team-related styles if needed
import image1 from '../../assets/images/_E5A0792.jpg';
import image2  from '../../assets/images/_E5A0792.jpg';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageSrc: image1,
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'CTO',
      testimonial: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      imageSrc: image2,
    },
    // Add more team members as needed
  ];

  return (
    <div className="main-container team">
      <h2>Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            <div className="member-info">
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
            <div className="member-image">
              <img src={member.imageSrc} alt={member.name} />
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
