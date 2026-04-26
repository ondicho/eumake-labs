import React from 'react';
import Card from './Card'; // Import the Card component
import '../../assets/css/team.css';
import image1 from '../../assets/images/_E5A0993.jpg';
import image2 from '../../assets/images/_E5A0794.jpg';
import image3 from '../../assets/images/_E5A0792.jpg';
import { Helmet } from 'react-helmet';

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
      name: 'Aggrey',
      position: 'Laboratory Scientist',
      testimonial: 'Dedicated to accurate diagnosis, ensuring the best care for our patients.',
      image: image2,
    },
    // {
    //   id: 3,
    //   name: 'Jacky',
    //   position: 'Receptionist',
    //   testimonial: 'Dedicated to creating a warm and inviting atmosphere that ensures all clients feel valued and welcomed.From providing information about our services to addressing their concerns I am m dedicated to delivering prompt and personalized service.',
    //   image: image3,
    // },
  ];

  return (
    <>
      <Helmet>
        <title>Our Team</title>
        <meta name="description" content="Eumake Staff" />
        <meta name="keywords" content="react, meta tags, seo" />
        <meta name="author" content="ondicho" />
        <meta property="og:title" content="Our Team" />
        <meta property="og:description" content="Eumake staff" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="https://eumake.co.ke/our-team" />
      </Helmet>
      <div className="main-container team">
        <h2>Our Team</h2>
        <div className="team-members">
          {teamMembers.map((member) => (
            <Card key={member.id} {...member} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
