import React from 'react';
import Card from './Card'; // Import the Card component
import '../../assets/css/team.css';
import image1 from '../../assets/images/_E5A0965.jpg';
import image2 from '../../assets/images/_E5A0794.jpg';
import image3 from '../../assets/images/_E5A0792.jpg';

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
          <Card key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
